'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/context/auth-context';
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';
import { WeeklyClassScore } from './_components/weekly-input-table';
import { OverallSummary } from './_components/overall-summary';
import { GradeSection } from './_components/grade-section';

async function fetchWeeklyStatistics(): Promise<WeeklyClassScore[]> {
  const res = await fetch('/api/statistics');
  if (!res.ok) {
    console.error("API fetch failed with status:", res.status);
    throw new Error('Failed to fetch weekly statistics');
  }
  return res.json();
}

async function updateWeeklyStatistics(chiDois: WeeklyClassScore[]): Promise<Response> {
  return fetch('/api/statistics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(chiDois),
  });
}

const createInitialScore = (id: string, name: string): WeeklyClassScore => ({
  id, name,
  tietTot_week1: 0, tietTot_week2: 0, tietTot_week3: 0,
  hoaDiemMuoi_week1: 0, hoaDiemMuoi_week2: 0, hoaDiemMuoi_week3: 0,
});

const getInitialDataStructure = (): WeeklyClassScore[] => [
  ...Array.from({ length: 10 }, (_, i) => createInitialScore(`6-${i + 1}`, `6/${i + 1}`)),
  ...Array.from({ length: 8 }, (_, i) => createInitialScore(`7-${i + 1}`, `7/${i + 1}`)),
  ...Array.from({ length: 7 }, (_, i) => createInitialScore(`8-${i + 1}`, `8/${i + 1}`)),
  ...Array.from({ length: 8 }, (_, i) => createInitialScore(`9-${i + 1}`, `9/${i + 1}`)),
];

const GRADES = ['6', '7', '8', '9'];

export default function StatisticsPage() {
  const [weeklyData, setWeeklyData] = useState<WeeklyClassScore[]>([]);
  const [initialData, setInitialData] = useState<WeeklyClassScore[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { isAdmin, loading: authLoading } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await fetchWeeklyStatistics();
        const initialStructure = getInitialDataStructure();
        const mergedData = initialStructure.map(initialClass => {
          const found = fetchedData.find(d => d.id === initialClass.id);
          return found ? { ...initialClass, ...found } : initialClass;
        });
        const sortedData = mergedData.sort((a,b) => a.name.localeCompare(b.name, undefined, {numeric: true}));
        setWeeklyData(sortedData);
        setInitialData(sortedData);
      } catch (error) {
        console.error("Failed to load statistics, using initial structure:", error);
        const initialStructure = getInitialDataStructure().sort((a,b) => a.name.localeCompare(b.name, undefined, {numeric: true}));
        setWeeklyData(initialStructure);
        setInitialData(initialStructure);
        toast({ title: "Lỗi", description: "Không thể tải dữ liệu từ máy chủ. Hiển thị bảng trống để nhập liệu.", variant: "destructive" });
      } finally {
        setLoading(false);
      }
    };
    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleValueChange = (classId: string, field: string, value: string) => {
    const newValue = parseInt(value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      setWeeklyData(currentData => 
        currentData.map(cd => 
          cd.id === classId ? { ...cd, [field]: newValue } : cd
        )
      );
    }
  };
  
  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await updateWeeklyStatistics(weeklyData);
      if (response.ok) {
        setInitialData(weeklyData);
        toast({ title: "Thành công", description: "Đã lưu trữ vĩnh viễn các thay đổi." });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Lưu thất bại. Phản hồi không OK từ máy chủ.");
      }
    } catch (error) {
      console.error("Save failed:", error);
      toast({ title: "Lưu thất bại", description: error instanceof Error ? error.message : "Lỗi không xác định.", variant: "destructive"});
    } finally {
      setSaving(false);
    }
  };

  const hasChanges = useMemo(() => JSON.stringify(weeklyData) !== JSON.stringify(initialData), [weeklyData, initialData]);

  const dataByGrade = useMemo(() => {
    return GRADES.reduce((acc, grade) => {
        acc[grade] = weeklyData.filter(d => d.id.startsWith(`${grade}-`));
        return acc;
    }, {} as Record<string, WeeklyClassScore[]>);
  }, [weeklyData]);

  if (loading || authLoading) {
    return <div className="flex h-screen w-full items-center justify-center"><Loader2 className="h-16 w-16 animate-spin" /></div>;
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 space-y-12">

      <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Thống kê Tuần</h1>
          <Button asChild variant="outline">
              <Link href="/statistics/legacy-data">Xem Dữ Liệu Tổng Hợp Cũ</Link>
          </Button>
      </div>
      
      {isAdmin && (
        <div className="sticky top-20 z-50 flex justify-center py-2 bg-background/80 backdrop-blur-sm">
          <Button onClick={handleSave} disabled={!hasChanges || saving} size="lg">
            {saving ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Đang lưu...</> : "Lưu tất cả thay đổi"}
          </Button>
        </div>
      )}

      <OverallSummary data={weeklyData} />

      {GRADES.map(grade => (
        <GradeSection 
          key={grade}
          grade={grade}
          dataForGrade={dataByGrade[grade] || []}
          isAdmin={isAdmin}
          isSaving={saving}
          onValueChange={handleValueChange}
        />
      ))}

    </div>
  );
}

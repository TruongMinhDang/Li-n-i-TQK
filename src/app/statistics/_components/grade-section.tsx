'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeeklyInputTable, WeeklyClassScore } from "./weekly-input-table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useMemo } from "react";

interface GradeSectionProps {
  grade: string;
  dataForGrade: WeeklyClassScore[];
  isAdmin: boolean;
  isSaving: boolean;
  onValueChange: (classId: string, field: string, value: string) => void;
}

const InfoCard = ({ title, value }: { title: string, value: number }) => (
    <Card className="text-center transition-all duration-300 hover:shadow-lg">
        <CardHeader>
            <CardTitle className="text-md font-medium text-muted-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-4xl font-bold">{value}</p>
        </CardContent>
    </Card>
);

export function GradeSection({ grade, dataForGrade, isAdmin, isSaving, onValueChange }: GradeSectionProps) {
  const gradeSummary = useMemo(() => {
    let totalTietTot = 0;
    let totalHoaDiemMuoi = 0;
    const chartData = dataForGrade.map(cd => {
        const tietTotTotal = (cd.tietTot_week1 || 0) + (cd.tietTot_week2 || 0) + (cd.tietTot_week3 || 0);
        const hoaDiemMuoiTotal = (cd.hoaDiemMuoi_week1 || 0) + (cd.hoaDiemMuoi_week2 || 0) + (cd.hoaDiemMuoi_week3 || 0);
        totalTietTot += tietTotTotal;
        totalHoaDiemMuoi += hoaDiemMuoiTotal;
        return { name: cd.name, TietTot: tietTotTotal, HoaDiem10: hoaDiemMuoiTotal };
    });
    return { totalTietTot, totalHoaDiemMuoi, chartData };
  }, [dataForGrade]);
  
  return (
    <Card className="w-full border-t-4 border-primary mt-8">
        <CardHeader>
            <CardTitle className="text-4xl font-bold">Khối {grade}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard title="Tổng Tiết Tốt" value={gradeSummary.totalTietTot} />
                <InfoCard title="Tổng Hoa Điểm 10" value={gradeSummary.totalHoaDiemMuoi} />
            </div>

            {/* Section for Tiet Tot */}
            <div className="space-y-4 rounded-lg p-4 border bg-card">
                <h3 className="text-2xl font-semibold">Phong trào Tiết Tốt</h3>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div>
                        <WeeklyInputTable 
                            grade={grade}
                            dataType="tietTot"
                            data={dataForGrade}
                            isAdmin={isAdmin}
                            isSaving={isSaving}
                            onValueChange={onValueChange}
                        />
                    </div>
                    <div>
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={gradeSummary.chartData}>
                                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="TietTot" fill="#8884d8" name="Tiết Tốt" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Section for Hoa Diem 10 */}
            <div className="space-y-4 rounded-lg p-4 border bg-card">
                <h3 className="text-2xl font-semibold">Phong trào Hoa Điểm 10</h3>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                    <div>
                       <WeeklyInputTable 
                            grade={grade}
                            dataType="hoaDiemMuoi"
                            data={dataForGrade}
                            isAdmin={isAdmin}
                            isSaving={isSaving}
                            onValueChange={onValueChange}
                        />
                    </div>
                    <div>
                        <ResponsiveContainer width="100%" height={350}>
                             <BarChart data={gradeSummary.chartData}>
                                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} interval={0} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="HoaDiem10" fill="#82ca9d" name="Hoa Điểm 10" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}

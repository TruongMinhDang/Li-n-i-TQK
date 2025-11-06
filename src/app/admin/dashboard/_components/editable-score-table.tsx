
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// This is mock data. In a real application, you would fetch this from your database.
const initialClassData = [
  { id: "6A1", name: "Lớp 6A1", goodLessons: 10, score10: 15, score10Flower: 5, rank: 1 },
  { id: "6A2", name: "Lớp 6A2", goodLessons: 8, score10: 12, score10Flower: 3, rank: 3 },
  { id: "7A1", name: "Lớp 7A1", goodLessons: 12, score10: 18, score10Flower: 8, rank: 2 },
  { id: "8A1", name: "Lớp 8A1", goodLessons: 5, score10: 20, score10Flower: 2, rank: 4 },
  { id: "9A1", name: "Lớp 9A1", goodLessons: 15, score10: 25, score10Flower: 10, rank: 1 },
];

type ClassData = typeof initialClassData[0];

export function EditableScoreTable() {
  const [classScores, setClassScores] = useState(initialClassData);
  const [editingRowId, setEditingRowId] = useState<string | null>(null);
  const [tempData, setTempData] = useState<Partial<ClassData>>({});
  const { toast } = useToast();

  const handleEdit = (classItem: ClassData) => {
    setEditingRowId(classItem.id);
    setTempData({ 
        goodLessons: classItem.goodLessons, 
        score10: classItem.score10, 
        score10Flower: classItem.score10Flower 
    });
  };

  const handleCancel = () => {
    setEditingRowId(null);
    setTempData({});
  };

  const handleSave = (classId: string) => {
    // In a real app, you would send this data to your server/database.
    const updatedScores = classScores.map((item) =>
      item.id === classId ? { ...item, ...tempData } : item
    );
    setClassScores(updatedScores);
    
    console.log("Saving data:", { classId, ...tempData });
    
    toast({
      title: "Lưu thành công!",
      description: `Đã cập nhật dữ liệu cho lớp ${classId}.`,
    });

    setEditingRowId(null);
    setTempData({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTempData(prev => ({ ...prev, [name]: parseInt(value, 10) || 0 }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bảng Điểm Thi Đua Tuần</CardTitle>
        <CardDescription>
          Nhấp vào "Sửa" để nhập liệu trực tiếp. Nhấn "Lưu" để cập nhật.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Hạng</TableHead>
              <TableHead>Tên Lớp</TableHead>
              <TableHead>Tiết Học Tốt</TableHead>
              <TableHead>Điểm 10</TableHead>
              <TableHead>Hoa Điểm 10</TableHead>
              <TableHead className="text-right">Hành Động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classScores.map((classItem) => {
              const isEditing = editingRowId === classItem.id;
              return (
                <TableRow key={classItem.id}>
                  <TableCell>{classItem.rank}</TableCell>
                  <TableCell className="font-medium">{classItem.name}</TableCell>
                  <TableCell>
                    {isEditing ? (
                      <Input
                        type="number"
                        name="goodLessons"
                        defaultValue={tempData.goodLessons}
                        onChange={handleInputChange}
                        className="w-24"
                      />
                    ) : (
                      classItem.goodLessons
                    )}
                  </TableCell>
                  <TableCell>
                    {isEditing ? (
                      <Input
                        type="number"
                        name="score10"
                        defaultValue={tempData.score10}
                        onChange={handleInputChange}
                        className="w-24"
                      />
                    ) : (
                      classItem.score10
                    )}
                  </TableCell>
                  <TableCell>
                    {isEditing ? (
                      <Input
                        type="number"
                        name="score10Flower"
                        defaultValue={tempData.score10Flower}
                        onChange={handleInputChange}
                        className="w-24"
                      />
                    ) : (
                      classItem.score10Flower
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {isEditing ? (
                      <div className="space-x-2">
                        <Button size="sm" onClick={() => handleSave(classItem.id)}>Lưu</Button>
                        <Button size="sm" variant="outline" onClick={handleCancel}>Hủy</Button>
                      </div>
                    ) : (
                      <Button size="sm" variant="outline" onClick={() => handleEdit(classItem)}>
                        Sửa
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

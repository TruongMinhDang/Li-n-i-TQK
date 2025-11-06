
"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define the structure of our data
export interface WeeklyClassScore {
  id: string; // e.g., "6-1"
  name: string; // e.g., "6/1"
  tietTot_week1?: number;
  tietTot_week2?: number;
  tietTot_week3?: number;
  hoaDiemMuoi_week1?: number;
  hoaDiemMuoi_week2?: number;
  hoaDiemMuoi_week3?: number;
}

interface WeeklyInputTableProps {
  grade: string; // e.g., "6"
  dataType: "tietTot" | "hoaDiemMuoi";
  data: WeeklyClassScore[];
  isAdmin: boolean;
  isSaving: boolean;
  onValueChange: (classId: string, field: string, value: string) => void;
}

const WEEKS = [1, 2, 3];

export function WeeklyInputTable({ 
  grade,
  dataType,
  data,
  isAdmin,
  isSaving,
  onValueChange 
}: WeeklyInputTableProps) {

  const title = dataType === "tietTot" ? "Tiết Tốt" : "Hoa Điểm 10";
  const classesForGrade = data.filter(c => c.id.startsWith(`${grade}-`));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bảng Nhập Liệu {title} - Khối {grade}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="border font-bold w-[80px]">Tuần</TableHead>
              {classesForGrade.map(cls => (
                <TableHead key={cls.id} className="border text-center font-bold">{cls.name}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {WEEKS.map(week => (
              <TableRow key={week}>
                <TableCell className="border font-medium">Tuần {week}</TableCell>
                {classesForGrade.map(cls => {
                  const fieldName = `${dataType}_week${week}` as keyof WeeklyClassScore;
                  const value = cls[fieldName] || 0;

                  return (
                    <TableCell key={cls.id} className="border p-1">
                      {isAdmin ? (
                        <Input
                          type="number"
                          value={value}
                          onChange={(e) => onValueChange(cls.id, fieldName, e.target.value)}
                          className="w-full text-center"
                          min="0"
                          disabled={isSaving}
                        />
                      ) : (
                        <div className="text-center">{value}</div>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChiDoi {
  id: string;
  name: string;
  tietTot: number;
  hoaDiemMuoi: number;
}

const initialChiDois: ChiDoi[] = [
  ...Array.from({ length: 10 }, (_, i) => ({ id: `6-${i + 1}`, name: `6/${i + 1}`, tietTot: 0, hoaDiemMuoi: 0 })),
  ...Array.from({ length: 8 }, (_, i) => ({ id: `7-${i + 1}`, name: `7/${i + 1}`, tietTot: 0, hoaDiemMuoi: 0 })),
  ...Array.from({ length: 7 }, (_, i) => ({ id: `8-${i + 1}`, name: `8/${i + 1}`, tietTot: 0, hoaDiemMuoi: 0 })),
  ...Array.from({ length: 8 }, (_, i) => ({ id: `9-${i + 1}`, name: `9/${i + 1}`, tietTot: 0, hoaDiemMuoi: 0 })),
];

export default function StatisticsPage() {
  const [chiDois, setChiDois] = useState<ChiDoi[]>(initialChiDois);

  const handleValueChange = (id: string, field: 'tietTot' | 'hoaDiemMuoi', newValue: string) => {
    const valueCount = parseInt(newValue, 10);
    if (!isNaN(valueCount) && valueCount >= 0) {
      const updatedChiDois = chiDois.map(cd =>
        cd.id === id ? { ...cd, [field]: valueCount } : cd
      );
      setChiDois(updatedChiDois);
    }
  };

  const sortedChiDois = useMemo(() => {
    return [...chiDois].sort((a, b) => (b.tietTot + b.hoaDiemMuoi) - (a.tietTot + a.hoaDiemMuoi));
  }, [chiDois]);

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Thống kê số tiết tốt và hoa điểm mười</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={sortedChiDois}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="tietTot" fill="#8884d8" name="Số tiết tốt" />
              <Bar dataKey="hoaDiemMuoi" fill="#82ca9d" name="Hoa điểm 10" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bảng dữ liệu chi tiết</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Chi đội</TableHead>
                <TableHead className="w-[180px]">Số tiết tốt</TableHead>
                <TableHead className="w-[180px]">Hoa điểm 10</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {chiDois.map(cd => (
                <TableRow key={cd.id}>
                  <TableCell>{cd.name}</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={cd.tietTot}
                      onChange={(e) => handleValueChange(cd.id, 'tietTot', e.target.value)}
                      className="w-full"
                      min="0"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={cd.hoaDiemMuoi}
                      onChange={(e) => handleValueChange(cd.id, 'hoaDiemMuoi', e.target.value)}
                      className="w-full"
                      min="0"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

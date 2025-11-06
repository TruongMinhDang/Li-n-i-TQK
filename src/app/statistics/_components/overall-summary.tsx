'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeeklyClassScore } from "./weekly-input-table";
import { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area, XAxis, YAxis } from 'recharts';

interface OverallSummaryProps {
  data: WeeklyClassScore[];
}

const GRADES = ['6', '7', '8', '9'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const BigInfoCard = ({ title, value }: { title: string, value: number }) => (
  <Card className="text-center p-6 flex flex-col justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <CardHeader>
      <CardTitle className="text-xl font-medium text-muted-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-6xl font-bold">{value}</p>
    </CardContent>
  </Card>
);


export function OverallSummary({ data }: OverallSummaryProps) {
  const summary = useMemo(() => {
    let totalTietTot = 0;
    let totalHoaDiemMuoi = 0;
    const totalsByGrade = GRADES.map(g => ({ khoi: g, tietTot: 0, hoaDiemMuoi: 0, totalScore: 0 }));

    data.forEach(cd => {
      const tietTotTotal = (cd.tietTot_week1 || 0) + (cd.tietTot_week2 || 0) + (cd.tietTot_week3 || 0);
      const hoaDiemMuoiTotal = (cd.hoaDiemMuoi_week1 || 0) + (cd.hoaDiemMuoi_week2 || 0) + (cd.hoaDiemMuoi_week3 || 0);

      totalTietTot += tietTotTotal;
      totalHoaDiemMuoi += hoaDiemMuoiTotal;

      const grade = cd.id.split('-')[0];
      const gradeSummary = totalsByGrade.find(g => g.khoi === grade);
      if (gradeSummary) {
        gradeSummary.tietTot += tietTotTotal;
        gradeSummary.hoaDiemMuoi += hoaDiemMuoiTotal;
        gradeSummary.totalScore += tietTotTotal + hoaDiemMuoiTotal;
      }
    });
    
    return { totalTietTot, totalHoaDiemMuoi, totalsByGrade };
  }, [data]);

  const pieDataTietTot = summary.totalsByGrade.map(g => ({ name: `Khối ${g.khoi}`, value: g.tietTot }));
  const pieDataHoaDiemMuoi = summary.totalsByGrade.map(g => ({ name: `Khối ${g.khoi}`, value: g.hoaDiemMuoi }));

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Bảng Điều Khiển Tổng Quan</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BigInfoCard title="Tổng Số Tiết Tốt" value={summary.totalTietTot} />
          <BigInfoCard title="Tổng Số Hoa Điểm 10" value={summary.totalHoaDiemMuoi} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
             <h3 className="text-center font-semibold text-lg mb-4">Tỉ Lệ Tiết Tốt</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieDataTietTot} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                  {pieDataTietTot.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="lg:col-span-1">
             <h3 className="text-center font-semibold text-lg mb-4">So Sánh Các Khối</h3>
             <ResponsiveContainer width="100%" height={300}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={summary.totalsByGrade}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="khoi" />
                    <PolarRadiusAxis />
                    <Tooltip />
                    <Radar name="Tiết Tốt" dataKey="tietTot" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Hoa 10" dataKey="hoaDiemMuoi" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-center font-semibold text-lg mb-4">Tỉ Lệ Hoa Điểm 10</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieDataHoaDiemMuoi} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label>
                    {pieDataHoaDiemMuoi.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
         <div className="w-full">
            <h3 className="text-center font-semibold text-lg mb-4">Tổng Quan Điểm Theo Khối</h3>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={summary.totalsByGrade} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="khoi" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="totalScore" name="Tổng điểm" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

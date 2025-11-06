'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface LegacyStat {
  id: string;
  name: string;
  tietTot: number;
  hoaDiemMuoi: number;
}

async function fetchLegacyStats(): Promise<LegacyStat[]> {
    const res = await fetch('/api/statistics/legacy');
    if (!res.ok) {
        throw new Error('Failed to fetch legacy statistics');
    }
    return res.json();
}

export default function LegacyDataPage() {
    const [legacyData, setLegacyData] = useState<LegacyStat[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchLegacyStats();
                // Sort data by class name numerically
                const sortedData = data.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
                setLegacyData(sortedData);
            } catch (err) {
                setError('Không thể tải được dữ liệu cũ. Vui lòng thử lại sau.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return <div className="flex h-screen w-full items-center justify-center"><Loader2 className="h-16 w-16 animate-spin" /></div>;
    }

    if (error) {
        return <div className="flex h-screen w-full items-center justify-center text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto py-8 px-4 md:px-6">
            <Card>
                <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className='space-y-2'>
                         <CardTitle className="text-2xl font-bold">Dữ Liệu Thống Kê Cũ (Chỉ Đọc)</CardTitle>
                         <p className='text-muted-foreground'>Đây là bản ghi tổng kết các điểm đã nhập trước khi hệ thống chuyển sang nhập liệu theo tuần.</p>
                    </div>
                    <Button asChild className='mt-4 md:mt-0'>
                        <Link href="/statistics">Quay lại trang Thống kê mới</Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">Lớp</TableHead>
                                <TableHead className="text-center font-bold">Tổng Tiết Tốt</TableHead>
                                <TableHead className="text-center font-bold">Tổng Hoa Điểm 10</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {legacyData.length > 0 ? (
                                legacyData.map(stat => (
                                    <TableRow key={stat.id}>
                                        <TableCell>{stat.name}</TableCell>
                                        <TableCell className="text-center">{stat.tietTot}</TableCell>
                                        <TableCell className="text-center">{stat.hoaDiemMuoi}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={3} className="text-center">Không tìm thấy dữ liệu cũ.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

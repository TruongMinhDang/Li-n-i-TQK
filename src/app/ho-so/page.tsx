'use client';

import { useAuth } from '@/context/auth-context';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Star, Award, BarChart2, LogOut, Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Mock data for stats and badges
const userStats = [
  { label: 'Hoạt động đã tham gia', value: 12, icon: <BarChart2 className="h-6 w-6 text-blue-500" /> },
  { label: 'Điểm rèn luyện', value: 85, icon: <Star className="h-6 w-6 text-yellow-500" /> },
  { label: 'Số bài viết', value: 3, icon: <Pencil className="h-6 w-6 text-green-500" /> },
];

const userBadges = [
  { name: 'Thành viên tích cực', icon: <Award className="h-8 w-8 text-green-500" />, description: 'Tham gia trên 10 hoạt động' },
  { name: 'Chiến sĩ kế hoạch nhỏ', icon: <Shield className="h-8 w-8 text-blue-500" />, description: 'Đóng góp tích cực cho phong trào' },
  { name: 'Tấm gương sáng', icon: <Star className="h-8 w-8 text-yellow-500" />, description: 'Được tuyên dương trong tháng' },
];


export default function HoSoPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  if (loading) {
    return <div className="flex justify-center items-center h-64"><p>Đang tải hồ sơ...</p></div>;
  }

  if (!user) {
    // This should ideally be handled by a higher-order component or middleware,
    // but a client-side redirect works for now.
    router.push('/dang-nhap');
    return null;
  }

  return (
    <div className="container mx-auto p-4 md:p-8 space-y-12">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <Avatar className="h-32 w-32 border-4 border-primary shadow-lg">
          <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
          <AvatarFallback className="text-4xl">{user.displayName?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-headline font-bold">{user.displayName || 'Tên thành viên'}</h1>
          <p className="text-muted-foreground text-lg mt-1">{user.email}</p>
          <div className="mt-4 flex justify-center md:justify-start space-x-2">
            <Button>
              <Pencil className="mr-2 h-4 w-4" /> Chỉnh sửa hồ sơ
            </Button>
            <Button variant="outline" onClick={signOut}>
              <LogOut className="mr-2 h-4 w-4" /> Đăng xuất
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <h2 className="text-3xl font-headline font-bold mb-6">Thống kê của bạn</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {userStats.map((stat, index) => (
            <Card key={index} className="transform transition-transform hover:scale-105">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">Tính đến hôm nay</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Badges Section */}
      <section>
        <h2 className="text-3xl font-headline font-bold mb-6">Huy hiệu đạt được</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
            {userBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-4 bg-background rounded-full">
                       {badge.icon}
                    </div>
                    <p className="mt-3 font-semibold text-sm">{badge.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
                </div>
            ))}
        </div>
      </section>

    </div>
  );
}
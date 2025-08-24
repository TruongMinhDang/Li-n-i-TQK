import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const events = [
  { date: new Date(2024, 8, 5), title: "Lễ Khai giảng năm học mới", category: "Nghi lễ" },
  { date: new Date(2024, 9, 20), title: "Hội thi 'Nét đẹp đội viên'", category: "Văn nghệ" },
  { date: new Date(2024, 10, 19), title: "Hội thao chào mừng Ngày Nhà giáo Việt Nam", category: "Thể thao" },
  { date: new Date(2024, 11, 22), title: "Viếng nghĩa trang liệt sĩ", category: "Tưởng niệm" },
]

export default function EventsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl gradient-text">
          Lịch Sự Kiện
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Cùng theo dõi và tham gia các hoạt động sắp tới của Liên đội.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-2 md:p-6">
              <Calendar
                mode="multiple"
                selected={events.map(e => e.date)}
                className="p-0 [&_td]:w-14 [&_td]:h-14 [&_th]:w-14"
                classNames={{
                  day_selected: "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary/90",
                }}
              />
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-headline font-bold">Sự kiện sắp diễn ra</h2>
          {events.map((event) => (
            <Card key={event.title}>
              <CardHeader>
                <CardTitle className="text-lg">{event.title}</CardTitle>
                <CardDescription>{event.date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge>{event.category}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

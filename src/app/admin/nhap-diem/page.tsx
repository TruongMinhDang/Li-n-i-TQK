
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// Mock data for classes - this should be fetched from your database
const classes = [
  { id: "6A1", name: "Lớp 6A1" },
  { id: "6A2", name: "Lớp 6A2" },
  { id: "7A1", name: "Lớp 7A1" },
  { id: "7A2", name: "Lớp 7A2" },
  { id: "8A1", name: "Lớp 8A1" },
  { id: "8A2", name: "Lớp 8A2" },
  { id: "9A1", name: "Lớp 9A1" },
  { id: "9A2", name: "Lớp 9A2" },
];

const dataEntrySchema = z.object({
  classId: z.string({ required_error: "Vui lòng chọn một lớp." }),
  goodLessons: z.coerce.number().min(0, "Số tiết học tốt phải là số dương."),
  score10: z.coerce.number().min(0, "Số điểm 10 phải là số dương."),
  // Add other fields as needed
});

type DataEntryFormData = z.infer<typeof dataEntrySchema>;

export default function DataEntryPage() {
  const { toast } = useToast();
  const form = useForm<DataEntryFormData>({
    resolver: zodResolver(dataEntrySchema),
    defaultValues: {
      classId: "",
      goodLessons: 0,
      score10: 0,
    },
  });

  async function onSubmit(data: DataEntryFormData) {
    // Here you would typically send the data to your backend/database.
    // For this example, we'll just display a toast.
    console.log(data);
    toast({
      title: "Nhập liệu thành công!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    // Optionally reset the form after successful submission
    form.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nhập Số Liệu Thi Đua</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="classId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Chọn Lớp</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn một lớp để nhập liệu" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {classes.map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="goodLessons"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số Tiết Học Tốt</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Nhập số tiết học tốt" {...field} />
                  </FormControl>
                  <FormDescription>
                    Nhập tổng số tiết học tốt của lớp trong tuần.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="score10"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số Lượng Điểm 10</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Nhập số lượng điểm 10" {...field} />
                  </FormControl>
                  <FormDescription>
                    Nhập tổng số điểm 10 của lớp trong tuần.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Đang lưu..." : "Lưu Số Liệu"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

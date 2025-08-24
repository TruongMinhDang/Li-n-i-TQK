"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Tên phải có ít nhất 2 ký tự.",
  }),
  recipient: z.string().min(2, {
    message: "Tên người nhận phải có ít nhất 2 ký tự.",
  }),
  message: z.string().min(10, {
    message: "Lời chúc phải có ít nhất 10 ký tự.",
  }).max(500, {
    message: "Lời chúc không được vượt quá 500 ký tự.",
  }),
})

export type Wish = z.infer<typeof formSchema>;

interface WishesFormProps {
  onSubmit: (data: Wish) => void;
}

export function WishesForm({ onSubmit }: WishesFormProps) {
  const form = useForm<Wish>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      recipient: "",
      message: "",
    },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Tạo lời chúc của bạn</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên của bạn</FormLabel>
                    <FormControl>
                      <Input placeholder="Nguyễn Văn A" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="recipient"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gửi đến</FormLabel>
                    <FormControl>
                      <Input placeholder="Thầy/Cô/Bạn..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lời chúc</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Viết lời chúc của bạn tại đây..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Bạn có thể viết tối đa 500 ký tự.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Gửi lời chúc
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

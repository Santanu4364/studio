'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { generateMessageAction } from '@/app/actions';
import { birthdayMessageSchema, type BirthdayMessageSchema } from '@/lib/schemas';
import { useToast } from "@/hooks/use-toast"
import { ConfettiAnimation } from '@/components/confetti-animation';
import { Icons } from '@/components/icons';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
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
import { PartyPopper } from 'lucide-react';


export function BirthdayMessageGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState<string | null>(null);
  const { toast } = useToast()

  const form = useForm<BirthdayMessageSchema>({
    resolver: zodResolver(birthdayMessageSchema),
    defaultValues: {
      studentName: '',
      interests: '',
      includeCulturalElements: true,
    },
  });

  async function onSubmit(data: BirthdayMessageSchema) {
    setIsLoading(true);
    setGeneratedMessage(null);

    const result = await generateMessageAction(data);
    
    setIsLoading(false);

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: result.error,
      })
    } else if (result.message) {
      setGeneratedMessage(result.message);
      form.reset();
    }
  }

  const handleReset = () => {
    setGeneratedMessage(null);
    form.reset();
  }

  if (generatedMessage) {
    return (
      <>
        <ConfettiAnimation />
        <Card className="w-full max-w-lg shadow-2xl animate-content-reveal border-primary/50">
          <CardHeader className="items-center text-center">
            <PartyPopper className="w-12 h-12 text-primary" />
            <CardTitle className="text-3xl font-bold text-primary">A Special Message For You!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-background/80 p-6 rounded-lg border-2 border-dashed border-accent">
                <p className="text-lg text-foreground whitespace-pre-wrap font-body leading-relaxed">{generatedMessage}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleReset} className="w-full" variant="outline">Create Another Message</Button>
          </CardFooter>
        </Card>
      </>
    );
  }

  return (
    <Card className="w-full max-w-lg shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icons.gift className="h-6 w-6 text-accent" />
          Message Details
        </CardTitle>
        <CardDescription>Fill in the details to create a unique birthday wish.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student's Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Priya" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="interests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interests & Hobbies</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Loves science, cricket, and classical dance"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="includeCulturalElements"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-background/50">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Add a touch of Indian culture?
                    </FormLabel>
                    <FormDescription>
                      Include culturally relevant elements in the message.
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" loading={isLoading}>
              {isLoading ? 'Creating Magic...' : 'Generate Wishing'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

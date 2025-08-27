'use client';

import { useAuthForm } from '../hooks/use-auth-form.hook';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import Link from 'next/link';

export default function RegisterForm() {
  const { formRegister, onSubmit, isPending } = useAuthForm('register');

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className={"text-center"}>Zarejestruj się</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...formRegister}>
          <form onSubmit={formRegister.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={formRegister.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nazwa użytkownika</FormLabel>
                  <FormControl>
                    <Input placeholder="Jan Kowalski" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formRegister.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formRegister.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hasło</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? 'Tworzenie konta...' : 'Zarejestruj się'}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <CardDescription className={"text-center w-full"}>
          Masz już konto?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Zaloguj się
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
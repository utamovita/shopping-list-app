"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLoginForm } from "@/features/auth/hooks/use-login-form.hook";

export default function LoginForm() {
  const { form, onSubmit, isPending } = useLoginForm();
  const { t } = useTranslation("common");

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className={"text-center"}>{t("auth.loginTitle")}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("formFields.email")}</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("formFields.password")}</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" isLoading={isPending}>
              {t("auth.loginTitle")}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <CardDescription className={"text-center w-full"}>
          {t("auth.noAccountPrompt")}{" "}
          <Link href="/register" className="text-primary hover:underline">
            {t("auth.registerTitle")}
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

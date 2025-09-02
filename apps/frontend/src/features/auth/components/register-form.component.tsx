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
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRegisterForm } from "@/features/auth/hooks/use-register-form.hook";
import { APP_PATHS } from "@repo/config/paths";

export default function RegisterForm() {
  const { form, onSubmit, isPending } = useRegisterForm();
  const { t } = useTranslation("common");

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className={"text-center"}>
          {t("auth.registerTitle")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("formFields.username")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("formFields.usernamePlaceholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              {t("auth.registerTitle")}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <CardDescription className={"text-center w-full"}>
          {t("auth.haveAccountPrompt")}{" "}
          <Link href={APP_PATHS.login} className="text-primary hover:underline">
            {t("auth.loginTitle")}
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

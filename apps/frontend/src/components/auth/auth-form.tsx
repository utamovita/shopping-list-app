"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    name: z.string().optional(),
    email: z.string().email({ message: "Niepoprawny adres email." }),
    password: z.string().min(8, {
        message: "Hasło musi mieć co najmniej 8 znaków.",
    }),
});

type AuthFormProps = {
    type: "login" | "register";
};

export default function AuthForm({ type }: AuthFormProps) {
    const setToken = useAuthStore((state) => state.setToken);
    const router = useRouter();
    const isLogin = type === "login";

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const { mutate, isPending } = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            const url = isLogin ? "http://localhost:3000/auth/login" : "http://localhost:3000/auth/register";
            return axios.post(url, values);
        },
        onSuccess: (response) => {
            if (response.data.access_token) {
                setToken(response.data.access_token);
                router.push("/");
            }
        },
        onError: (error) => {
            console.error("Authentication error:", error);
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        mutate(values);
    }

    return (
        <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>{isLogin ? "Zaloguj się" : "Zarejestruj się"}</CardTitle>
                <CardDescription>
                    {isLogin ? "Witaj z powrotem! Podaj swoje dane." : "Stwórz konto, aby zacząć."}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {!isLogin && (
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nazwa</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Jan Kowalski" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        <FormField
                            control={form.control}
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
                            control={form.control}
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
                            {isPending ? "Przetwarzanie..." : isLogin ? "Zaloguj się" : "Stwórz konto"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}

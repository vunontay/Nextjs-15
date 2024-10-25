"use client";

import { LoadingButton } from "@/components/customs/loading-button";
import { PasswordInput } from "@/components/customs/password-input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema, RegisterValues } from "@/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const RegisterForm = () => {
    const [error, setError] = useState<string>();
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
        },
    });

    const onSubmit = async (values: RegisterValues) => {
        setError(undefined);
        startTransition(async () => {
            const { error } = await Register(values);
            if (error) setError(error);
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {error && (
                    <p className="text-center text-destructive">{error}</p>
                )}
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Username" {...field} />
                            </FormControl>
                            <div className="h-2">
                                {form.formState.errors.username && (
                                    <FormMessage>
                                        {form.formState.errors.username.message}
                                    </FormMessage>
                                )}
                            </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    {...field}
                                />
                            </FormControl>
                            <div className="h-2">
                                {form.formState.errors.email && (
                                    <FormMessage>
                                        {form.formState.errors.email.message}
                                    </FormMessage>
                                )}
                            </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <PasswordInput
                                    placeholder="Password"
                                    {...field}
                                />
                            </FormControl>
                            <div className="h-2">
                                {form.formState.errors.password && (
                                    <FormMessage>
                                        {form.formState.errors.password.message}
                                    </FormMessage>
                                )}
                            </div>
                        </FormItem>
                    )}
                />
                <div className="mt-4">
                    <LoadingButton
                        loading={isPending}
                        type="submit"
                        className="w-full mt-6"
                    >
                        Create account
                    </LoadingButton>
                </div>
            </form>
        </Form>
    );
};

export default RegisterForm;

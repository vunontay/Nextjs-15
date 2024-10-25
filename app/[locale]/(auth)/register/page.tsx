import registerImage from "@/assets/signup-image.webp";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/app/[locale]/(auth)/register/_components/register-form";
import { ROUTER } from "@/constants/routes-server";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const messages: any = await getMessages({ locale });
    const title = messages.PageTitle.RegisterPage;

    return {
        title,
    };
}

export default async function Page({
    params: { locale },
}: {
    params: { locale: string };
}) {
    return (
        <main className="flex h-screen items-center justify-center p-5">
            <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
                <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
                    <div className="space-y-1 text-center">
                        <h1 className="text-3xl font-bold">
                            Sign up to WeeBoo
                        </h1>
                        <p className="text-muted-foreground">
                            A place where even{" "}
                            <span className="italic">you</span> can find a
                            friend.
                        </p>
                    </div>
                    <div className="space-y-5">
                        <RegisterForm />
                        <Link
                            href={`/${locale}${ROUTER.AUTH.LOGIN}`}
                            className="block text-center hover:underline hover:text-primary"
                        >
                            Already have an account? Log in
                        </Link>
                    </div>
                </div>
                <Image
                    src={registerImage}
                    alt=""
                    className="hidden w-1/2 object-contain md:block"
                />
            </div>
        </main>
    );
}

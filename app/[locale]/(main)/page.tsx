import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const messages: any = await getMessages({ locale });
    const title = messages.PageTitle.HomePage;

    return {
        title,
    };
}

export default function Home() {
    const t = useTranslations("PageTitle");
    return (
        <main className="h-[200vh] w-full bg-card">
            <div className="w-full">{t("HomePage")}</div>
        </main>
    );
}

"use client";

import { Input } from "@/components/ui/input";
import { ROUTER } from "@/constants/routes-client";
import { SearchIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const SearchField = () => {
    const router = useRouter();
    const t = useTranslations("SearchField");
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const q = (form.q as HTMLInputElement).value.trim();
        if (!q) return;
        router.push(`${ROUTER.SEARCH}?q=${encodeURIComponent(q)}`);
    };

    return (
        <form onSubmit={handleSubmit} method="GET" action={ROUTER.SEARCH}>
            <div className="relative">
                <Input
                    name="q"
                    placeholder={t("placeholder")}
                    className="pe-10"
                />
                <SearchIcon className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground" />
            </div>
        </form>
    );
};

SearchField.displayName = "SearchField";

export { SearchField };

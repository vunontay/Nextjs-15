import { Button } from "@/components/ui/button";
import { Bell, Bookmark, Home, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

interface IMenubar {
    className?: string;
}

const Menubar = ({ className }: IMenubar) => {
    const t = useTranslations("Menubar");

    return (
        <div className={className}>
            <Button
                variant="ghost"
                className="flex items-center justify-start gap-3"
                title={t("HomeLink")}
                asChild
            >
                <Link href="/">
                    <Home />
                    <span className="hidden lg:inline">{t("HomeLink")}</span>
                </Link>
            </Button>
            <Button
                variant="ghost"
                className="flex items-center justify-start gap-3"
                title={t("NotificationsLink")}
                asChild
            >
                <Link href="/notifications">
                    <Bell />
                    <span className="hidden lg:inline">
                        {t("NotificationsLink")}
                    </span>
                </Link>
            </Button>
            <Button
                variant="ghost"
                className="flex items-center justify-start gap-3"
                title={t("MessagesLink")}
                asChild
            >
                <Link href="/messages">
                    <Mail />
                    <span className="hidden lg:inline">
                        {t("MessagesLink")}
                    </span>
                </Link>
            </Button>
            <Button
                variant="ghost"
                className="flex items-center justify-start gap-3"
                title={t("BookmarksLink")}
                asChild
            >
                <Link href="/bookmarks">
                    <Bookmark />
                    <span className="hidden lg:inline">
                        {t("BookmarksLink")}
                    </span>
                </Link>
            </Button>
        </div>
    );
};

export default Menubar;

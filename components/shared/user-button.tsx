"use client";

import { UserAvatar } from "@/components/shared/user-avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
    Check,
    LogOutIcon,
    Monitor,
    Moon,
    Palette,
    Sun,
    UserIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IUserButton {
    className?: string;
}

const UserButton = ({ className }: IUserButton) => {
    const { theme, setTheme } = useTheme();
    const t = useTranslations("UserButton");
    const router = useRouter();

    const switchLanguage = (lang: string) => {
        router.push(`/${lang}`);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className={cn("flex-none rounded-full ", className)}>
                    <UserAvatar
                        className="shadow-md"
                        avatarUrl={""}
                        size={40}
                    />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel className="py-2">
                    {t("menuLabel")} @{"vunontay"}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={`/users/${"vunontay"}`}>
                    <DropdownMenuItem>
                        <UserIcon className="mr-2 size-4" />
                        {t("profile")}
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="gap-2">
                        <Palette className="mr-2 size-4" />
                        {t("theme")}
                    </DropdownMenuSubTrigger>

                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem
                                onClick={() => setTheme("system")}
                            >
                                <Monitor className="mr-2 size-4" />
                                {t("themeSystem")}
                                {theme === "system" && (
                                    <Check className="ms-2 size-4" />
                                )}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                <Sun className="mr-2 size-4" />
                                {t("themeLight")}
                                {theme === "light" && (
                                    <Check className="ms-2 size-4" />
                                )}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                <Moon className="mr-2 size-4" />
                                {t("themeDark")}
                                {theme === "dark" && (
                                    <Check className="ms-2 size-4" />
                                )}
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>

                <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="gap-2">
                        <span className="mr-2 size-4">🌐</span> {t("language")}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem
                                onClick={() => switchLanguage("en")}
                            >
                                <span>English</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => switchLanguage("vi")}
                            >
                                <span>Tiếng Việt</span>
                            </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>

                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => {
                        //   logout();
                    }}
                >
                    <LogOutIcon className="mr-2 size-4" />
                    {t("logout")}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

UserButton.displayName = "UserButton";

export { UserButton };

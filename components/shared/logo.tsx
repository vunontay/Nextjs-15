import Link from "next/link";

const MainLogo = () => {
    return (
        <Link href="/" className="text-2xl font-medium text-primary">
            <span className="font-bold">Wee</span>Boo
        </Link>
    );
};

MainLogo.displayName = "MainLogo";

export { MainLogo };

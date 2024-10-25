import { UserButton } from "@/components/shared/user-button";
import { SearchField } from "@/components/shared/search-field";
import { MainLogo } from "@/components/shared/logo";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-10 bg-card shadow-sm">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-6 py-4">
                <MainLogo />
                <SearchField />
                <UserButton className="sm:ms-auto" />
            </div>
        </header>
    );
};

export default Navbar;

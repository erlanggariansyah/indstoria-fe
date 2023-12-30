import { useRouter } from "next/router";
import { useCallback } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

interface HeaderProps {
    label?: string;
    showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
    const router = useRouter();

    const handleBack = useCallback(() => {
        router.back();
    }, [router]);

    return (
        <div className="border-b-[1px] border-neutral-800 p-5">
            <div className="flex flex-row items-center gap-2">
                <div>
                    {
                        showBackArrow && (
                            <SlArrowLeft onClick={handleBack} color="white" size={20} className="cursor-pointer hover:opacity-70 transition" />
                        )
                    }
                </div>
                <div className="justify-center w-full">
                    <h1 className="text-white text-xl font-semibold text-center">{label}</h1>
                </div>
                <div>
                    {
                        showBackArrow && (
                            <SlArrowRight onClick={handleBack} color="white" size={20} className="cursor-pointer hover:opacity-70 transition" />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;

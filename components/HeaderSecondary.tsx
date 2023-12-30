import useLoginModal from "@/hooks/useLoginModal";
import { useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

const HeaderSecondary = () => {
    const loginModal = useLoginModal();

    const handleOnClickPost = useCallback(() => {
        loginModal.onOpen();
    }, [loginModal]);

    return (
        <div className="border-b-[1px] border-neutral-800 flex flex-row items-center">
            <div className="relative flex m-6">
                <FaSearch size={24} color="white" />
            </div>
            <div onClick={handleOnClickPost} className="relative flex px-4 py-2 mr-2 rounded-full bg-neutral-800 hover:bg-opacity-90 w-full cursor-pointer transition">
                <p className="text-center font-light antialiased text-white text-[20px]">Cari sesuatu...</p>
            </div>
            <div className="relative flex m-6">
                <FaPenToSquare size={24} color="white" />
            </div>
        </div>
    )
}

export default HeaderSecondary;

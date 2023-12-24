import { FaFeather, FaUser } from "react-icons/fa";

const HeaderSecondary = () => {
    return (
        <div className="border-b-[1px] border-neutral-800 flex flex-row items-center">
            <div className="relative flex m-6">
                <FaUser size={24} color="white" />
            </div>
            <div className="relative flex px-4 py-2 rounded-full bg-neutral-800 hover:bg-opacity-90 w-full cursor-pointer transition">
                <p className="text-center font-semibold text-white text-[20px]">Tulis sesuatu...</p>
            </div>
        </div>
    )
}

export default HeaderSecondary;

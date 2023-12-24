import { useRouter } from "next/router";

const SidebarLogo = () => {
    const router = useRouter();

    const handleOnClick = () => {
        router.push('/');
    }

    return (
        <div className="rounded-full mt-4 p-4 flex items-center justify-center transition" onClick={handleOnClick}>
            <img className="hidden md:block lg:block xl:block 2xl:block" src="/indstoria-dark-tr.png" alt="Indstoria Logo" />
            <p className="text-white text-md font-serif hidden 2xl:flex xl:flex md:flex">In history, we learn</p>
        </div>
    )
}

export default SidebarLogo;

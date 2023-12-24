import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    const items = [
        {
            label: 'Beranda',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Profil',
            href: '/profile/123',
            icon: FaUser
        },
        {
            label: 'Notifikasi',
            href: '/notifications',
            icon: BsBellFill
        }
    ]

    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col h-screen">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                    {items.map(item => (
                        <SidebarItem
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                        />
                    ))}
                </div>
                <div className="space-y-2 pt-4 pb-4 lg:w-[230px] mt-auto">
                    <SidebarItem onClick={() => {}} icon={BiLogOut} label="Keluar" />
                </div> 
            </div>
        </div>
    )
}

export default Sidebar;

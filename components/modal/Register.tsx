import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";

const Register = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    
    const [ email, setEmail ] = useState("");
    const [ name, setName ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ passwordConfirmation, setPasswordConfirmation ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            router.push('/home');
            registerModal.onClose();
        } catch(error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [registerModal])

    const onToggle = useCallback(() => {
        if (isLoading) return;

        registerModal.onClose();
        loginModal.onOpen();
    }, [registerModal, loginModal, isLoading])

    const footer = (
        <div className="text-neutral-400 text-center mt-4">
            <p className="font-light">Sudah punya akun? <span onClick={onToggle} className="text-white cursor-pointer hover:underline">Masuk</span></p>
        </div>
    );

    const body = (
        <div className="flex flex-col gap-4">
            <Input title="Email" type="email" placeholder="Silahkan ketik email kamu" onChange={(e) => setEmail(e.target.value)} value={email} disabled={isLoading}/>
            <Input title="Nama" type="text" placeholder="Silahkan ketik nama kamu" onChange={(e) => setName(e.target.value)} value={name} disabled={isLoading}/>
            <Input title="Username" type="text" placeholder="Silahkan ketik username kamu" onChange={(e) => setUsername(e.target.value)} value={username} disabled={isLoading}/>
            <div className="grid grid-cols-2 max-md:grid-cols-1 ">
            <Input title="Password" type="password" placeholder="Silahkan ketik password kamu" onChange={(e) => setPassword(e.target.value)} value={password} disabled={isLoading}/>
            <Input title="Konfirmasi Password" type="password" placeholder="Silahkan konfirmasi password" onChange={(e) => setPasswordConfirmation(e.target.value)} value={passwordConfirmation} disabled={isLoading}/>
            </div>
        </div>
    )

    return (
        <Modal disabled={isLoading} isOpen={registerModal.isOpen} title="Buat akun" actionLabel="Daftar" onClose={registerModal.onClose} onSubmit={onSubmit} body={body} footer={footer}/>
    )
}

export default Register;

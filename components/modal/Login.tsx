import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            router.push('/home');
            loginModal.onClose();
        } catch(error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [loginModal])

    const onToggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [isLoading, loginModal, registerModal]);

    const body = (
        <div className="flex flex-col gap-4">
            <Input title="Email" placeholder="Silahkan ketik email kamu" onChange={(e) => setEmail(e.target.value)} value={email} disabled={isLoading}/>
            <Input title="Password" placeholder="Silahkan ketik password kamu" onChange={(e) => setPassword(e.target.value)} value={password} disabled={isLoading}/>
        </div>
    )

    const footer = (
        <div className="text-neutral-400 text-center mt-4">
            <p className="font-light">Pertama kali kesini? <span onClick={onToggle} className="text-white cursor-pointer hover:underline">Buat akun</span></p>
        </div>
    );

    return (
        <Modal disabled={isLoading} isOpen={loginModal.isOpen} title="Masuk" actionLabel="Masuk" onClose={loginModal.onClose} onSubmit={onSubmit} body={body} footer={footer}/>
    )
}

export default Login;

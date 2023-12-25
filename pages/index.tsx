import Button from "@/components/Button";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { Suspense, useCallback } from "react";

const Index = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const handleClickRegister = useCallback(() => {
    registerModal.onOpen();
  }, [registerModal]);

  const handleClickLogin = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal])

  return (
    <>
    <div className="bg-white h-screen grid grid-cols-2 justify-center items-center">
      <div className="text-center max-lg:hidden">
        <img className="object-cover h-screen w-full" src="/index-leftbackground.webp" alt="background-image" />
      </div>
      <div className="text-center max-lg:col-span-2">
        <div className="mr-6 ml-6">
          <p className="font-normal text-2xl max-md:text-xl antialiased">Selamat datang,</p>
          <p className="font-light text-lg max-md:text-sm antialiased">Selangkah lebih dekat dengan sejarah di Indstoria</p>
        </div>
        <div className="grid grid-cols-2 p-4 max-md:p-2 justify-center items-center">
          <div className="text-center">
              <img src="/indstoria-light-tr.png" alt="logo"/>
          </div>
          <div className="text-left mr-6">
            <div className={`${loginModal.isOpen ? 'animate-pulse' : ''}`}>
              <Button label="Masuk" secondary fullWidth onClick={handleClickLogin}/>
            </div>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-full h-px bg-gray-200 border-0 dark:bg-neutral-800"/>
                <span className=" absolute font-light text-center text-gray-900 bg-white dark:text-white dark:bg-neutral-900">atau</span>
            </div>
            <div className={`pt-4 pb-4 max-md:pb-2 ${registerModal.isOpen ? 'animate-pulse' : ''}`}>
              <Button label="Daftar" fullWidth onClick={handleClickRegister}/>
            </div>
            <p className="font-light text-sm">Dengan mengklik daftar, kamu telah membaca dan setuju dengan <span className={`text-black font-semibold cursor-pointer hover:underline ${loginModal.isOpen ? 'animate-pulse' : ''}`}>Kebijakan Privasi</span> situs ini</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Index;

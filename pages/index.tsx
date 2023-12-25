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

  const onToggle = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal])

  return (
    <>
    <div className="bg-white h-screen grid grid-cols-2 justify-center items-center">
      <div className="text-center max-lg:hidden">
        <img className="object-cover h-screen w-full" src="/index-leftbackground.jpg" alt="" />
      </div>
      <div className="text-center max-lg:col-span-2">
        <div className="mr-6 ml-6">
          <p className="font-normal text-2xl max-md:text-xl antialiased">Privet, kamerad!</p>
          <p className="font-light text-lg max-md:text-sm antialiased">Di sini, dihadapan patung The Motherland Calls, kamu diajak<br />untuk bergabung dalam perjalanan sejarah yang luar biasa.</p>
        </div>
        <div className="grid grid-cols-2 p-4 max-md:p-2 justify-center items-center">
          <div className="text-center">
            <Suspense fallback={<div className="animate-pulse"/>}>
              <img src="/indstoria-light-tr.png" alt="logo"/>
            </Suspense>
          </div>
          <div className="text-left pt-6 max-md:pt-4 mr-6">
            <div className={`pt-4 pb-4 max-md:pt-2 max-md:pb-2 ${registerModal.isOpen ? 'animate-pulse' : ''}`}>
              <Button label="Daftar" fullWidth onClick={handleClickRegister}/>
            </div>
            <p className="font-light">Sudah punya akun? <span onClick={onToggle} className={`text-black cursor-pointer hover:underline ${loginModal.isOpen ? 'animate-pulse' : ''}`}>Masuk</span></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Index;

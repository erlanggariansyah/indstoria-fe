import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled }) => {
    const handleClose = useCallback(() => {
        if (disabled) return;

        onClose()
    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        if (disabled) return;

        onSubmit()
    }, [disabled, onSubmit])

    if (!isOpen) return;

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden backdrop-blur-sm overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-900 bg-opacity-10">
                <div className="relative w-full lg:w-3/6 mx-auto lg:max-w-3xl lg:h-auto h-auto">
                    {/* CONTENT */}
                    <div className="h-full h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                        {/* FOOTER */}
                        <div className="flex items-center justify-between mt-10 mx-10 rounded-t">
                            <img className="w-10 h-15" src="../indstoria-dark-tr.png" alt="logo"/>
                            <p className="text-white text-xl mr-2">|</p>
                            <h3 className="text-3xl font-medium text-white">{title}</h3>
                            <button className="p-1 ml-auto border-0 text-white hover:opacity-70 transition" onClick={handleClose}>
                                <AiOutlineClose size={20} />
                            </button>
                        </div>
                        
                        {/* BODY */}
                        <div className="relative p-10 flex-auto">
                            {body}
                        </div>

                        {/* FOOTER */}
                        <div className="flex flex-col gap-2 mb-10 mx-10">
                            <Button disabled={disabled} label={actionLabel} secondary fullWidth large onClick={handleSubmit} />
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;

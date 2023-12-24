interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, type, disabled, onChange }) => {
    return (
        <>
        <div>
            <label className="font-light text-white text-lg">{placeholder}</label>
            <input disabled={disabled} onChange={onChange} value={value} placeholder={placeholder} type={type}
                className="w-full mt-2 p-4 text-lg bg-black border-2 border-neutral-800 rounded-full outline-none text-white focus:border-neutral-500 focus:border-2 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed"/>
        </div>
        </>
    )
}

export default Input;

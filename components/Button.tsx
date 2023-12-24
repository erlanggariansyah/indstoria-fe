interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({label, secondary, fullWidth, large, onClick, disabled}) => {
    return (
        <button 
        disabled={disabled}
        onClick={onClick}
        className={
            `text-black font-semibold border-black disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 transition border-2
            ${fullWidth ? 'w-full' : 'w-fit'}
            ${secondary ? 'bg-white' : 'bg-black'}
            ${secondary ? 'text-black' : 'text-white'}
            ${secondary ? 'border-black' : 'border-black'}
            ${large ? 'px-5' : 'px-4'}
            ${large ? 'py-3' : 'py-2'}
            `
        }>{label}</button>
    )
}

export default Button;

'use client';

interface InputBoxProps {
    type?: string;
    placeholder: string;
    disabled?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({
    type = "text",
    placeholder,
    disabled,
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    w-full
                    rounded
                    border
                    border-transparent
                    shadow-sm
                    px-1.5
                    sm:px-2
                    py-1
                    sm:py-1.5
                    text-sm
                    font-medium
                    text-neutral-600
                    bg-neutral-200/50
                    focus:outline-none
                    focus:ring-1
                    focus:ring-blue-600
                    focus:border-blue-600
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                "
        />
    );
};

export default InputBox;

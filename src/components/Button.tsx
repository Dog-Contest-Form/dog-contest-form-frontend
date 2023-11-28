export default function Button({
    id,
    type = "button",
    formNoValidate = false,
    className = "px-6 py-2",
    disabled = false,
    children,
    onClick,
}: {
    id?: string;
    type?: any;
    formNoValidate?: boolean;
    className?: string;
    disabled?: boolean;
    children: string;
    onClick?: any;
}) {
    return (
        <button
            id={id}
            type={type}
            className={
                (type === "submit" && id !== "btn-prev") ||
                className.includes("btn-register")
                    ? `${className} rounded-full text-sm text-white bg-sky-700 hover:bg-sky-800 active:bg-sky-900 shadow-md`
                    : id === "btn-prev"
                    ? `${className} rounded-full text-sm text-slate-600 hover:bg-slate-100 active:bg-slate-200`
                    : `${className} rounded-full text-sm text-sky-700 bg-sky-50 hover:bg-sky-100 active:bg-sky-200 shadow-md`
            }
            formNoValidate={formNoValidate}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

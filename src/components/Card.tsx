export default function Card({
    className = "md:px-8 px-4 py-6",
    children,
}: {
    className?: string;
    children: any;
}) {
    return (
        <div className={`${className} rounded-lg shadow-lg bg-white`}>
            {children}
        </div>
    );
}

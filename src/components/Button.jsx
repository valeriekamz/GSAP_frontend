const Button = ({title, id, rightIcon, leftIcon, containerClass}) => {
    return (
        <button
            id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 bg-white text-black hover:text-violet-300 ${containerClass}`}
        >
            {leftIcon}
            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div>{title}</div>
            </span>
            {rightIcon}
        </button>

    )
}
export default Button
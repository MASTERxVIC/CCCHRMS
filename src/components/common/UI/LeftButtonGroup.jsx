import { clsx } from "clsx";

/**
 * Reusable Button Component
 * @param {string} variant - 'primary' | 'secondary' | 'ghost'
 * @param {string} className - additional Tailwind classes
 * @param {function} onClick - click handler
 * @param {string} type - 'button' | 'submit' | 'reset'
 * @param {ReactNode} children - content inside the button
 */
const Button = ({
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  const baseStyles =
    "px-6 py-2 rounded transition cursor-pointer text-md";

  const variants = {
    primary: "",
    secondary:"",
    ghost: "bg-transparent hover:bg-gray-100 text-black",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

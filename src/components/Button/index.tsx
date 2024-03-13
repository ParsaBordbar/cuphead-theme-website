import { ButtonType } from "../../types";

const Button = ({text}: ButtonType) => {
    return(
        <button className="w-3/12 h-10 my-4 bg-transparent text-[var(--white)] text-sm border-[var(--white)] border rounded-lg">{text}</button>
    )
};
export default Button;
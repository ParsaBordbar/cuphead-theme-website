import { ButtonType } from "../../types";

const Button = ({type,text, textTheme}: ButtonType) => {
    if(type === "hero"){
        if (textTheme === "dark"){
            return(
                <button className="w-3/12 h-10 my-4 bg-transparent text-[var(--text)] text-sm border-[var(--text)] border rounded-lg">{text}</button>
            )    
        }
        return(
            <button className="w-3/12 h-10 my-4 bg-transparent text-[var(--white)] text-sm border-[var(--white)] border rounded-lg">{text}</button>
        )
    }
    if(type === "textBox"){
        if (textTheme === "dark"){
            return(
                <button className="w-5/12 h-10 my-4 bg-transparent text-[var(--text)] text-sm border-[var(--text)] border rounded-lg">{text}</button>
            )    
        }
        return(
            <button className="w-5/12 h-10 my-4 bg-transparent text-[var(--white)] text-sm border-[var(--white)] border rounded-lg">{text}</button>
        )
    }
};
export default Button;
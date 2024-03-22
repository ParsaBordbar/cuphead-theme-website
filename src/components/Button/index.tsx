import { motion } from "framer-motion";
import { ButtonType } from "../../types";

const Button = ({type,text, textTheme}: ButtonType) => {
    if(type === "hero"){
        if (textTheme === "dark"){
            return(
                <button className="w-3/12 h-10 my-4 bg-transparent text-[var(--text)] text-sm border-[var(--text)] border rounded-lg">{text}</button>
            )    
        }
        return(
            <motion.button className="w-3/12 h-10 my-4 bg-transparent text-[var(--white)] text-sm border-[var(--white)] border rounded-lg" whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.8 }} 
            transition={{ duration: 0.3 }}>{text}</motion.button>
        )
    }
    if(type === "textBox"){
        if (textTheme === "dark"){
            return(
                <motion.button className=" md:w-3/12 w-4/12 h-10 my-4 bg-transparent text-[var(--text)] text-sm border-[var(--text)] border rounded-lg" 
                whileHover={{ scale: 1.1}} 
                whileTap={{ scale: 1.4 }} 
                transition={{ duration: 0.2 }}>{text}</motion.button>
            )    
        }
        return(
            <motion.button className="md:w-3/12 w-4/12 h-10 my-4 bg-transparent text-[var(--white)] text-sm border-[var(--white)] border rounded-lg" 
            whileHover={{ scale: 1.1}} 
            whileTap={{ scale: 1.4 }} 
            transition={{ duration: 0.3 }}>{text}</motion.button>
        )
    }
};
export default Button;
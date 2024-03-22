import { TextBoxType } from "../../types";
import Button from "../Button";

const TextBox = ({textTheme, picture, tittle, bodyText, buttonText}:TextBoxType) => {

    if(textTheme === 'dark'){
        return(
            <div className="flex justify-center items-center mt-8 flex-col">
            <img src={picture} alt="" />
            <h2 className="text-[var(--text)] lobster-regular text-2xl">{tittle}</h2>
            <p className="text-[var(--text)] text-sm">{bodyText}</p>
            <Button text={buttonText} textTheme="dark" type="textBox"/>
        </div>
        )
    }
    return(
        <div className="flex justify-center items-center mt-8 flex-col">
            <img src={picture} alt="" />
            <h2 className="text-[var(--white)] lobster-regular text-2xl">{tittle}</h2>
            <p className="text-[var(--white)] text-sm">{bodyText}</p>
            <Button text={buttonText} type="textBox"/>
        </div>
    )
};
export default TextBox;
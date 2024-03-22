import { TextBoxType } from "../../types";
import Button from "../Button";

const TextBox = ({textTheme, picture, tittle, bodyText, buttonText}:TextBoxType) => {

    if(textTheme === 'dark'){
        return(
            <div className="flex justify-center items-center mt-20 flex-col gap-2 my-10">
            <img src={picture} alt="" />
            <h2 className="text-[var(--text)] lobster-regular text-4xl mt-7">{tittle}</h2>
            <p className="text-[var(--text)] text-sm px-24 text-center">{bodyText}</p>
            <Button text={buttonText} textTheme="dark" type="textBox"/>
        </div>
        )
    }
    return(
        <div className="flex justify-center items-center mt-20 flex-col gap-2 my-10">
            <img src={picture} alt="" />
            <h2 className="text-[var(--white)] lobster-regular text-4xl mt-7">{tittle}</h2>
            <p className="text-[var(--white)] text-sm">{bodyText}</p>
            <Button text={buttonText} type="textBox"/>
        </div>
    )
};
export default TextBox;
import { TextBoxType } from "../../types";
import Button from "../Button";

const TextBox = ({picture, tittle, bodyText, buttonText}:TextBoxType) => {
    return(
        <div className="flex justify-center items-center mt-8">
            <img src={picture} alt="" />
            <h2>{tittle}</h2>
            <p>{bodyText}</p>
            <Button text={buttonText} />
        </div>
    )
};
export default TextBox;
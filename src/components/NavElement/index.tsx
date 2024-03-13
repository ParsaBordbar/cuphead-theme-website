import { NavElementType } from "../../types";

const NavElement = ({ text }: NavElementType) => {
  return (
      <h1 className="lg:text-xl py-1 bold hover:bg-[var(--primary-blue)] hover:text-white px-3 hover:rounded-lg hover:duration-150 hover:ease-out lg:text-black text-white text-5xl my-2">
        {text}
      </h1>
  );
};
export default NavElement;

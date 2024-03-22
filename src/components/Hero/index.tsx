import Button from "../Button";

const Hero = () => {
    return(
        <div className="flex bg-[var(--red)] justify-center items-center w-full py-10">
            <div className="flex flex-col justify-center gap-4 items-center mt-28">
                <div>
                    <div className="flex flex-row gap-5">
                        <h1 className="text-5xl text-[var(--white)] lobster-regular ps-4">This is  a </h1>
                        <img className="pt-2" src="/src/assets/images/Ms Chalice C 1.svg" alt="" />
                    </div>
                    <h1 className="text-5xl text-[var(--white)] lobster-regular"> Cuphead website!</h1>
                </div>
                <div className="sm:px-24 px-10 flex justify-center items-center">
                    <p className="livvic-regular text-white text-center">small text here small text here
                        small text here small </p>
                </div>
                <Button text="Tap to Map!" type="hero"/>
                <img src="src/assets/images/cuphead-mugman-mschalice-trio.svg" alt="" />
            </div>
        </div>
    )
}
export default Hero;
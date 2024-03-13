const Hero = () => {
    return(
        <div className="flex bg-[var(--red)] justify-center items-center w-full py-10">
            <div className="flex flex-col justify-center gap-10 items-center mt-28">
                <div>
                    <div className="flex flex-row gap-4">
                        <h1 className="text-3xl text-[var(--white)] lobster-regular">This is  a </h1>
                        <img src="/src/assets/images/Ms Chalice C 1.svg" alt="" />
                    </div>
                    <h1 className="text-3xl text-[var(--white)] lobster-regular"> Cuphead a website!</h1>
                </div>
                <img src="src/assets/images/cuphead-mugman-mschalice-trio.svg" alt="" />
                <div className="px-24 flex justify-center items-center">
                    <p className="livvic-regular text-white text-center">small text here small text here
                        small text here small </p>
                </div>
            </div>
        </div>
    )
}
export default Hero;
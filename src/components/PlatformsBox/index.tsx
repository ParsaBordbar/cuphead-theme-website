
const PlatformBox = () => {
    return(
        <section className="bg-[var(--yellow)] p-6 lobster-regular flex justify-center items-center flex-col gap-4">
            <h2 className="text-4xl">Available on</h2>
            <div className="flex flex-row gap-4"> 
                <img src="/src/assets/images/ps4.svg" alt="" /> 
                <img src="/src/assets/images/switch.svg" alt="" />
                <img src="/src/assets/images/gog.svg" alt="" /> 
            </div>
            <div className="flex flex-row gap-4">
                <img src="/src/assets/images/xbox.svg" alt="" />
                <img src="/src/assets/images/steam.svg" alt="" />
            </div>
        </section>
    )
};
export default PlatformBox;
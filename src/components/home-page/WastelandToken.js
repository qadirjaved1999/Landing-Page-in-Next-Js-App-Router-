export default function WastelandToken() {
    return (
        <section className="relative w-full min-h-[90vh] flex justify-center items-center py-10 px-4 bg-[url('/assets/images/17_upscayl_4x.png')] bg-cover bg-center bg-no-repeat">
            <div className="absolute top-[10rem] transform -translate-y-1/2 text-white max-w-[40rem] text-center">
                <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight">
                   wasteland Token
                </h1>
                <p className="text-xs mt-4 text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing  dolore magna amet elit dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className="absolute bottom-[6rem] flex justify-center items-center w-[25rem] shrink-0">
                <img src="/assets/images/Group_11.png" className="w-full h-auto object-contain" />
            </div>
            <div className="absolute bottom-[2rem] w-full flex justify-center gap-4 mt-10">
                <button className="px-6 py-2 border border-white rounded-full uppercase text-sm tracking-wide bg-white text-black transition">
                    Get LOC Token
                </button>
                <button className="px-6 py-2 text-white border border-white rounded-full uppercase text-sm tracking-wide hover:bg-white hover:text-black transition">
                    Get LOC Token
                </button>
            </div>
        </section>
    );
}
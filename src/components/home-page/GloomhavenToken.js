export default function GloomhavenToken() {
    return (
        <section className="relative w-full min-h-[153vh] flex justify-center items-center py-10 px-4 bg-[url('/assets/images/Group_10.png')] bg-cover bg-center bg-no-repeat">

            {/* Gradient Overlay (Opacity at the Top) */}
            <div className="absolute top-0 left-0 w-full h-52 bg-gradient-to-b from-black/60 via-black/70 to-transparent"></div>

            {/* Top Content */}
            <div className="absolute top-[-18px] transform -translate-y-1/2 text-white max-w-xl text-center">
                <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight">
                    net land of cult
                </h1>
                <p className="text-xs mt-4 text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing  dolore magna amet elit dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>

            <div className="absolute top-[3rem] w-full max-w-[95rem]">
                <div className="flex justify-center items-center gap-[3rem] whitespace-nowrap overflow-x-auto xs:overflow-x-auto sm:overflow-x-auto md:overflow-x-auto lg:overflow-x-auto xl:overflow-visible px-4 py-6">

                    {/* Card 1 */}
                    <div className="relative w-48 shrink-0 bg-gray-900 text-white rounded-xl shadow-lg">
                        <img src="/assets/images/Group_4.png" className="rounded-lg" />
                        <h2 className="absolute left-6 bottom-12 text-xl  font-bold uppercase">Lorem 1 Cult</h2>
                        <p className="w-full flex items-center justify-center gap-2 absolute bottom-8 text-[9px]">
                            <span>Lorem ipsum</span>
                            <span>Lorem ipsum</span>
                            <span>Lorem ipsum</span>
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="relative w-48 shrink-0 bg-gray-900 text-white rounded-xl shadow-lg">
                        <img src="/assets/images/Group_5.png" className="rounded-lg" />
                        <h2 className="absolute left-6 bottom-12 text-xl  font-bold uppercase">Lorem 1 Cult</h2>
                        <p className="w-full flex items-center justify-center gap-2 absolute bottom-8 text-[9px]">
                            <span>Lorem ipsum</span>
                            <span>Lorem ipsum</span>
                            <span>Lorem ipsum</span>
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="relative w-48 shrink-0 bg-gray-900 text-white rounded-xl shadow-lg">
                        <img src="/assets/images/Group_6.png" className="rounded-lg" />
                        <h2 className="absolute left-6 bottom-12 text-xl  font-bold uppercase">Lorem 1 Cult</h2>
                        <p className="w-full flex items-center justify-center gap-2 absolute bottom-8 text-[9px]">
                            <span>Lorem ipsum</span>
                            <span>Lorem ipsum</span>
                            <span>Lorem ipsum</span>
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="relative w-48 shrink-0 bg-gray-900 text-white rounded-xl shadow-lg">
                        <img src="/assets/images/Group_7.png" className="rounded-lg" />
                        <h2 className="absolute left-6 bottom-12 text-xl  font-bold uppercase">Lorem 1 Cult</h2>
                        <p className="w-full flex items-center justify-center gap-2 absolute bottom-8 text-[9px]">
                            <span>Lorem ipsum</span>
                            <span>Lorem ipsum</span>
                            <span>Lorem ipsum</span>
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="relative w-48 shrink-0 bg-gray-900 text-white rounded-xl shadow-lg">
                        <img src="/assets/images/Group_8.png" className="rounded-lg" />
                        <h2 className="absolute left-6 bottom-12 text-xl  font-bold uppercase">Lorem 1 Cult</h2>
                        <p className="w-full flex items-center justify-center gap-2 absolute bottom-8 text-[9px]">
                            <span>Lorem ipsum</span>
                            <span>Lorem ipsum</span>
                            <span>Lorem ipsum</span>
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="relative w-48 shrink-0 bg-gray-900 text-white rounded-xl shadow-lg">
                        <img src="/assets/images/Group_9.png" className="rounded-lg" />
                        <h2 className="absolute left-6 bottom-12 text-xl  font-bold uppercase">Lorem 1 Cult</h2>
                        <p className="w-full flex items-center justify-center gap-2 absolute bottom-8 text-[9px]">
                            <span>Lorem ipsum</span>
                            <span>Lorem ipsum</span>
                            <span>Lorem ipsum</span>
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-center gap-4 mt-4">
                    <button className="px-6 py-2 text-white border border-white rounded-full uppercase text-sm tracking-wide hover:bg-white hover:text-black transition">
                        Get LOC Token
                    </button>
                </div>
            </div>

            {/* Center Content */}
            <div className="absolute bottom-[22rem] transform -translate-y-1/2 text-white max-w-[45rem] text-center">
                <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight">
                   Gloomhaven Token
                </h1>
                <p className="text-xs md:text-base lg:text-sm mt-6 text-gray-300 px-24">
                    Lorem ipsum dolor sit amet, consectetur adipiscing  dolore magna amet elit dolor consectetur adipiscing sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="absolute bottom-[9rem] flex justify-center items-center w-[16rem] shrink-0">
                <img src="/assets/images/Vrstva_89.png" className="w-full h-auto object-contain" />
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
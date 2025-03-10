export default function NFTLands() {
    return (
        <section className="relative w-full min-h-[215vh] flex justify-center items-center py-10 px-4 bg-[url('/assets/images/47_upscayl_4x.png')] bg-cover bg-center bg-fixed bg-no-repeat">
            {/* Dark Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-black via-black/90 to-transparent"></div>

            {/* Dark Gradient Overlay (Bottom to Top) */}
            <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>


            {/* Main Content Wrapper */}
            <div className="relative w-full">
                <div className="relative w-full max-w-[118rem]">
                    <div className="relative bottom-[40px] md:left-[0px]  lg:left-[1px] xl:left-[30px] 2xl:left-[0px] 3xl:left-[60px] w-full h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-2xl bg-[url('/assets/images/Group_2.png')] bg-cover bg-[top] object-cover bg-no-repeat">

                        {/* Content */}
                        <div className="absolute top-1/2 right-10 md:right-14 lg:right-40 transform -translate-y-1/2 text-white max-w-md">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight">
                                Buy Land <br /> in wasteland
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg mt-4 text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>

                            {/* CTA Button */}
                            <button className="mt-6 bg-white text-black px-6 py-3 text-sm md:text-base rounded-full shadow-lg hover:bg-gray-200 transition">
                                BUY LAND
                            </button>
                        </div>

                    </div>

                </div>

                {/* New Image Container */}
                <div className="absolute w-[40rem] h-[40rem] right-24 bottom-[-6rem] md:right-10 md:bottom-[-6rem] lg:right-24 lg:bottom-[-6rem] bg-[url('/assets/images/Group_3.png')] bg-cover bg-center bg-no-repeat"></div>

                {/* Cards Section */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-20 mt-[18rem] max-w-7xl mx-auto">
                    {/* Card 1 */}
                    <div className="relative bg-transparent border border-white rounded-lg p-6 text-center w-full">
                        <div className="flex justify-center">
                            <img src="/assets/icons/performance_3.png" alt="Icon 1" className="w-12 h-12" />
                        </div>
                        <h3 className="text-white text-xl font-bold mt-4">LOREM</h3>
                        <p className="text-white mt-2 text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <button className="mt-4 px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                            LEARN MORE
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="relative bg-transparent border border-white rounded-lg p-6 text-center w-full">
                        <div className="flex justify-center">
                            <img src="/assets/icons/maintenance_2.png" alt="Icon 2" className="w-12 h-12" />
                        </div>
                        <h3 className="text-white text-xl font-bold mt-4">LOREM</h3>
                        <p className="text-white mt-2 text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <button className="mt-4 px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                            LEARN MORE
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-transparent border border-white rounded-lg p-6 text-center w-full ">
                        <div className="flex justify-center">
                            <img src="/assets/icons/online-voting_5.png" alt="Icon 3" className="w-12 h-12" />
                        </div>
                        <h3 className="text-white text-xl font-bold mt-4">LOREM</h3>
                        <p className="text-white mt-2 text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <button className="mt-4 px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
                            LEARN MORE
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
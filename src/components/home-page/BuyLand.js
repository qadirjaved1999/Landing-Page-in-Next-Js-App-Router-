export default function BuyLand() {
    return (
        <div className=" bg-black w-full min-h-[100vh] flex justify-center items-center py-10 px-4">
            <div className="relative w-full max-w-[118rem]">

                {/* Background Section */}
                <div className="relative top-[100px] w-full h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-2xl bg-[url('/assets/images/Group_1.png')] bg-cover bg-[bottom] object-cover bg-no-repeat">

                    {/* Overlay for Text Visibility */}
                    {/* <div className="absolute inset-0 bg-black/40 rounded-2xl"></div> */}

                    {/* Content */}
                    <div className="absolute top-1/2 left-10 md:left-14 lg:left-40 transform -translate-y-1/2 text-white max-w-md">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight">
                            Buy Land <br /> in Gloomhaven
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
        </div>
    );
}

export default function VirtualWorld() {
    return (
        <section className="relative w-full aspect-[16/9] min-h-[170vh] flex justify-center items-center py-10 px-4 bg-[url('/assets/images/Group_12.png')] bg-cover bg-bottom bg-no-repeat">

            {/* 🔹 Full-Screen Gradient Overlay for Left, Right, and Bottom */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(0,0,50,0.9),_transparent_30%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,0,50,0.9),_transparent_30%)]"></div>
            </div>

            <div className="absolute top-[25rem] transform -translate-y-1/2 text-white max-w-[40rem] text-center">
                <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight">
                    wasteland Token
                </h1>
            </div>

            <div className="absolute bottom-[16rem] flex justify-center items-center w-[63rem] shrink-0">
                <img src="/assets/images/Group_13.png" className="w-full h-auto object-contain" />
            </div>

            <div className="absolute left-[24rem] bottom-[38rem] w-[14rem]">
                <p className=" text-gray-400 text-xs text-start"> sed do eiusmod tempor incididunt ut labore. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt.</p>
            </div>

            <div className="absolute left-[22rem] bottom-[26rem] w-[14rem]">
                <p className=" text-gray-400 text-xs text-start"> VR set available connect</p>
            </div>

            <div className="absolute left-[64.5rem] bottom-[28.7rem] w-[6.5rem]">
                <p className=" text-gray-400 text-xs text-start"> PC VC Mode Live Inside Land of Cult</p>
            </div>

            <div className="absolute bottom-44 right-48 w-full flex justify-center items-center gap-4 mt-10">
                <p className="inline w-[12rem] text-gray-400 text-xs text-start"> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua sed do eiusmod tempor incididunt.</p>
                <div className="w-[20rem] shrink-0">
                    <img src="/assets/images/Group_14.png" className="w-full h-auto object-contain" />
                </div>
            </div>

            <div className="absolute bottom-[2rem] w-full flex justify-center gap-4 mt-10">
                <button className="px-6 py-2 border border-white rounded-full uppercase text-sm tracking-wide bg-white text-black transition">
                    lorem ipsum
                </button>
                <button className="px-6 py-2 text-white border border-white rounded-full uppercase text-sm tracking-wide hover:bg-white hover:text-black transition">
                    lorem ipsum
                </button>
            </div>
        </section>
    );
}
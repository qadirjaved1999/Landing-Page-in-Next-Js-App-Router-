"use client";
import Image from "next/image";
import "flickity/css/flickity.css"; 
import label from "@/libs/english.json";
import Flickity from "react-flickity-component";
import "@/components/home-page/GloomhavenToken"

export default function GloomhavenToken() {
    
    const flickityOptions = {
        groupCells: true,
        contain: true,
        pageDots: false,
        prevNextButtons: true,
        wrapAround: true, // Infinite scroll effect
      };

    const cardsData = [
        { img: "/assets/images/Group_4.png", title: "Lorem 1 Cult" },
        { img: "/assets/images/Group_5.png", title: "Lorem 2 Cult" },
        { img: "/assets/images/Group_6.png", title: "Lorem 3 Cult" },
        { img: "/assets/images/Group_7.png", title: "Lorem 4 Cult" },
        { img: "/assets/images/Group_8.png", title: "Lorem 5 Cult" },
        { img: "/assets/images/Group_9.png", title: "Lorem 6 Cult" },
        { img: "/assets/images/Group_4.png", title: "Lorem 1 Cult" },
        { img: "/assets/images/Group_5.png", title: "Lorem 2 Cult" },
        { img: "/assets/images/Group_6.png", title: "Lorem 3 Cult" },
        { img: "/assets/images/Group_7.png", title: "Lorem 4 Cult" },
        { img: "/assets/images/Group_8.png", title: "Lorem 5 Cult" },
        { img: "/assets/images/Group_9.png", title: "Lorem 6 Cult" },
      ];

    return (
        <section className="relative w-full min-h-[153vh] flex justify-center items-center py-10 px-4 bg-[url('/assets/images/Group_10.png')] bg-cover bg-center bg-no-repeat">

            {/* Top Shadow */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/90 via-black/30 to-transparent"></div>


            {/* Top Content */}
            <div className="w-full flex flex-col justify-center items-center gap-4 absolute top-[-18px] transform -translate-y-1/2 text-gray-300 text-center">
                <h1 className="w-full text-3xl md:text-5xl lg:text-6xl font-extrabold font-punk uppercase leading-tight">
                    {label.nftLand}
                </h1>
                <p className="max-w-xl text-center text-xs font-grid text-gray-300">
                    {label.nftLandDescription}
                </p>
            </div>

            <div className="absolute top-[3rem] w-full max-w-[95rem]">
                <Flickity className="carousel" options={flickityOptions}>
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className="carousel-cell relative w-48 shrink-0 bg-gray-900 text-white rounded-xl shadow-lg mx-2"
                        >
                            <Image src={card.img} alt={card.title} width={192} height={256} className="rounded-lg" />
                            <h2 className="absolute left-6 bottom-12 text-xl font-bold uppercase">{card.title}</h2>
                            <p className="w-full flex items-center justify-center gap-2 absolute bottom-8 text-[9px]">
                                <span>Lorem ipsum</span>
                                <span>Lorem ipsum</span>
                                <span>Lorem ipsum</span>
                            </p>
                        </div>
                    ))}
                </Flickity>
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
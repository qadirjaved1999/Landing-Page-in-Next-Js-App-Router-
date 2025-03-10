import BuyLand from "./BuyLand";
import GloomhavenToken from "./GloomhavenToken";
import Hero from "./Hero";
import NFTLands from "./NFTLands";
import VirtualWorld from "./VirtualWorld";
import WastelandToken from "./WastelandToken";

export default function MainPage() {
  return (
    <div className="main-wrapper w-full min-w-full">
        <div className="hero-section"><Hero /></div>
        <div className="buy-land-section"><BuyLand /></div>
        <div className="buy-land-section"><NFTLands /></div>
        <div className="buy-land-section"><GloomhavenToken /></div>
        <div className="buy-land-section"><WastelandToken /></div>
        <div className="buy-land-section"><VirtualWorld /></div>
    </div>
    

  );
}
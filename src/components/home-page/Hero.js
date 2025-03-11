export default function Hero() {
    return (
      <div className="hero-background relative w-full h-[110vh] bg-[url('/assets/images/prostatix_post_1.jpg')] bg-cover bg-[top] object-cover bg-no-repeat">
        
        {/* Dark Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
  
        {/* Hero Content Wrapper */}
        <div className="wrapper w-full flex items-center justify-center h-full px-6">
          <div className="content-wrapper max-w-3xl text-center">
            {/* Headings - Responsive Font Sizes */}
            <h1 className="text-white text-xs md:text-sm lg:text-base font-bold uppercase">Land of Cult</h1> {/*fontFamily:font-punk*/}
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl leading-tight font-bold font-punk  uppercase">
            WHERE DARKNESS MEETS DESTINY
            </h1>
          </div>
        </div>
  
        {/* Buttons Section - Responsive */}
        <div className="w-full flex flex-wrap justify-center items-center gap-4 bg-black p-6 md:p-8 pb-12 md:pb-20">
          
          {/* Description - Responsive Text */}
          <p className="text-white text-sm md:text-base lg:text-lg text-center">
            Have your Say. Join the Discussion.
          </p>
  
          {/* Social Media Buttons */}
          {["TWITTER", "TWITTER", "FACEBOOK"].map((label, index) => (
            <button
              key={index}
              className="flex items-center gap-2 border border-white text-white text-xs md:text-sm lg:text-base px-3 md:px-5 lg:px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
            >
              <svg className="w-4 md:w-5 h-4 md:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.25 4.25 0 0 0 1.85-2.34c-.82.48-1.73.83-2.69 1.02a4.26 4.26 0 0 0-7.36 3.88c-3.54-.18-6.68-1.88-8.78-4.46a4.27 4.27 0 0 0-.58 2.14 4.26 4.26 0 0 0 1.9 3.54 4.26 4.26 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.18 4.26 4.26 0 0 1-1.92.07 4.27 4.27 0 0 0 3.98 2.96A8.53 8.53 0 0 1 2 18.57 12.07 12.07 0 0 0 8.29 20c7.4 0 11.45-6.14 11.45-11.45l-.01-.52A8.28 8.28 0 0 0 22.46 6z" />
              </svg>
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }
  
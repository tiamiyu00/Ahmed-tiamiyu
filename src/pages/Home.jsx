import React, { useEffect, useRef } from 'react';
import gitlink from '/public/img/Logo/github.png';
import linkdinLink from '/img/Logo/linkedin.png';
import xLink from '/img/Logo/Xlink.png';
import emailLink from '/img/Logo/at.png';
import image from '/img/images/img.png';
import black from '/img/images/separatorBlack.png';
import white from '/img/images/separatorWhite.png';
import firstPort from '/img/images/yellow.png';
import secondPort from '/img/images/ramen.png';

function Home() {
    const portfolioRefs = useRef([]);

    useEffect(() => {
        const isMobileView = window.matchMedia("(max-width: 640px)").matches;

        if (isMobileView) {
            const observerOptions = {
                root: null,
                threshold: 0.5,
            };

            const handleIntersection = (entries) => {
                entries.forEach((entry) => {
                    const overlay = entry.target.querySelector('.overlay');
                    if (entry.isIntersecting) {
                        overlay.classList.add('opacity-100');
                    } else {
                        overlay.classList.remove('opacity-100');
                    }
                });
            };

            const observer = new IntersectionObserver(handleIntersection, observerOptions);
            portfolioRefs.current.forEach((ref) => observer.observe(ref));

            return () => {
                portfolioRefs.current.forEach((ref) => observer.unobserve(ref));
            };
        }
    }, []);

    return (
        <div className='bg-slate-200 font-mono md:bg-transparent md:mt-12 md:ml-'>
            {/* Header Section */}
            <div className="md:flex md:px-10 pt-5">
                <div className="flex justify-center md:flex md:justify-center  md:mr-26 md:mt-10">
                    <div>
                        <div className="py-4 px-6 md:px-6">
                            <h1 className='font-bold text-lg tracking-wide'>Hi, I am</h1>
                        </div>
                        <div className="py-2 mr-10">
                            <h1 className='font-extrabold text-xl tracking-wider '>Tiamiyu Olamide Ahmed</h1>
                            <p className='flex justify-center text-sm font-bold text-slate-400 sm:px-6 sm:pt-10 pt-2 tracking-tight'>Software-Dev / Frontend-Dev</p>
                        </div>
                        <div className="flex py-2 md:px-5 md:py-4 space-x-4">
                            <a href=""> <img className='icon w-11' src={gitlink} alt="GitHub" /></a>
                            <a href=""> <img className='icon w-11' src={linkdinLink} alt="LinkedIn" /></a>
                            <a href=""> <img className='icon w-11' src={xLink} alt="X" /></a>
                            <a href=""> <img className='icon w-11' src={emailLink} alt="Email" /></a>
                        </div>
                    </div>
                </div>
                <div className="bg-black md:mr-11 md:bg-transparent flex justify-center mt-4 md:flex md:justify-end md:mt-0 md:mb-2 md:w-4/6">
                    <img className='w-60 md:pt-5' src={image} alt="Profile" />
                </div>
            </div>
                <div className="px-12 md:mx-8  md:mt-20 mt-8">
                    <div className="pt-14 md:pt-14 flex justify-center mb-8">
                        <h1 className="p-2 border-4 border-black font-bold tracking-widest">WEB3 Enthusiast</h1>
                    </div>
                    <p className= 'leading-relaxed '>As a seasoned web developer, I've expanded my expertise into the 
                        exciting realm of Web3. With a passion for decentralized innovation,
                        I explore the intersection of code and cryptocurrency. By day, 
                        I craft seamless user experiences; by night,the internet drives me to create 
                         impactful Web3 solutions.</p>
                </div>
            {/* Portfolio Section */}
            <div className="py-10 px-4">
  <div className="grid gap-8 md:mx-10">
    {[
      { 
        img: firstPort, 
        title: "Portfolio Item 1", 
        text: "This is the text description for the first portfolio item. It highlights unique aspects of the project." 
      },
      { 
        img: secondPort, 
        title: "Portfolio Item 2", 
        text: "This is the text description for the second portfolio item. It showcases another exciting project."
      }
    ].map((item, index) => (
      <div
        key={index}
        className="md:flex md:items-center gap-6"
      >
        {/* Image Container */}
        <div className="relative group md:w-1/2 rounded-md overflow-hidden border-8 border-black flex-shrink-0">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition duration-300 group-hover:opacity-80"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-white text-lg font-semibold">{item.title}</h3>
            <p className="text-white text-sm">Description of {item.title}</p>
          </div>
        </div>

        {/* Text Container */}
        <div className="bg-customGray text-black p-6 rounded-md md:w-1/2 flex flex-col justify-center md:h-full">
          <p className="text-xl">
            {item.text}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

<div id="about" className="py-6 px-14 mt-12 sm:mx-20">
  <div className="flex justify-center">
    <h1 className='p-2 sm:mt-20 border-4 border-black font-bold tracking-widest'>ABOUT ME</h1>
  </div>
  <p className='py-5'>
    My name is Tiamiyu Olamide Ahmed. I'm a final-year Accounting student.
    I've been into web and software development for a decade now, and this
    time has been enough to confirm my place in the industry.
  </p>
  <div className="my-2 flex justify-center">
    <img src={black} alt="Separator" />
  </div>
</div>

<div id="projects" className="py-10 px-4">
  <div className="grid gap-8 md:mx-10">
    {/* Your portfolio items here */}
  </div>
</div>
<div className="py-6 px-8 sm:px-20 mt-12">
  <div className="text-center">
    <h1 className="p-4 sm:mt-10 border-4 border-black font-bold text-lg tracking-widest uppercase">
      Contact Me
    </h1>
    <p className="py-5 text-gray-700 leading-relaxed">
      I’m always happy to connect with like-minded professionals, collaborate on exciting projects, or answer questions about Web3 and front-end development. Reach out through any of the channels below, and I’ll respond promptly!
    </p>
  </div>
  </div>
                        <div className="flex py-2 md:px-5 md:py-4 space-x-4">
                            <a href=""> <img className='icon w-11' src={gitlink} alt="GitHub" /></a>
                            <a href=""> <img className='icon w-11' src={linkdinLink} alt="LinkedIn" /></a>
                            <a href=""> <img className='icon w-11' src={xLink} alt="X" /></a>
                            <a href=""> <img className='icon w-11' src={emailLink} alt="Email" /></a>
                        </div>
                    </div>

        
    );
}

export default Home;

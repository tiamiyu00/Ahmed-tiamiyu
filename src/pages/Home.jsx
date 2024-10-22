import React from 'react';
import gitlink from '/img/Logo/github.png';
import linkdinLink from '/img/Logo/linkedin.png';
import xLink from '/img/Logo/x.png';
import emailLink from '/img/Logo/at.png';
import image from '/img/images/img.png'
import black from '/img/images/SeparatorBlack.png'
import white from '/img/images/SeparatorWhite.png'
function Home() {
    return (
        <div className='bg-slate-200 font-mono sm:bg-transparent sm:mt-16'>
            <div className="sm:flex  py-5">
                <div className=" pl-10 sm:pr-20 sm:ml-20">
                    <div className="py-4 px-6 sm:px-6 ">
                        <h1 className='font-bold text-lg tracking-wide'>Hi, I am</h1>
                    </div>
                    <div className="sm: px-2 sm:py-5  sm:min-w-80">
                        <h1 className=' font-extrabold text-xl tracking-wider '>Tiamiyu Olamide Ahmed</h1>
                        <p className='text-sm font-bold text-slate-400 sm:px-6 sm:pt-6 tracking-tight'>Software-Dev / Frontend-Dev</p>
                    </div>
                    <div className="flex   py-5 sm:px-5 sm:py-4 space-x-4">
                        
                        <a href=""> <img className='icon w-11' src={gitlink} alt="GitHub" /></a>
                        <a href=""> <img className='icon w-11' src={linkdinLink}  alt="LinkedIn" /></a>
                        <a href=""> <img className='icon w-11' src={xLink}  alt="X" /></a>
                        <a href=""> <img className='icon w-11' src={emailLink}  alt="Email" /></a>
                    </div>
                </div>

                <div className="bg-black sm:bg-transparent flex justify-center my-4 pt-5  sm:flex sm:justify-end sm:ml-0 sm:w-1/2 sm:mr-16 sm:-mt-16"> 
                
                    <img className=' w-60' src={image}  alt="Profile" />
                </div> 
              

            </div>

            <div className="py-6 px-14 mt-12">
                <div className="flex justify-center">
                    <h1 className='p-2 border-4 border-black font-bold tracking-widest'>ABOUT ME</h1>
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

            <div className="bgimage py-6 px-14 text-white">
                <div className="flex justify-center">
                    <h1 className='font-bold tracking-wide'>Software Developer</h1>
                </div>
                <p className='py-5'>
                    I am a member of a science club that brings together enthusiasts of the Internet and new technologies. 
                    At ITberries, we design and develop websites and web applications following agile methodology. 
                    Apart from the projects, our biggest undertaking is the Ciemna Strona UX conference, which we are organizing 
                    for the sixth time. Working in the club as a Front-End Developer has definitely given me valuable experience.
                </p>
                <div className="my-2 flex justify-center">
                    <img src={white} alt="Separator" />
                </div>
            </div>
        </div>
    );
}

export default Home;

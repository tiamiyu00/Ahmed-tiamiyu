import React from 'react';
import Trading from '/img/images/candlestick.png';
import Tutor from '/img/images/tutor.png';
import coin from '/img/images/coin.png';
import man from '/img/images/manworking.jpg';

const About = () => {
  return (
    <section className="bg-white pb-16">
      <div className="bg-slate-200 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#1D9BF0] mb-8">
            About YassForex <span className="text-black">Academy</span>
          </h1>
          <h3 className="text-2xl font-semibold">What we do</h3>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 text-center">
      <p className="text-xl   leading-relaxed max-w-full sm:max-w-lg md:max-w-md lg:max-w-3xl mx-auto">
      
</p>

        <p className="text-xl text-gray-700 leading-relaxed mb-12">
        YassForex Academy is a premier financial education and services company dedicated to empowering individuals 
      and businesses in the dynamic world of trading and cryptocurrency.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-10">
          <div className="p-6 border-2 border-[#1D9BF0] rounded-2xl  shadow-lg text-center">
            <img src={Tutor} alt="Tutor icon" className="mx-auto w-24 mb-4" />
            <h3 className="text-2xl font-semibold text-[#1D9BF0] mb-4">Reliable Trading Signals</h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xs mx-auto">
            We deliver expert trading
            signals, advanced trading backed by data.
  </p>
        
          </div>

          <div className="p-6 border-4 bg-[#1D9BF0] border-white rounded-2xl shadow-lg text-center">
            <img src={Trading} alt="Trading icon" className="mx-auto w-24 mb-2" />
            <h3 className="text-2xl font-semibold text-white mb-4">Empowering You in the World of Crypto</h3>
            <p className="text-xl text-white leading-relaxed max-w-xs mx-auto">
            Our courses teach crypto basics,
            empowering mastery in digital finance.
   
  </p>
          </div>

          <div className="p-6 border-2 border-[#1D9BF0] rounded-2xl  shadow-lg text-center">
          <img src={coin} alt="coin" className="mx-auto w-24 mb-2" />
            <h3 className="text-2xl font-semibold text-[#1D9BF0] mb-4">Buying and selling of cryptocurrency</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
            We ensure fast coin transactions for confident cryptocurrency navigation.
            </p>
          </div>

        
        </div>
<div className="">
        <p className="text-xl text-gray-700 leading-relaxed">
          Join YassForex Academy today and invest in a trading education that provides real value. Whether you're 
          interested in receiving profitable signals, expanding your knowledge of cryptocurrency, or seeking a reliable 
          partner for your trading journey, we are here to help you succeed.
        </p>
        <div className=""></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-96 md:justify-between bg-gray-100 p-4 rounded-lg">
 
  <img
    src={man}
    alt="YassFX Trading"
    className=" md:w-1/2  object-cover object-top h-f rounded-lg shadow-md"
  />
  <div className="bg-[#1D9BF0] text-white p-4 mt-4 md:mt-0 md:ml-4 rounded-lg md:w-1/2 flex items-center">
    <p className='text-xl text-white leading-relaxed max-w-md mx-auto' >
      YassFX Academy empowers individuals with insightful trading signals and
      comprehensive forex education, helping traders confidently navigate
      financial markets and make profitable decisions with expert guidance and
      innovative strategies.
    </p>

  </div>
</div>

      {/* <div className="p-6 border-2 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-[#1D9BF0] mb-4">Personalized Trading Assistance</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our experienced traders offer one-on-one assistance to help you make informed trading choices, adapting 
              strategies to suit your personal goals and market conditions.
            </p>
          </div> */}
    </section>
  );
};

export default About;

import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-[#1D9BF0] mb-8">About YassForex Academy</h1>
        <p className="text-lg text-gray-700 mb-12">
          At YassForex Academy, we are passionate about empowering traders with the tools, knowledge, and support 
          they need to thrive in the fast-paced world of financial markets. Our team of experts works tirelessly 
          to deliver accurate signals, effective trading strategies, and quality education for anyone looking to 
          elevate their trading journey.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <div className="p-6 border-2 border-[#1D9BF0] rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1D9BF0] mb-4">Reliable Trading Signals</h3>
            <p className="text-gray-600">
              We provide carefully analyzed trading signals to guide your trades, ensuring each decision is backed by 
              data and industry insights to optimize your profitability.
            </p>
          </div>

          <div className="p-6 border-2 border-[#1D9BF0] rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1D9BF0] mb-4">Comprehensive Cryptocurrency Education</h3>
            <p className="text-gray-600">
              Our courses cover everything from the basics of cryptocurrency to advanced trading techniques, designed 
              for traders at all levels to master the digital currency space.
            </p>
          </div>

          <div className="p-6 border-2 border-[#1D9BF0] rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1D9BF0] mb-4">Secure Coin Transactions</h3>
            <p className="text-gray-600">
              We assist in buying and selling coins with utmost security, so you can confidently navigate the 
              cryptocurrency market, whether as a buyer or a seller.
            </p>
          </div>

          <div className="p-6 border-2 border-[#1D9BF0] rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1D9BF0] mb-4">Personalized Trading Assistance</h3>
            <p className="text-gray-600">
              Our experienced traders offer one-on-one assistance to help you make informed trading choices, adapting 
              strategies to suit your personal goals and market conditions.
            </p>
          </div>
        </div>

        <p className="text-lg text-gray-700">
          Join YassForex Academy today and invest in a trading education that provides real value. Whether you're 
          interested in receiving profitable signals, expanding your knowledge of cryptocurrency, or seeking a reliable 
          partner for your trading journey, we are here to help you succeed.
        </p>
      </div>
    </section>
  );
};

export default About;

import Image from 'next/image';

import { FiShield, FiMap, FiHeadphones } from 'react-icons/fi';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const UsersFeedBack = () => {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      
      {/* --- Section 1: Why Choose Wanderlust --- */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-2">
          Why Choose Wanderlust
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-12">
          Your trusted partner for exceptional travel experiences
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Safe & Secure */}
          <div className="border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow bg-white text-left">
            <div className="text-cyan-500 mb-4 text-3xl">
              <FiShield strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium text-slate-800 mb-2">Safe & Secure</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your safety is our priority with comprehensive travel insurance and 24/7 support.
            </p>
          </div>

          {/* Card 2: Expert Guides */}
          <div className="border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow bg-white text-left">
            <div className="text-cyan-500 mb-4 text-3xl">
              <FiMap strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium text-slate-800 mb-2">Expert Guides</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Local experts who bring destinations to life with authentic cultural insights.
            </p>
          </div>

          {/* Card 3: 24/7 Support */}
          <div className="border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow bg-white text-left">
            <div className="text-cyan-500 mb-4 text-3xl">
              <FiHeadphones strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium text-slate-800 mb-2">24/7 Support</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Round-the-clock customer service to assist you wherever your journey takes you.
            </p>
          </div>

        </div>
      </section>

      {/* --- Section 2: What Travelers Say --- */}
      <section className="py-16 px-4 max-w-6xl mx-auto border-t border-gray-50">
        
        {/* Header with Navigation Arrows */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-2">
              What Travelers Say
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Real experiences from our happy travelers
            </p>
          </div>
          
          {/* Slider Arrows */}
          <div className="flex gap-2">
            <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-400 text-xl">
              <HiOutlineChevronLeft />
            </button>
            <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors text-gray-400 text-xl">
              <HiOutlineChevronRight />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Testimonial 1 */}
          <div className="flex flex-col-reverse sm:flex-row bg-white border border-gray-100 shadow-sm rounded-sm overflow-hidden h-full">
            <div className="p-6 flex flex-col justify-between flex-1">
              <p className="text-slate-700 text-sm font-medium leading-relaxed mb-6">
                "The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."
              </p>
              <div>
                <h4 className="text-cyan-600 font-semibold text-sm">Michael Chen</h4>
                <p className="text-gray-400 text-xs">Singapore</p>
              </div>
            </div>
            {/* Man Image Placeholder */}
            <div className="w-full sm:w-48 h-48 bg-slate-100 flex items-center justify-center text-center p-4 border-b sm:border-b-0 sm:border-l">
              <span className="text-xs font-mono break-all">
                <Image src='https://i.pinimg.com/736x/d2/56/47/d256473aa68d8976500eadd1d2e87f0f.jpg' alt='user2' width={160} height={160} />
              </span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col-reverse sm:flex-row bg-white border border-gray-100 shadow-sm rounded-sm overflow-hidden h-full">
            <div className="p-6 flex flex-col justify-between flex-1">
              <p className="text-slate-700 text-sm font-medium leading-relaxed mb-6">
                "Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"
              </p>
              <div>
                <h4 className="text-cyan-600 font-semibold text-sm">Sarah Johnson</h4>
                <p className="text-gray-400 text-xs">New York, USA</p>
              </div>
            </div>
            {/* Woman Image Placeholder */}
            <div className="w-full sm:w-48 h-48 bg-slate-100 flex items-center justify-center text-center p-4 border-b sm:border-b-0 sm:border-l">
              <span className="text-xs font-mono break-all">
                <Image src='https://thumbs.dreamstime.com/b/young-beautiful-woman-walks-gracefully-park-soaking-spring-air-surrounded-blooming-flowers-gentle-sunshine-422383057.jpg' alt='user2' width={160} height={160} />
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default UsersFeedBack;

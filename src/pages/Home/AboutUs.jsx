import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="max-w-screen-lg mx-auto my-8 pt-12">
        <div className="text-center">
          <h1 className='text-5xl font-extrabold mb-5 text-blue-900'>What Will you Get?</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5" data-aos="zoom-in">
          <div className="rounded-lg shadow-md p-4 text-center bg-slate-50">
            <img src="https://static.vecteezy.com/system/resources/previews/011/054/455/large_2x/network-protection-icons-lock-security-icon-vector.jpg" alt="Logo" className="w-20 h-20 mx-auto" />
            <h2 className="text-lg text-blue-700 font-bold mb-2">SAFE DELIVERY</h2>
            <p className="text-gray-500">Pay with the world’s most popular, secure payment.</p>
          </div>
          <div className="bg-slate-50 rounded-lg shadow-md p-4 text-center">
            <img src="https://cdn-icons-png.flaticon.com/512/8589/8589772.png?ga=GA1.1.1168090119.1679595557" alt="Logo" className="w-20 h-20 mx-auto" />
            <h2 className="text-lg text-blue-700 font-bold mb-2">FAST SHIPPING</h2>
            <p className="text-gray-500">
              With sites in 5 languages, ship to over 200 countries.</p>
          </div>
          <div className="bg-slate-50 rounded-lg shadow-md p-4 text-center">
            <img src="https://cdn-icons-png.flaticon.com/512/7133/7133348.png" alt="Logo" className="w-20 h-20 mx-auto" />
            <h2 className="text-lg text-blue-700 font-bold mb-2">Buyer discount</h2>
            <p className="text-gray-500">Special Offer Every Month from Seller.</p>
          </div>
          <div className="bg-slate-50 rounded-lg shadow-md p-4 text-center">
            <img src="https://www.brikkapp.com/media/platforms/logos/181_Profitus_Logo_Lithuania-200x200.png?token=47ba157a8f02b8a478472154e90914fa" alt="Logo" className="w-20 h-20 mx-auto" />
            <h2 className="text-lg text-blue-700 font-bold mb-2">365 DAYS RETURN</h2>
            <p className="text-gray-500">Round-the-clock assistance for a shopping experience.</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AboutUs;
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={500}
        style={{ height: "400px" }}
      >
        <div className="relative">
          <img src="https://ledthanhdat.vn/html/kaycee/assets/images/slide61.jpg" alt="Slide 1" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center md:w-3/4 lg:w-1/2">
            <Fade><p className="text-blue-900 text-2xl md:text-6xl font-bold mb-3">Spring Sale</p>
              <p className="md:text-xl text-black font-bold hidden sm:block">Limit Offer <span className='font-bold text-blue-900'>20%</span> Off</p></Fade>
            <button className="btn bg-blue-900 text-white hover:text-black font-medium mx-auto btn-sm md:btn-md lg:btn-lg mt-3 md:mt-5">Buy Now</button>
          </div>
        </div>

        <div>
          <img src="http://ledthanhdat.vn/html/kaycee/assets/images/slide62.jpg" alt="Slide 2" />

        </div>
        <div>
          <img src="http://ledthanhdat.vn/html/kaycee/assets/images/slide63.jpg" alt="Slide 3" />

        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

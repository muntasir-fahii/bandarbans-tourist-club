import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import Gallery from "./Gallery";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Sponsor from "./Sponsor";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="all-in-one">
        <div className="navbar flex justify-between items-center py-5 px-5  border-b border-white ">
          <div className="logo ml-10">
            <span className="logo-main">Bandarban's</span>
            <span className="logo-sub font-medium">tourist club</span>
          </div>
          <div className="links flex justify-between gap-10 items-center text-white text-md font-semibold">
            <Link to={"/gallery"} className=" hover:text-lime-700 duration-300">
              Destinations
            </Link>
            <Link to={"/about"} className=" hover:text-lime-700 duration-300">
              About
            </Link>
            <Link
              to={"/features"}
              className=" hover:text-lime-700 duration-300"
            >
              Blog
            </Link>
            <Link to={"/contact"} className=" hover:text-lime-700 duration-300">
              Contact
            </Link>
          </div>
          <div className="icons flex gap-10 text-2xl mr-20 text-white ">
            <AiOutlineHeart className="hover:text-yellow-400 duration-300" />
            <RiSendPlaneLine className="hover:text-yellow-400 duration-200" />
          </div>
        </div>
        <div className="home min-height-100vh ">
          <div className="text container text-start mx-auto inline-block justify-start mt-60 px-32">
            <div className="texts relative grid font-medium">
              <h2 className="headline-top uppercase">providing</h2>
              <h2 className="headline-bottom uppercase">Bandarban</h2>
              <h1 className="headline-main absolute  uppercase mt-16 font-bold  text-teal-400 ">
                inspiration
              </h1>
            </div>
            <p className="paragraph text-xl font-normal ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              ipsa quia repellendus adipisci ea, officia maiores id debitis
              nesciunt Lorem ipsum dolor,
            </p>
          </div>
        </div>
      </div>
      <Gallery />
      <Features />
      <Testimonials />
      <Contact />
      <Sponsor />
      <Footer />
    </>
  );
};

export default Home;

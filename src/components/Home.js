import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="all-in-one">
      <div className="navbar flex justify-between items-center py-5 px-5  border-b border-white ">
        <div className="logo">
          <span className="logo-main">Bandarban's</span>
          <span className="logo-sub text-white">tourist club</span>
        </div>
        <div className="links flex justify-between gap-10 items-center text-white text-md font-medium">
          <Link>Destinations</Link>
          <Link>About</Link>
          <Link>Blog</Link>
          <Link>Contact</Link>
        </div>
        <div className="icons flex gap-10 text-2xl mr-20 text-white">
          <AiOutlineHeart />
          <RiSendPlaneLine />
        </div>
      </div>
      <div className="home min-height-100vh ">
        <div className="text">
          <div className="texts">
            <h2 className="headline-top">providing</h2>
            <h1 className="headline-main">inspiration</h1>
            <h2 className="headline-bottom">Bandarban</h2>
          </div>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ipsa
            quia repellendus adipisci ea, officia maiores id debitis nesciunt
            hic?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

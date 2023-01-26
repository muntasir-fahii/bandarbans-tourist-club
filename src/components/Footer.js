import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-main bg-zinc-800 h-56 pb-20">
      <div className="footer px-20">
        <div className="footer-texts">
          <div className="social-icons text-white flex gap-5 text-4xl py-10 mx-auto justify-center">
            <FiInstagram className="border rounded-full p-2 hover:bg-stone-50 hover:text-stone-800 duration-300 cursor-pointer" />
            <FiFacebook className="border  rounded-full p-2 hover:bg-stone-50 hover:text-stone-800 duration-300 cursor-pointer" />
            <FiYoutube className="border rounded-full p-2 hover:bg-stone-50 hover:text-stone-800 duration-300 cursor-pointer" />
            <FiTwitter className="border  rounded-full p-2 hover:bg-stone-50 hover:text-stone-800 duration-300 cursor-pointer" />
          </div>
          <div className="footer-text"></div>
          <h3 className="text-footer text-center mx-auto items-center -mt-5 tracking-wider">
            Join our commiunity to Enjoy your time
          </h3>
          <p className="text-center mx-auto text-stone-300 mt-3">
            All right Reserved &copy; by Muntasir Fahim 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

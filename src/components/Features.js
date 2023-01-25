import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="features mt-20 container mx-auto grid grid-cols-2 gap-20 justify-center min-height-100vh  pb-20 bg-stone-50">
      <div className="img overflow-hidden">
        <img
          className="w-[200rem] object-cover "
          src="https://images.unsplash.com/photo-1631642386603-5618fa038ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          alt="features img"
        />
      </div>

      <div className="texts-features text-center">
        <h2 className="features-headline font-medium ">
          Your Journey Begins Now
        </h2>
        <p className="px-20 text-start text-lg">
          Bangladesh is bestowed with an ample amount of places to explore. From
          beautiful natural sites to historical places, the country has much to
          offer for a pleasing and learning experience. Among the eye-catching
          places, the most remote and least populated Bandarban is a popular
          destination for its adventurous, distinctive and scenic landscape. The
          beauty of its forests, numerous waterfalls, tallest peaks and
          lifestyles of 15 different ethnic groups attract tourists from both
          home and abroad. One must visit Bandarban at least once! In the middle
          of November, I made a plan to tour the Chittagong Hill Tracts, and
          finally decided to visit a few places in Bandarban district. My
          friends, Didar and Shoib, also joined my planned tour. Bandarban was
          new to us, therefore, we collected adequate information from the
          internet and watched some documentaries on youtube about the area. We
          collected tickets from S Alam bus service and started off on our
          journey on a Thursday night. By road, the distance from Dhaka to
          Bandarban is 318 kilometres. Though a little jam troubled us at
          Kanchpur Bridge, we reached our destination by 6:30 am the next
          morning. On the way, the bus stopped at a highway restaurant in
          Comilla. We had some light food. However, the high prices bothered us
          a bit. After reaching Bandarban town, we managed to find rooms at the
          Bangabandhu Smrity Pathaghar guest house. Jahangir Alam, who looks
          after the guest house,
        </p>
        <Link
          to={"/about"}
          className="mt-5 font-semibold text-lg hover:text-lime-800 duration-300"
        >
          Know more →
        </Link>
      </div>
    </div>
  );
};

export default Features;

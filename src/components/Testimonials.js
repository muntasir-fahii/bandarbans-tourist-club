const Testimonials = () => {
  const data = [
    {
      image: "https://randomuser.me/api/portraits/women/43.jpg",
      name: "Lisa Morgan",
      review:
        "Tried to get permission in Chittagong today from both the permission office on chattashwari st and the divisional commissioner on Fairy Hill. We were politely told we need to attain permission in Dhaka",
      ratings: "●●●●",
      location: "New York, America",
    },
    {
      image: "https://randomuser.me/api/portraits/men/51.jpg",
      name: "jackson mackvoy",
      review:
        "Tripadvisor staff removed this post either because the author requested it, or because it did not meet Tripadvisor's forum guidelines.",
      ratings: "●●●●●",
      location: "Munich, Germany",
    },
    {
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      name: "Polina Gif",
      review:
        "Tripadvisor staff removed this post because it did not meet Tripadvisor's forum posting guidelines with prohibiting self-promotional advertising or solicitation.",
      ratings: "●●●●",
      location: "Brussels,Belgium",
    },
  ];

  return (
    <div className="all-test bg-stone-100">
      <div className="testimonials container justify-center items-center text-center mx-auto ">
        <div className="testimonials-title mt-20 text-center">
          <h2 className="testimonials-title-head text-teal-300">
            Inspirational Stories
          </h2>
          <h3 className="testimonials-sub uppercase">from our participants</h3>
        </div>
        <div className="testimonials-card grid grid-cols-3 mt-20 pb-20 gap-10">
          {data.map((card) => (
            <div className="card flex flex-col relative shadow-xl p-10 rounded-xl text-start bg-slate-50">
              <span className="card-ratings text-xl text-start ">
                {card.ratings}
              </span>
              <p className="card-text text-start py-5 h-[10rem]">
                {card.review}
              </p>
              <p className="card-name font-medium">{card.name}</p>
              <span className="card-location text-sm ]">{card.location}</span>
              <div className="images absolute rounded-full overflow-hidden border-teal-400 border border-separate -bottom-6 right-12 w-20">
                <img className="shadow-md" src={card.image} alt={card.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

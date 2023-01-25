const Gallery = () => {
  const data = [
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/9b/7c/1f/20180831-142221-largejpg.jpg?w=1100&h=-1&s=1",
      title: "Nilgiri",
      details:
        "Nilgiri is a place with the combination of the tallest peak, the tribal village with a vibrant culture and colorful lifestyle of the villagers, and the spectacular natural beauty.",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/3d/56/54/boga-lake.jpg?w=700&h=-1&s=1",
      title: "Boga Lake",
      details:
        "Boga Lake is the most beautiful natural lake in Bangladesh. It is also known as Bagakain Lake or Baga Lake. Boga lake is 18 kilometer away from Ruma Sadar Upozilla in Bandarban. The area of this lake is about 15 acres. It is about 3000 feet above sea level",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/62/e2/70/tinap-saitar.jpg?w=1200&h=-1&s=1",
      title: "Tinap saitar",
      details:
        "Tinap Saitar is a waterfall located at Roangchhari (Paindu union of Ruma upazila) in Bandarban district of Bangladesh. Tinap Saitar is a Bam word. In Bam language, Tinap means runny nose and Saita means spring or waterfall. It is located in Paindu canal. For this reason, to many it is also known as Paindu Saitar. ",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/2b/ad/83/clouds-over-hills.jpg?w=1200&h=-1&s=1",
      title: "Nilachal",
      details:
        "Nilachal tourist center located on a hill about two thousand feet high near the city of Bandarban. Nilachal is located in the Tiger Para area, just 5 km away from the city. Somewhere on the slopes of the wide horizon, the winding roads, the hilly neighborhoods and the silver rivers are like paintings by an artist.",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/dc/0a/02/didn-t-know-it-would.jpg?w=1200&h=-1&s=1 ",
      title: "Nafa-khum",
      details:
        "Nilachal tourist center located on a hill about two thousand feet high near the city of Bandarban. Nilachal is located in the Tiger Para area, just 5 km away from the city. Somewhere on the slopes of the wide horizon, the winding roads, the hilly neighborhoods and the silver rivers are like paintings by an artist.",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/06/e2/71/sangu-river.jpg?w=1200&h=-1&s=1",
      title: "Sangu river",
      details:
        "The Sangu River is a river in Myanmar and Bangladesh. Its source is in the North Arakan Hills of Myanmar, located at 21°13´N 92°37´E. The Arakan Hills form the boundary between Arakan and the Chittagong Hill Tracts.",
    },
  ];
  return (
    <div className="gallery min-height-100vh  pb-20 items-center justify-center text-center ">
      <div className="gallery-items mx-auto container grid">
        <h2 className="gallery-title relative">Take and visit</h2>
        <span className="gallery-bottom-title absolute text-center inline mx-auto mt-12 ml-80 text-teal-400">
          our some refreshing places
        </span>
      </div>

      <div className="gallery-slides container mt-32 grid grid-cols-3  justify-center mx-auto gap-14 items-center h-[62rem]">
        {data.map((place) => (
          <div className="gallery-slide w-96 flex flex-col gap-3 shadow-lg shadow-gray-600 rounded-xl overflow-hidden bg-slate-800 ">
            <div className="img">
              <img
                className="w-full h-[16.05rem] overflow-hidden object-cover"
                src={place.image}
                alt={place.title}
              />
            </div>
            <div className="texts-galley flex flex-col gap-3 px-5  text-slate-50">
              <p className="uppercase font-semibold tracking-wide text-lg">
                {place.title}
              </p>
              <p className="text-start h-[10.5rem] mb-5">{place.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

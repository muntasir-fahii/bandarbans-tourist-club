const Contact = () => {
  return (
    <div className="contact container mx-auto justify-center text-center pb-20">
      <div
        className="contact-title
      mb-10 mt-20 text-6xl uppercase font-medium"
      >
        <h3>Contact us</h3>
      </div>
      <div className="form flex flex-col">
        <form className="flex flex-col gap-5">
          <input
            type="name"
            placeholder="Name"
            className="bg-transparent p-5 text-lg  border-b-2"
          />
          <input
            type="Email"
            placeholder="Email"
            className="bg-none p-5 text-lg bg-transparent border-b-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-none p-5 text-lg bg-transparent  border-b-2"
          />
        </form>
      </div>
      <button className="button text-xl mt-10 bg-teal-300 rounded-md">
        Send
      </button>
    </div>
  );
};

export default Contact;

import { TfiFaceSad } from "react-icons/tfi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found text-center mx-auto py-10 tracking-wider">
      <h3>Something Went Wrong</h3>
      <p className="text-8xl opacity-40">
        <TfiFaceSad className="mx-auto mt-10" />
      </p>
      <Link
        to={"/"}
        className={
          "mt-10 inline-block text-lg font-medium bg-teal-300 py-3 px-8 rounded-lg hover:text-teal-300 hover:bg-stone-100 duration-300 border hover:border-teal-300"
        }
      >
        Go To Home
      </Link>
    </div>
  );
};

export default NotFound;

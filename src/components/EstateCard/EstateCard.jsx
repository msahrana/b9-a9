import {Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {RiHome7Line} from "react-icons/ri";
import {CiDroplet} from "react-icons/ci";
import {FaLocationDot} from "react-icons/fa6";

AOS.init();

const EstateCard = ({estate}) => {
  const {
    relevant_image,
    segment_name,
    area,
    price,
    location,
    estate_title,
    facilities,
    description,
    id,
    status,
  } = estate;

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="card w-full bg-base-100 shadow-xl relative"
    >
      <figure className="">
        <img
          src={relevant_image}
          alt="Shoes"
          className="w-full h-60 relative"
        />
        <div className="absolute bg-yellow-400 text-2xl -translate-x-48 -translate-y-24 px-2 rounded-xl">
          <p>For : {status}</p>
        </div>
      </figure>
      <div className="flex justify-between items-center px-3 py-1 bg-black">
        <div className="text-white font-bold flex gap-1 items-center">
          <CiDroplet />
          {segment_name}
        </div>
        <div className="text-yellow-500 font-bold flex gap-1 items-center">
          <RiHome7Line />
          {area}
        </div>
        <div className="text-red-400 font-bold">{price}</div>
      </div>
      <h2 className="card-title mx-auto my-4">{estate_title}</h2>
      <div className="flex gap-3 items-center mx-auto tex-2xl text-green-500">
        <FaLocationDot />
        <p>{location}</p>
      </div>
      <div className="ml-20 mt-4">
        <h2 className="underline font-bold">Facilities:</h2>
        {facilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </div>
      <p className="px-3">{description}..</p>
      <div className="card-actions absolute bottom-0 mt-4 w-full">
        <Link className="w-full" to={`/estate/${id}`}>
          <button className="btn bg-orange-500 w-full">View Property</button>
        </Link>
      </div>
    </div>
  );
};

export default EstateCard;

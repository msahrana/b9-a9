// import {useEffect, useState} from "react";
import {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";
import {useParams, useLoaderData, Link} from "react-router-dom";
import {RiHome7Line} from "react-icons/ri";
import {CiDroplet} from "react-icons/ci";
import {FaLocationDot} from "react-icons/fa6";

const EstateDetails = () => {
  const {id} = useParams();
  const data = useLoaderData();

  const [card, setCard] = useState();

  useEffect(() => {
    const findCard = data.find((item) => item.id == id);
    console.log(findCard);
    setCard(findCard);
  }, [data, id]);

  const {
    relevant_image,
    segment_name,
    area,
    price,
    estate_title,
    location,
    description,
    facilities,
  } = card || {};

  return (
    <div className="card w-full shadow-xl mx-auto max-w-7xl">
      <Helmet>
        <title>Elysian Estates | Details Page</title>
      </Helmet>
      <figure>
        <img className="w-full h-[700px]" src={relevant_image} alt="Shoes" />
      </figure>
      <div className="flex justify-between items-center px-5 py-4 bg-black">
        <div className="text-white text-2xl font-bold flex gap-1 items-center">
          <CiDroplet />
          {segment_name}
        </div>
        <div className="text-yellow-500 text-2xl font-bold flex gap-1 items-center">
          <RiHome7Line />
          {area}
        </div>
        <div className="text-red-500 text-2xl font-bold">{price}</div>
      </div>
      <h2 className="card-title text-2xl mx-auto my-4">{estate_title}</h2>
      <div className="flex gap-3 items-center mx-auto text-2xl text-green-500">
        <FaLocationDot />
        <p>{location}</p>
      </div>
      <div className="ml-10">
        <h2 className="text-2xl font-bold">Facilities:</h2>
        {facilities?.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </div>
      <p className="text-center my-8">
        <span className="text-xl font-bold">Description:</span>
        {description}
      </p>
      <div className="mx-auto mb-4">
        <Link to="/">
          <button className="bg-orange-400 text-xl font-semibold px-3 py-1 rounded-lg">
            Go to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EstateDetails;

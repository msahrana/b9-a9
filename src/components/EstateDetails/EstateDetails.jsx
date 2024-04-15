// import {useEffect, useState} from "react";
import {useEffect, useState} from "react";
import {useParams, useLoaderData, Link} from "react-router-dom";
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
  } = card || {};

  return (
    <div className="card w-full shadow-xl mx-auto max-w-7xl">
      <figure>
        <img className="w-full h-[700px]" src={relevant_image} alt="Shoes" />
      </figure>
      <div className="flex justify-between items-center px-5 py-4 bg-black">
        <div className="text-white text-2xl font-bold">{segment_name}</div>
        <div className="text-yellow-500 text-2xl font-bold">{area}</div>
        <div className="text-red-500 text-2xl font-bold">{price}</div>
      </div>
      <h2 className="card-title text-2xl mx-auto my-4">{estate_title}</h2>
      <div className="flex gap-3 items-center mx-auto text-xl">
        <p>{location}</p>
      </div>
      <div className="ml-10">
        <h2 className="text-2xl font-bold">Facilities:</h2>
        <div></div>
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

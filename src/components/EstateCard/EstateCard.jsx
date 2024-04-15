import {Link} from "react-router-dom";

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
  } = estate;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="">
        <img src={relevant_image} alt="Shoes" className="w-full h-60" />
      </figure>
      <div className="flex justify-between items-center px-3 py-1 bg-black">
        <div className="text-white font-bold">{segment_name}</div>
        <div className="text-yellow-500 font-bold">{area}</div>
        <div className="text-red-400 font-bold">{price}</div>
      </div>
      <h2 className="card-title mx-auto my-4">{estate_title}</h2>
      <div className="flex gap-3 items-center mx-auto">
        <p>{location}</p>
      </div>
      <div className="ml-20 mt-4">
        <h2 className="underline font-bold">Facilities:</h2>
        {facilities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </div>
      <p className="px-3">{description}..</p>
      <div className="card-actions">
        <Link className="w-full" to={`/estate/${id}`}>
          <button className="btn bg-orange-500 w-full">View Property</button>
        </Link>
      </div>
    </div>
  );
};

export default EstateCard;

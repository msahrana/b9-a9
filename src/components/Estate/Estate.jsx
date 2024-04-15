import {useEffect, useState} from "react";
import EstateCard from "../EstateCard/EstateCard";

const Estate = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-5xl font-bold text-center my-10"> Our Estate</h1>
      <p className="text-justify w-2/3 mx-auto mb-10">
        <span className="text-red-500 font-bold">Elysian </span>Estates is more
        than just a showcase of lavish accommodations; it`s a sanctuary for the
        soul—a place where memories are made and cherished for a lifetime. So, I
        invite you to step into the realm of Elysian Estates, where the
        extraordinary awaits at every turn.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {estates.map((estate) => (
          <EstateCard key={estate.id} estate={estate}></EstateCard>
        ))}
      </div>
    </div>
  );
};

export default Estate;

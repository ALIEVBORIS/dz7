import React, { useEffect } from "react";
import { useGetAllPokemonsQuery } from "../store/api/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { data, error, isLoading } = useGetAllPokemonsQuery();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <ul className="pokemons">
        {data?.results?.map((item) => (
          <li onClick={() => navigate(`/pokemon/${item.name}`)} className="pokemon">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

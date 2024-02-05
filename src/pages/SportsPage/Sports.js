import React, { useEffect, useState } from "react";
import { getGames } from "../../components/API/rawgApi";
import "./Sports.scss";

const Sports = () => {
  const [sportsGames, setSportsGames] = useState([]);

  useEffect(() => {
    const fetchsportsGames = async () => {
      try {
        const SportsGamesData = await getGames("sports");
        setSportsGames(SportsGamesData);
      } catch (error) {
        console.error("Error fetching adventure games:", error);
      }
    };

    fetchsportsGames();
  }, []);

  return (
    <div>
      <h2>Sports Games</h2>
      <ul>
        {sportsGames.map((game) => (
          <>
            <li key={game.id}>{game.name}</li>
            <img className="game-img" src={game.background_image}></img>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Sports;

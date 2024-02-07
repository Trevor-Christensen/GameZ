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
    <div className="sports-container">
      <h2 className="sports-title">Sports Games</h2>
      <ul className="list-container">
        {sportsGames.map((game) => (
          <>
            <div className="sports-items-container">
              <li className="sports-list-item" key={game.id}>
                {game.name}
              </li>
              <img className="game-img" src={game.background_image}></img>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Sports;

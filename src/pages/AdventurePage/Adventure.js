import React, { useEffect, useState } from "react";
import { getGames } from "../../components/API/rawgApi";
import "./AdventurePage.scss";

const Adventure = () => {
  const [adventureGames, setAdventureGames] = useState([]);

  useEffect(() => {
    const fetchAdventureGames = async () => {
      try {
        const AdventureGamesData = await getGames("adventure");
        setAdventureGames(AdventureGamesData);
      } catch (error) {
        console.error("Error fetching adventure games:", error);
      }
    };

    fetchAdventureGames();
  }, []);

  return (
    <div>
      <h2 className="adventure-title">Adventure Games</h2>
      <ul className="adventure-list-container">
        {adventureGames.map((game) => (
          <>
            <div className="adventure-items-container">
              <li className="adventure-list-item" key={game.id}>
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

export default Adventure;

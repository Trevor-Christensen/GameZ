import React, { useEffect, useState } from "react";
import { getGames } from "../../components/API/rawgApi";

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
      <h2>Adventure Games</h2>
      <ul>
        {adventureGames.map((game) => (
          <>
            <li key={game.id}>{game.name}</li>
            <img className="game-img" src={game.background_image}></img>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Adventure;

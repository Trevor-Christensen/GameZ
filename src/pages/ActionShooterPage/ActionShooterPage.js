import React, { useEffect, useState } from "react";
import { getGames } from "../../components/API/rawgApi";

const ActionShooter = () => {
  const [actionShooterGames, setActionShooterGames] = useState([]);

  useEffect(() => {
    const fetchActionShooterGames = async () => {
      try {
        const actionShooterGamesData = await getGames("action, shooter");
        setActionShooterGames(actionShooterGamesData);
      } catch (error) {
        console.error("Error fetching actionshooter games:", error);
      }
    };

    fetchActionShooterGames();
  }, []);

  return (
    <div className="games-container">
      <h2>Action Shooter Games</h2>
      <ul className="list-container">
        {actionShooterGames.map((game) => (
          <>
            <div className="list-container--item">
              <li key={game.id}>{game.name}</li>
              <img className="game-img" src={game.background_image}></img>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default ActionShooter;

import React, { useState } from "react";
import "./ProfilePage.scss"; // Import the SCSS file
import ChatPage from "../ChatPage/ChatPage";

const ProfilePage = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);

  const friendsData = [
    { id: 1, name: "Bob", details: "Likes Cats" },
    { id: 2, name: "Dreamy", details: "Ejoys walks on the beach" },
    { id: 3, name: "Kim", details: "CANT BE TRUSTED!" },
  ];

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend);
  };

  return (
    <div className="profile-container">
      <aside className="friends-list">
        <h2>Friends List</h2>
        <ul>
          {friendsData.map((friend) => (
            <li key={friend.id} onClick={() => handleFriendClick(friend)}>
              {friend.name}
            </li>
          ))}
        </ul>
        <ChatPage />
      </aside>

      <main className="profile-content">
        {selectedFriend ? (
          <>
            <h1>{selectedFriend.name}</h1>
            <p>ID: {selectedFriend.id}</p>
            <p>Details: {selectedFriend.details}</p>
          </>
        ) : (
          <p>Select a friend to view details</p>
        )}
      </main>
    </div>
  );
};

export default ProfilePage;

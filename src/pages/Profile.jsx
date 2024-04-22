import React from "react";

function Profile() {
  const profileData = {
    name: "Jan Kowalski",
    age: 32,
    email: "jankowalski@example.com",
    bio: "Coding is my passion",
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="text-center mb-4">
            <img src="src/assets/avatar.svg" width={"128px"} height={"128px"} />
          </div>
          <div className="card">
            <div className="card-header">
              <h2>Profile</h2>
            </div>
            <div className="card-body">
              <div>
                <strong>Name:</strong> {profileData.name}
              </div>
              <div>
                <strong>Age:</strong> {profileData.age}
              </div>
              <div>
                <strong>Email:</strong> {profileData.email}
              </div>
              <div>
                <strong>Bio:</strong> {profileData.bio}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

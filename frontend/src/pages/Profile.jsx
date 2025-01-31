import React from 'react';

function Profile() {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Software developer at XYZ company.',
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-semibold mb-6">Profile</h2>
        <div className="mb-4">
          <p className="font-medium text-gray-700">Name:</p>
          <p className="text-gray-900">{user.name}</p>
        </div>
        <div className="mb-4">
          <p className="font-medium text-gray-700">Email:</p>
          <p className="text-gray-900">{user.email}</p>
        </div>
        <div className="mb-4">
          <p className="font-medium text-gray-700">Bio:</p>
          <p className="text-gray-900">{user.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

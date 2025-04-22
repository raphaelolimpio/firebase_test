import React from 'react';
const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">User Profile</h1>
      <div className="bg-white rounded-lg shadow-md p-8 w-96">
        <p className="text-gray-700 mb-2">Name: John Doe</p>
        <p className="text-gray-700 mb-2">Email: john.doe@example.com</p>
        {/* Add more profile information here */}
      </div>
    </div>
  );
};

export default ProfilePage;

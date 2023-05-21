import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="group relative w-[768px] cursor-pointer overflow-hidden rounded-lg bg-white shadow-md">
      <div className="absolute left-0 top-0 h-full w-0 bg-purple-600 transition-all duration-300 group-hover:w-[6px]" />

      <div className="flex h-[84px] items-center px-12">
        <h1 className="text-[20px] font-bold text-gray-900">{user.name}</h1>
      </div>
    </div>
  );
};

export default UserCard;

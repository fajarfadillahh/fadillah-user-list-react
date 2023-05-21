import React from "react";

// import parts
import UserCard from "./UserCard";

const UserList = () => {
  return (
    <section className="pb-16 pt-32">
      <div className="container grid justify-center gap-8">
        <h1 className="section-title text-center text-[36px]">All Users</h1>

        <div className="grid justify-center gap-4">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </section>
  );
};

export default UserList;

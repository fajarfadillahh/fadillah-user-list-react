import React from "react";
import { Link } from "react-router-dom";

// import parts
import UserCard from "./UserCard";

const UserList = ({ dataUsers }) => {
  return (
    <section className="pb-16 pt-32">
      <div className="container grid justify-center gap-8">
        <h1 className="section-title text-center text-[36px]">All Users</h1>

        <div className="grid justify-center gap-4">
          {dataUsers.map((user, index) => {
            return (
              <Link to={`/users/${user.id}`} key={index}>
                <UserCard user={user} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserList;

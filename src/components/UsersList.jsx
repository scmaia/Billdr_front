import React, { useState, useEffect } from "react";
import { getUsers } from "../utils/apiUtils";
import UserCard from "./UserCard";
import Loading from "./Loading";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const onAPIResponse = (apiResponse) => {
    const usersList = apiResponse;
    setUsers(usersList);
    setLoading(false);
  };

  const onAPIError = (error) => {
    console.error(error);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getUsers(onAPIResponse, onAPIError);
  }, []);

  if(loading) {
    return <Loading/>
  }

  return (
    <section>
      <ul className="p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 text-sm leading-6">
        {users?.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            username={user.username}
            city={user.address.city}
            name={user.name}
            phone={user.phone}
            website={user.website}
            company={user.company.name}
          />
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
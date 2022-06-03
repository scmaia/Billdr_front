import { Link } from "react-router-dom";
import { locationIcon, dotIcon, phoneIcon } from "./icons/SVGIcons";

function UserCard({ id, username, city, name, phone, website, company }) {
  return (
    // User Profile Card
    <li className="rounded-lg border border-gray-200/80 bg-white p-6 hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md hover:text-white group">
      {/*  User header */}
      <div className="flex h-8 flex-row relative">
        {/*  Username */}
        <Link to={`/user/${id}`}>
          <h2 className="text-lg font-semibold group-hover:underline">
            {username}
          </h2>
        </Link>
        {/*  location */}
        <div className="absolute top-0 right-0 flex items-center space-x-1">
          <dt className="text-sky-500 group-hover:text-white">
            <span className="sr-only">Location</span>
            {locationIcon}
          </dt>
          <dd>{city}</dd>
        </div>
      </div>
      {/*  User details */}
      <div className="flex flex-grow flex-col justify-start relative">
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div>
            <dt className="sr-only">Name</dt>
            <dd>{name}</dd>
          </div>
          <div>
            <dt className="sr-only">Phone</dt>
            <dd className="flex items-center">
              {dotIcon}
              {phoneIcon}
              {phone}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Website</dt>
            <dd className="flex items-center">
              {dotIcon}
              {website}
            </dd>
          </div>
          <div className="flex w-full mt-2 font-normal justify-start">
            <dt className="sr-only">Company</dt>
            <dd className="text-slate-400 group-hover:text-white">{company}</dd>
          </div>
        </dl>
        {/*  Action */}
        <div className="transition ease-in-out absolute bottom-0 right-0 underline text-white opacity-0 group-hover:block group-hover:opacity-100">
          <Link to={`/user/${id}`}>View details &rarr;</Link>
        </div>
      </div>
    </li>
  );
}

export default UserCard;

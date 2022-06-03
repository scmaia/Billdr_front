import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOneUser } from "../utils/apiUtils";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";
import AnchorLink from "../components/AnchorLink";

function Row({ title, children }) {
  return (
    <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
      <p className="text-gray-600">{title}</p>
      {children}
    </div>
  );
}

function UserDescription() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const onAPIResponse = (apiResponse) => {
    setUserData(apiResponse);
    setLoading(false);
  };

  const onAPIError = (error) => {
    console.error(error);
    setLoading(false);
    if (String(error).substring(7) === `404`) {
      setIsNotFound(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    getOneUser(id, onAPIResponse, onAPIError);
    console.log("hi");
    console.log(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (isNotFound) {
    return <NotFound />;
  }

  return (
    <div className="flex items-center justify-center px-4">
      <div className="max-w-4xl bg-white w-full rounded-lg shadow-xl border border-gray-200/80">
        <div className="p-4 border-b bg-blue-500 rounded-lg text-white">
          <h2 className="text-2xl font-semibold">{userData?.username}</h2>
          <p className="text-sm">User Information</p>
        </div>
        <div>
          <Row title="Name">
            <p>{userData?.name}</p>
          </Row>
          <Row title="E-mail Address">
            <p>
              <AnchorLink
                href={`mailto:${userData?.email}`}
                text={userData?.email}
              />
            </p>
          </Row>
          <Row title="Home Address">
            <div className="flex flex-col">
              <p>
                {userData?.address?.suite}
                <br />
                {userData?.address?.street}
                <br />
                {userData?.address?.city}
                <br />
                {userData?.address?.zipcode}
              </p>
              <AnchorLink
                href={`http://maps.google.com/maps?q=${userData?.address?.geo?.lat},${userData?.address?.geo?.lng}`}
                target="_blank"
                rel="noreferrer"
                text="Open coordinates in map &#10138;"
              />
            </div>
          </Row>
          <Row title="Phone Number">
            <p>{userData?.phone}</p>
          </Row>
          <Row title="Website">
            <AnchorLink
              href={`http://${userData?.website}`}
              target="_blank"
              rel="noreferrer"
              text={userData?.website}
            />
          </Row>
          <Row title="Company">
            <p>
              {userData?.company?.name}
              <br />"{userData?.company?.catchPhrase}"<br />
              <br />
              {userData?.company?.bs}
            </p>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default UserDescription;

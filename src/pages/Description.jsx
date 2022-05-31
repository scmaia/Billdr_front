import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getOneUser } from "../utils/apiUtils";
import NotFound from "../components/NotFound";
import Loading from "../components/Loading";

function Description() {

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
  }, [id]);

  if(loading) {
    return <Loading/>
  }

  if(isNotFound) {
    return <NotFound/>
  }

  return (
    <div className="flex items-center justify-center px-4">
      <div className="max-w-4xl bg-white w-full rounded-lg shadow-xl border border-gray-200/80">
        <div className="p-4 border-b bg-blue-500 rounded-lg text-white">
          <h2 className="text-2xl font-semibold">{userData?.username}</h2>
          <p className="text-sm">User Information</p>
        </div>
        <div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Name</p>
            <p>{userData?.name}</p>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">E-mail Address</p>
            <p>{userData?.email}</p>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Home Address</p>
            <p>{userData?.address?.suite}<br/>
            {userData?.address?.street}<br/>
            {userData?.address?.city}<br/>
            {userData?.address?.zipcode}</p>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Map</p>
            <a href={`http://maps.google.com/maps?q=${userData?.address?.geo?.lat},${userData?.address?.geo?.lng}`} target='_blank' rel="noreferrer" className="text-blue-500">Open coordinates in map 🡥</a>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Phone</p>
            <p>{userData?.phone}</p>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Website</p>
            <a href={`http://${userData?.website}`} target='_blank' rel="noreferrer" className="text-blue-500">{userData?.website} 🡥</a>
          </div>
          <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600">Company</p>
            <p>{userData?.company?.name}<br/>
            "{userData?.company?.catchPhrase}"<br/><br/>
            {userData?.company?.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;

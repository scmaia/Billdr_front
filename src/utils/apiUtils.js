const API_URL = "https://jsonplaceholder.typicode.com/users";

//API requests
export const getUsers = (onAPIResponse, onAPIError) => {
  fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw Error(response.status);
    })
    .then((responseData) => {
      onAPIResponse(responseData);
    })
    .catch((error) => {
      onAPIError(error);
    });
};

export const getOneUser = (userID, onAPIResponse, onAPIError) => {
  fetch(`${API_URL}/${userID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw Error(response.status);
    })
    .then((responseData) => {
      onAPIResponse(responseData);
    })
    .catch((error) => {
      onAPIError(error);
    });
};
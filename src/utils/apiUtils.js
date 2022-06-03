import { getFromCache, saveToCache } from "./cacheUtils";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const CACHE_KEYS = {
  USERS: "users",
};

// Fetches a list of users
export const getUsers = async (onAPIResponse, onAPIError, forceRefresh) => {
  // Attempt to read from cache first
  if (!forceRefresh) {
    const cachedUsers = await getFromCache(CACHE_KEYS.USERS);
    if (cachedUsers?.length) {
      cachedUsers.fromCache = true;
      onAPIResponse(cachedUsers);
      return;
    }
  }

  fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw Error(response.status);
    })
    .then((responseData) => {
      onAPIResponse(responseData);
      saveToCache(CACHE_KEYS.USERS, responseData);
    })
    .catch((error) => {
      onAPIError(error);
    });
};

// Given a user id, fetches detail for the user
export const getOneUser = async (
  userID,
  onAPIResponse,
  onAPIError,
  forceRefresh
) => {
  // Attempt to read from cache first
  if (!forceRefresh) {
    const cachedUser = await getFromCache(userID);
    if (cachedUser) {
      onAPIResponse(cachedUser);
      return;
    }
  }

  fetch(`${API_URL}/${userID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw Error(response.status);
    })
    .then((responseData) => {
      onAPIResponse(responseData);
      saveToCache(userID, responseData);
    })
    .catch((error) => {
      onAPIError(error);
    });
};

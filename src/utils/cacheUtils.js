import localForage from "localforage";

export async function getFromCache(key) {
  try {
    return await localForage.getItem(key);
  } catch (err) {
    console.error(err);
  }
}

export async function saveToCache(key, value) {
  try {
    localForage.setItem(key, value);
  } catch (err) {
    console.error(err);
  }
}

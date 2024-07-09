import { database } from "./firebase";
import { ref, set, get, child } from "firebase/database";

export const createUser = async (userId, email, fullName, role) => {
  await set(ref(database, "users/" + userId), {
    email,
    fullName,
    role,
  });
};

export const createPosition = async (positionId, title, description, hrId) => {
  await set(ref(database, "positions/" + positionId), {
    title,
    description,
    hr_id: hrId,
  });
};

export const getPosition = async (positionId) => {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `positions/${positionId}`));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    console.log("No data available");
  }
};

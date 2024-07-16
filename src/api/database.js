import { database } from "./firebase";
import { ref, set, get, child } from "firebase/database";
import { useId } from "react";
export const createUser = async (userId, email, fullName, role) => {
  await set(ref(database, "users/" + userId), {
    email,
    fullName,
    role,
  });
};

export const createCompany = async (companyId, name, description, hrId) => {
  await set(ref(database, "companies/" + companyId), {
    name,
    description,
    hr_id: hrId,
  });
};

export const createPosition = async (
  title,
  description,
  hrId,
  tags,
  city,
  companyId,
  type
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const positionId = useId();
  await set(ref(database, "positions/" + positionId), {
    companyId,
    city,
    type,
    title,
    description,
    tags,
    hr_id: hrId,
  });
};

export const getRole = async (userId) => {
  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `users/${userId}/role`));
  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    console.log("No data available");
  }
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

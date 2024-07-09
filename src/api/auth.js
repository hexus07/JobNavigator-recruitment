import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const registerUser = async (email, password) => {
  const UserCredential = createUserWithEmailAndPassword(auth, email, password);
  return (await UserCredential).user;
};

export const loginUser = async (email, password) => {
  const UserCredential = signInWithEmailAndPassword(auth, email, password);
  return (await UserCredential).user;
};

export const logoutUser = async () => {
  await signOut(auth);
};

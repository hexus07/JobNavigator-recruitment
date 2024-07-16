import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../api/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createUser } from "../api/database"; // Import your createUser function
import { getDatabase, ref, get } from "firebase/database";
import PropTypes from "prop-types";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // Add 'children' to the props validation
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const db = getDatabase();
        const roleSnapshot = await get(ref(db, "users/" + user.uid + "/role"));
        const role = roleSnapshot.val();

        setCurrentUser(user);
        setUserRole(role);
      } else {
        setCurrentUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const registerUser = async (email, password, fullName, role) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUser(userCredential.user.uid, email, fullName, role);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    userRole,
    registerUser,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

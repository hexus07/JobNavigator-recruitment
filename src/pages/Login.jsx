import React from "react";
import Header from "../components/Header";
import background from "../assets/images/background.png";

const BackgroundImageStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
};

const Login = () => {
  return (
    <div style={BackgroundImageStyle}>
      <Header />
    </div>
  );
};

export default Login;

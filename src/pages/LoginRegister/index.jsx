import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function LoginRegister() {
  const [pageType, setPAgeType] = useState("login");
  const handlePageType = () => {
    setPAgeType((pageType == "login" ? "register" : "login"));
  };
  return <> {pageType == "login" ? <Login handlePageType={handlePageType} /> : <Register handlePageType={handlePageType} />}</>;
}

// Initial file created by David Larsen

import React, { useState } from "react"
import Header from "./header/Header"
import ApplicationViews from "./ApplicationViews"
import "./Pecans.css"

const Pecans = () => {
  
  sessionStorage.setItem("credentials", "1")
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

    return (
        <>
          <Header hasUser={hasUser} clearUser={clearUser} />
          <ApplicationViews hasUser={hasUser} setUser={setUser}/>
        </>
    )
}

export default Pecans
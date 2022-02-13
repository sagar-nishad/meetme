import React, { Component, useEffect, useState } from "react";
import Video from "./Video";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <Switch>
//             <Route path="/" exact component={Login} />
//             <Route path="/:url" component={Video} />
//           </Switch>
//         </Router>
//       </div>
//     );
//   }
// }
function App() {
  const [{ user }, dispatch] = useStateValue();
  // console.log("app->user", user,user.photoURL,user.displayName);
  // console.log(user.displayName);
  useEffect(() => {
    localStorage.setItem("isauth", 0);
  }, []);

  return (
    <div>
      {/****************************************************/}
      {/* <Router>
        <Switch>
          {console.log(typeof parseInt(localStorage.getItem("isauth")))}
          {parseInt(localStorage.getItem("isauth")) ? (
            <Route exact path="/:url">
              <Video name={localStorage.getItem("Name")} />
            </Route>
          ) : (
            <Route path="/:url">
              <Redirect to="/" />
              <Login />
            </Route>
          )}
          {
          user 
          ? (
            <Route path="/">
              <Home name={user.displayName} />
            </Route>
          ) : (
            <Route path="/">
              <Login />
            </Route>
          )}
        </Switch>
      </Router> */}
      {/****************************************************/}
      <Router>
        <Switch>
          <Route path="/:url">
            <Video />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      {/****************************************************/}
    </div>
  );
}

export default App;

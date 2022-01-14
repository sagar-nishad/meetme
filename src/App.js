import React, { Component } from "react";
import Video from "./Video";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import Test from "./Test";

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

  return (
    <div>
      <Test a={"hi"} />
      <Router>
        <Switch>
          <Route path="/:url" >
            <Video  />
            {/* <Video  /> */}
          </Route>
          {user ? (
            <Route path="/">
              <Home name={user.displayName} />
            </Route>
          ) : (
            <Route path="/">
              <Login />
            </Route>
          )}

          {/* <Route path="/:url" component={user?Video:Login} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

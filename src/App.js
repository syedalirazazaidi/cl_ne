import React from "react";
// import { Counter } from "./features/counter/Counter";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Spinner from "react-spinkit";

function App() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt=""
          />
          <Spinner />
        </AppLoadingContent>
      </AppLoading>
    );
  }
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <SideBar />
              <Switch>
                <Route exact path="/">
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
const AppBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;
const AppLoading = styled.div``;

const AppLoadingContent = styled.div``;

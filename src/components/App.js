import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import Header from "./Header";
import history from "../history";
const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList}></Route>
            <Route path="/stream/new" exact component={StreamCreate}></Route>
            <Route path="/stream/edit/:id" exact component={StreamEdit}></Route>
            <Route
              path="/stream/delete/:id"
              exact
              component={StreamDelete}
            ></Route>
            <Route path="/stream/:id" exact component={StreamShow}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;

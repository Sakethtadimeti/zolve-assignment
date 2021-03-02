import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const Dashboard = React.lazy(() => import("./features/dashboard"));
const CopyToClipboard = React.lazy(() =>
  import("./features/copy-to-clipboard")
);

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/copy-clipboard" exact component={CopyToClipboard} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default AppRouter;

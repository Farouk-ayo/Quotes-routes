import { Redirect, Route, Switch } from "react-router-dom";
import QuotesDetails from "./components/pages/QuoteDetails";
import NewQuotes from "./components/pages/NewQuotes";
import AllQuotes from "./components/pages/AllQuotes";
import NotFound from "./components/pages/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quotedId">
          <QuotesDetails />
        </Route>
        <Route path="/new-quote">
          <NewQuotes />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

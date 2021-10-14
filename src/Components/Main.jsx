import { Route, Switch, BrowserRouter } from "react-router-dom";
import Heading from ".";
const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Heading} />
      </Switch>
    </BrowserRouter>
  );
};

export default Main;

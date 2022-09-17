import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./components/Pages/SignIn/SignIn";
import Organisation from "./components/Pages/Organisation/Organisation";
import Overview from "./components/Pages/Overview";
import RecommendedRoute from "./components/Pages/RecommendedRoute";
import BuildBlock from "./components/Pages/BuildBlock/BuildBlock";
import Achievement from "./components/Pages/Achievements";
import NotFound from "./components/Pages/NotFound";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SignInForm2 from "./components/Pages/SignIn/SignInForm2";
import GameExplanation from "./components/Pages/GameExplanation/GameExplanation";
import Congrats from "./components/Pages/Congrats";

const App = () => {
  return ( 
    <div className="container mx-auto">
      <DndProvider backend={HTML5Backend}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <SignIn />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignInForm2 />
        </Route>
        <Route path="/overview">
          <Overview />
        </Route>
        <Route path="/organisation" exact>
          <Organisation />
        </Route>
        <Route path="/organisation/recommended-route">
          <RecommendedRoute />
        </Route>
        <Route path="/organisation/game-explanation">
          <GameExplanation />
        </Route>
        <Route path="/organisation/build-block">
          <BuildBlock />
        </Route>
        <Route path="/organisation/congrats">
          <Congrats />
        </Route>
        <Route path="/achievement">
          <Achievement />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </DndProvider>
    </div>
  );
};

export default App;

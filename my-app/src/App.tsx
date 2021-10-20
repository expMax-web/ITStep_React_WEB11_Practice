import { Biography } from "./pages/Biography/Biography";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { ArtGallery } from "./pages/ArtGallery/ArtGallery";
import { FavoritePicture } from "./pages/FavoritePicture";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/Biography" component={Biography} />
        <Route path="/ArtGallery" component={ArtGallery} />
        <Route path="/FavoritePicture" component={FavoritePicture} />
        <Redirect from="/" to="/Biography" />
      </Switch>
    </div>
  );
}

export default withRouter(App);

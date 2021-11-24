import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Detail } from "./Components/Detail/Detail";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home/Home";
import { Header } from "./Components/Header";
import { Search } from "./Components/Search/Search";
import { router } from "./router";
import { GlobalStyled } from "./Style/GlobalStyled";
import { HelmetProvider } from "react-helmet-async";
import { PageNotFound } from "./Components/PageNotFound";
import { ScrollTop } from "./Components/ScrollTop";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <GlobalStyled />
        <ScrollTop />
        <Header />
        <Switch>
          <Route path={router.home} exact>
            <Home></Home>
          </Route>

          <Route path={router.detail}>
            <Detail></Detail>
          </Route>

          <Route path={router.search}>
            <Search></Search>
          </Route>

          <Route>
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </HelmetProvider>
  );
}

export default App;

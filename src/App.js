import Header from "./components/Header";
import HeaderTop from "./components/HeaderTop";
import Banner from "./pages/home/homeComponents/Banner";
import SearchDomain from "./pages/home/homeComponents/SearchDomain";
import HomeProducts from './pages/home/homeComponents/HomeProducts';
import ThreeSteps from "./pages/home/homeComponents/ThreeSteps";
import AboutUs from "./pages/home/homeComponents/AboutUs";
import Help from "./pages/home/homeComponents/Help";
import HomeMigrate from "./pages/home/homeComponents/HomeMigrate";

function App() {
  return (
    <div className="App">
      <HeaderTop/>
      <Header/>
      <SearchDomain/>
      <Banner/>
      <HomeProducts/>
      <ThreeSteps/>
      <AboutUs/>
      <HomeMigrate/>
      <Help/>
    </div>
  );
}

export default App;

import Header from "./components/Header";
import HeaderTop from "./components/HeaderTop";
import SearchDomain from "./pages/home/homeComponents/SearchDomain";

function App() {
  return (
    <div className="App">
      <HeaderTop/>
      <Header/>
      <SearchDomain/>
    </div>
  );
}

export default App;

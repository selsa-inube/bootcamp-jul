import "./App.css";
import FastForward from "./components/fast-forward";
import Footer from "./components/footer";
import Header from "./components/header";
import LatestNews from "./components/lates-news";
import MainNews from "./components/main-news";
import MainTopic from "./components/main-topic";
import Nav from "./components/nav";
import SelectTopics from "./components/select-topcis";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <MainTopic />
        <SelectTopics />
        <MainNews />
        <LatestNews />
        <FastForward />
      </main>
      <Footer />
    </>
  );
}

export default App;

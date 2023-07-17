import "./assets/css/style.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Counter from "./Components/Counter";

function App() {
  return (
    <>
      <div className="bg-gradient position-relative">
        <div className="container">
          <Header />

          <Hero />
        </div>
        <Counter />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import gurpreetandharveen from "./gurpreetandharveen.png";

function App() {
  return (
    <div className="App">
      <section className="App-section text_center relative z-9">
        <div className="App-section-inner sticky">
          <img className="App-portrait" src={gurpreetandharveen} />
        </div>
        <div className="App-fade-out"></div>
      </section>
      <section className="App-section text_center relative z-8">
        <div className="App-section-inner sticky">
          <h1 className="App-headline">Gurpreet and Harveen</h1>
          <div className="mt-3 text-secondary">
            <h5 className="App-footnote">Fremont, California</h5>
            <h6 className="App-footnote mt-1">October 14, 2023</h6>
          </div>
        </div>
        <div className="App-fade-in"></div>
        <div className="App-fade-out"></div>
      </section>
      <section className="App-section text_center relative">
        <div className="App-section-inner sticky">
          <h1 className="App-headline">Rsvp</h1>
        </div>
        <div className="App-fade-in"></div>
      </section>
    </div>
  );
}

export default App;

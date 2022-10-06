import "./App.css";
import gurpreetandharveen from "./gurpreetandharveen.png";
import { ArrowDown } from "react-feather";
import { useRef } from "react";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

function App() {
  const rsvpRef = useRef();
  const handleScrollToRsvp = () => {
    if (rsvpRef) {
      rsvpRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <div className="App">
      <section className="App-section text_center relative z-9">
        <div className="App-fade-in App-fade-in-first"></div>
        <div className="App-section-inner sticky">
          <img className="App-portrait" src={gurpreetandharveen} />
          <div className="mt-3">
            <h1 className="h2 autography">Save the date</h1>
            <h6 className="h6 caps text-tertiary mt-3">For the marriage of</h6>
            <h2 className="h4 caps flex items-center justify-center mt-1">
              Gurpreet <span className="h6 mx-2 text-secondary">•</span> Harveen
            </h2>
            <div className="flex justify-center items-center mt-2">
              <h6 className="h6 caps text-secondary">Oct</h6>
              <div className="App-date-divider"></div>
              <h4 className="h4 caps">14</h4>
              <div className="App-date-divider"></div>
              <h6 className="h6 caps text-secondary">2023</h6>
            </div>
            <h6 className="h6 mt-1 caps text-secondary">Fremont, Ca</h6>
          </div>
          <div class="App-rsvp-jump" onClick={handleScrollToRsvp}>
            <ArrowDown size={16} />
          </div>
          <div style={{ display: "flex", height: "50px", width: "1px" }}></div>
        </div>
        <div className="App-fade-out"></div>
      </section>
      {/* <section className="App-section text_center relative z-8">
        <div className="App-section-inner sticky">
          <h1 className="autography">Gurpreet and Harveen</h1>
          <div className="mt-3 text-secondary">
            <h5 className="App-footnote">Fremont, California</h5>
            <h6 className="App-footnote mt-1">October 14, 2023</h6>
          </div>
        </div>
        <div className="App-fade-in"></div>
        <div className="App-fade-out"></div>
      </section> */}
      <section className="App-section text_center relative" ref={rsvpRef}>
        <div className="App-section-inner sticky">
          <a
            className="flex flex-col App-rsvp-link"
            href="https://forms.gle/5cdnLXzhqjQjVXLX8"
            target="_blank"
            rel="nofollow"
          >
            <h6 className="h6 text-tertiary">Tap to</h6>
            <h1 className="h1 autography mt-4">Rsvp</h1>
          </a>
          <h6 className="h5 mt-1 text-tertiary autography italic absolute App-invitation-follow">
            formal invitation to follow
          </h6>
        </div>
        <div className="App-fade-in"></div>
      </section>
    </div>
  );
}

export default App;

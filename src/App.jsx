import "./App.css";
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Card from "./components/Card/Card";
import Chip from "./components/Chip/Chip";
import xIcon from"./assets/icons/X.png"

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <HeroBanner />
        <div className="all-sections">
          <section className="props-section">
            <div className="props-row">
              <Card highlighted>
                <h2>Props</h2>
                <p>Props allow the components to accept information to use.</p>
                <p>This is why not every component made from a template looks the same, they recieve different data</p>
                <p>The data could be text to display, link to use, or even what action to take on click.</p>
              </Card>
              <Card>
                <h2>Chips</h2>
                <p>This element is commonly called "Chips"</p>
                <p>Common features:</p>
                <ul>
                  <li>Optional Icons</li>
                  <li>Highlighted state</li>
                  <li>Often debatable, a nice visual way to represent options from a form</li>
                </ul>
                <div className="chips-example">
                  <Chip text="test 1"></Chip>
                  <Chip text="is highlighted" isHighlighted></Chip>
                  <Chip text="icon test" icon={xIcon}></Chip>
                </div>
              </Card>

            </div>
          </section>

        </div>
      </main>
    </>
  );
}

export default App;

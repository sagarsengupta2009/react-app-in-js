import "./App.css";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const tabContent = "components";
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log("selected");
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul className="conponents">
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {/* {!selectedTopic ? <p>Please select a topic.</p> : <div id="tab-content">
            
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>} */}
          {/* {The above commented code block and the below uncommented code blocks outputs same} */}
          {!selectedTopic && <p>Please select a topic.</p>}{" "}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import componentImage from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import  Header  from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';



function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul className="conponents">
          <CoreConcepts 
            title="Components"
            description="The core UI building block"
            image={componentImage}/>
          <CoreConcepts />
          <CoreConcepts />
        </ul>
          
        </section>
      </main>
    </div>
  );
}

export default App;

import CoreConcept from "./CoreConcept.jsx"
import { CORE_CONCEPTS } from "../data.js"

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => ( // .map() is used to output core_concepts array data from data.jsx
          <CoreConcept key={conceptItem.title} {...conceptItem} /> // key prop is needed for the browser, each child in list must have unique key value
        ))}
      </ul>
    </section>
  );
}
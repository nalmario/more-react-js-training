import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";

export default function Examples() {
  // cannot nest state hook in any other compfunction (top-level)
  const [ selectedTopic, setSelectedTopic ] = useState(null);

  // Handle TabButton component click event function, note naming convention
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'prop', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'} // conditional CSS rendering prop
          onSelect={() => handleSelect('components')} // event handling prop
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onSelect={() => handleSelect('jsx')}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'props'}
          onSelect={() => handleSelect('props')}
        > Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === 'state'}
          onSelect={() => handleSelect('state')}
        > State
        </TabButton>
      </menu>
      {!selectedTopic ? ( // conditional rendering
        <p>Please select a topic.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
      )}
    </section>
  );
}
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import { useState } from 'react'; // hook

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';

function App() {
   // cannot nest state hook in any other compfunction (top-level)
  const [ selectedTopic, setSelectedTopic ] = useState(null);

  // Handle TabButton component click event function, note naming convention
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'prop', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => ( // .map() is used to output core_concepts array data from data.jsx
            <CoreConcept key={conceptItem.title} {...conceptItem} /> // key prop is needed for the browser, each child in list must have unique key value
          ))}
        </ul>
        </section>
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
              isSelected={selectedTopic === 'props'}
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
      </main>
    </div>
  );
}

export default App;

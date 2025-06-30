// src/App.tsx

import reactCoreConceptsImg from './assets/react-core-concepts.png';

// Array of descriptions with proper type annotation
const reactDescription: string[] = ['Fundamental', 'Crucial', 'Core'];

// Function to generate a random integer from 0 to max (inclusive)
function genRandomInt(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}

// Main App component
const App: React.FC = () => {
  const description: string = reactDescription[genRandomInt(reactDescription.length - 1)];

  return (
    <div>
      <header>
        <img src={reactCoreConceptsImg} alt="styled atom" />
        <h1>React Essential</h1>
        <p>
          {description} React concepts and patterns for building robust applications.
        </p>
      </header>

      <main>
        <h2>Time to get started</h2>
      </main>
    </div>
  );
};

export default App;
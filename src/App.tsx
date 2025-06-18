import reactCoreConceptsImg from './assets/react-core-concepts.png';


const  reactDescription: string[] = ["Fundamental", "Crucial", "Core"]

function genRandomInt(max:number):number{
  return Math.floor(Math.random() * (max+1));
}

function App() {
  const description:string = reactDescription[genRandomInt(2)];

  return (
    <div>
      <header>
        <img src={reactCoreConceptsImg} alt="styledatom" />
        <h1>React Essential</h1>
        <p>
          {description} React concepts and patterns for building robust applications.
        </p>
      </header>

      <main>
        <h2>
          Time to get started
        </h2>
      </main>
    </div>
  )
}

export default App
import Counter from './components/Counter'
import Counters from './components/Counters'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Counters />
      </div>
    </div>
  );
}

export default App;

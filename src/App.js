
import './App.css';
import Hero from './components/Hero';
import Products from './components/Products';
import Receipt from './components/Receipt';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <Products />
        <Receipt />
      </header>
    </div>
  );
}

export default App;

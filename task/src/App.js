import AddProduct from './AddProduct';
import './App.css';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <div className='container-wrapper'>
        <AddProduct></AddProduct>
        <ProductList></ProductList>
      </div>
    </div>
  );
}

export default App;

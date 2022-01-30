import logo from './logo.svg';
import './App.css';
import Item from './components/item';

function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <div className='header-desc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis architecto neque illum eius error, totam mollitia reiciendis
        officiis quis magnam?
      </div>
      <Item />
    </div>
  );
}

export default App;

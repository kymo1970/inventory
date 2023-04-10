import "./App.css";
import Info from "./info";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
    </div>
  );
}

function AddItem() {
  return (
    <form>
      <label htmlFor="text-form">Item Name: </label>
      <input type="text" id="text-form" />
      <br />
      <label htmlFor="text-form">Item Description: </label>
      <input type="text" id="text-form" />
      <br />
      <label htmlFor="text-form">Item Number: </label>
      <input type="text" id="text-form" />
      <br />
      <label htmlFor="text-form">Item Price: </label>
      <input type="text" id="text-form" />
      <br />
      <label htmlFor="text-form">Item Quantity: </label>
      <input type="text" id="text-form" />
    </form>
  );
}

export default App;

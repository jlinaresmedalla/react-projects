import Button from "./Button.js";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded outline>primary</Button>
      </div>
      <div>
        <Button secondary rounded>secondary</Button>
      </div>
      <div>
        <Button success>success</Button>
      </div>
      <div>
        <Button warning outline>warning</Button>
      </div>
      <div>
        <Button danger rounded outline>danger</Button>
      </div>
    </div>
  );
}

export default App;


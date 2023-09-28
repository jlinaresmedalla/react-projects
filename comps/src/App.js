import Link from "./components/Link.js";
import Route from "./components/Route.js";
import AccordionPage from "./pages/Accordionpage.js";
import DropdownPage from "./pages/DropdownPage.js";

function App() {
  return (
    <div>
      <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;

import SideBar from './components/SideBar.js';
import Route from "./components/Route.js";
import AccordionPage from "./pages/Accordionpage.js";
import DropdownPage from "./pages/DropdownPage.js";
import ButtonPage from './pages/ButtonPage.js';
import ModalPage from './pages/ModalPage.js';
import TablePage from './pages/TablePage.js'

function App() {
  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <SideBar />
      <div className='col-span-5' >
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}

export default App;

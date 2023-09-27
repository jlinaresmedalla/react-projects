import Link from './components/Link';
import Route from './components/Route';
import AcordionPage from './pages/Acordionpage';
import DropdownPage from './pages/DropdownPage';

function App() {
  return (
    <div>
      <Link to="/acordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link>
      <div>
        <Route path="/accordion">
          <AcordionPage />
        </Route>
        <Route path="/drowdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
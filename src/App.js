import './App.css';
import AllRoutes from './pages/AllRoutes/AllRoutes';
import { useAuthenticate } from './services/usersServices/UserService';

function App() {
  useAuthenticate()
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;

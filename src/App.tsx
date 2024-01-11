import { useRoutes } from 'react-router-dom';
import routes from "@/router/route.tsx";
import './App.css';

function App() {

  const outlet = useRoutes(routes);

  return (
    <div className='App'>
      
      {/* <Link to={{
        pathname: 'home'
      }}>Home</Link>
      <Link to='about'>About</Link>
      <Link to='user'>User</Link> */}

      {outlet}
    </div>
  );
}

export default App;
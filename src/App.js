import './app.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Post from './Pages/Post';

function App() {
  return (
    <h1>
      <Navbar />
      {/* <Home />   */}
      {/* <Post/> */}
      <Login />
    </h1>
  );
}

export default App;

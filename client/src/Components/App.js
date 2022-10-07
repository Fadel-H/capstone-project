import {Route, Routes} from "react-router-dom"
import WelcomeScreen from './WelcomeScreen';
import Login from './Login';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

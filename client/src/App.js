import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;

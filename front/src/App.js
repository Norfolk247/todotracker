import './App.css';
import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/appRouter";
import Main from "./pages/main";

function App() {
    const [isLogged, setLogged] = useState(false)
    return (
        <BrowserRouter>
            <AppRouter isLogged={isLogged}/>
            <div className="App">
                <Main isLogged={isLogged} setLogged={setLogged}/>
            </div>
        </BrowserRouter>
  );
}

export default App;

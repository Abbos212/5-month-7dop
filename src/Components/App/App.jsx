import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Main, Registration } from '../../Pages';

const App = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Main />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

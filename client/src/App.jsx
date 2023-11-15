import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Register from "./views/Register/Register";
import Home from "./views/Home/Home";

function App() {
    return (
        <Router>
            <div className="body">
                <Navbar />
                <Routes>
                    <Route path="*" element={<Navigate to={"/"} />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/styles/:id" element={<div>Style</div>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<div>Login</div>} />
                    <Route path="/gallery" element={<div>Gallery</div>} />
                    <Route path="/advices" element={<div>Advices</div>} />
                    <Route
                        path="/tattoo-artists"
                        element={<div>TattooArtist</div>}
                    />
                    <Route
                        path="/make-appointment"
                        element={<div>Make Appointment</div>}
                    />
                    <Route path="/contact" element={<div>Contact</div>} />
                    <Route path="/profile" element={<div>Profile</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

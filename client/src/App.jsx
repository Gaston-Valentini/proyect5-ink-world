import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import TattooStyle from "./views/TattooStyle/TattooStyle";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import TattooArtists from "./views/TattooArtists/TattooArtists";
import Gallery from "./views/Gallery/Gallery";
import Contact from "./views/Contact/Contact";

function App() {
    return (
        <Router>
            <div className="body">
                <Navbar />
                <Routes>
                    <Route path="*" element={<Navigate to={"/"} />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/styles/:name" element={<TattooStyle />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/advices" element={<div>Advices</div>} />
                    <Route
                        path="/tattoo-artists"
                        element={<TattooArtists/>}
                    />
                    <Route
                        path="/make-appointment"
                        element={<div>Make Appointment</div>}
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile" element={<div>Profile</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

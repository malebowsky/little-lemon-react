import { Route, Routes } from "react-router";
import Booking from "../pages/Booking";
import Home from "../pages/Home";

const Main = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
        </Routes>
    );
}

export default Main;
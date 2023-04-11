import { useReducer, useState } from "react";
import { Route, Routes } from "react-router";
import Booking from "../pages/Booking";
import Home from "../pages/Home";

const Main = () => {
    const [formValue, setFormValue] = useState({});
    const [availiableTimes, setAvailiableTimes] = useReducer(updateTimes, initializeTimes);

    function updateTimes() {
        return availiableTimes;
    }

    function initializeTimes() {
        return [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ];
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking
                formValue={formValue}
                setFormValue={setFormValue}
                availiableTimes={availiableTimes}
                setAvailiableTimes={setAvailiableTimes}
            />} />
        </Routes>
    );
}

export default Main;
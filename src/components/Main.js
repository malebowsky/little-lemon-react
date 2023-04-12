import { useReducer, useState } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { fetchAPI, submitAPI } from "../api/api";
import Booking from "../pages/Booking";
import Home from "../pages/Home";
import ConfirmedBooking from "../pages/ConfirmedBooking";

export function updateTimes(state, action) {
    const data = fetchAPI(new Date(action))
    return data;
}

export function initializeTimes() {
    const data = fetchAPI(new Date())
    return data;
}

const Main = () => {
    const [formValue, setFormValue] = useState({});
    const [availiableTimes, setAvailiableTimes] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        const result = submitAPI(formValue);
        if (result) {
            navigate('/confirmation');
        }
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking
                formValue={formValue}
                setFormValue={setFormValue}
                availiableTimes={availiableTimes}
                setAvailiableTimes={setAvailiableTimes}
                submitForm={submitForm}
            />} />
            <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
    );
}

export default Main;
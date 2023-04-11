import { act, render, screen } from "@testing-library/react"
import BookingForm from "../components/BookingForm"
import { initializeTimes, updateTimes } from "../components/Main"

test('Renders BookingForm label', () => {
    render(<BookingForm />)
    const label = screen.getByText(/Choose date/i)
    expect(label).toBeInTheDocument()
})


test('Can submit form', () => {
    render(<BookingForm />)
    const button = screen.getByText(/Make your reservation/i)
    act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
})

test('InitializeTimes returns an array', () => {
    const times = initializeTimes();
    expect(times).toEqual(expect.any(Array))
})

test('InitializeTimes to contain', () => {
    const times = initializeTimes();
    expect(times).toContain("17:00")
})

test('UpdateTimes returns an array', () => {
    const times = updateTimes(initializeTimes());
    expect(times).toEqual(expect.any(Array))
})

test('UpdateTimes to contain', () => {
    const times = updateTimes(initializeTimes());
    expect(times).toContain("17:00")
})
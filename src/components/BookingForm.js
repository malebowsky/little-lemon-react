
const BookingForm = ({
    formValue,
    setFormValue,
    availiableTimes,
    setAvailiableTimes,
    submitForm
}) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <form style={{ display: 'grid', maxWidth: '200px', gap: '16px' }} onSubmit={submitForm}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" required id="res-date" name="res-date" aria-label="Select date" onChange={(e) => {
                    setFormValue({ ...formValue, date: e.target.value });
                    setAvailiableTimes(e.target.value);
                }} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" aria-label="Choose available time" required onChange={(e) => setFormValue({ ...formValue, time: e.target.value })}>
                    <option value="">Choose an option</option>
                    {!!availiableTimes && availiableTimes.map((time, index) => (
                        <option key={index}>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" id="guests" name="guests" aria-label="Number of guests" required min="1" max="10" placeholder="1" onChange={(e) => setFormValue({ ...formValue, guest: e.target.value })} />
                <label htmlFor="ocassion">Ocassion</label>
                <select id="ocassion" aria-label="Choose ocassion" required onChange={(e) => setFormValue({ ...formValue, ocassion: e.target.value })}>
                    <option value="">Choose an option</option>
                    <option>Anniversary</option>
                    <option>Birthday</option>
                </select>
                <button type="submit" aria-label="On Click">
                    Make your reservation
                </button>
            </form>
        </div>
    )
}

export default BookingForm;
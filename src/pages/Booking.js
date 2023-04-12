import BookingForm from "../components/BookingForm";

function Booking({
  formValue,
  setFormValue,
  availiableTimes,
  setAvailiableTimes,
  submitForm
}) {
  return (
    <>
      <BookingForm
        formValue={formValue}
        setFormValue={setFormValue}
        availiableTimes={availiableTimes}
        setAvailiableTimes={setAvailiableTimes}
        submitForm={submitForm}
      />
    </>
  );
}

export default Booking;

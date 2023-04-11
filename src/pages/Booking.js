import BookingForm from "../components/BookingForm";

function Booking({
  formValue,
  setFormValue,
  availiableTimes,
  setAvailiableTimes,
}) {
  return (
    <>
      <BookingForm
        formValue={formValue}
        setFormValue={setFormValue}
        availiableTimes={availiableTimes}
        setAvailiableTimes={setAvailiableTimes}
      />
    </>
  );
}

export default Booking;

import './ReservationForm.css';

function ReservationForm() {
  return (
    <section id="reservation">
      <div className="container">
        <h1>Little Lemon</h1>
        <h2>Reservation</h2>
        <form>
          <div className="input-group">
            <label htmlFor="date">Choose a date</label>
            <input type="date" id="date" name="date" required />
          </div>
          <div className="input-group">
            <label htmlFor="time">Choose a time</label>
            <input type="time" id="time" name="time" required />
          </div>
          <div className="input-group">
            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" name="guests" required />
          </div>
          <div className="input-group">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" required>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="date">Date</option>
              <option value="business">Business</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="btn">Reserve</button>
        </form>
      </div>
    </section>
  );
}

export default ReservationForm;
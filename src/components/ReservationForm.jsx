import Swal from 'sweetalert2'
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { FaExclamationTriangle } from "react-icons/fa";

import './ReservationForm.css';

function ReservationForm() {
  const initialValues = {
    date: '',
    time: '',
    guests: '',
    occasion: 'birthday'
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      // Randomly mock error or success
      if (Math.random() > 0.5) {
        Swal.fire({
          icon: 'success',
          title: 'Reservation Successful (mocked)',
          text: 'We look forward to seeing you soon!',
          confirmButtonColor: '#f4ce14'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Reservation Failed (mocked)',
          text: 'Please try again later.',
          confirmButtonColor: '#f4ce14'
        });
      }
      setSubmitting(false);
    }, 600);
  }

  const renderError = props => (
    <div className="error">
      <FaExclamationTriangle size={20} />
      {props}
    </div>
  )

  const validationSchema = Yup.object({
    date: Yup.string().required('Required'),
    time: Yup.string().required('Required'),
    guests: Yup.number().required('Required').positive('Must be a positive number').integer('Must be a whole number'),
    occasion: Yup.string().required('Required')
  });

  return (
    <section id="reservation">
      <div className="container">
        <h1>Little Lemon</h1>
        <h2>Reservation</h2>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="date">Choose a date*</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                  required
                />
                <ErrorMessage
                  name="date"
                  render={renderError}
                />
              </div>
              <div className="input-group">
                <label htmlFor="time">Choose a time*</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.time}
                  required
                />
                <ErrorMessage
                  name="time"
                  render={renderError}
                />
              </div>
              <div className="input-group">
                <label htmlFor="guests">Number of guests*</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.guests}
                  required
                />
                <ErrorMessage
                  name="guests"
                  render={renderError}
                />
              </div>
              <div className="input-group">
                <label htmlFor="occasion">Occasion*</label>
                <select
                  id="occasion"
                  name="occasion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.occasion}
                  required
                >
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="date">Date</option>
                  <option value="business">Business</option>
                  <option value="other">Other</option>
                </select>
                <ErrorMessage
                  name="occasion"
                  render={renderError}
                />
              </div>
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Reserving...' : 'Reserve'}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default ReservationForm;
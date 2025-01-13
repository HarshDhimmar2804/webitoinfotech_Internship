import { Link, useLocation } from "react-router-dom";
import "./FormPage.css";

export const DetailPage = () => {
  const location = useLocation();
  const formData = location.state;

  if (!formData) {
    return (
      <p>
        No form data found. Go back to the <Link to="/">form page</Link>.
      </p>
    );
  }

  return (
    <div className="details-container">
      <h1>Details Page</h1>
      <table className="details-table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{formData.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{formData.email}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{formData.phone}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/" className="back-link">Go Back</Link>
    </div>
  );
};

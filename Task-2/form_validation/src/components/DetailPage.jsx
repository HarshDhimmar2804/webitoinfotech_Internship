import { Link, useLocation } from "react-router-dom";

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
      <p>
        <strong>Name:</strong> {formData.name}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

import { useContext, useMemo } from "react";
import { FormContext } from "./FormContext";
import { Link } from "react-router-dom";
import "./FormPage.css";

const DetailsPage = () => {
  const { formData } = useContext(FormContext);

  const tableRows = useMemo(() => {
    if (!formData) return null;
    return [
      { field: "Name", value: formData.name },
      { field: "Email", value: formData.email },
      { field: "Phone Number", value: formData.phone },
    ];
  }, [formData]);

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
          {tableRows.map((row, index) => (
            <tr key={index}>
              <td>{row.field}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/" className="back-link">
        Go Back
      </Link>
    </div>
  );
};

export default DetailsPage;

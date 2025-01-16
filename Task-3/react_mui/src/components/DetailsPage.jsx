import { useLocation } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const DetailsPage = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Submitted Details
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(formData).map(([key, value]) => (
              <TableRow key={key}>
                <TableCell>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DetailsPage;

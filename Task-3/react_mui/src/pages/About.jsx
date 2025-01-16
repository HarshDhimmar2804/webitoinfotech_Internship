import { Typography } from '@mui/material';
import CommonCard from '../components/CommonCard';

const About = () => {
  return (
    <div>
      <Typography variant="h4">About Page</Typography>
      <CommonCard title="About React App" content="This is a simple React app with Material-UI and routing." />
    </div>
  );
};

export default About;

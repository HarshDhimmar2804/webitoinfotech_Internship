import { Card, CardContent, Typography } from '@mui/material';

const CommonCard = ({ title, content }) => {
  return (
    <Card sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default CommonCard;

import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Box>
        <Typography variant="h3" fontWeight="bold" mb={2}>
          404
        </Typography>
        <Typography variant="h6" mb={3}>
          Page not found
        </Typography>

        <Button component={Link} href="/dashboard" variant="contained">
          Back to Dashboard
        </Button>
      </Box>
    </Box>
  );
}
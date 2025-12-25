import DownloadApp from "@/components/DownloadApp/DownloadApp";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Next.js Tauri PWA
      </Typography>
      <Typography variant="body1">
        This is a high-performance application running as a PWA and Native App.
      </Typography>
      <DownloadApp />
    </Box>
  );
};

export default Home;
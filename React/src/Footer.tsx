import {
  AppBar,
  Box,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const Footer = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0, ml: 1 }}>
        <Toolbar>
          <NavLink to="https://github.com/NickGM23" className="text-lg">
            <GitHubIcon sx={{ color: "#fdfafa", ml: 3 }} />
          </NavLink>
          <NavLink to="https://t.me/@NickGM" className="text-lg">
            <TelegramIcon sx={{ color: "#fdfafa", ml: 2 }} />
          </NavLink>
          <Box sx={{ flexGrow: 1 }} />
          <Typography component="div" marginRight={2}>
            © 2024. Dev: NickGM
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Footer;

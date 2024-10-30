import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LogoutIcon from "@mui/icons-material/Logout";
import HouseIcon from "@mui/icons-material/House";
import GroupsIcon from "@mui/icons-material/Groups";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "./index.css";
import { CustomLink } from "./components/CustomLink";

<style></style>;

let isLogined: boolean = false;
let isUserVolunteer: boolean = false;

function Navigation() {
  const links = [
    {
      title: "Главная",
      to: "/",
      icon: HouseIcon,
    },
    {
      title: "Волонтеры",
      to: "volonters",
      icon: GroupsIcon,
    },
    {
      title: "Помощь животным",
      to: "helppets",
      icon: MonetizationOnIcon,
    },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ mr: 2, ml: 2 }}>
          <NavLink to="/" className="text-lg">
            <img src={logo} alt="Логотип" />
          </NavLink>
        </Typography>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PetFamile
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          {links.map((link) => (
            <CustomLink to={link.to}>
              <link.icon sx={{ color: "#fdfafa", ml: 3, mr: 1 }} />
              {link.title}
            </CustomLink>
          ))}
        </Box>

        <Box sx={{ flexGrow: 1 }}></Box>
        <Box sx={{ mr: 1 }}>
          {isLogined ? (
            <>
              {!isUserVolunteer && (
                <NavLink to="/bookmark">
                  <BookmarkIcon sx={{ color: "#fdfafa", ml: 1 }} />
                </NavLink>
              )}
              <NavLink to="/account">
                <AccountBoxIcon sx={{ color: "#fdfafa", ml: 1 }} />
              </NavLink>
              <NavLink to="/logout">
                <LogoutIcon sx={{ color: "#fdfafa", ml: 1 }} />
              </NavLink>
            </>
          ) : (
            <NavLink to="/login">
              <AccountBoxIcon sx={{ color: "#fdfafa", ml: 1 }} />
            </NavLink>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;

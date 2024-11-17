import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LogoutIcon from "@mui/icons-material/Logout";
import HouseIcon from "@mui/icons-material/House";
import GroupsIcon from "@mui/icons-material/Groups";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.css";
import { CustomLink } from "./components/CustomLink";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useState, MouseEvent } from "react";

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

  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            id="demo-positioned-button"
            size="large"
            edge="start"
            onClick={openMenu}
            aria-controls="demo-positioned-menu"
            sx={{
              display: { xs: "flex" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={Boolean(anchorNav)}
            onClose={closeMenu}
            sx={{
              marginTop: 8,
              width: 300,
              height: 290,
              display: { xs: "flex", md: "none" },
              border: "3px #7e4a4a",
            }}
          >
            <MenuList
              sx={{
                flexDirection: "row",
                width: 250,
                height: "auto",
                border: "3px grey",
              }}
            >
              {links.map((link, i) => (
                <MenuItem
                  key={i}
                  component={Link}
                  to={link.to}
                  onClick={closeMenu}
                >
                  <link.icon sx={{ mr: 2, ml: 1 }} />
                  {link.title}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>

        <Typography variant="h6" component="div" sx={{ mr: 2, ml: 2 }}>
          <NavLink to="/" className="text-lg">
            <img src={logo} alt="Логотип" />
          </NavLink>
        </Typography>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PetFamile
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {links.map((link, i) => (
            <CustomLink key={i} to={link.to}>
              <link.icon sx={{ color: "#fdfafa", ml: 3, mr: 1 }} />
              {link.title}
            </CustomLink>
          ))}
        </Box>

        <Box sx={{ mr: 1 }}>
          {isLogined ? (
            <>
              {!isUserVolunteer && (
                <Tooltip title="избранное" arrow enterDelay={500}>
                  <NavLink to="/bookmark">
                    <BookmarkIcon sx={{ color: "#fdfafa", ml: 1 }} />
                  </NavLink>
                </Tooltip>
              )}
              <Tooltip title="аккаунт" arrow enterDelay={500}>
                <NavLink to="/account">
                  <AccountBoxIcon sx={{ color: "#fdfafa", ml: 1 }} />
                </NavLink>
              </Tooltip>
              <Tooltip title="выйти" arrow enterDelay={500}>
                <NavLink to="/logout">
                  <LogoutIcon sx={{ color: "#fdfafa", ml: 1 }} />
                </NavLink>
              </Tooltip>
            </>
          ) : (
            <Tooltip title="войти" arrow enterDelay={500}>
              <NavLink to="/login">
                <AccountBoxIcon sx={{ color: "#fdfafa", ml: 1 }} />
              </NavLink>
            </Tooltip>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;

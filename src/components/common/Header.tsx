import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Home", onClick: "/" },
  { label: "Pokemon", onClick: "/pokemon" },
  { label: "Pokedex", onClick: "/pokedex" },
  { label: "Pokemon to pdf", onClick: "/pokemon/pdf" },
];

export default function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (path: string) => {
    navigate(path);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}><Typography variant="h2"sx={{margin: "0 1rem 0 1rem"}}>Bestiary</Typography></a>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon sx={{width: "2rem", height: "2rem"}}/>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ textAlign: "center"}}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.label} onClick={() => handleMenuClick(item.onClick)}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

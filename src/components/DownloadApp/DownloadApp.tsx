"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, Menu, MenuItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { FaAndroid, FaApple, FaWindows, FaLinux, FaDownload } from "react-icons/fa";
import { getDownloadLinks, isTauri } from "@/common/utils/download";

const DownloadApp = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const open = Boolean(anchorEl);
  const links = getDownloadLinks();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Don't show the download button if we are already inside the Tauri app
  if (!mounted || isTauri()) {
    return null;
  }

  return (
    <Box sx={{ mt: 2 }}>
      <Button
        variant="contained"
        startIcon={<FaDownload />}
        onClick={handleClick}
        sx={{ borderRadius: 2, textTransform: "none" }}
      >
        Download App
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={() => window.open(links.windows, "_blank")}>
          <ListItemIcon>
            <FaWindows />
          </ListItemIcon>
          <ListItemText>Windows</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => window.open(links.macos, "_blank")}>
          <ListItemIcon>
            <FaApple />
          </ListItemIcon>
          <ListItemText>macOS</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => window.open(links.linux, "_blank")}>
          <ListItemIcon>
            <FaLinux />
          </ListItemIcon>
          <ListItemText>Linux</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => window.open(links.android, "_blank")}>
          <ListItemIcon>
            <FaAndroid />
          </ListItemIcon>
          <ListItemText>Android</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => window.open(links.ios, "_blank")}>
          <ListItemIcon>
            <FaApple />
          </ListItemIcon>
          <ListItemText>iOS / iPhone</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default DownloadApp;

"use client";
import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useRouter, usePathname } from "next/navigation";
import { routeIcons, routes } from "@/config/navigation";

const drawerWidth = 300;

const Sidebar = ({ role }) => {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState({});

  const handleClick = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  const renderListItems = (items, parentIndex = "") => (
    <>
      {items.map((item, index) => {
        const key = parentIndex ? `${parentIndex}-${index}` : `${index}`;
        const isParent = !parentIndex; // Check if the item is a parent or a child
        return (
          <React.Fragment key={key}>
            <ListItem
              button
              onClick={() => {
                router.push(item.path);
                if (item.children) {
                  handleClick(key);
                }
              }}
              selected={pathname === item.path}
              sx={{
                pl: parentIndex ? 4 : 2,
                fontWeight: 600,
                fontSize: "12px",
                color:
                  pathname === item.path
                    ? theme.palette.secondary.main
                    : theme.palette.text.secondary,
                backgroundColor:
                  pathname === item.path
                    ? theme.palette.action.selected
                    : "inherit",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                  color: theme.palette.secondary.main,
                  "& .MuiListItemIcon-root": {
                    color: theme.palette.secondary.main,
                  },
                },
                mb: 1,
                borderRadius: "8px",
                paddingY: theme.spacing(1.5),
                paddingX: theme.spacing(2),
              }}
            >
              {isParent && (
                <ListItemIcon sx={{ minWidth: 0, mr: 1.5, fontSize: "20px" }}>
                  {routeIcons[item.text]}
                </ListItemIcon>
              )}
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>
                    {item.text}
                  </Typography>
                }
              />
              {item.children && !open[key] && <ExpandMore />}
              {item.children && open[key] && <ExpandLess />}
            </ListItem>
            {item.children && (
              <Collapse in={open[key]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ pl: 4 }}>
                  {renderListItems(item.children, key)}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        );
      })}
    </>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: theme.palette.grey[100],
          borderRight: `1px solid ${theme.palette.divider}`,
        },
      }}
    >
      <Box
        sx={{ height: "100%", overflowY: "auto" }}
        className="custom-scrollbar"
      >
        <Box
          sx={{
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottom: `1px solid ${theme.palette.divider}`,
            mb: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="div" fontWeight={600}>
            Your Logo
          </Typography>
        </Box>
        <List>{renderListItems(routes[role] || [])}</List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

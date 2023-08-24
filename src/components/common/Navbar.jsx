import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useContext } from "react";
import PageContext from "../../contexts/pageContext";
import { FolderSharedIcon, MenuIcon } from "./Icons";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = React.useState(false);
  const pageContext = useContext(PageContext);

  return (
    <AppBar color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <FolderSharedIcon
              style={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            DToroDev
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <FolderSharedIcon
              style={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            DToroDev
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            {pageContext.page.map((page) => (
              <Button
                key={page.id}
                onClick={() => setDisplayMenu(false)}
                sx={{ my: 2, color: "inherit", display: "block" }}
                href={page.to}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", justifyContent: "flex-end" },
            }}
          >
            <Paper
              sx={{
                position: "absolute",
                width: "100%",
                display: displayMenu ? "flex" : "none",
                justifyContent: "center",
                flexDirection: "column",
                maxHeight: "20rem",
                overflowY: "auto",
                top: "3rem",
              }}
            >
              {pageContext.page.map((page) => (
                <Button
                  key={page.id}
                  onClick={() => setDisplayMenu(false)}
                  sx={{ my: 2, color: "inherit", display: "block" }}
                  href={page.to}
                >
                  {page.name}
                </Button>
              ))}
            </Paper>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setDisplayMenu(!displayMenu)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

import { Box, Container, Typography, useTheme } from "@mui/material";
import { useState } from "react";

interface HeaderProps {
  title: string;
  version: number;
}

const Header = ({ title, version }: HeaderProps) => {
  const theme = useTheme();
  const [menuPrinted, setMenuPrinted] = useState(false);

  const handleClick = () => {
    console.log(`value of menuPrinted before click: ${menuPrinted}`);
    setMenuPrinted(!menuPrinted);
  }

  return (
    <Box
      component="header"
      sx={{
        px: 2,
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.primary.light
            : theme.palette.primary.dark,
        color: (theme) => theme.palette.primary.contrastText,
      }}
      onClick={handleClick}
    >
      <Container maxWidth="sm">
        <Typography variant="h1">
          {menuPrinted ? `${title}... and rarely do we hate it!` : title}
        </Typography>
        <h4>Version: {version}</h4>
      </Container>
    </Box>
  );
};

export default Header;
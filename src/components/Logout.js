import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const Logout = () => {
  const { logout } = useAuth0();
  return (
    <Button  variant="contained" sx={{background: "#FC1503", color: "white"}} onClick={() => logout()}>
      Log Out
    </Button>
  );
};

export default Logout;

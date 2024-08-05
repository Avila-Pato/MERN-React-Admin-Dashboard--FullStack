import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "components/navBar";
import SideBar from "components/sideBar";

//creabdo la llamada api
import { useGetUserQuery } from "state/api";


const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // desde aqui se llama a la api
  const userId = useSelector((state) => state.global.userId);
  // lo esctructuramos
  const { data } = useGetUserQuery(userId);

  return (
    <Box
      display={isNonMobile ? "flex" : "block"}
      width={"100%"}
      height={"100%"}
    >
      <SideBar
      // le pasamos el usuario que traemos de la api EL {} previene que el sitio se ronpa
      user={data || {}}

        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <NavBar
        user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;

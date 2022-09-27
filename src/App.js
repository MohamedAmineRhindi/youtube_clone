import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Auth0ProviderWithHistory from "./auth0ProviderWithHistory";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Box sx={{ backgroundColor: "#000" }}></Box>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
};

export default App;

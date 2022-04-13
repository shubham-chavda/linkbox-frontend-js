import React from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NotFound from "./Components/NotFound";
import Login from "./Scenes/Login";

const Routes = () => (
	<Router>
          <Route index element={<Login />} />
          {/* <Route path="/dashboard" element={<Layout />}/> */}
          <Route path="*" element={<NotFound />} />
    </Router>
);

export default Routes;

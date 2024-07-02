// src/components/Layout.js

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Layout = ({ isLoggedIn, handleSignout }) => {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#1e3a8a' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Employee Management Dashboard
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          {!isLoggedIn && (
            <>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/register-employee">Register Employee</Button>
            </>
          )}
          {isLoggedIn && (
            <Button color="inherit" onClick={handleSignout}>Signout</Button>
          )}
        </Toolbar>
      </AppBar>
      <div style={{ padding: 20 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

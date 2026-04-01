"use client";

import { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import PageContainer from "@/components/shared/PageContainer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <PageContainer>
      <Box
        sx={{
          maxWidth: 400,
          mx: "auto",
          mt: 8,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5" fontWeight="bold" textAlign="center">
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </PageContainer>
  );
};

export default LoginPage;
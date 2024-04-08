import React from "react";
import { TextField, Button, Box, Container } from "@mui/material";

const CreateProduct = ({ handleChange, handleSubmit }) => {
  return (
    <div>
    <Container maxWidth="xs">
      <h1>Crear un nuevo producto</h1>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex",
            flexDirection: "column",
            alignItems: "center", }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nombre del producto"
            name="name"
            autoComplete="Nombre del producto"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="price"
            label="Precio del producto"
            name="price"
            autoComplete="Precio del producto"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="stock"
            label="Stock del producto"
            name="stock"
            autoComplete="Stock del producto"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="img"
            label="Imagen del producto"
            name="img"
            autoComplete="Imagen del producto"
            autoFocus
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#3E6765"}}
          >
            Crear
          </Button>
      </Box>
      </Container>
    </div>
  );
};

export default CreateProduct;

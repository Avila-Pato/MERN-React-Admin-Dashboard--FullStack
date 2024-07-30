import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "center", // Nota: "width: 'center'" no es válido, podrías querer usar "alignItems: 'center'" o ajustar el ancho según sea necesario
});

export default FlexBetween;

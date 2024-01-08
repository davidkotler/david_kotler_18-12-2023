import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
      //   darkMode: "#ffffff",
    },
    text: {
      primary: "#6930c3",
      secondary: "#ffffff",
    },
    border: "#6930c3",
  },
});
export default theme;
// export const darkTheme = createTheme({
//   palette: {
//     background: {
//       default: "#0a0a0a",
//       //   darkMode: "#ffffff",
//     },
//     text: {
//       primary: "#6930c3",
//       secondary: "#6930c3",
//     },
//     border: "#6930c3",
//   },
// });

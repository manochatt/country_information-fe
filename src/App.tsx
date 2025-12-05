// import { Provider } from "react-redux";
// import { store } from "@/stores";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <RouterProvider router={routers} />
      {/* </Provider> */}
    </>
  );
}

export default App;

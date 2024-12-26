import {RouterProvider} from "react-router-dom";
import { CssBaseline,ThemeProvider,createTheme,Container } from "@mui/material";
import router from "./components/Routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";

const darkTheme = createTheme({
  palette:{
    mode:"dark"
  }
});

function App() {
  return (
   <ApolloProvider client={client}>
     <ThemeProvider theme={darkTheme}>
      <CssBaseline>
       <Container>
       <RouterProvider future={{v7_startTransition: true}} router={router} />
       </Container>
      </CssBaseline>
    </ThemeProvider>
   </ApolloProvider>
  );
}

export default App;

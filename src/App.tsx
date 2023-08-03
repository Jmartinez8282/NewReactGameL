import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./componets/NavBar";
import ColorModeSwitch from "./componets/ColorModeSwitch";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, // 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar/>
      
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="blue">
      </GridItem>
    </Grid>
  );
}

export default App;

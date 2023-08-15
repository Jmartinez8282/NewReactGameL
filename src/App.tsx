import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./componets/NavBar";
import ColorModeSwitch from "./componets/ColorModeSwitch";
import GameGrid from "./componets/GameGrid";
import GenreList from "./componets/GenreList";

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
        <GridItem area="aside" paddingX={5}>
        <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main" >
       <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;

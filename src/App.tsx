import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { textAlign } from "@mui/system";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Decision Making Helper</h1>
      </header>
      <main className="container">
        <h2>Weightings:</h2>
        <h3>Taste: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              console.log(e.target);
            }}
            min={0}
            max={1}
            step={0.1}
          />
        </Box>
        <h3>Value for Money: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              console.log(e.target);
            }}
            min={0}
            max={1}
            step={0.1}
          />
        </Box>
        <h3>Healthiness: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              console.log(e.target);
            }}
            min={0}
            max={1}
            step={0.1}
          />
        </Box>
        <h2>Choices:</h2>
        <h2>Lasagne:</h2>
        <h3>Taste: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              console.log(e.target);
            }}
          />
        </Box>
        <h3>Value for Money: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              console.log(e.target);
            }}
          />
        </Box>
        <h3>Healthiness: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              console.log(e.target);
            }}
          />
        </Box>
        <h2>Chicken wings:</h2>
        <h3>Taste: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              console.log(e.target);
            }}
          />
        </Box>
        <h3>Value for Money: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              console.log(e.target);
            }}
          />
        </Box>
        <h3>Healthiness: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              console.log(e.target);
            }}
          />
        </Box>
        <h2>Salad:</h2>
        <h3>Taste: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              console.log(e.target);
            }}
          />
        </Box>
        <h3>Value for Money: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              console.log(e.target);
            }}
          />
        </Box>
        <h3>Healthiness: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              console.log(e.target);
            }}
          />
        </Box>
      </main>
    </div>
  );
}

export default App;

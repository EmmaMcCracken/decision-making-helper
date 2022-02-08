import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useReducer } from "react";
import "./css/App.css";

interface ChoiceI {
  name: string;
  weightings: number[];
}

interface AttributeI {
  name: string;
  weighting: number;
}

interface StateI {
  choices: ChoiceI[];
  attributes: AttributeI[];
}

function reducer(state: StateI, action: any) {
  switch (action.type) {
    case "update_choice": {
      return { ...state };
    }
    case "update_attribute": {
      return { ...state };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialState = {
  choices: [
    { name: "Lasasgne", weightings: [50, 22, 52] },
    { name: "Chicken Wings", weightings: [83, 81, 10] },
    { name: "Salad", weightings: [16, 10, 92] },
  ],
  attributes: [
    { name: "Taste", weighting: 1 },
    { name: "Value for Money", weighting: 0.7 },
    { name: "Taste", weighting: 1 },
  ],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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

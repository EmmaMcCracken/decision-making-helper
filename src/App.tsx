import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useReducer } from "react";
import "./css/App.css";
import { reducer, initialState } from "./utils/reducer";
import findScores from "./utils/findScores";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const scores = findScores(state);
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
              const element = e.target as HTMLInputElement;
              dispatch({
                type: "update_attribute_weighting",
                choiceId: 0,
                attributeId: 0,
                weighting: parseFloat(element.value),
              });
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
              const element = e.target as HTMLInputElement;
              dispatch({
                type: "update_attribute_weighting",
                attributeId: 1,
                weighting: parseFloat(element.value),
              });
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
              const element = e.target as HTMLInputElement;
              dispatch({
                type: "update_attribute_weighting",
                attributeId: 2,
                weighting: parseFloat(element.value),
              });
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
              const element = e.target as HTMLInputElement;
              dispatch({
                type: "update_choice_weighting",
                choiceId: 0,
                attributeId: 0,
                weighting: parseFloat(element.value),
              });
            }}
          />
        </Box>
        <h3>Value for Money: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              const element = e.target as HTMLInputElement;
              dispatch({
                type: "update_choice_weighting",
                choiceId: 0,
                attributeId: 1,
                weighting: parseFloat(element.value),
              });
            }}
          />
        </Box>
        <h3>Healthiness: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              const element = e.target as HTMLInputElement;
              dispatch({
                type: "update_choice_weighting",
                choiceId: 0,
                attributeId: 2,
                weighting: parseFloat(element.value),
              });
            }}
          />
        </Box>
        <h2>Chicken wings:</h2>
        <h3>Taste: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              const element = e.target as HTMLInputElement;
              dispatch({
                type: "update_choice_weighting",
                choiceId: 1,
                attributeId: 0,
                weighting: parseFloat(element.value),
              });
            }}
          />
        </Box>
        <h3>Value for Money: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              const element = e.target as HTMLInputElement;
              dispatch({
                type: "update_choice_weighting",
                choiceId: 1,
                attributeId: 1,
                weighting: parseFloat(element.value),
              });
            }}
          />
        </Box>
        <h3>Healthiness: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              const element = e.target as HTMLInputElement;
              dispatch({
                type: "update_choice_weighting",
                choiceId: 1,
                attributeId: 2,
                weighting: parseFloat(element.value),
              });
            }}
          />
        </Box>
        <h2>Salad:</h2>
        <h3>Taste: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              const element = e.target as HTMLInputElement;
              dispatch({
                type: "update_choice_weighting",
                choiceId: 2,
                attributeId: 0,
                weighting: parseFloat(element.value),
              });
            }}
          />
        </Box>
        <h3>Value for Money: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              const element = e.target as HTMLInputElement;
              dispatch({
                type: "update_choice_weighting",
                choiceId: 2,
                attributeId: 1,
                weighting: parseFloat(element.value),
              });
            }}
          />
        </Box>
        <h3>Healthiness: </h3>
        <Box sx={{ width: 200, margin: "0 auto" }}>
          <Slider
            defaultValue={50}
            onChange={(e) => {
              const element = e.target as HTMLInputElement;
              dispatch({
                type: "update_choice_weighting",
                choiceId: 2,
                attributeId: 2,
                weighting: parseFloat(element.value),
              });
            }}
          />
        </Box>
        <h1>The scores are:</h1>
        <h3>Lasagne: {scores[0]}</h3>
        <h3>Chicken Wings: {scores[1]}</h3>
        <h3>Salad: {scores[2]}</h3>
      </main>
    </div>
  );
}

export default App;

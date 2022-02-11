import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useReducer } from "react";
import "./css/App.css";
import { reducer, initialState } from "./utils/reducer";
import findScores from "./utils/findScores";
import ReactFlow from "react-flow-renderer";
import makeAttributeElements from "./utils/makeAttributeElements";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const scores = findScores(state);

  const attributeElements = makeAttributeElements(state.attributes, dispatch);

  const choiceElements = [
    {
      id: "4",
      data: {
        label: (
          <>
            <h2>Lasagne:</h2>
            <h3>Taste: {state.choices[0].weightings[0]} </h3>
            <Box className="nodrag" sx={{ width: 100, margin: "0 auto" }}>
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
            <h3>Value for Money: {state.choices[0].weightings[1]} </h3>
            <Box className="nodrag" sx={{ width: 100, margin: "0 auto" }}>
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
            <h3>Healthiness: {state.choices[0].weightings[2]} </h3>
            <Box className="nodrag" sx={{ width: 100, margin: "0 auto" }}>
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
          </>
        ),
      },
      position: { x: 250, y: 200 },
    },
    {
      id: "5",
      data: {
        label: (
          <>
            <h2>Chicken wings:</h2>
            <h3>Taste: {state.choices[1].weightings[0]}</h3>
            <Box className="nodrag" sx={{ width: 100, margin: "0 auto" }}>
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
            <h3>Value for Money: {state.choices[1].weightings[1]} </h3>
            <Box className="nodrag" sx={{ width: 100, margin: "0 auto" }}>
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
            <h3>Healthiness: {state.choices[1].weightings[2]} </h3>
            <Box className="nodrag" sx={{ width: 100, margin: "0 auto" }}>
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
          </>
        ),
      },
      position: { x: 500, y: 200 },
    },
    {
      id: "7",
      data: {
        label: (
          <>
            <h2>Salad:</h2>
            <h3>Taste: {state.choices[2].weightings[0]} </h3>
            <Box className="nodrag" sx={{ width: 100, margin: "0 auto" }}>
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
            <h3>Value for Money: {state.choices[2].weightings[1]} </h3>
            <Box className="nodrag" sx={{ width: 100, margin: "0 auto" }}>
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
            <h3>Healthiness: {state.choices[2].weightings[2]} </h3>
            <Box className="nodrag" sx={{ width: 100, margin: "0 auto" }}>
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
          </>
        ),
      },
      position: { x: 750, y: 200 },
    },
    {
      id: "6",
      data: {
        label: (
          <>
            <h1>Scores:</h1>
            <h3>Lasagne: {scores[0]}</h3>
            <h3>Chicken Wings: {scores[1]}</h3>
            <h3>Salad: {scores[2]}</h3>
          </>
        ),
      },
      position: { x: 500, y: 600 },
    },
  ];

  const elements = attributeElements.concat(choiceElements);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Decision Making Helper</h1>
      </header>
      <main className="container">
        <div style={{ width: "90%", height: "100vh", margin: "auto" }}>
          <ReactFlow
            elements={elements}
            style={{ border: "10px solid grey" }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;

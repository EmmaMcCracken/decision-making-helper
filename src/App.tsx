import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useReducer } from "react";
import "./css/App.css";
import { reducer, initialState } from "./utils/reducer";
import findScores from "./utils/findScores";
import ReactFlow from "react-flow-renderer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const scores = findScores(state);

  const elements = [
    {
      id: "1",
      data: {
        label: (
          <>
            <h3>Taste: </h3>
            <Box className="nodrag" sx={{ width: 100, margin: "0 auto" }}>
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
          </>
        ),
      },
      position: { x: 250, y: 20 },
    },
    {
      id: "2",
      data: { label: "Node 2" },
      position: { x: 500, y: 20 },
    },
    { id: "3", data: { label: "Node 3" }, position: { x: 750, y: 20 } },
    { id: "e1-2", source: "1", target: "2", animated: true },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Decision Making Helper</h1>
      </header>
      <main className="container">
        <div style={{ width: "100%", height: "100vh" }}>
          <ReactFlow elements={elements} />
        </div>

        <h2>Weightings:</h2>

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

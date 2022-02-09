import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useReducer } from "react";
import "./css/App.css";

interface ChoiceI {
  choiceId: number;
  name: string;
  weightings: number[];
}

interface AttributeI {
  attributeId: number;
  name: string;
  weighting: number;
}

interface StateI {
  choices: ChoiceI[];
  attributes: AttributeI[];
}

function reducer(state: StateI, action: any) {
  switch (action.type) {
    case "update_attribute_weighting": {
      console.log(state);
      const newAttributes = state.attributes.map((attribute) =>
        attribute.attributeId === action.attributeId
          ? { ...attribute, weighting: action.weighting }
          : attribute
      );
      return {
        choices: state.choices,
        attributes: newAttributes,
      };
    }
    case "update_choice_weighting": {
      const newChoices = state.choices.map((choice) => {
        if (choice.choiceId === action.choiceId) {
          const newWeightings = choice.weightings;
          newWeightings[action.attributeId] = action.weighting;
          return {
            ...choice,
            weightings: newWeightings,
          };
        }
        return choice;
      });
      return { choices: newChoices, attributes: state.attributes };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialState = {
  choices: [
    { choiceId: 0, name: "Lasasgne", weightings: [50, 50, 50] },
    { choiceId: 1, name: "Chicken Wings", weightings: [50, 50, 50] },
    { choiceId: 2, name: "Salad", weightings: [50, 50, 50] },
  ],
  attributes: [
    { attributeId: 0, name: "Taste", weighting: 1 },
    { attributeId: 1, name: "Value for Money", weighting: 1 },
    { attributeId: 2, name: "Healthiness", weighting: 1 },
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
      </main>
    </div>
  );
}

export default App;

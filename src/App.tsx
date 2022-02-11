import { useReducer } from "react";
import "./css/App.css";
import { reducer, initialState } from "./utils/reducer";
import findScores from "./utils/findScores";
import ReactFlow from "react-flow-renderer";
import makeAttributeElements from "./utils/makeAttributeElements";
import makeChoiceElements from "./utils/makeChoiceElements";
import { ElementI } from "./utils/Interfaces";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { choices, attributes } = state;
  const scores = findScores(state);

  const attributeElements = makeAttributeElements(attributes, dispatch);

  const choiceElements = makeChoiceElements(state, dispatch);

  const scoreElement = [
    {
      id: (choices.length + attributes.length).toString(),
      data: {
        label: (
          <>
            <h1>Scores:</h1>
            {choices.map((choice, id) => (
              <h3>
                {choice.name}: {scores[id]}
              </h3>
            ))}
          </>
        ),
      },
      position: { x: 500, y: 600 },
    },
  ];

  const elements: ElementI[] = attributeElements
    .concat(choiceElements)
    .concat(scoreElement);

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

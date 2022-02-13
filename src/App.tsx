import { useReducer } from "react";
import "./css/App.css";
import { reducer, initialState } from "./utils/reducer";
import findScores from "./utils/findScores";
import ReactFlow from "react-flow-renderer";
import makeAttributeElements from "./utils/makeAttributeElements";
import makeChoiceElements from "./utils/makeChoiceElements";
import { ElementI } from "./utils/Interfaces";
import indexOfMax from "./utils/indexOfMax";
import UpdateNames from "./components/UpdateNames";
import AddNewChoiceOrAttr from "./components/AddNewChoiceOrAttr";
import React from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { choices, attributes } = state;
  const scores = findScores(state);

  const attributeElements = makeAttributeElements(attributes, dispatch);

  const choiceElements = makeChoiceElements(state, dispatch, scores);

  const winnerElement = [
    {
      id: (choices.length + attributes.length).toString(),
      data: {
        label: (
          <div>
            <h1>Winner:</h1>
            {indexOfMax(scores) === -1
              ? "Draw"
              : choices[indexOfMax(scores)].name}
          </div>
        ),
      },
      position: { x: 500, y: 400 + 100 * attributes.length },
    },
  ];

  const elements: ElementI[] = attributeElements
    .concat(choiceElements)
    .concat(winnerElement);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Decision Making Helper</h1>
      </header>
      <main className="container">
        <div key="reactflow" className="item">
          <ReactFlow elements={elements} />
        </div>
        <div key="update names container" className="small-item">
          <UpdateNames state={state} dispatch={dispatch} />
        </div>
        <div key="add new nodes" className="smaller-item">
          <AddNewChoiceOrAttr dispatch={dispatch} />
        </div>
      </main>
    </div>
  );
}

export default App;

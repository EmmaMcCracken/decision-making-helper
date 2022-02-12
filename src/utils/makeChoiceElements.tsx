import { Box, Slider } from "@mui/material";
import React from "react";
import { AttributeI, ChoiceI, ElementI, StateI } from "./Interfaces";

export function makeChoiceElement(
  { choiceId, name, weightings }: ChoiceI,
  dispatch: React.Dispatch<any>,
  attributes: AttributeI[],
  score: number
): ElementI {
  const numOfAttributes = attributes.length;

  const element: ElementI = {
    id: (choiceId + numOfAttributes).toString(),
    data: {
      label: (
        <div key={`choice ${choiceId}`}>
          {" "}
          <h2>{name}:</h2>
          {attributes.map((attribute, attributeId) => {
            return (
              <>
                <h3>
                  {attribute.name}: {weightings[attributeId]}
                </h3>
                <Box className="nodrag" sx={{ width: 100, margin: "0 auto" }}>
                  <Slider
                    value={weightings[attributeId]}
                    onChange={(e) => {
                      const element = e.target as HTMLInputElement;
                      dispatch({
                        type: "update_choice_weighting",
                        choiceId: choiceId,
                        attributeId: attributeId,
                        weighting: parseFloat(element.value),
                      });
                    }}
                  />
                </Box>
              </>
            );
          })}
          <h2>Score: </h2>
          <p>{score}</p>
        </div>
      ),
    },
    position: { x: 250 * (0.5 + choiceId), y: 200 },
  };
  return element;
}

export default function makeChoiceElements(
  { choices, attributes }: StateI,
  dispatch: React.Dispatch<any>,
  scores: number[]
): ElementI[] {
  return choices.map((choice, id) =>
    makeChoiceElement(choice, dispatch, attributes, scores[id])
  );
}

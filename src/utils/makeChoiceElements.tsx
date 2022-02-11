import { Box, Slider } from "@mui/material";
import React from "react";
import { AttributeI, ChoiceI, ElementI, StateI } from "./Interfaces";

export function makeChoiceElement(
  { choiceId, name, weightings }: ChoiceI,
  dispatch: React.Dispatch<any>,
  attributes: AttributeI[]
): ElementI {
  const numOfAttributes = attributes.length;

  const element: ElementI = {
    id: (choiceId + numOfAttributes).toString(),
    data: {
      label: (
        <>
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
                    defaultValue={50}
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
        </>
      ),
    },
    position: { x: 250 * (1 + choiceId), y: 200 },
  };
  return element;
}

export default function makeChoiceElements(
  { choices, attributes }: StateI,
  dispatch: React.Dispatch<any>
): ElementI[] {
  return choices.map((choice) =>
    makeChoiceElement(choice, dispatch, attributes)
  );
}

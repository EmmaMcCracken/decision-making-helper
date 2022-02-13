import { Box, Slider } from "@mui/material";
import React from "react";
import { AttributeI } from "./Interfaces";

interface attributeElementI {
  id: string;
  data: { label: JSX.Element };
  position: {
    x: number;
    y: number;
  };
}

export function makeAttributeElement(
  { attributeId, attributeKey, name, weighting }: AttributeI,
  dispatch: React.Dispatch<any>
): attributeElementI {
  let element: attributeElementI = {
    id: attributeId.toString(),
    data: {
      label: (
        <div key={`attribute ${attributeKey}`}>
          <h2>{name}: </h2>
          <p>Weighting: {weighting}</p>
          <Box className="nodrag" sx={{ width: 100, margin: "0 auto" }}>
            <Slider
              value={weighting}
              onChange={(e) => {
                const element = e.target as HTMLInputElement;
                dispatch({
                  type: "update_attribute_weighting",
                  attributeId: attributeId,
                  weighting: parseFloat(element.value),
                });
              }}
              min={0}
              max={1}
              step={0.1}
            />
          </Box>
        </div>
      ),
    },
    position: { x: 250 * (0.5 + attributeId), y: 20 },
  };

  return element;
}

export default function makeAttributeElements(
  attributes: AttributeI[],
  dispatch: React.Dispatch<any>
): attributeElementI[] {
  return attributes.map((attribute) =>
    makeAttributeElement(attribute, dispatch)
  );
}

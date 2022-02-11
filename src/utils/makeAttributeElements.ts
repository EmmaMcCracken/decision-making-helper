import { Box, Slider } from "@mui/material";
import { elementAcceptingRef } from "@mui/utils";
import { AttributeI } from "./Interfaces";

export {};

interface attributeElement {
  id: string;
  data: { label: JSX.Element };
  position: {
    x: number;
    y: number;
  };
}

function makeAttributeElement({
  attributeId,
  name,
  weighting,
}: AttributeI): attributeElement {
  let element: attributeElement = {
    id: attributeId.toString(),
    data: {
      label: <></>,
    },
    position: { x: 250, y: 20 },
  };

  //   let element: attributeElement = {
  //     id: "1",
  //     data: {
  //       label: (
  //         <>
  //           <h3>: </h3>
  //           <p>Weighting: </p>
  //           <Box className="nodrag" sx={{ width: 100, margin: "0 auto" }}>
  //             <Slider
  //               defaultValue={50}
  //               onChange={(e) => {
  //                 const element = e.target as HTMLInputElement;
  //                 // dispatch({
  //                 //   type: "update_attribute_weighting",
  //                 //   choiceId: 0,
  //                 //   attributeId: 0,
  //                 //   weighting: parseFloat(element.value),
  //                 // });
  //               }}
  //               min={0}
  //               max={1}
  //               step={0.1}
  //             />
  //           </Box>
  //         </>
  //       ),
  //     },
  //     position: { x: 250, y: 20 },
  //   };
  return element;
}

function makeAttributeElements(attributes: AttributeI[]): any {
  return {};
}

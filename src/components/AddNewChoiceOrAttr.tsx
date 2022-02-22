import { Button } from "@mui/material";
import React from "react";

interface AddNewChoiceOrAttrProps {
  dispatch: React.Dispatch<any>;
}

export default function AddNewChoiceOrAttr(
  props: AddNewChoiceOrAttrProps
): JSX.Element {
  const { dispatch } = props;
  return (
    <>
      <Button
        variant="outlined"
        sx={{ margin: "3px", width: "100%" }}
        onClick={() =>
          dispatch({
            type: "add_choice",
          })
        }
      >
        Add new choice
      </Button>{" "}
      <br />
      <Button
        variant="outlined"
        sx={{ margin: "3px", width: "100%" }}
        onClick={() =>
          dispatch({
            type: "add_attribute",
          })
        }
      >
        Add new attribute
      </Button>
    </>
  );
}

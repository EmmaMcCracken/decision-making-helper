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
      <button
        onClick={() =>
          dispatch({
            type: "add_choice",
          })
        }
      >
        Add new choice
      </button>
    </>
  );
}

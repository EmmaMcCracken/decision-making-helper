import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { StateI } from "../utils/Interfaces";

interface UpdateNamesProps {
  state: StateI;
  dispatch: React.Dispatch<any>;
}

export default function UpdateNames(props: UpdateNamesProps): JSX.Element {
  const { choices, attributes } = props.state;
  const { dispatch } = props;
  return (
    <div key="update names">
      <div key="update choices">
        {choices.map((choice, key) => (
          <div key={key}>
            <p>Choice {choice.choiceId + 1}:</p>
            <input
              value={choice.name}
              onChange={(e) => {
                dispatch({
                  type: "update_choice_name",
                  choiceId: choice.choiceId,
                  name: e.target.value,
                });
              }}
            ></input>
            <IconButton
              onClick={() =>
                dispatch({ type: "delete_choice", choiceId: choice.choiceId })
              }
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
      <div key="update attributes">
        {attributes.map((attribute, key) => (
          <div key={key}>
            <p>Attribute {attribute.attributeId + 1}:</p>
            <input
              value={attribute.name}
              onChange={(e) => {
                dispatch({
                  type: "update_attribute_name",
                  attributeId: attribute.attributeId,
                  name: e.target.value,
                });
              }}
            ></input>
            <IconButton
              onClick={() =>
                dispatch({
                  type: "delete_attribute",
                  attributeId: attribute.attributeId,
                })
              }
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
}

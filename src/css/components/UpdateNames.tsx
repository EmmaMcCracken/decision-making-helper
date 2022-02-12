import { StateI } from "../../utils/Interfaces";

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
        {choices.map((choice) => (
          <div key={choice.choiceId}>
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
            <button
              onClick={() =>
                dispatch({ type: "delete_choice", choiceId: choice.choiceId })
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div key="update attributes">
        {attributes.map((attribute) => (
          <div key={attribute.attributeId * 100}>
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
          </div>
        ))}
      </div>
    </div>
  );
}

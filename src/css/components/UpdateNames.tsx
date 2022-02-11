import { StateI } from "../../utils/Interfaces";

interface UpdateNamesProps {
  state: StateI;
  dispatch: React.Dispatch<any>;
}

export default function UpdateNames(props: UpdateNamesProps): JSX.Element {
  const { choices, attributes } = props.state;
  const { dispatch } = props;
  return (
    <div>
      <div>
        {choices.map((choice) => (
          <>
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
          </>
        ))}
      </div>
      <div>
        {attributes.map((attribute) => (
          <>
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
          </>
        ))}
      </div>
    </div>
  );
}

import { StateI } from "../../utils/Interfaces";

interface UpdateNamesProps {
  state: StateI;
  dispatch: React.Dispatch<any>;
}

export default function UpdateNames(props: UpdateNamesProps): JSX.Element {
  const { choices } = props.state;
  const { dispatch } = props;
  return (
    <>
      <p>Choice 1:</p>
      <input
        value={choices[0].name}
        onChange={(e) => {
          dispatch({
            type: "update_choice_name",
            choiceId: 0,
            name: e.target.value,
          });
        }}
      ></input>
    </>
  );
}

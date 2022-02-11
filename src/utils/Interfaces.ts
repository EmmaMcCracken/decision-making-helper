export interface ChoiceI {
  choiceId: number;
  name: string;
  weightings: number[];
}

export interface AttributeI {
  attributeId: number;
  name: string;
  weighting: number;
}

export interface StateI {
  choices: ChoiceI[];
  attributes: AttributeI[];
}

export interface ElementI {
  id: string;
  data: { label: JSX.Element };
  position: {
    x: number;
    y: number;
  };
}

export interface ChoiceI {
  choiceId: number;
  choiceKey: number;
  name: string;
  weightings: number[];
}

export interface AttributeI {
  attributeId: number;
  attributeKey: number;
  name: string;
  weighting: number;
}

export interface StateI {
  choices: ChoiceI[];
  attributes: AttributeI[];
  nextChoiceKey: number;
  nextAttributeKey: number;
}

export interface ElementI {
  id: string;
  data: { label: JSX.Element };
  position: {
    x: number;
    y: number;
  };
}

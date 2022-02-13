import { StateI } from "./Interfaces";

export const initialState = {
  choices: [
    { choiceId: 0, choiceKey: 0, name: "Lasasgne", weightings: [50, 50, 50] },
    {
      choiceId: 1,
      choiceKey: 1,
      name: "Chicken Wings",
      weightings: [50, 50, 50],
    },
    { choiceId: 2, choiceKey: 2, name: "Salad", weightings: [50, 50, 50] },
    { choiceId: 3, choiceKey: 3, name: "Panini", weightings: [50, 50, 50] },
  ],
  attributes: [
    { attributeId: 0, attributeKey: 0, name: "Taste", weighting: 0.5 },
    {
      attributeId: 1,
      attributeKey: 1,
      name: "Value for Money",
      weighting: 0.5,
    },
    { attributeId: 2, attributeKey: 2, name: "Healthiness", weighting: 0.5 },
  ],
  nextChoiceKey: 4,
  nextAttributeKey: 3,
};

export function reducer(
  { choices, attributes, nextChoiceKey, nextAttributeKey }: StateI,
  action: any
) {
  switch (action.type) {
    case "update_attribute_weighting": {
      const newAttributes = attributes.map((attribute) =>
        attribute.attributeId === action.attributeId
          ? { ...attribute, weighting: action.weighting }
          : attribute
      );
      return {
        choices: choices,
        attributes: newAttributes,
        nextChoiceKey: nextChoiceKey,
        nextAttributeKey: nextAttributeKey,
      };
    }
    case "update_choice_weighting": {
      const newChoices = choices.map((choice) => {
        if (choice.choiceId === action.choiceId) {
          const newWeightings = choice.weightings;
          newWeightings[action.attributeId] = action.weighting;
          return {
            ...choice,
            weightings: newWeightings,
          };
        }
        return choice;
      });
      return {
        choices: newChoices,
        attributes: attributes,
        nextChoiceKey: nextChoiceKey,
        nextAttributeKey: nextAttributeKey,
      };
    }
    case "update_choice_name": {
      const newChoices = choices.map((choice) =>
        choice.choiceId === action.choiceId
          ? { ...choice, name: action.name }
          : choice
      );
      return {
        choices: newChoices,
        attributes: attributes,
        nextChoiceKey: nextChoiceKey,
        nextAttributeKey: nextAttributeKey,
      };
    }
    case "update_attribute_name": {
      const newAttributes = attributes.map((attribute) =>
        attribute.attributeId === action.attributeId
          ? { ...attribute, name: action.name }
          : attribute
      );
      return {
        choices: choices,
        attributes: newAttributes,
        nextChoiceKey: nextChoiceKey,
        nextAttributeKey: nextAttributeKey,
      };
    }
    case "delete_choice": {
      const newChoices = choices.filter(
        (choice) => choice.choiceId !== action.choiceId
      );
      const choicesWithCorrectIds = newChoices.map((choice, index) => {
        choice.choiceId = index;
        return choice;
      });
      return {
        choices: choicesWithCorrectIds,
        attributes: attributes,
        nextChoiceKey: nextChoiceKey,
        nextAttributeKey: nextAttributeKey,
      };
    }
    case "delete_attribute": {
      const newAttributes = attributes.filter(
        (attribute) => attribute.attributeId !== action.attributeId
      );
      const attributesWithCorrectIds = newAttributes.map((attribute, index) => {
        attribute.attributeId = index;
        return attribute;
      });

      const updatedChoices = choices;
      updatedChoices.forEach((choice) => {
        choice.weightings.splice(action.attributeId, 1);
      });

      return {
        choices: choices,
        attributes: attributesWithCorrectIds,
        nextChoiceKey: nextChoiceKey,
        nextAttributeKey: nextAttributeKey,
      };
    }
    case "add_choice": {
      const choice = {
        choiceId: choices.length,
        choiceKey: nextChoiceKey,
        name: "New choice",
        weightings: Array(attributes.length).fill(50),
      };
      const choicesArr = choices;
      choicesArr.push(choice);
      let newNextChoiceKey = nextChoiceKey + 1;
      return {
        choices: choicesArr,
        attributes: attributes,
        nextChoiceKey: newNextChoiceKey,
        nextAttributeKey: nextAttributeKey,
      };
    }
    case "add_attribute": {
      const attribute = {
        attributeId: attributes.length,
        attributeKey: nextAttributeKey,
        name: "New attribute",
        weighting: 0.5,
      };
      const attributesArr = attributes;
      attributesArr.push(attribute);
      const newChoices = choices.map((choice) => {
        choice.weightings.push(50);
        return choice;
      });
      const newNextAttributeKey = nextAttributeKey + 1;
      return {
        choices: newChoices,
        attributes: attributesArr,
        nextChoiceKey: nextChoiceKey,
        nextAttributeKey: newNextAttributeKey,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

# Decision Making Helper App

This is a prototype for an app to help people make decisions.

# Current working functionality:

- The user can input and their choices along with attributes and weightings
- The app calculates a score for each choice

# Suggestions for improvements to be made:

- Currently the app breaks when either all choices or all attributes are removed. If there is only one choice remaining, it would be better if the user was not given the option to remove a choice. This can be done with conditional rendering within the map over choices that checks the number of choices. Likewise for attributes.
- There are 3 unit tests, there should be more to check more edge cases
- Testing using react-testing-library needs to be implemented and integrated with GitHub actions for CI/CD.
- Alter the positioning of the attribute nodes and the winner node (more details given in the journal section)
- Currently each choice and attribute has a key given the name of choiceKey or attributeKey. If we would like to attach a back-end to the app that would allow users to log in and save their input for future work, this key should be created and read in from the database.
- At the moment each choice and attribute has a 'choiceId' and 'attributeId'. These names are inappropriate as their values are not ids, but rather just their index in the current state's array of choices or attributes. As such, you may prefer to rename these variables to be choiceIndex and attributeIndex.
- Styling could be improved and edges can be added betweene nodes to help the user understand that a relationship exiss between them. If edges are not added, then the node style should be changed to not have the dot at the top and the bottom of the rectangle where an edge would come from.

# Journal/reflections:

Initially I researched the new technologies that were suggested to be used: useReducer and React Flow. For React Flow  (https://reactflow.dev/), I read through the examples given in the docs to understand the notation of the objects passed into the React Flow component. For useReducer, I read through the React Beta Docs and completed the exercises on it. This allowed me to swiftly implement the hook in the decision making helper without coming across many errors.

Having researched the technolgies I made a 3-step plan:

- Create basic app with a state initialised with useReducer, and a findScore function
- Add react flow to the app
- Add functionality for the user to add and remove choices and attributes and edit their names

This 3-step plan was completed successfully and fairly quickly.

Part way through the project I wanted to give more detail to my plan, so I made a list of what I had completed:

- useReducer
- React Flow
- sliders
- finding winner and scores

And what I still had to do:

- allow user to change name of attributes
- allow user to change name of choices
- allow user to add or remove choices
- allow user to add or remove attributes
- centre the nodes on the page (maybe difficult)
- change default attribute weighting to 0.5
- add unit tests
- add react testing library tests
- write up documentation / reflections

From this to-do list there are two items that have not been completed:

First, the react testing library tests. I ran into many errors which I believe to be due to the set-up of the tests. I made some progress in fixing these errors, one of those was by adding 'jest-transform-stub' via yarn. I was experimenting with updating elements of package.json, babel.config.js, and tsconfig.json, but without much understanding for the systems in place. I found setting up this testing environment confusing and I would like to set up a call with my peers to improve my understanding.

Secondly,the centreing of the nodes within the React Flow component has not been done as I ran out of time. Since the user can click and drag on the Flow component, the (central) positioning may not be that important. On this note, I would recommend that the team:

- looks into the react flow docs to see if there are options that would automatically zoom and pan across the view such that the existing nodes would all be in view with a minimal margin

- currently the winner node is positioned underneath the second choice. This means that it is not always in the centre of the choices. Similarly the attribute nodes are not centred relative to the choices nodes, depending on the number of attributes and choices. I would recommend basing the central positions of the attribute and winner nodes based off the number of choices. E.g. :

# What I have learned from this project:

- I can learn and successfully apply a new react state hook and library over the course of a day
- keys for siblings in React components need to be unique and consistent, so that the virtual DOM understands the situation
- when you have the error that keys across siblings must be unique, checking the warnings when running yarn jest where the react testing library is rendering App.tsx, gives more details as to where the error is coming from (ie which div).
- useReducer is powerful for allowing us to write much less code when we want to change the structure of the underlying state. For example, when I introduced the two variables "nextChoiceKey" and "nextAttributeKey", I only had to update the reducer function.

Thank you for taking a look at this project! It was a lot of fun to create.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

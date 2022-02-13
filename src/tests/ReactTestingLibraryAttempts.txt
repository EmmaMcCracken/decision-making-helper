//  // This is my first time trying to use the react-testing-library
// // My initial attempt at testing App.test.tsx with the below contents was failing
// // with quite a few errors that I have not managed to successfully debug.

// import { render, screen } from "@testing-library/react";
// import React from "react";
// import App from "../App";

// test("renders title in header", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Decision Making Helper/i);
//   expect(linkElement).toBeInTheDocument();
// });

// // The attempt below to test the UpdateNames component did not work due to not knowing how to mock (?) a dispatch function

// import { render, screen } from "@testing-library/react";
// import { useReducer } from "react";
// import UpdateNames from "../components/UpdateNames";
// import { initialState, reducer } from "../utils/reducer";

// const [mockState, mockDispatch] = useReducer(reducer, initialState);

// test("renders title in header", () => {
//   render(<UpdateNames state={initialState} dispatch={mockDispatch} />);
//   const buttonElement = screen.getByText(/add new choice/i);
//   expect(buttonElement).toBeInTheDocument();
// });

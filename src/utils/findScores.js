"use strict";
exports.__esModule = true;
var exampleInput = {
    choices: [
        { choiceId: 0, name: "Lasasgne", weightings: [80, 50, 10] },
        { choiceId: 1, name: "Chicken Wings", weightings: [0, 20, 15] },
        { choiceId: 2, name: "Salad", weightings: [70, 63, 99] },
    ],
    attributes: [
        { attributeId: 0, name: "Taste", weighting: 1 },
        { attributeId: 1, name: "Value for Money", weighting: 0.5 },
        { attributeId: 2, name: "Healthiness", weighting: 0.9 },
    ]
};
// I'm not sure if it would be better to write a function findScore, which finds the score for a single choice, or findScores, which finds the score for all of the choices. In an attempt to reduce computation, I will implement findScores.
function findScores(state) {
    var weightingsArr = state.attributes.map(function (attribute) { return attribute.weighting; });
    var scoresArr = [];
    for (var _i = 0, _a = state.choices; _i < _a.length; _i++) {
        var choice = _a[_i];
        var choiceWeightings = choice.weightings;
        var score = Math.round(dotProduct(weightingsArr, choiceWeightings) * 10) / 10;
        scoresArr.push(score);
    }
    return scoresArr;
}
console.log(findScores(exampleInput));
function dotProduct(a, b) {
    return a.map(function (x, i) { return a[i] * b[i]; }).reduce(function (m, n) { return m + n; });
}

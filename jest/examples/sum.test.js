// const sum = require("./sum");
const logIn = require("./targil");

// test("testing sum function adding two numbers:", () => {
//     expect(sum(1, 2)).toBe(3);
// })
test("testing login function :", () => {
  expect(logIn("admin", "admin")).toBe(true);
});

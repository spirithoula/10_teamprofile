const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "School Name";
    const e = new Intern("B", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("B", 1, "test@test.com", "School Name");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "School Name";
    const e = new Intern("B", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});
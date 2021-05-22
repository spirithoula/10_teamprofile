const Engineer = require("../lib/Engineer");

test("Can set github account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("B", 1, "test@testemail.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("B", 1, "test@testemail.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("B", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});
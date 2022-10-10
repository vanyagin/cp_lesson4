import {MiniMaple} from "../src/miniMaple";

test('differentiation test 1', () => {
    const m = new MiniMaple()
    expect(m.differentiation("4*x^3", "x")).toBe("12*x^2");
});

test('differentiation test 2', () => {
    const m = new MiniMaple()
    expect(m.differentiation("4*x^3", "y")).toBe("0");
});

test('differentiation test 3', () => {
    const m = new MiniMaple()
    expect(m.differentiation("4*x^3-x^2", "x")).toBe("12*x^2-2*x");
});
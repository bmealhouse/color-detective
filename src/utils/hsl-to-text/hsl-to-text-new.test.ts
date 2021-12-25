import { hslToTextNew as hslToText } from "./hsl-to-text-new";

const hue = [0]; // multiplesOf(10).until(360);
const saturation = multiplesOf(5).until(100);
const lightness = multiplesOf(5).until(85);

function multiplesOf(multiple: number) {
  return {
    until(max: number) {
      return Array.from(Array((max + multiple) / multiple).keys()).map(
        (x) => x * multiple
      );
    },
  };
}

hue.forEach((h) => {
  saturation.forEach((s) => {
    lightness.forEach((l) => {
      test(`hsl(${h}, ${s}%, ${l}%)`, () => {
        expect(hslToText({ h, s, l })).toMatchSnapshot();
      });
    });
  });
});

test("hue values to test are in increments of 5", () => {
  expect(hue).toMatchInlineSnapshot(`
    Array [
      0,
    ]
  `);
});

test("saturation values to test are in increments of 5", () => {
  expect(saturation).toMatchInlineSnapshot(`
    Array [
      0,
      5,
      10,
      15,
      20,
      25,
      30,
      35,
      40,
      45,
      50,
      55,
      60,
      65,
      70,
      75,
      80,
      85,
      90,
      95,
      100,
    ]
  `);
});

test("lightness values to test are in increments of 5", () => {
  expect(lightness).toMatchInlineSnapshot(`
    Array [
      0,
      5,
      10,
      15,
      20,
      25,
      30,
      35,
      40,
      45,
      50,
      55,
      60,
      65,
      70,
      75,
      80,
      85,
    ]
  `);
});

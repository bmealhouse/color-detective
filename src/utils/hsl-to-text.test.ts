import { hslToText } from "./hsl-to-text";

const hue = multiplesOf(10).until(360);
const saturation = multiplesOf(10).until(100);
const lightness = multiplesOf(10).until(100);

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
      10,
      20,
      30,
      40,
      50,
      60,
      70,
      80,
      90,
      100,
      110,
      120,
      130,
      140,
      150,
      160,
      170,
      180,
      190,
      200,
      210,
      220,
      230,
      240,
      250,
      260,
      270,
      280,
      290,
      300,
      310,
      320,
      330,
      340,
      350,
      360,
    ]
  `);
});

test("saturation values to test are in increments of 5", () => {
  expect(saturation).toMatchInlineSnapshot(`
    Array [
      0,
      10,
      20,
      30,
      40,
      50,
      60,
      70,
      80,
      90,
      100,
    ]
  `);
});

test("lightness values to test are in increments of 5", () => {
  expect(lightness).toMatchInlineSnapshot(`
    Array [
      0,
      10,
      20,
      30,
      40,
      50,
      60,
      70,
      80,
      90,
      100,
    ]
  `);
});

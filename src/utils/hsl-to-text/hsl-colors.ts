interface Thresholds {
  black: number;
  dark: number;
  light: number;
  veryLight: number;
  white: number;
}

interface AlternateColorNames {
  dark: string;
  light: string;
  veryLight: string;
}

interface ColorInfo {
  colorName: string;
  upperBound: number;
  thresholds: Thresholds;
  alternateColorNames: AlternateColorNames;
}

// black
// blue
// dark blue
// light blue
// gray
// brown
// tan
// green
// dark green
// light green
// orange
// peach
// pink
// dark pink
// light pink
// purple
// light purple
// red
// teal
// dark teal
// light teal
// white
// yellow
// dark yellow

interface ColorConfig {
  color: string;
  darkColor: string;
  darkerColor: string;
  lightColor: string;
  lighterColor: string;
}

interface HslColorConfig extends ColorConfig {
  lowSaturation: ColorConfig;
  mediumSaturation: ColorConfig;
  highSaturation: ColorConfig;
}

// each color covers a hue range of 10 starting from zero
// 360 / 10 = 36 items
export const hslColorConfig: HslColorConfig[] = [
  // hue: 0-9
  {
    color: "red", // betweewn 35% and 65% lightness
    darkColor: "red", // between 25% and 35% lightness
    darkerColor: "red", // between 5% and 25% lightness
    lightColor: "red", // between 65% and 75% lightness
    lighterColor: "light pink", // between 75% and 85% lightness
    lowSaturation: {
      color: "red",
      darkColor: "red",
      darkerColor: "red",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "red",
      darkColor: "red",
      darkerColor: "red",
      lightColor: "light pink",
      lighterColor: "white",
    },
    highSaturation: {
      color: "red",
      darkColor: "red",
      darkerColor: "red",
      lightColor: "pink",
      lighterColor: "light pink",
    },
  },
  // hue: 10-19
  {
    color: "red",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 20-29
  {
    color: "orange",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 30-39
  {
    color: "orange",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 40-49
  {
    color: "dark yellow",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 50-59
  {
    color: "yellow",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 60-69
  {
    color: "yellow",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 70-79
  {
    color: "light green",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 80-89
  {
    color: "light green",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 90-99
  {
    color: "green",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 100-109
  {
    color: "green",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 110-119
  {
    color: "green",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 120-129
  {
    color: "green",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 130-139
  {
    color: "green",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 140-149
  {
    color: "light green",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 150-159
  {
    color: "light green",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 160-169
  {
    color: "teal",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 170-179
  {
    color: "teal",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 180-189
  {
    color: "teal",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 190-199
  {
    color: "light blue",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 200-209
  {
    color: "light blue",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 210-219
  {
    color: "blue",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 220-229
  {
    color: "blue",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 230-239
  {
    color: "blue",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 240-249
  {
    color: "blue",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 250-259
  {
    color: "blue",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 260-269
  {
    color: "purple",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 270-279
  {
    color: "purple",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 280-289
  {
    color: "purple",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 290-299
  {
    color: "pink",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 300-309
  {
    color: "pink",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 310-319
  {
    color: "pink",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 320-329
  {
    color: "pink",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 330-339
  {
    color: "pink",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 340-349
  {
    color: "red",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
  // hue: 350-359
  {
    color: "red",
    darkColor: "todo",
    darkerColor: "todo",
    lightColor: "todo",
    lighterColor: "todo",
    lowSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    mediumSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
    highSaturation: {
      color: "todo",
      darkColor: "todo",
      darkerColor: "todo",
      lightColor: "todo",
      lighterColor: "todo",
    },
  },
];

export const gray: ColorInfo = {
  colorName: "gray",
  upperBound: Infinity,
  thresholds: {
    black: 20,
    dark: 20,
    light: 80,
    veryLight: 80,
    white: 80,
  },
  alternateColorNames: {
    dark: "gray",
    light: "gray",
    veryLight: "gray",
  },
};

export const hslColors: ColorInfo[] = [
  {
    colorName: "red",
    upperBound: 15,
    thresholds: {
      black: 15,
      dark: 25,
      light: 60,
      veryLight: 70,
      white: 85,
    },
    alternateColorNames: {
      dark: "red",
      light: "pink",
      veryLight: "light pink",
    },
  },
  {
    colorName: "orange",
    upperBound: 45,
    thresholds: {
      black: 10,
      dark: 25,
      light: 70,
      veryLight: 70,
      white: 90,
    },
    alternateColorNames: {
      dark: "brown",
      light: "peach",
      veryLight: "peach",
    },
  },
  {
    colorName: "yellow",
    upperBound: 75,
    thresholds: {
      black: 10,
      dark: 25,
      light: 70,
      veryLight: 70,
      white: 90,
    },
    alternateColorNames: {
      dark: "dark yellow",
      light: "yellow",
      veryLight: "yellow",
    },
  },
  {
    colorName: "green",
    upperBound: 105,
    thresholds: {
      black: 10,
      dark: 25,
      light: 70,
      veryLight: 70,
      white: 90,
    },
    alternateColorNames: {
      dark: "dark green",
      light: "light green",
      veryLight: "light green",
    },
  },
  {
    colorName: "green",
    upperBound: 135,
    thresholds: {
      black: 10,
      dark: 25,
      light: 70,
      veryLight: 70,
      white: 90,
    },
    alternateColorNames: {
      dark: "dark green",
      light: "light green",
      veryLight: "light green",
    },
  },
  {
    colorName: "green",
    upperBound: 165,
    thresholds: {
      black: 10,
      dark: 25,
      light: 70,
      veryLight: 70,
      white: 90,
    },
    alternateColorNames: {
      dark: "dark green",
      light: "light green",
      veryLight: "light green",
    },
  },
  {
    colorName: "teal",
    upperBound: 195,
    thresholds: {
      black: 10,
      dark: 25,
      light: 70,
      veryLight: 70,
      white: 90,
    },
    alternateColorNames: {
      dark: "dark teal",
      light: "light teal",
      veryLight: "light teal",
    },
  },
  {
    colorName: "teal",
    upperBound: 225,
    thresholds: {
      black: 10,
      dark: 25,
      light: 70,
      veryLight: 70,
      white: 90,
    },
    alternateColorNames: {
      dark: "dark teal",
      light: "light teal",
      veryLight: "light teal",
    },
  },
  {
    colorName: "blue",
    upperBound: 255,
    thresholds: {
      black: 10,
      dark: 25,
      light: 70,
      veryLight: 70,
      white: 90,
    },
    alternateColorNames: {
      dark: "dark blue",
      light: "light blue",
      veryLight: "light blue",
    },
  },
  {
    colorName: "purple",
    upperBound: 285,
    thresholds: {
      black: 10,
      dark: 25,
      light: 70,
      veryLight: 70,
      white: 90,
    },
    alternateColorNames: {
      dark: "purple",
      light: "light purple",
      veryLight: "light purple",
    },
  },
  {
    colorName: "pink",
    upperBound: 315,
    thresholds: {
      black: 10,
      dark: 25,
      light: 70,
      veryLight: 70,
      white: 90,
    },
    alternateColorNames: {
      dark: "dark pink",
      light: "light pink",
      veryLight: "light pink",
    },
  },
  {
    colorName: "pink",
    upperBound: 345,
    thresholds: {
      black: 10,
      dark: 25,
      light: 70,
      veryLight: 70,
      white: 90,
    },
    alternateColorNames: {
      dark: "dark pink",
      light: "light pink",
      veryLight: "light pink",
    },
  },
  {
    colorName: "red",
    upperBound: 360,
    thresholds: {
      black: 15,
      dark: 25,
      light: 60,
      veryLight: 70,
      white: 85,
    },
    alternateColorNames: {
      dark: "red",
      light: "pink",
      veryLight: "light pink",
    },
  },
];

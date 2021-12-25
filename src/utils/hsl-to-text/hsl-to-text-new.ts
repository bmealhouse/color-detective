import { Hsl } from "..";
import { hslColors, gray, hslColorConfig } from "./hsl-colors";

export function hslToTextNew({ h, s, l }: Hsl): string {
  // regardless of hue, lightness < 5 should classify as black
  if (l < 10) {
    return "black";
  }

  // regardless of hue, lightness >= 85 should classify as white
  if (l >= 85) {
    return "white";
  }

  if (s < 10) {
    if (l < 25) return "dark gray";
    if (l < 35) return "todo";
    if (l >= 75) return "white";
    if (l >= 65) return "light gray";
    return "gray";
  }

  const colorIndex = Math.floor((h % 360) / 10);

  // let previousColorIndex = colorIndex - 1;
  // if (previousColorIndex < 0) {
  //   previousColorIndex = hslColorConfig.length;
  // }

  // let nextColorIndex = colorIndex + 1;
  // if (nextColorIndex > hslColorConfig.length) {
  //   nextColorIndex = 0;
  // }

  // const previousColor = hslColorConfig[previousColorIndex];
  const {
    color,
    darkColor,
    darkerColor,
    lightColor,
    lighterColor,
    lowSaturation,
    mediumSaturation,
    highSaturation,
  } = hslColorConfig[colorIndex];
  // const nextColor = hslColorConfig[nextColorIndex];

  if (l < 25) {
    if (s < 35) {
      return lowSaturation.darkerColor;
    }
    if (s < 60) {
      return mediumSaturation.darkerColor;
    }
    if (s < 85) {
      return highSaturation.darkerColor;
    }
    return darkerColor;
  }

  if (l < 35) {
    if (s < 35) {
      return lowSaturation.darkColor;
    }
    if (s < 60) {
      return mediumSaturation.darkColor;
    }
    if (s < 85) {
      return highSaturation.darkColor;
    }
    return darkColor;
  }

  if (l >= 75) {
    if (s < 35) {
      return lowSaturation.lighterColor;
    }
    if (s < 60) {
      return mediumSaturation.lighterColor;
    }
    if (s < 85) {
      return highSaturation.lighterColor;
    }
    return lighterColor;
  }

  if (l >= 65) {
    if (s < 35) {
      return lowSaturation.lightColor;
    }
    if (s < 60) {
      return mediumSaturation.lightColor;
    }
    if (s < 85) {
      return highSaturation.lightColor;
    }
    return lightColor;
  }

  if (s < 35) {
    return lowSaturation.color;
  }
  if (s < 60) {
    return mediumSaturation.color;
  }
  if (s < 85) {
    return highSaturation.color;
  }

  return color;

  // for (const colorInfo of hslColors) {
  //   const {
  //     colorName,
  //     upperBound,
  //     thresholds,
  //     alternateColorNames,
  //   } = colorInfo;

  //   if (h % 360 < upperBound) {
  //     if (l < thresholds.black) {
  //       return "black";
  //     }

  //     if (l >= thresholds.white) {
  //       return "white";
  //     }

  //     // TODO: handle hue variance
  //     // TODO: handle saturation variance

  //     if (s <= 25) {
  //       return alternateColorNames.light;
  //     } else if (s <= 60 && l >= 60) {
  //       return alternateColorNames.light;
  //     }

  //     if (l < thresholds.dark) {
  //       return alternateColorNames.dark;
  //     }

  //     if (l >= thresholds.veryLight) {
  //       return alternateColorNames.veryLight;
  //     }

  //     if (l >= thresholds.light) {
  //       return alternateColorNames.light;
  //     }

  //     return colorName;
  //   }
  // }

  // return "unknown";
}

// export function hslToTextNew({ h, s, l }: Hsl): string {
//   if (l < 5) {
//     return "black";
//   }

//   if (l >= 90) {
//     return "white";
//   }

//   if (s <= 10) {
//     if (l < gray.thresholds.black) {
//       return "black";
//     }
//     if (l >= gray.thresholds.white) {
//       return "white";
//     }
//     return "gray";
//   }

//   for (const colorInfo of hslColors) {
//     const {
//       colorName,
//       upperBound,
//       thresholds,
//       alternateColorNames,
//     } = colorInfo;

//     if (h % 360 < upperBound) {
//       if (l < thresholds.black) {
//         return "black";
//       }

//       if (l >= thresholds.white) {
//         return "white";
//       }

//       // TODO: handle hue variance
//       // TODO: handle saturation variance

//       if (s <= 25) {
//         return alternateColorNames.light;
//       } else if (s <= 60 && l >= 60) {
//         return alternateColorNames.light;
//       }

//       if (l < thresholds.dark) {
//         return alternateColorNames.dark;
//       }

//       if (l >= thresholds.veryLight) {
//         return alternateColorNames.veryLight;
//       }

//       if (l >= thresholds.light) {
//         return alternateColorNames.light;
//       }

//       return colorName;
//     }
//   }

//   return "unknown";
// }

// COLOR      DARK COLOR      LIGHT COLOR
// black      black           gray
// blue       dark blue       light blue
// brown      brown           tan
// gray       gray            gray
// green      dark green      light green
// orange     orange          peach
// pink       dark pink       light pink
// purple     purple          light purple
// red        red             pink
// teal       dark teal       light teal
// white      gray            white
// yellow     dark yellow     yellow

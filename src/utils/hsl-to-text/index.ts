import { Hsl } from "..";

export function hslToText({ h, s, l }: Hsl): string {
  if (l >= 90) {
    return "white";
  } else if (l <= 10) {
    return "black";
  }

  const color: string[] = [];

  if (l <= 25) {
    color.push("dark");
  } else if (l >= 70) {
    color.push("light");
  }

  if (s <= 10) {
    color.push("gray");
  } else if (h >= 345 || h < 15) {
    // hsl(345, 100%, 50%)
    // hsl(350, 100%, 50%)
    // hsl(355, 100%, 50%)
    // hsl(360, 100%, 50%) // red
    // hsl(0, 100%, 50%) // red
    // hsl(5, 100%, 50%)
    // hsl(10, 100%, 50%)
    // hsl(14, 100%, 50%)
    // if (s <= 25) {
    //   color.push("light");
    // } else if (s <= 50 && l >= 60) {
    //   color.push("light");
    // }
    color.push("red");
  } else if (h < 45) {
    // hsl(15, 100%, 50%)
    // hsl(20, 100%, 50%)
    // hsl(25, 100%, 50%)
    // hsl(30, 100%, 50%) // orange
    // hsl(35, 100%, 50%)
    // hsl(40, 100%, 50%)
    // hsl(44, 100%, 50%)
    color.push("orange");
  } else if (h < 75) {
    // hsl(45, 100%, 50%)
    // hsl(50, 100%, 50%)
    // hsl(55, 100%, 50%)
    // hsl(60, 100%, 50%) // yellow
    // hsl(65, 100%, 50%)
    // hsl(70, 100%, 50%)
    // hsl(74, 100%, 50%)
    color.push("yellow");
  } else if (h < 105) {
    // hsl(75, 100%, 50%)
    // hsl(80, 100%, 50%)
    // hsl(85, 100%, 50%)
    // hsl(90, 100%, 50%) // green yellow
    // hsl(95, 100%, 50%)
    // hsl(100, 100%, 50%)
    // hsl(104, 100%, 50%)
    color.push("green");
  } else if (h < 135) {
    // hsl(105, 100%, 50%)
    // hsl(110, 100%, 50%)
    // hsl(115, 100%, 50%)
    // hsl(120, 100%, 50%) // green
    // hsl(125, 100%, 50%)
    // hsl(130, 100%, 50%)
    // hsl(134, 100%, 50%)
    color.push("green");
  } else if (h < 165) {
    // hsl(135, 100%, 50%)
    // hsl(140, 100%, 50%)
    // hsl(145, 100%, 50%)
    // hsl(150, 100%, 50%) // green teal
    // hsl(155, 100%, 50%)
    // hsl(160, 100%, 50%)
    // hsl(164, 100%, 50%)
    color.push("green");
  } else if (h < 195) {
    // hsl(165, 100%, 50%)
    // hsl(170, 100%, 50%)
    // hsl(175, 100%, 50%)
    // hsl(180, 100%, 50%) // teal
    // hsl(185, 100%, 50%)
    // hsl(190, 100%, 50%)
    // hsl(194, 100%, 50%)
    color.push("teal");
  } else if (h < 225) {
    // hsl(195, 100%, 50%)
    // hsl(200, 100%, 50%)
    // hsl(205, 100%, 50%)
    // hsl(210, 100%, 50%) // teal blue
    // hsl(215, 100%, 50%)
    // hsl(220, 100%, 50%)
    // hsl(224, 100%, 50%)
    color.push("blue");
  } else if (h < 255) {
    // hsl(225, 100%, 50%)
    // hsl(230, 100%, 50%)
    // hsl(235, 100%, 50%)
    // hsl(240, 100%, 50%) // blue
    // hsl(245, 100%, 50%)
    // hsl(250, 100%, 50%)
    // hsl(254, 100%, 50%)
    color.push("blue");
  } else if (h < 285) {
    // hsl(255, 100%, 50%)
    // hsl(260, 100%, 50%)
    // hsl(265, 100%, 50%)
    // hsl(270, 100%, 50%) // purple
    // hsl(275, 100%, 50%)
    // hsl(280, 100%, 50%)
    // hsl(284, 100%, 50%)
    color.push("purple");
  } else if (h < 315) {
    // hsl(285, 100%, 50%)
    // hsl(290, 100%, 50%)
    // hsl(295, 100%, 50%)
    // hsl(300, 100%, 50%) // magenta
    // hsl(305, 100%, 50%)
    // hsl(310, 100%, 50%)
    // hsl(314, 100%, 50%)
    color.push("pink");
  } else if (h < 345) {
    // hsl(315, 100%, 50%)
    // hsl(320, 100%, 50%)
    // hsl(325, 100%, 50%)
    // hsl(330, 100%, 50%) // magenta red
    // hsl(335, 100%, 50%)
    // hsl(340, 100%, 50%)
    // hsl(344, 100%, 50%)
    color.push("pink");
  }

  const colorName = [...new Set(color)].join(" ");
  return colorName;
}

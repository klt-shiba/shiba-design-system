export const COLOURS = {
  neutral_000: "#FFFFFF",
  neutral_100: "#f3f4f4",
  neutral_200: "#dee1e1",
  neutral_300: "#c8cccc",
  neutral_400: "#b0b6b7",
  neutral_500: "#6e797a",
  neutral_600: "#273333",
  neutral_700: "#040404",
  red_000: "#ffeae9",
  red_100: "#ffb8b1",
  red_200: "#ff9c8f",
  red_300: "#f76054",
  red_400: "#992222",
  orange_000: "#ffede3",
  orange_100: "#ffc6a4",
  orange_200: "#ffb180",
  orange_300: "#fc8943",
  orange_400: "#ce5511",
  blue_000: "#e9f8ff",
  blue_100: "#c7e4f9",
  blue_200: "#a1d2f8",
  blue_300: "#2b87d3",
  blue_400: "#0c5689",
  green_000: "#ebf9eb",
  green_100: "#c2f2bd",
  green_200: "#75dd66",
  green_300: "#2bb656",
  green_400: "#006b40",
  purple_000: "#f2f2f9",
  purple_100: "#d8d7f9",
  purple_200: "#a193f2",
  purple_300: "#816fea",
  purple_400: "#483a9c",
  transparent: "transparent",
};

export const FONT_COLOURS = {
  BASE: `${COLOURS.neutral_600}`,
  ERROR: `${COLOURS.red_400}`,
  WARNING: `${COLOURS.orange_400}`,
  INFO: `${COLOURS.blue_400}`,
  SUCCESS: `${COLOURS.green_400}`,
  BLACK: `${COLOURS.neutral_700}`,
  WHITE: `${COLOURS.neutral_000}`,
};

export const BUTTON_COLOURS = {
  PRIMARY: {
    BASE: `${COLOURS.purple_400}`,
    HOVER: `${COLOURS.purple_200}`,
    ACTIVE: `${COLOURS.purple_400}`,
  },
  SECONDARY: {
    BASE: `${COLOURS.purple_300}`,
    HOVER: `${COLOURS.purple_200}`,
    ACTIVE: `${COLOURS.purple_400}`,
  },
  TERTIARY: {
    BASE: `${COLOURS.purple_300}`,
    HOVER: `${COLOURS.purple_200}`,
    ACTIVE: `${COLOURS.purple_400}`,
  },
  DISABLED: `${COLOURS.neutral_300}`,
  TRANSPARENT: `${COLOURS.transparent}`,
};

export const TRANSITION_STYLES = {
  SMOOTH_100: `transition: all 200ms ease-in-out`,
  SMOOTH_200: `transition: all 500ms ease-in-out`,
  SMOOTH_300: `transition: all 800ms ease-in-out`,
};

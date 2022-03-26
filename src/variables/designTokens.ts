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
  DANGER: `${COLOURS.red_400}`,
  WARNING: `${COLOURS.orange_400}`,
  INFO: `${COLOURS.blue_400}`,
  SUCCESS: `${COLOURS.green_400}`,
  BLACK: `${COLOURS.neutral_700}`,
  WHITE: `${COLOURS.neutral_000}`,
};

export const FUNCTIONAL_COLOURS: Record<string, any> = {
  SUCCESS: {
    LIGHT: `${COLOURS.green_000}`,
    MID: `${COLOURS.green_200}`,
    DARK: `${COLOURS.green_400}`,
  },
  INFO: {
    LIGHT: `${COLOURS.blue_000}`,
    MID: `${COLOURS.blue_200}`,
    DARK: `${COLOURS.blue_400}`,
  },
  WARNING: {
    LIGHT: `${COLOURS.orange_000}`,
    MID: `${COLOURS.orange_200}`,
    DARK: `${COLOURS.orange_400}`,
  },
  DANGER: {
    LIGHT: `${COLOURS.red_000}`,
    MID: `${COLOURS.red_200}`,
    DARK: `${COLOURS.red_400}`,
  },
};

export const BUTTON_COLOURS = {
  PRIMARY: {
    BASE: `${COLOURS.purple_400}`,
    HOVER: `${COLOURS.purple_200}`,
    ACTIVE: `${COLOURS.purple_200}`,
  },
  SECONDARY: {
    BASE: `${COLOURS.purple_300}`,
    HOVER: `${COLOURS.purple_100}`,
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

export const BUTTON_SIZE = {
  MEDIUM: {
    BASE: "1.7rem",
  },
  SMALL: {
    BASE: "1.5rem",
  },
  LARGE: {
    BASE: "2.0rem",
  },
};

export const TRANSITION_STYLES = {
  SMOOTH_100: `transition: all 200ms ease-in-out`,
  SMOOTH_200: `transition: all 500ms ease-in-out`,
  SMOOTH_300: `transition: all 800ms ease-in-out`,
};

const size = {
  xs: `0rem`,
  sm: "49.5rem",
  md: "64rem",
  lg: "90rem",
  xl: "120rem",
};

export const BREAKPOINTS = {
  XS: `(min-width: ${size.xs})`,
  SM: `(min-width: ${size.sm})`,
  MD: `(min-width: ${size.md})`,
  LG: `(min-width: ${size.lg})`,
  XL: `(min-width: ${size.xl})`,
};

export const COLUMN_SIZES: Record<string, any> = {
  1: `flex: 0 0 8.333333%; max-width: 8.333333%;`,
  2: "flex: 0 0 16.666667%; max-width: 16.666667%;",
  3: "flex: 0 0 25%; max-width: 25%;",
  4: "flex: 0 0 33.333333%; max-width: 33.333333%;",
  5: "flex: 0 0 41.666667%; max-width: 41.666667%;",
  6: "flex: 0 0 50%; max-width: 50%;",
  7: "flex: 0 0 58.333333%; max-width: 58.333333%;",
  8: "flex: 0 0 66.666667%; max-width: 66.666667%;",
  9: "flex: 0 0 75%; max-width: 75%;",
  10: "flex: 0 0 83.333333%; max-width: 83.333333%;",
  11: "flex: 0 0 91.666667%; max-width: 91.666667%;",
  12: "flex: 0 0 100%; max-width: 100%;",
  undefined: "",
};

export const PUSH_COLUMN_SIZES: Record<string, any> = {
  1: `margin-left: 8.333333%;`,
  2: "margin-left: 16.666667%;",
  3: "margin-left: 25%;",
  4: "margin-left: 33.333333%;",
  5: "margin-left: 41.666667%;",
  6: "margin-left: 50%;",
  7: "margin-left: 58.333333%;",
  8: "margin-left: 66.666667%;",
  9: "margin-left: 75%;",
  10: "margin-left: 83.333333%;",
  11: "margin-left: 91.666667%;",
  12: "margin-left: 100%;",
  undefined: "",
};

export const ALIGN_ELEMENT: Record<string, any> = {
  LEFT: `justify-content: left`,
  CENTER: `justify-content: center`,
  RIGHT: `justify-content: right`,
};

export const ALERT_FONT_COLOURS: Record<string, any> = {
  SUCCESS: `${FONT_COLOURS.SUCCESS}`,
  INFO: `${FONT_COLOURS.INFO}`,
  WARNING: `${FONT_COLOURS.WARNING}`,
  DANGER: `${FONT_COLOURS.DANGER}`,
};

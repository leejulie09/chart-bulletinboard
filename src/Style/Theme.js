const fontWeight = {
  light: "300",
  regular: "400",
  bold: "700",
  black: "900",
};
const colors = {
  main_backgroundColor: "#191825",
  sidebar_backgroundColor: "#222132",
  description_fontColor: "white",
  title_fonyColor: "#c1c0ce",
  accent_fonyColor: "#b300ff",
};

const device = {
  mobileS: `only screen and (max-width: 290px)`,
  mobile: `only screen and (max-width: 450px)`,
  tablet: `only screen and (max-width: 768px)`,
  tabletL: `only screen and (max-width: 1024px)`,
};
const stlyeSet = {
  border: "0.01rem solid #484752",
};
const theme = {
  fontWeight,
  colors,
  device,
  stlyeSet,
};

export default theme;

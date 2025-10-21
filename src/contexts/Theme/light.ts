import { ThemeColors } from '@/types';

const common = {
  text: `rgba(0, 0, 0, 0.9)`,
  text1: `rgba(0, 0, 0, 0.75)`,
  text2: `rgba(0, 0, 0, 0.5)`,
  text3: `rgba(0, 0, 0, 0.2)`,
  text4: `rgba(0, 0, 0, 0.1)`,
  line: `rgba(200, 200, 200, 1)`,
  disabled: `rgba(0, 0, 0, 0.3)`,

  background: `rgba(232, 232, 232, 1)`,
  onBackground: `rgba(255, 255, 255, 1)`,
};

const main = {
  error: `rgba(255, 0, 0, 1)`,
  onError: `rgba(255, 255, 255, 1)`,
  success: `rgba(102, 192, 126, 1)`,
  onSuccess: `rgba(255, 255, 255, 1)`,
  warn: `rgba(255, 204, 0, 1)`,
  onWarn: `rgba(255, 255, 255, 1)`,

  primary: `rgba(1, 103, 180, 1)`,
  onPrimary: `rgba(255, 255, 255, 1)`,
  secondary: `rgba(200, 226, 242, 1)`,
  onSecondary: `rgba(255, 255, 255, 1)`,

  overlayWhite: `rgba(255, 255, 255, 0.4)`,
  overlayDark: `rgba(0, 0, 0, 0.5)`,
  onOverlay: `rgba(255, 255, 255, 1)`,
  masked: `rgba(0, 0, 0, 0.1)`,

  link: `rgba(0, 92, 252, 1)`,
  sideBarFrom: `rgba(7, 103, 179, 1)`,
  sideBarTo: `rgba(121, 26, 172, 1)`,
  filterBoxBackground: `rgba(181, 221, 251, 0.44)`,
  sectionBorderLine: `rgba(57, 133, 194, 1)`,
  pieChart: [
    `rgba(1, 103, 180, 1)`,
    `rgba(254, 203, 21, 1)`,
    `rgba(145, 204, 117)`,
    `rgba(238, 102, 102)`,
    `rgba(115, 192, 222)`,
    `rgba(59, 162, 114)`,
    `rgba(252, 132, 82)`,
    `rgba(154, 96, 180)`,
    `rgba(234, 124, 204)`,
    `rgba(255, 205, 210)`,
  ],
};

const lightTheme: ThemeColors = {
  ...common,
  ...main,
};

export default lightTheme;

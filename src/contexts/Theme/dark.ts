import { ThemeColors } from '@/types';

const common = {
  text: `rgba(254, 254, 255, 0.9)`,
  disabled: `rgba(0, 0, 0, 0.3)`,

  background: `rgba(15, 23, 42, 1)`,
  sideBar: `rgba(35, 50, 85, 1)`,
};

const main = {
  error: `rgba(255, 0, 0, 1)`,
  success: `rgba(102, 192, 126, 1)`,
  warn: `rgba(255, 204, 0, 1)`,

  primary: `rgba(241, 245, 249, 1)`,
  secondary: `rgba(203, 213, 225, 1)`,

  containerBackground: `rgba(30, 41, 59, 1)`,
  modalBackground: `rgba(30, 41, 59, 1)`,
};

const darkTheme: ThemeColors = {
  ...common,
  ...main,
};

export default darkTheme;

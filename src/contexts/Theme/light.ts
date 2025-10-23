import { ThemeColors } from '@/types';

const common = {
  text: `rgba(0, 0, 0, 0.9)`,
  disabled: `rgba(0, 0, 0, 0.3)`,

  background: `rgba(240, 244, 248, 1)`,
  sideBar: `rgba(180, 210, 255, 1)`,
};

const main = {
  error: `rgba(255, 0, 0, 1)`,
  success: `rgba(102, 192, 126, 1)`,
  warn: `rgba(255, 204, 0, 1)`,

  primary: `rgba(30, 41, 59, 1)`,
  secondary: `rgba(71, 85, 105, 1)`,

  containerBackground: `rgba(255, 255, 255, 1)`,
  modalBackground: `rgba(255, 255, 255, 1)`,
};

const lightTheme: ThemeColors = {
  ...common,
  ...main,
};

export default lightTheme;

export type ThemeColors = {
  text: string;
  disabled: string;
  background: string;
  sideBar: string;
  error: string;
  success: string;
  warn: string;
  primary: string;
  secondary: string;
  containerBackground: string;
  modalBackground: string;
};

export type Theme = {
  mode: `light` | `dark`;
};

export type Action = {
  type: string;
  value: object;
};

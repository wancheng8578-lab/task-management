import { Item } from './component.ui.types';

export type ThemeColors = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  line: string;
  disabled: string;
  background: string;
  onBackground: string;
  error: string;
  onError: string;
  success: string;
  onSuccess: string;
  warn: string;
  onWarn: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  onSecondary: string;
  overlayWhite: string;
  overlayDark: string;
  onOverlay: string;
  masked: string;
  link: string;
  sideBarFrom: string;
  sideBarTo: string;
  filterBoxBackground: string;
  sectionBorderLine: string;
  pieChart: string[];
};

export type Theme = {
  mode: `light` | `dark`;
};

export type Action = {
  type: string;
  value: object;
};

export type NewTask = {
  title: string;
  description: string;
  status: string;
  type: string;
  dueDate: string;
  assignee: string;
  urgency: string;
};

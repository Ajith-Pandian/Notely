import { Dimensions, PixelRatio, Platform } from "react-native";

const isIos = Platform.OS === "ios";

const SCREEN_WIDTH = Dimensions.get("window").width;
const DEVICE_DENSITY = PixelRatio.get();
export const MENU_WIDTH = SCREEN_WIDTH * 0.45;

export const HEADER_HEIGHT = 70;
export const HEADER_FONT_SIZE = 10 * DEVICE_DENSITY;
export const HEADER_BG_COLOR = "#F5F5F5";

export const LIST_BG_COLOR = "#FFFFFF";
export const DELETE_BUTTON_WIDTH = SCREEN_WIDTH * 0.25;

export const ICON_SIZE = 30;
export const BADGE_SIZE = isIos ? 8 : 10;

export const ITEM_LAYOUT_HEIGHT = 120;
export const ITEM_PADDING = 20;
export const ITEM_TITLE_SIZE = 20;
export const ITEM_DESC_SIZE = 18;
export const ITEM_TIME_SIZE = 16;

export const HEART_COLOR = "#F7CF1C";
export const FAV_COLOR = "#F9374F";
export const DESCRIPTION_COLOR = "#B0B0B0";
export const DELETE_BG_COLOR = "#E2253D";

export const MENU_BG_COLOR = "#4E4E4E";
export const MENU_TEXT_ENABLE_COLOR = "#50D6B7";
export const MENU_TEXT_DISABLE_COLOR = "#CBCBCB";
export const MENU_IC_ENABLE_COLOR = "#50D6B7";
export const MENU_IC_DISABLE_COLOR = "#868686";

//disabled favorite & star / divider color
export const GRAY1 = "#EEEEEE";
export const GRAY = "#CCCCCC";

import { OptionMenu } from "../models/option-menu.model";
import { postsPath, profilePath, trendingsPath } from "./paths.globals";

const postsOptMenu: OptionMenu = {
  id: 'posts',
  path: postsPath
};
const trendingsOptMenu: OptionMenu = {
  id: 'trendings',
  path: trendingsPath
};
const profileOptMenu: OptionMenu = {
  id: 'profile',
  path: profilePath
};

const mainOptMenuList: OptionMenu[] = [
  postsOptMenu,
  trendingsOptMenu,
  profileOptMenu
];

export {
  mainOptMenuList,
  postsOptMenu,
  trendingsOptMenu,
  profileOptMenu
};
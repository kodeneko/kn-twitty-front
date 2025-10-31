import { OptionMenu } from "../models/option-menu.model";
import { postsPath } from "./paths.globals";

const postsOptMenu: OptionMenu = {
  id: 'posts',
  path: postsPath
};
const trendingsOptMenu: OptionMenu = {
  id: 'trendings',
  path: postsPath
};
const profileOptMenu: OptionMenu = {
  id: 'profile',
  path: postsPath
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
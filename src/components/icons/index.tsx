"use client";

import {
  ApertureIcon,
  AtSignIcon,
  BellIcon,
  CalendarDaysIcon,
  CheckCircle2Icon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  CircleHelpIcon,
  CircleIcon,
  CircleMinusIcon,
  CirclePlusIcon,
  Clock1Icon,
  CogIcon,
  CrownIcon,
  EllipsisIcon,
  EllipsisVertical,
  EyeIcon,
  EyeOffIcon,
  Home,
  ImageIcon,
  LayersIcon,
  List,
  LoaderIcon,
  LogOutIcon,
  MoonIcon,
  MoveUpRight,
  Package,
  PanelLeftIcon,
  ReceiptTextIcon,
  Rotate3dIcon,
  Settings2,
  Settings2Icon,
  Shield,
  ShieldAlertIcon,
  ShoppingBagIcon,
  ShoppingCart,
  SlashIcon,
  SunIcon,
  Trash2Icon,
  UserMinusIcon,
  UserPlusIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react";

import { ComponentType, SVGProps } from "react";

export type IconType = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

export const Icons = {
  list: List,
  shield: Shield,
  package: Package,
  home: Home,
  shoppingCart: ShoppingCart,
  circlePlus: CirclePlusIcon,
  circleMinus: CircleMinusIcon,
  help: CircleHelpIcon,
  slash: SlashIcon,
  loader: LoaderIcon,
  check: CheckIcon,
  arrowDown: ChevronDownIcon,
  calendar: CalendarDaysIcon,
  horizontalEllipsis: EllipsisIcon,
  delete: Trash2Icon,
  settings: Settings2,
  circle: CircleIcon,
  clock: Clock1Icon,
  checkCircle: CheckCircle2Icon,
  chevronsUpDown: ChevronsUpDownIcon,
  logo: ApertureIcon,
  image: ImageIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  verticalEllipsis: EllipsisVertical,
  moveUpRight: MoveUpRight,
  x: XIcon,
  update: Settings2Icon,
  signOut: LogOutIcon,
  eye: EyeIcon,
  eyeOff: EyeOffIcon,
  alert: ShieldAlertIcon,
  cog: CogIcon,
  receipt: ReceiptTextIcon,
  panelLeft: PanelLeftIcon,
  atSign: AtSignIcon,
  bag: ShoppingBagIcon,
  layers: LayersIcon,
  userPlus: UserPlusIcon,
  userMinus: UserMinusIcon,
  crown: CrownIcon,
  transferOwnership: Rotate3dIcon,
  bell: BellIcon,
  sun: SunIcon,
  moon: MoonIcon,
};

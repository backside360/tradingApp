import { DefaultTheme } from 'styled-components';

export type TSize = 'small' | 'medium' | 'large' | 'xlarge';
type TColor = keyof DefaultTheme['colors'];
type TIconClick = React.MouseEventHandler<SVGSVGElement>;

export type TIcon = {
  size?: TSize;
  color: TColor;
  onClick?: TIconClick;
};

export type TTwoToneIcon = {
  size?: TSize;
  primaryColor: TColor;
  secondaryColor: TColor;
  onClick?: TIconClick;
};

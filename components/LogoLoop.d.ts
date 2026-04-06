import * as React from 'react';

export interface LogoLoopItemWithNode {
  node: React.ReactNode;
  title?: string;
  href?: string;
  ariaLabel?: string;
}

export interface LogoLoopItemWithImage {
  src: string;
  srcSet?: string;
  sizes?: string;
  width: number;
  height: number;
  alt?: string;
  title?: string;
  href?: string;
  ariaLabel?: string;
}

export type LogoLoopItem = LogoLoopItemWithNode | LogoLoopItemWithImage;

export type LogoLoopProps = {
  logos: LogoLoopItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoLoopItem, key: string | number) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
};

declare const LogoLoop: React.MemoExoticComponent<(props: LogoLoopProps) => JSX.Element>;

export default LogoLoop;


declare module "*.svg" {
  const content: FC<SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.gif" {
  const content: any;
  export default content;
}

declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "styled-components";

interface IProps {
  name: string;
  color: string;
}

export function HelloWorldColorful({ name, color }: IProps) {
  return <h1 style={{ color: color }}>Hello, {name}!</h1>;
}

interface TextIconProps {
  value: string;
}

export function TextIcon({ value }: TextIconProps) {
  return <span className="text-xl leading-none">{value}</span>;
}

import { Image } from "./style";

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function Img({ ...props }: ImgProps) {
  return <Image {...props} />;
}

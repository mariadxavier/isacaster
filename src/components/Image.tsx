type ImageProps = {
  size: string;
  src: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function Image({ size, src, ...props }: ImageProps) {
  return (
    <div style={{width: size, height: size}}>
      <img src={src} {...props} />
    </div>
  );
}

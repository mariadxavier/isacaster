import { useState } from 'react';
import fallbackImg from '/assets/fallback-img.png';

type ImageProps = {
  size: string;
  src: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function Image({ size, src, ...props }: ImageProps) {
  const [source, setSource] = useState(src || fallbackImg);
  return (
    <div style={{width: size, height: size}}>
      <img src={source} onError={() => setSource(fallbackImg)} {...props} />
    </div>
  );
}

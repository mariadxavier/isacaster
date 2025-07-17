type ImageProps = {
    src: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function Image({src, ...props} : ImageProps) {
    return (
        <img src={src} {...props} />
    )
    
}

import { SimpleIcon } from "simple-icons";

interface TechIconProps {
    icon: SimpleIcon;
    size?: number;
    color?: string;
}

export default function TechIcon({
    icon,
    size = 20,
    color = "currentColor",
}: TechIconProps) {
    return (
        <svg
            role="img"
            aria-label={`${icon.title} logo`}
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
            dangerouslySetInnerHTML={{ __html: icon.svg }}
        />
    );
}

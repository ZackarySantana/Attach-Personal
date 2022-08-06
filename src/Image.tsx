export default function Image(
    props: {
        src: string;
        srcAlt: string;
        alt: string;
        id?: string;
        className?: string;
        loading?: "eager" | "lazy" | undefined;
    },
) {
    return (
        <picture>
            <source srcset={props.src} type="image/webp" />
            <source srcset={props.srcAlt} type="image/jpeg" />
            <img
                loading={props.loading ?? "lazy"}
                src={props.srcAlt}
                alt={props.alt}
                id={props.id}
                class={props.className}
            />
        </picture>
    );
}

export default function Image(
    props: {
        src: string | undefined;
        srcAlt: string | undefined;
        alt: string;
        id?: string;
        class?: string;
        loading?: "eager" | "lazy" | undefined;
    },
) {
    return (
        <picture>
            {process.env.NODE_ENV == "production" &&
                <source srcset={props.src} type="image/webp" />
            }
            <source srcset={props.srcAlt} type="image/jpeg" />
            <img
                loading={props.loading ?? "lazy"}
                src={props.srcAlt}
                alt={props.alt}
                id={props.id}
                class={props.class}
            />
        </picture>
    );
}

import { JSX } from "solid-js/jsx-runtime";

export default function Link(props: JSX.AnchorHTMLAttributes<HTMLAnchorElement> & { linkId?: string; }) {
    const { children, linkId, ...pass_props } = props;
    return (
        <a {...pass_props} onClick={(e) => {
            navigator.sendBeacon("/clicks", linkId ?? props.href);
        }}>
            {children}
        </a>
    );
};
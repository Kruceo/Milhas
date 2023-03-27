import React, { ReactElement } from "react";
/**
 * Similar to default anchor HTML tag, but doesn't a page refresh on click.
 * @param {any} props
 * @returns
 */
interface props {
    href: string;
    class: string | undefined;
    id: string | undefined;
    onClick: Function;
    style: React.CSSProperties;
    children: any;
}
declare function Anchor(props: props): ReactElement;
export default Anchor;

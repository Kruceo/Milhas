import React, { AnchorHTMLAttributes, MouseEventHandler, ReactElement } from "react";
/**
 * Similar to default anchor HTML tag, but doesn't a page refresh on click.
 * @param {any} props
 * @returns
 */
export interface AnchorAttributes extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    className?: string;
    id?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    style?: React.CSSProperties;
}
declare function Anchor(props: AnchorAttributes): ReactElement;
export default Anchor;

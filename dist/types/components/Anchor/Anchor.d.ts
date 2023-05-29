import React, { PropsWithChildren, ReactElement } from "react";
/**
 * Similar to default anchor HTML tag, but doesn't a page refresh on click.
 * @param {any} props
 * @returns
 */
export interface AnchorAttributes extends PropsWithChildren {
    href?: string;
    class?: string;
    id?: string;
    onClick?: Function;
    style?: React.CSSProperties;
}
declare function Anchor(props: AnchorAttributes): ReactElement;
export default Anchor;

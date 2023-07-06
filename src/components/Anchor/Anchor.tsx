import navigate from "../../lib/navigate";
import React, { AnchorHTMLAttributes, MouseEventHandler, PropsWithChildren, ReactElement } from "react";

/**
 * Similar to default anchor HTML tag, but doesn't a page refresh on click.
 * @param {any} props 
 * @returns 
 */

export interface AnchorAttributes extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string,
    className?: string,
    id?: string,
    onClick?: MouseEventHandler<HTMLAnchorElement>,
    style?: React.CSSProperties
}

function Anchor(props: AnchorAttributes): ReactElement {
    const href = props.href


    const onclickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        if (href)
            navigate(href)
    }

    return <a
        {...props}
        onClick={(e) => { onclickHandler(e); props.onClick ? props.onClick(e) : null }}
    >{props.children}
    </a>
}

export default Anchor
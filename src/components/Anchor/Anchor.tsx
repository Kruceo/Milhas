import navigate from "../../lib/navigate";
import React, { AnchorHTMLAttributes, HTMLAttributeAnchorTarget, PropsWithChildren, ReactComponentElement, ReactElement } from "react";

/**
 * Similar to default anchor HTML tag, but doesn't a page refresh on click.
 * @param {any} props 
 * @returns 
 */

export interface MilhasAnchorElement extends PropsWithChildren {
    href?: string,
    class?: string,
    id?: string,
    onClick?: Function,
    style?: React.CSSProperties
}

function Anchor(props: MilhasAnchorElement): ReactElement {
    const href = props.href


    const onclickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        if (href)
            navigate(href)
    }

    return <a
        {...props}
        onClick={(e) => { onclickHandler(e); props.onClick ? props.onClick() : null }}
    >{props.children}
    </a>
}

export default Anchor
import navigate from "../../lib/navigate";
import React, { AnchorHTMLAttributes, HTMLAttributeAnchorTarget, ReactComponentElement, ReactElement } from "react";

/**
 * Similar to default anchor HTML tag, but doesn't a page refresh on click.
 * @param {any} props 
 * @returns 
 */

interface props {
    href:string,
    class:string|undefined,
    id:string|undefined,
    onClick:Function,
    style:React.CSSProperties
    children:any
}

function Anchor(props:props):ReactElement{
    const href = props.href


    const onclickHandler = (e:React.MouseEvent) => {
        e.preventDefault();
        navigate(href)
    }

    return(<a
        className={props.class}
        style={props.style}
        id={props.id}
        href={href}
        onClick={(e)=>{onclickHandler(e);props.onClick?props.onClick():null}}
        >{props.children}
    </a>)
}

export default Anchor
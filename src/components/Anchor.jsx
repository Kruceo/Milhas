import navigate from "../lib/navigate.mjs";
import {createElement} from 'react'
/**
 * Similar to default anchor HTML tag, but doesn't a page refresh on click.
 * @param {any} props 
 * @returns 
 */
export default function Anchor(props) {
    const href = props.href

    const onclickHandler = (e) => {
        e.preventDefault();
        navigate(href)
    }


    return createElement('a',{
        href,
        children:props.children,
        id:props.id,
        style:props.style,
        onClick:onclickHandler,
        className: props.className
    })
    // return (<a
    //     className={props.class}
    //     style={props.style}
    //     id={props.id}
    //     href={href}
    //     onClick={onclickHandler}
    //     >{props.children}
    // </a>)

}
import navigate from "../lib/navigate.mjs";
/**
 * Similar to "<a/>" tag, but doesn't a page refresh on click.
 * @param {any} props 
 * @returns 
 */
export default function Anchor(props) {
    const href = props.href

    const onclickHandler = (e) => {
        e.preventDefault();
        navigate(href)
    }

    return <a
        className={props.class}
        style={props.style}
        id={props.id}
        href={href}
        onClick={onclickHandler}>
        {props.children}
    </a>

}
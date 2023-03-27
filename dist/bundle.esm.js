import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const evt = new Event('popstate');

/**
 * Change the window url with any reload.
 * Spawn a "reload" event to Router.
 * @param {string} url - The new url to update.
 */
function navigate(url) {
    window.history.pushState({ id: parseInt('' + (Math.random() * 1000)) }, 'null', url);
    window.dispatchEvent(evt);
}

function Anchor(props) {
    const href = props.href;
    const onclickHandler = (e) => {
        e.preventDefault();
        navigate(href);
    };
    return (jsx("a", Object.assign({ className: props.class, style: props.style, id: props.id, href: href, onClick: (e) => { onclickHandler(e); props.onClick(); } }, { children: props.children })));
}

/**
 * The content inside this tag will be rendered in case of any path is matched.
 * @example
 * <Router>
 *    <Path as="anything">hello</Path>
 *    <E404>
 *       <h2>Error 404!
 *       <p>Back to home...</p>
 *    </E404>
 *    ...
 */
function E404() { }
//testing

/**
 * Component that's a path of router, this set's the content to be returned if an specific url is updated;
 * @example
 * <Router>
 *    <Path as="/local/" absolute> //will be rendered if the url path is /local/
 *         <p>This is the local central.</p>
 *    </Path>
 *
 *    <Path as="/local/$var" absolute> //will be rendered if the url path is /local/ with anything here
 *         <p>This is a variable path.</p>
 *    </Path>
 *    ...
 * @param {string} as - Attribute that set the requested path.
 */
function Path() {
}

function Router(props) {
    function updateElement() { setUpdate(!update); }
    // window.addEventListener('pathChange', () => updateElement())
    window.addEventListener('popstate', () => updateElement());
    const [update, setUpdate] = useState(true);
    const e404 = [null];
    const choose = [null];
    props.children.forEach((path) => {
        if (path.type && !(path.type.name === "Path") || !(path.type.name === "E404"))
            return false;
        if (path.type.name == "E404") { //Caches the error 404 tag and return to economize
            e404[0] = path.props.children;
            return;
        }
        const as = removeWhiteSpaces(path.props.as.split('/')); //"as" is the attribute,split the string and remove ''
        const location = removeWhiteSpaces(window.location.pathname.split('/')); //same ^
        if (path.props.absolute && as.length !== location.length) { //absolute attribute needs the same "location" and "as" array length, else, return
            return false;
        }
        let canBeReturned = true; //variable to decide if is acceptable the current url to return a component
        as.forEach((chunk, index) => {
            if (chunk !== location[index]) {
                if (!chunk.startsWith('$')) { //verify if the chunk is a variable 
                    canBeReturned = false;
                }
            }
        });
        if (!canBeReturned)
            return null;
        choose[0] = path.props.children;
    });
    if (choose[0] == null) {
        return e404;
    }
    return choose;
}
function removeWhiteSpaces(arr) {
    return arr.filter(each => { return each != ''; });
}

export { Anchor, E404, Path, Router };

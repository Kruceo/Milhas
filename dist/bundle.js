(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react/jsx-runtime'), require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react/jsx-runtime', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.milhas = {}, global.jsxRuntime, global.React));
})(this, (function (exports, jsxRuntime, react) { 'use strict';

    const popstateEvent = new CustomEvent('popstate', { detail: { name: "popstate" } });
    const pathChangeEvent = new CustomEvent('milhasPathChange', { detail: { name: "milhasPathChange" } });

    /**
     * Change the window url with any reload.
     * Spawn a "reload" event to Router.
     * @param {string} url - The new url to update.
     */
    function navigate(url) {
        window.history.pushState({ id: parseInt('' + (Math.random() * 1000)) }, 'null', url);
        window.dispatchEvent(popstateEvent);
    }

    function Anchor(props) {
        const href = props.href;
        const onclickHandler = (e) => {
            e.preventDefault();
            if (href)
                navigate(href);
        };
        return jsxRuntime.jsx("a", Object.assign({}, props, { onClick: (e) => { onclickHandler(e); props.onClick ? props.onClick(e) : null; } }, { children: props.children }));
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
    function E404(props) {
        return jsxRuntime.jsx("div", { id: "MilhasTrash" + 404, style: { display: 'none', position: 'fixed', width: 0, height: 0, left: -100, top: -100 } });
    }

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
     *
     */
    function Path(props) {
        return jsxRuntime.jsx("div", { id: "MilhasTrash" + props.as, style: { display: 'none', position: 'fixed', width: 0, height: 0, left: -100, top: -100 } });
    }

    function Router(props) {
        const children = Array.isArray(props.children) ? props.children : [props.children];
        const pathName = Path.name;
        const e404name = E404.name;
        const updateElement = () => { setUpdate(!update); };
        //remove and add's state events listeners
        window.removeEventListener(pathChangeEvent.detail.name, updateElement);
        window.removeEventListener(popstateEvent.detail.name, updateElement);
        window.addEventListener(pathChangeEvent.detail.name, updateElement);
        window.addEventListener(popstateEvent.detail.name, updateElement);
        const [update, setUpdate] = react.useState(true);
        /**
        * This is the 404 element that will be rendered if exists.
        */
        const e404 = [null];
        /**
         * This is the element that will be rendered.
         */
        const choose = [null];
        children.forEach((path) => {
            if (path.type.name == e404name) { //Caches the error 404 tag and return to economize
                e404[0] = path.props.children;
                return false;
            }
            if (path.type.name != pathName)
                return false; //fim da linha
            const as = removeWhiteSpaces(path.props.as.split('/')); //"as" is the attribute,split the string and remove ''
            const location = removeWhiteSpaces(window.location.pathname.split('/')); //same ^
            if (path.props.absolute && as.length !== location.length) { //absolute attribute needs the same "location" and "as" array length, else, return
                return false;
            }
            let canBeReturned = true; //variable to decide if is acceptable the current url to return a component
            as.forEach((chunk, index) => {
                if (chunk !== location[index]) {
                    if (!chunk.startsWith(':')) { //verify if the chunk is a variable 
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

    exports.Anchor = Anchor;
    exports.E404 = E404;
    exports.Path = Path;
    exports.Router = Router;

    Object.defineProperty(exports, '__esModule', { value: true });

}));

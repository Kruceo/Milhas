import { PropsWithChildren } from "react";

export interface Milhas404ErrorElement extends PropsWithChildren {

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
export default function E404(props: Milhas404ErrorElement) {
    return <div id={"MilhasTrash" + 404} style={{ display: 'none', position: 'fixed', width: 0, height: 0, left: -100, top: -100 }}></div>
}

//testing
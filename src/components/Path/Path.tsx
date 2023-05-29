import { PropsWithChildren } from "react"

export interface PathAttributes extends PropsWithChildren{
    as:string,
    absolute?:boolean
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

export default function Path(props:PathAttributes) {
    return <div id={"MilhasTrash" + props.as} style={{display:'none',position:'fixed',width:0,height:0,left:-100,top:-100}}></div>
}


import navigate from "../../lib/navigate";
export interface RedirectAttributes{
    href:string
}
/**
 * This component just auto redirect if the same be rendered.
 * @example
 * <Router>
 *    <Path as="/an/older/path">
 *        <Redirect href="/newer/path"/>
 *    </Path>
 *    <Path as="/newer/path">
 *        You reach this!
 *    </Path>
 *    ...
 */


export default function Redirect(props:RedirectAttributes){
    navigate(props.href)
    return <div id={"MilhasTrashRedirect" + props.href} style={{display:'none',position:'fixed',width:0,height:0,left:-100,top:-100}}></div>
}
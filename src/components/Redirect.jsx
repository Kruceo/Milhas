import navigate from "../lib/navigate.mjs";
/**
 * This component just auto redirect if the same be rendered.
 * @example
 * <Router>
 *    <Path as="/an/older/path">
 *        <Redirect to="/newer/path"/>
 *    </Path>
 *    <Path as="/newer/path">
 *        You reach this!
 *    </Path>
 *    ...
 */
export default function Redirect(props){
    navigate(props.to)
    return null
}
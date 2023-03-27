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
interface props {
    href: string;
}
export default function Redirect(props: props): void;
export {};

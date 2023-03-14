export default function Anchor(props){
    const href = props.href
    const evt = new Event('popstate')
    const onclickHandler = (e)=>{
        
        e.preventDefault();
        window.history.pushState({id: parseInt(Math.random()*1000)},'null',href)
        window.dispatchEvent(evt)
    }
    
    return <a href={href} 
    onClick={onclickHandler}>{props.children}</a>

}
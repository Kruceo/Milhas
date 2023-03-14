import evt from "./event.mjs"
/**
 * Change the window url with any reload.
 * Spawn a "reload" event to Router.
 * @param {string} url - The new url to update. 
 */
export default function navigate(url){
    
    window.history.pushState({id: parseInt(Math.random()*1000)},'null',url)
    window.dispatchEvent(evt)
}
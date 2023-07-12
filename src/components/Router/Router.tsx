import React, { PropsWithChildren, ReactElement, useState } from "react"
import Path from '../Path/Path'
import E404 from '../E404/E404'
import { pathChangeEvent, popstateEvent } from '../../lib/event'


export interface RouterAttributes extends PropsWithChildren {

}

function Router(props: RouterAttributes): ReactElement {

    const children = Array.isArray(props.children) ? props.children : [props.children]
    const pathName = Path.name
    const e404name = E404.name
    const updateElement = () => { setUpdate(!update) }
    //remove and add's state events listeners
    window.removeEventListener(pathChangeEvent.detail.name, updateElement)
    window.removeEventListener(popstateEvent.detail.name, updateElement)
    window.addEventListener(pathChangeEvent.detail.name, updateElement)
    window.addEventListener(popstateEvent.detail.name, updateElement)

    const [update, setUpdate] = useState(true)
    /**
    * This is the 404 element that will be rendered if exists.
    */
    const e404: any = [null]
    /**
     * This is the element that will be rendered.
     */
    const choose: any = [null]

    children.forEach((path) => {

        if (path.type.name == e404name) {                      //Caches the error 404 tag and return to economize
            e404[0] = path.props.children
            return false
        }
        if (path.type.name != pathName) return false //fim da linha
        const as = removeWhiteSpaces(path.props.as.split('/'))                        //"as" is the attribute,split the string and remove ''
        const location = removeWhiteSpaces(window.location.pathname.split('/'))         //same ^

        if (path.props.absolute && as.length !== location.length) {                                                 //absolute attribute needs the same "location" and "as" array length, else, return
            return false
        }
        
        let canBeReturned = true                                                       //variable to decide if is acceptable the current url to return a component
        as.forEach((chunk: string, index: number) => {
            if (chunk !== location[index]) {
                if (!chunk.startsWith(':')) {                                         //verify if the chunk is a variable 
                    canBeReturned = false
                }
            }
        })
        if (!canBeReturned) return null

        choose[0] = path.props.children
    })
    if (choose[0] == null) {
        return e404
    }

    return choose
}

function removeWhiteSpaces(arr: Array<string>) {
    return arr.filter(each => { return each != '' })
}

export default Router
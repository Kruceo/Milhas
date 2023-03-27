import React, { ReactElement, useState } from "react"
import Path from '../Path'
import E404 from '../E404'


interface element {
    type: { name: string },
    props: any,

}

function Router(props: any): ReactElement {
    // return (<h2 id="rafafafa">RAFA</h2>)

    const pathName = Path.name
    const e404name = E404.name
    const updateElement = () => { setUpdate(!update) }
    window.addEventListener('pathChange', () => updateElement())
    window.addEventListener('popstate', () => updateElement())

    const [update, setUpdate] = useState(true)
    const e404: any = [null]
    const choose: any = [null]
    props.children.forEach((path: element) => {
        console.log(path.type.name, path.type.name != 'Path')

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
                if (!chunk.startsWith('$')) {                                         //verify if the chunk is a variable 
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
    // return choose
    return choose
}

function removeWhiteSpaces(arr: Array<string>) {
    return arr.filter(each => { return each != '' })
}

export default Router
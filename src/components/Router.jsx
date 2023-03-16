import { useState } from "preact/hooks"

export default function Router(props) {
    function updateElement() { setUpdate(!update) }
    // window.addEventListener('pathChange', () => updateElement())
    window.addEventListener('popstate', () => updateElement())

    const [update, setUpdate] = useState(true)
    const e404 = [null]
    const choose = [null]

    props.children.forEach(path => {
        if (path.type &&                                                  //filter tagnames, just "Path" and "E404"
            (!path.type.name === "Path" || !path.type.name === "E404"))
            return false;

        if (path.type.name == "E404") {                                   //Caches the error 404 tag and return to economize
            e404[0] = path.props.children
            return
        }
        const as = removeWhiteSpaces(path.props.as.split('/'))                        //"as" is the attribute,split the string and remove ''
        const location = removeWhiteSpaces(window.location.pathname.split('/'))         //same ^


        if (path.props.absolute && as.length !== location.length) {                                                 //absolute attribute needs the same "location" and "as" array length, else, return

            return false

        }
        let canBeReturned = true                                                       //variable to decide if is acceptable the current url to return a component
        as.forEach((chunk, index) => {
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

    return choose
}


function removeWhiteSpaces(arr) {
    return arr.filter(each => { return each != '' })
}
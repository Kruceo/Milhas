import { useState } from "react"

export default function Router(props) {
    function updateElement() { setUpdate(!update) }
    // window.addEventListener('pathChange', () => updateElement())
    window.addEventListener('popstate', () => updateElement())

    const [update, setUpdate] = useState(true)
    const e404 = [null]
    const choose = [null]

    props.children.forEach(path => {
        if (!path.type.name === "Path" || !path.type.name === "E404") { return false; }
        if (path.type.name == "E404") {
            e404[0] = path.props.children
            return
        }
        const as = removeWhiteSpaces(path.props.as.split('/'))
        const location = removeWhiteSpaces(window.location.pathname.split('/'))
     

        if (path.props.absolute) {
            
            if (as.length !== location.length){
                return false
            }
        }
        let canBeReturned = true
        as.forEach((chunk, index) => {
            if (chunk !== location[index]) {
                if (!chunk.startsWith('$')) {
                    canBeReturned = false
                }
            }
        })
        console.log(as,location,canBeReturned)
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
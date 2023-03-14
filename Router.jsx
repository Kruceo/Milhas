import { useState } from "react"

export default function Router(props) {
    function updateElement() { setUpdate(!update) }
    // window.addEventListener('pathChange', () => updateElement())
    window.addEventListener('popstate', () => updateElement())

    const [update, setUpdate] = useState(true)
    const choose = [null]

    props.children.forEach(path => {
        if (path.type && path.type.name != "Path") return

        const as = removeWhiteSpaces(path.props.as.split('/'))
        const location = removeWhiteSpaces(window.location.pathname.split('/'))

        if (path.props.absolute) {
            if (as.lenght != location.lenght) return
        }
        let canBeReturned = true
        as.forEach((chunk, index) => {
            if (chunk !== location[index]) {
                if (!chunk.startsWith('$')) {
                    // console.log(false,chunk,location[index])
                    canBeReturned = false
                }
            }
        })

        if (!canBeReturned) return null

        choose[0] = path.props.children
    })

    return choose
}


function removeWhiteSpaces(arr) {
    return arr.filter(each => { return each != '' })
}
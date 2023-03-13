import { useState } from "react";



export function Path(props) {

    const variables = []
    const location = window.location.pathname.split('/').filter(each => { if (each != '') return each })

    const as = props.as.split('/').filter((each,index) => {
            if (each != '') {
                return each
            }})

    if(props.absolute && as.length !== location.length)return null
    as.forEach((each,index)=>{
        if(each.startsWith('$')){
            variables.push({
                index:index,
                name: each.slice(1,each.length)
            })
        }
    })
    console.log(location)

    let canBeReturned = true
    location.forEach((each,index)=>{
        if(each != as[index]){
            if(!as[index].startsWith('$')){
                canBeReturned = false
            }
        }
    })

    
    if(canBeReturned){
        const chld = props.children
        chld.props.pathVariables = {}
        variables.forEach(each=>{
            console.log(each)
            chld.props.pathVariables[each.name] = location[each.index] 
        })
        console.log(chld.props.pathVariables)
        return chld}
} 
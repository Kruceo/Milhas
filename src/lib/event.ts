const popstateEvent = new CustomEvent('popstate',{detail:{name:"popstate"}})
const pathChangeEvent = new CustomEvent('milhasPathChange',{detail:{name:"milhasPathChange"}})

export {popstateEvent,pathChangeEvent}
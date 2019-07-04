// export default (state = {
//     author: 'yao',
//     skill: ['ps','js','css']
// }, action) => {
//     switch (action.type) {      
//         case 'SETAUTHOR':
//             return {
//                 ...state,
//                 author: action.name
//             }
//         default:
//             return state
//     }
// }

// export default (state = {
//     myself:'deng',
//     her:'lixiuzhu',
//     firstlove:'pingjuan',
//     target:['Greatedentrepreneur','Greatededucator']
// }, action) => {
//     switch (action.type){
//         case 'ZHENG':
//         return {
//             ...state,
//             write:action.write
//         }
//         default:
//         return state
//     }
// }

export default (state = {
    myself:'deng',
        her:'lixiuzhu',
        firstlove:'pingjuan',
        target:['Greatedentrepreneur','Greatededucator']
},action) =>{
    switch (action.type){
        case 'SET':{
            return {
                ...state,
                myself:action
            }
        }
        default:
        return state
    }
}

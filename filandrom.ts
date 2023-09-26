export function filandrom(str:string):boolean{
    let i = 0
    let y = str.length-1 //5
    let flag = true
    while(i!==y){
        if(str[i]!==str[y]){
            flag = false
        }
        i++
        y--
    }
    return flag
}
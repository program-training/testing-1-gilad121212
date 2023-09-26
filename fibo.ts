export function fibo(arrF){
    const d = arrF.length
    const naxt = arrF[d-1]+arrF[d-2]
    arrF.push(naxt)
    return arrF
}
export async function id(id:number){
    const data = await  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const dataJ = await data.json()
    return dataJ
}

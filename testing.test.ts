import { describe, expect, test } from "vitest";
import { myLength } from "./length";
import { filandrom } from "./filandrom";
import { sorted } from "./sort";
import { sqrt } from "./sqrt";
import { arrSum } from "./arr";
import { id } from "./id";
import { fibo } from "./fibo";
describe("string", () => {
  test("myLength", () => {
    const string = "gilad";
    const sum = string.length;
    const result = myLength(string);
    expect(result).toEqual(sum);
  });
   test("filandrom", () => {
     const fil = "trert";
     const result = filandrom(fil);
     expect(result).toEqual(true);
   });
});
describe("sort",()=>{
    test("sort",()=>{
        const arr = [2,3,1]
        const arrS = [1,2,3]
        const result = sorted(arr)
        expect(result).toEqual(arrS)
    })
})
describe("sqrt",()=>{
    test("thch",()=>{
        const nam = 50
        const namS = Math.sqrt(nam)
        const result = sqrt(nam)
        expect(result).toEqual(namS)
    })
    test("+++",()=>{
        const nam = -9
        const result = sqrt(nam)
        expect(result).toEqual(false)
    })
})
describe("thch the arr",()=>{
    test("test",()=>{
        const namber = 50
        const ar = [25,25]
        const result = arrSum(ar)
        expect(result).toEqual(namber)
    })
    test("big then anmber ",()=>{
        const ar = [25,25]
        const result = arrSum(ar)
        expect(result).toBeGreaterThan(10)
    })
    test("cntain",()=>{
        const ar = [24,25]
        expect(ar).toContain(25)
    })

})
describe("http",()=>{
    test("insaid",async()=>{
        const Cdata = await  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const j = await Cdata.json()
        const data = await id(30)
        expect (data).toEqual(j)
    })
})
describe("fib",()=>{
    test("fib",()=>{
        const arr = [1,1,2,3,5]
        const nam = 8
        const result = fibo(arr)
        expect(result).toEqual([1,1,2,3,5,8])
    })
})
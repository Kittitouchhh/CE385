let sum = 0
let sum2 = 1
for (let i = 2; i <= 50; i++) {
    if (i % 2 == 0) {
        sum = sum + i
        // console.log(i)
    }
}
for (let j = 1; j <= 10; j++) {
    if (j % 2 != 0) {
        sum2 = sum2 * j
        // console.log(j)
    }


}

console.log(`ผลรวมเลขคู่ 2-50 = ${sum}`)
console.log(`ผลรวมเลขคี่ 1-10 = ${sum2}`)
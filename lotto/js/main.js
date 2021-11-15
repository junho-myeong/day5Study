// console.log('안녕')

// const resultEl = document.querySelector(".mybtn")
//
// console.log(resultEl)
//
// const resultDivEl = document.querySelector('.resultDiv')
// console.log(resultDivEl)

// let str = ''
// let arr = []
// resultEl.addEventListener('click' , function() {
//     for (let i = 0; i < 6; i++) {
//         let num = parseInt(Math.random()*45) + 1
//
//         if(arr.indexOf(num) >= 0){
//             i = i-1
//             continue
//         }
//         arr[i] = num
//         str += `<h3>${arr[i]}</h3>`
//     }
//     resultDivEl.innerHTML = str
// })

function makeLottoNum() {
    const arr = []

    for (let i = 0; i < 6; i++) {
        let num = parseInt(Math.random()*45) + 1
        if (arr.indexOf(num) >= 0) {
            console.log('중복!!!')
            i = i - 1
            continue
        }
        arr[i] = num
    }
    arr.sort((a,b) => a-b)
    return arr
}
console.log(makeLottoNum())



// resultEl.addEventListener('click' , () => {
//     let str = ''
//     let balls = makeLottoNum()
//     resultDivEl.innerHTML = ''
//     for (let i = 0; i < balls.length; i++) {
//         str += `<h3>${balls[i]}</h3>`
//     }
//     console.log(str)
//     resultDivEl.innerHTML = str
// })

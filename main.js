//let number = Number(prompt("nhập vào 1 số!"))

// if(number % 2 == 0) {
//     alert("Bạn vừa nhập số chẵn!")
// }else {
//     alert("Bạn vừa nhập số lẽ!")
// }

// if(number > 100) {
//     alert("Bạn vừa nhập số lớn hơn 100!")
// }else if(number > 10) {
//     alert("Bạn vừa nhập số lớn hơn 10")
// }else {
//     alert("Bạn vừa nhập 1 số!")
// }

// switch (number) { 
//     case (number > 5):
//         alert("Vào case 1")
//     case (number > 10):
//         alert("Vào case 2")
//     case (number > 15):
//         console.log("đã vào!")
//         alert("Vào case 3")
//         break
//     default:
//         alert("Vào default!")
// }

// for, while, do while

// let numbers = [1,2,3,4,5];

// for (let i = 1; i < 5; i++) {
//     console.log("i", i)
// }

// console.log("i", i)
// start
// i = 1 => true => 1 => 1++
// i = 2 => true => 2 => 2++
// i = 3 => true => 3 => 3++
// i = 4 => true => 4 => 4++
// i = 5 => false => end
// let i = 1;
// let sum = 0;
// while (i <= 10) {
//     console.log('i', i)
//     sum = sum + i;
//     i++;
// }
// console.log("sum", sum)

// bài tập: 
// Cho người dùng nhập vào 1 số. ví dụ 123
// Trả về 1 số có giá trị là tổng tất cả các số từ số đã nhập / 2 trở đi.
// ví dụ nhập 10 => kết quả là tổng các số từ 10 / 2 (5) => tính tổng các số từ 5 -> 10
// nếu số đã nhập là số lẻ thì làm tròn lên.

// Bước 1 - phải lấy được 1 số do người dùng nhập
// Bước 2 - duyệt từ 1 nửa số đó trở đi (nhớ làm tròn lên)
// Bước 3 - cộng hết lại
// bước 4 in kết quả.

let i = 1;
do {
    // if( i == 5) {
    //     break
    // }
    //console.log("i2", i) 
    i++ 
} while(i <= 10)

for(let i = 1; i <= 10; i++) {
    // if(i == 5) {
    //     continue;
    // }
    if(i == 5) {
        break;
    }
    console.log("i", i)
}

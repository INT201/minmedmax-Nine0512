const { template } = require('@babel/core')

// ให้เขียน Function ชื่อ minMedMax (num1, num2, num3) 
// โดยส่งเลข 3 ตัว แล้วหาค่าน้อยที่สุด ค่ากลาง และค่ามากที่สุด 
// โดยให้ return ผลลัพธ์เป็นชนิดข้อมูล object 
// เพื่อแสดงค่าน้อยที่สุด ค่ากลาง และค่ามากที่สุด ดังนี้


function minMedMax(n1, n2, n3) {
  //code here
  let arr = [n1,n2,n3]
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j + 1] < arr[j]) {
              [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
          }
      }
  }
  let storing = {
    min : arr[0],
    mid : arr[1],
    max : arr[2]
}
 return storing
}


module.exports = minMedMax

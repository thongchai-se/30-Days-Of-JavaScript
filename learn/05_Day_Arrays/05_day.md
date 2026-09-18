# วัน 5 — อาร์เรย์ (Arrays)

[<< วัน 4](../04_Day_Conditionals/04_day.md) | [ตารางเรียน](../README.md) | [วัน 6 >>](../06_Day_Loops/06_day.md)

บทอังกฤษเต็ม: [Day 5](../../05_Day_Arrays/05_day_arrays.md)

## วันนี้เรียนอะไร

- Array = รายการค่าเรียงลำดับ เข้าถึงด้วย **index เริ่มที่ 0**
- เพิ่ม/ลบ/ตัด/เรียง ด้วยเมธอด เช่น `push`, `pop`, `shift`, `unshift`, `slice`, `splice`, `sort`, `reverse`
- รวม array ด้วย `concat` หรือ spread `...`

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| array | อาร์เรย์ / รายการ |
| index | ตำแหน่ง (0 คือตัวแรก) |
| length | จำนวนสมาชิก |
| push / pop | เพิ่ม/ลบ ท้ายรายการ |
| unshift / shift | เพิ่ม/ลบ ต้นรายการ |
| slice | ตัดสำเนาช่วงหนึ่ง (ไม่แก้ต้นฉบับ) |
| splice | ตัด/แทรก (แก้ต้นฉบับ) |
| includes | มีค่านั้นหรือไม่ |

## ตัวอย่างสั้นๆ

```js
const fruits = ['banana', 'orange', 'mango']
console.log(fruits[0])           // banana
console.log(fruits.length)       // 3
console.log(fruits[fruits.length - 1]) // ตัวสุดท้าย

fruits.push('apple')             // เพิ่มท้าย
fruits.pop()                     // ลบท้าย
fruits.unshift('lemon')          // เพิ่มต้น
fruits.shift()                   // ลบต้น

console.log(fruits.slice(0, 2))  // สำเนา 2 ตัวแรก
console.log(fruits.concat(['kiwi']))
console.log(fruits.includes('mango'))
console.log(fruits.join(', '))
```

```js
const numbers = [1, 2, 3]
numbers.splice(1, 1, 99) // ที่ index 1 ลบ 1 ตัว แล้วใส่ 99
console.log(numbers)     // [1, 99, 3]
```

## ลองรันยังไง

- เปิด [`05_day_starter`](../../05_Day_Arrays/05_day_starter/) หรือ Console
- ทำ [`practice.js`](./practice.js) — เริ่มจาก itCompanies

## แบบฝึกหัด

**Level 1:** สร้าง array ว่าง/มีค่า, itCompanies (Facebook…Amazon), sort/reverse/slice/ลบ  
**Level 2:** shopping cart, ตรวจ Ethiopia/Sass, รวม frontEnd+backEnd  
**Level 3:** สถิติอายุใน array

---

ไปต่อ [วัน 6](../06_Day_Loops/06_day.md)

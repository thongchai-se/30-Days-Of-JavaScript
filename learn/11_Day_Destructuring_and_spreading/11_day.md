# วัน 11 — Destructuring และ Spread

[<< วัน 10](../10_Day_Sets_and_Maps/10_day.md) | [ตารางเรียน](../README.md) | [วัน 12 >>](../12_Day_Regular_expressions/12_day.md)

บทอังกฤษเต็ม: [Day 11](../../11_Day_Destructuring_and_spreading/11_day_destructuring_and_spreading.md)

## วันนี้เรียนอะไร

- **Destructuring** = แกะค่าจาก array/object ใส่ตัวแปรในบรรทัดเดียว
- **Spread `...`** = กระจายสมาชิก (คัดลอก/รวม array หรือ object)
- **Rest `...`** = เก็บส่วนที่เหลือไว้ในตัวแปร

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| destructure | แกะโครงสร้าง |
| spread | กระจายค่าออก |
| rest | รวมค่าที่เหลือ |
| default value | ค่าสำรองถ้าไม่มีค่า |

## ตัวอย่างสั้นๆ

```js
const nums = [2.72, 3.14, 9.81]
const [e, pi, gravity] = nums

const rect = { width: 20, height: 10 }
const { width, height, area = 0 } = rect

const arr1 = [1, 2]
const arr2 = [3, 4]
const combined = [...arr1, ...arr2] // [1,2,3,4]

const [first, ...rest] = [10, 20, 30, 40]
// first=10, rest=[20,30,40]
```

```js
const users = [
  { name: 'Brook', skills: ['HTML', 'CSS', 'JS'], age: 16 },
  { name: 'David', skills: ['HTML', 'CSS'], age: 22 }
]

for (const { name, skills, age } of users) {
  console.log(name, skills.length, age)
}
```

## ลองรันยังไง

ทำ [`practice.js`](./practice.js)

## แบบฝึกหัด

แกะ `constants`, `countries`, `rectangle`  
วน `users` ด้วย destructuring หาคนที่มี skills น้อยกว่า 2

---

ไปต่อ [วัน 12](../12_Day_Regular_expressions/12_day.md)

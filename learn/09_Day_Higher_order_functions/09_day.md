# วัน 9 — Higher Order Functions

[<< วัน 8](../08_Day_Objects/08_day.md) | [ตารางเรียน](../README.md) | [วัน 10 >>](../10_Day_Sets_and_Maps/10_day.md)

บทอังกฤษเต็ม: [Day 9](../../09_Day_Higher_order_functions/09_day_higher_order_functions.md)

## วันนี้เรียนอะไร

- ฟังก์ชันที่รับฟังก์ชันอื่นเป็นพารามิเตอร์ หรือคืนฟังก์ชัน = **higher order function**
- ฟังก์ชันที่ถูกส่งเข้าไปเรียกว่า **callback**
- เมธอด array สำคัญ: `forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every`, `sort`
- `setTimeout` / `setInterval` หน่วงเวลา

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| callback | ฟังก์ชันที่ส่งให้ฟังก์ชันอื่นเรียกใช้ |
| forEach | วนทำทีละตัว (ไม่สร้าง array ใหม่) |
| map | แปลงแต่ละตัว → ได้ array ใหม่ความยาวเท่าเดิม |
| filter | คัดเฉพาะตัวที่ผ่านเงื่อนไข → array ใหม่ |
| reduce | รวมทั้งก้อนเหลือค่าเดียว |
| find / findIndex | หาตัวแรกที่ตรงเงื่อนไข / หาตำแหน่ง |
| some / every | มีอย่างน้อยหนึ่งตัวผ่าน / ทุกตัวผ่าน |

## ตัวอย่างสั้นๆ

```js
const numbers = [1, 2, 3, 4, 5]

numbers.forEach((n) => console.log(n))

const squares = numbers.map((n) => n * n)        // [1,4,9,16,25]
const evens = numbers.filter((n) => n % 2 === 0) // [2,4]
const sum = numbers.reduce((acc, n) => acc + n, 0) // 15

console.log(numbers.find((n) => n > 3))      // 4
console.log(numbers.some((n) => n > 4))      // true
console.log(numbers.every((n) => n > 0))     // true
```

```js
setTimeout(() => console.log('หลัง 2 วินาที'), 2000)
// setInterval(() => console.log('ซ้ำทุก 1 วิ'), 1000)
```

## ลองรันยังไง

- เปิด starter วัน 9 หรือ Console
- ทำ [`practice.js`](./practice.js) ให้จบ Level 1 ก่อน

## แบบฝึกหัด

ใช้ `countries`, `names`, `numbers`, `products` ใน practice.js  
ฝึก forEach / map / filter / reduce / some / every / find / findIndex

---

ไปต่อ [วัน 10](../10_Day_Sets_and_Maps/10_day.md)

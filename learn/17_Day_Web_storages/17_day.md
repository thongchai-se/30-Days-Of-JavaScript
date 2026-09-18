# วัน 17 — Web Storages

[<< วัน 16](../16_Day_JSON/16_day.md) | [ตารางเรียน](../README.md) | [วัน 18 >>](../18_Day_Promises/18_day.md)

บทอังกฤษเต็ม: [Day 17](../../17_Day_Web_storages/17_day_web_storages.md)

## วันนี้เรียนอะไร

- เก็บข้อมูลในเบราว์เซอร์ด้วย **localStorage** และ **sessionStorage**
- ค่าที่เก็บได้เป็น **สตริง** — object ต้อง `JSON.stringify` ก่อนเก็บ และ `JSON.parse` ตอนอ่าน
- localStorage อยู่ถาวรจนกว่าจะลบ / sessionStorage หายเมื่อปิดแท็บ

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| localStorage | เก็บถาวรในเบราว์เซอร์ |
| sessionStorage | เก็บเฉพาะช่วงเปิดแท็บ |
| setItem / getItem | เก็บ / อ่าน |
| removeItem / clear | ลบทีละ key / ลบทั้งหมด |

## ตัวอย่างสั้นๆ

```js
// ต้องรันในเบราว์เซอร์
localStorage.setItem('firstName', 'Thongchai')
localStorage.setItem('age', 25)
console.log(localStorage.getItem('firstName'))

const student = { name: 'Tong', skills: ['JS'] }
localStorage.setItem('student', JSON.stringify(student))
const saved = JSON.parse(localStorage.getItem('student'))

localStorage.removeItem('age')
// localStorage.clear()
```

## ลองรันยังไง

เปิดหน้า HTML ใดก็ได้ → F12 → Console → ทำ [`practice.js`](./practice.js)  
ดูค่าได้ที่ Application → Local Storage

## แบบฝึกหัด

เก็บชื่อ นามสกุล อายุ ประเทศ เมือง  
เก็บ object student  
Level 3: personAccount (คล้ายวัน 8/19)

---

ไปต่อ [วัน 18](../18_Day_Promises/18_day.md)

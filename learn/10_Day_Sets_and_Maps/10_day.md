# วัน 10 — Sets และ Maps

[<< วัน 9](../09_Day_Higher_order_functions/09_day.md) | [ตารางเรียน](../README.md) | [วัน 11 >>](../11_Day_Destructuring_and_spreading/11_day.md)

บทอังกฤษเต็ม: [Day 10](../../10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md)

## วันนี้เรียนอะไร

- **Set** = เก็บค่าไม่ซ้ำ
- **Map** = เก็บคู่ key → value (key เป็นชนิดอะไรก็ได้)
- หา union / intersection / difference ของเซ็ต

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| Set | ชุดค่าไม่ซ้ำ |
| add / delete / has / clear | เพิ่ม / ลบ / มีไหม / ล้างทั้งหมด |
| Map | แผนที่ key–value |
| set / get | ใส่ค่า / ดึงค่าใน Map |
| union | รวมสองเซ็ต |
| intersection | ส่วนที่ซ้อนกัน |
| difference | มีใน A แต่ไม่มีใน B |

## ตัวอย่างสั้นๆ

```js
const companies = new Set(['Google', 'Facebook', 'Amazon'])
companies.add('Oracle')
companies.delete('Facebook')
console.log(companies.has('Google')) // true
console.log(companies.size)

const a = new Set([1, 2, 3])
const b = new Set([2, 3, 4])
const union = new Set([...a, ...b])                    // 1,2,3,4
const intersection = new Set([...a].filter((x) => b.has(x))) // 2,3
```

```js
const map = new Map()
map.set('Finland', 7)
map.set('Thailand', 8)
console.log(map.get('Finland')) // 7
console.log(map.size)
```

## ลองรันยังไง

ทำ [`practice.js`](./practice.js)

## แบบฝึกหัด

สร้าง Set ว่าง, Set 0–10, ลบ/ล้าง, Map ประเทศ→ความยาวชื่อ  
Level 2: union / intersection / difference ของ `a` กับ `b`

---

ไปต่อ [วัน 11](../11_Day_Destructuring_and_spreading/11_day.md)

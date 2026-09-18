# วัน 3 — Boolean, Operators, Date

[<< วัน 2](../02_Day_Data_types/02_day.md) | [ตารางเรียน](../README.md) | [วัน 4 >>](../04_Day_Conditionals/04_day.md)

บทอังกฤษเต็ม: [Day 3](../../03_Day_Booleans_operators_date/03_booleans_operators_date.md)

## วันนี้เรียนอะไร

- ค่า **truthy** / **falsy**
- ตัวดำเนินการเปรียบเทียบ (`>`, `===`) และตรรกะ (`&&`, `||`, `!`)
- ความต่างของ `==` กับ `===`
- ใช้ `Date` ดึงวันเวลาปัจจุบัน
- รับค่าจากผู้ใช้ด้วย `prompt()` (ต้องรันในเบราว์เซอร์)

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| boolean | `true` หรือ `false` |
| truthy | ค่าที่เมื่อใช้ใน if แล้วถือว่าจริง (เช่น ตัวเลขไม่ใช่ 0, สตริงไม่ว่าง) |
| falsy | ค่าที่ถือว่าเท็จ: `0`, `''`, `null`, `undefined`, `NaN`, `false` |
| == | เทียบค่า (อาจแปลงชนิดให้) |
| === | เทียบค่าและชนิด (แนะนำใช้ตัวนี้) |
| && | และ — จริงเมื่อทั้งสองข้างจริง |
| \|\| | หรือ — จริงเมื่ออย่างน้อยหนึ่งข้างจริง |
| ! | ไม่ — พลิก true/false |
| Date | วัตถุวันเวลา |

## ตัวอย่างสั้นๆ

### เปรียบเทียบ

```js
console.log(4 > 3)    // true
console.log(4 == '4') // true  (แปลงชนิดให้)
console.log(4 === '4') // false (ชนิดไม่เหมือน)
```

### ตรรกะ

```js
console.log(4 > 3 && 10 < 12) // true
console.log(4 > 3 && 10 > 12) // false
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3))         // false
```

### Date

```js
const now = new Date()
console.log(now.getFullYear()) // ปี เช่น 2026
console.log(now.getMonth())    // เดือน 0–11 (มกราคม = 0)
console.log(now.getDate())     // วันที่ในเดือน
console.log(now.getDay())      // วันในสัปดาห์ 0=อาทิตย์
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())     // มิลลิวินาทีตั้งแต่ 1 ม.ค. 1970
```

### prompt (เบราว์เซอร์เท่านั้น)

```js
let base = prompt('Enter base:')
let height = prompt('Enter height:')
let area = 0.5 * Number(base) * Number(height)
console.log(`The area of the triangle is ${area}`)
```

## ลองรันยังไง

1. ทดลองเปรียบเทียบใน Console ก่อนเดาคำตอบ แล้วค่อยยืนยัน
2. ข้อที่ใช้ `prompt` เปิดหน้า HTML ว่างหรือ starter แล้ววางโค้ดใน Console
3. ทำ [`practice.js`](./practice.js)

## แบบฝึกหัด

**Level 1** (ใน practice.js): typeof, เปรียบเทียบ, && \|\| !, และ Date  
**Level 2+**: พื้นที่สามเหลี่ยม/สี่เหลี่ยม, คำนวณอายุขับรถ, จัดรูปแบบเวลา — ดูรายละเอียดในบทอังกฤษเมื่อพร้อม

---

ไปต่อ [วัน 4](../04_Day_Conditionals/04_day.md)

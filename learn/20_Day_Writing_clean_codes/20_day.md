# วัน 20 — Writing Clean Code

[<< วัน 19](../19_Day_Closures/19_day.md) | [ตารางเรียน](../README.md) | [วัน 21 >>](../21_Day_DOM/21_day.md)

บทอังกฤษเต็ม: [Day 20](../../20_Day_Writing_clean_codes/20_day_writing_clean_codes.md)

## วันนี้เรียนอะไร

- โค้ดที่ “ทำงานได้” ยังไม่พอ ต้อง **อ่านง่าย ตั้งชื่อดี สม่ำเสมอ**
- รู้จัก style guide เช่น Airbnb / Standard / Google
- ธรรมเนียมในคอร์สนี้: camelCase ตัวแปร, PascalCase คลาส, ค่าคงที่ตัวพิมพ์ใหญ่

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| style guide | กฎการเขียนโค้ดของทีม/ชุมชน |
| camelCase | firstName, getUserInfo |
| PascalCase | PersonAccount, Student |
| constant | ค่าคงที่ เช่น `const PI = 3.14` |
| readable | อ่านรู้เรื่อง |

## แนวทางสั้นๆ ที่ควรจำ

```js
// ดี
let firstName = 'Tong'
const MAX_SIZE = 100
function calculateTotalPrice(items) {}

// ไม่ดี
let x1 = 'Tong'
const maxsize = 100
function ctp(a) {}
```

```js
// เงื่อนไขอ่านง่าย
if (isLoggedIn && hasPermission) {
  showDashboard()
}

// array / object ชื่อเป็นพหูพจน์หรือสื่อความหมาย
const users = []
const product = { id: 1, title: 'Book' }
```

## ลองรันยังไง

วันนี้น้อยโจทย์โค้ด — เน้น **รีวิวโค้ดเก่าของคุณ**  
เปิด [`practice.js`](./practice.js) แล้วแก้ชื่อตัวแปร/ฟังก์ชันให้สะอาด

## แบบฝึกหัด

1. เปิด `practice.js` วัน 1–8 ที่คุณเคยเขียน แล้วเปลี่ยนชื่อที่งงให้สื่อความหมาย  
2. แยกฟังก์ชันยาวๆ ให้ทำหน้าที่เดียว  
3. ลบโค้ดซ้ำ / comment ที่ไม่ได้ใช้  
4. เขียนฟังก์ชันใหม่ 1 ตัวตาม style ในบทนี้ แล้วอธิบายใน comment ว่าทำไมชื่อแบบนี้

---

ไปต่อ [วัน 21](../21_Day_DOM/21_day.md) — เริ่มแตะหน้าเว็บจริง

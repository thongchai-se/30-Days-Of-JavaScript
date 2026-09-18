# วัน 21 — DOM พื้นฐาน

[<< วัน 20](../20_Day_Writing_clean_codes/20_day.md) | [ตารางเรียน](../README.md) | [วัน 22 >>](../22_Day_Manipulating_DOM_object/22_day.md)

บทอังกฤษเต็ม: [Day 21](../../21_Day_DOM/21_day_dom.md)

## วันนี้เรียนอะไร

- **DOM** = โครงสร้างหน้าเว็บที่ JS เข้าถึงได้
- เลือก element ด้วย `querySelector`, `getElementById`, `getElementsByTagName` ฯลฯ
- แก้ข้อความ, class, style จาก JavaScript

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| DOM | Document Object Model |
| element | ป้าย HTML เช่น `<p>`, `<div>` |
| querySelector | เลือกตัวแรกที่ตรง CSS selector |
| querySelectorAll | เลือกทั้งหมด เป็น NodeList |
| textContent / innerHTML | ใส่ข้อความ / ใส่ HTML |
| classList | เพิ่ม/ลบ class |
| style | แก้ CSS ผ่าน JS เช่น `el.style.color` |

## ตัวอย่างสั้นๆ

```js
const firstP = document.querySelector('p')
const byId = document.querySelector('#second')
const allP = document.querySelectorAll('p')

allP.forEach((p, i) => {
  console.log(p.textContent)
  p.id = `para-${i + 1}`
})

allP[3].textContent = 'Fourth Paragraph'
allP[0].style.color = 'green'
allP[0].classList.add('title')
```

## ลองรันยังไง

1. เปิด [`21_day_starter/index.html`](../../21_Day_DOM/21_day_starter/index.html)
2. เขียนใน `scripts/main.js` หรือทำตาม checklist ใน [`practice.js`](./practice.js)
3. รีเฟรชเบราว์เซอร์ดูผล

## แบบฝึกหัด

สร้าง 4 ย่อหน้า `<p>` แล้วเลือก/แก้ด้วย querySelector  
เปลี่ยนสีสลับเขียว–แดง  
Mini project: ปีเปลี่ยนสีทุกวินาที + สถานะ challenge เขียว/เหลือง/แดง

---

ไปต่อ [วัน 22](../22_Day_Manipulating_DOM_object/22_day.md)

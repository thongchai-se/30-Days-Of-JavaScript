# วัน 13 — Console Object Methods

[<< วัน 12](../12_Day_Regular_expressions/12_day.md) | [ตารางเรียน](../README.md) | [วัน 14 >>](../14_Day_Error_handling/14_day.md)

บทอังกฤษเต็ม: [Day 13](../../13_Day_Console_object_methods/13_day_console_object_methods.md)

## วันนี้เรียนอะไร

- นอกจาก `console.log` ยังมีเครื่องมือช่วย debug อีกหลายตัว
- แสดงตาราง, จัดกลุ่ม log, จับเวลา, assert, warn, error

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| console.table | แสดงข้อมูลเป็นตาราง |
| console.group | จัดกลุ่มข้อความใน Console |
| console.time / timeEnd | จับเวลาการทำงาน |
| console.assert | แจ้งเตือนถ้าเงื่อนไขเป็น false |
| console.warn / error | คำเตือน / ข้อผิดพลาด |

## ตัวอย่างสั้นๆ

```js
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.table(countries)

console.group('Names')
console.log('Tong')
console.log('Jane')
console.groupEnd()

console.time('loop')
for (let i = 0; i < 100000; i++) {}
console.timeEnd('loop')

console.assert(10 > 2 * 10, '10 ไม่ได้มากกว่า 20')
console.warn('นี่คือคำเตือน')
console.error('นี่คือ error')
```

## ลองรันยังไง

ต้องรันใน **Browser Console** (F12) จะเห็นผลชัดที่สุด  
ทำ [`practice.js`](./practice.js) แล้ว copy ไปวางใน Console

## แบบฝึกหัด

แสดง countries เป็นตาราง, ใช้ group, assert, warn, error  
Level 3: เทียบความเร็ว while / for / for…of / forEach ด้วย `console.time`

---

ไปต่อ [วัน 14](../14_Day_Error_handling/14_day.md)

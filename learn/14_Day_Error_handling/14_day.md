# วัน 14 — Error Handling

[<< วัน 13](../13_Day_Console_object_methods/13_day.md) | [ตารางเรียน](../README.md) | [วัน 15 >>](../15_Day_Classes/15_day.md)

บทอังกฤษเต็ม: [Day 14](../../14_Day_Error_handling/13_day_console_object_methods.md)  
(หมายเหตุ: ไฟล์ต้นฉบับตั้งชื่อผิดเล็กน้อย แต่เนื้อหาคือ Error Handling)

## วันนี้เรียนอะไร

- โปรแกรมอาจพังเมื่อมี error — ใช้ `try…catch…finally` ดักไว้
- โยน error เองด้วย `throw`
- รู้จัก error ชนิดหลัก เช่น ReferenceError, TypeError, SyntaxError

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| try | ลองรันโค้ดที่อาจพัง |
| catch | จับ error แล้วจัดการ |
| finally | รันเสมอ ไม่ว่าสำเร็จหรือพัง |
| throw | โยน error เอง |
| ReferenceError | ใช้ตัวแปรที่ไม่มี |
| TypeError | เรียกเมธอดผิดชนิด เช่น ตัวเลข.toUpperCase() |

## ตัวอย่างสั้นๆ

```js
try {
  let lastName = 'Yetayeh'
  let fullName = firstName + ' ' + lastName // firstName ยังไม่มี
} catch (err) {
  console.log('เกิด error:', err.name)
  console.log('ข้อความ:', err.message)
} finally {
  console.log('บล็อกนี้รันเสมอ')
}
```

```js
const throwErrorExample = () => {
  let x = prompt('Enter a number:')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    console.log(x)
  } catch (err) {
    console.log(err)
  }
}
```

## ลองรันยังไง

ทำ [`practice.js`](./practice.js) — ต้นฉบับให้แค่ "Practice" จึงมีโจทย์ฝึกเองด้านล่าง

## แบบฝึกหัด (ฝึกเอง)

1. เขียน try/catch ที่จงใจเรียกตัวแปรไม่มี แล้วพิมพ์ `err.name` กับ `err.message`
2. ลองเรียก `'hi'.toFixed()` หรือ `123.toUpperCase()` แล้วจับ TypeError
3. เขียนฟังก์ชันรับอายุ ถ้าไม่ใช่ตัวเลขหรือติดลบให้ `throw`
4. ใส่ `finally` ที่พิมพ์ว่าทำงานเสร็จแล้วทุกกรณี

---

ไปต่อ [วัน 15](../15_Day_Classes/15_day.md)

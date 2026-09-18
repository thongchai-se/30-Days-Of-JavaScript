# วัน 7 — ฟังก์ชัน (Functions)

[<< วัน 6](../06_Day_Loops/06_day.md) | [ตารางเรียน](../README.md) | [วัน 8 >>](../08_Day_Objects/08_day.md)

บทอังกฤษเต็ม: [Day 7](../../07_Day_Functions/07_day_functions.md)

## วันนี้เรียนอะไร

- ฟังก์ชัน = ชุดคำสั่งที่ตั้งชื่อไว้ เรียกใช้ซ้ำได้
- รับ **parameter** ส่งค่ากลับด้วย **return**
- รู้จักฟังก์ชันไม่มีพารามิเตอร์ / มีพารามิเตอร์ / ค่าเริ่มต้น / ไม่จำกัดจำนวนอาร์กิวเมนต์
- รู้จัก **anonymous** และ **arrow function** แบบสั้นๆ

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| function | ฟังก์ชัน |
| parameter | ตัวแปรรับค่าตอนประกาศฟังก์ชัน |
| argument | ค่าจริงที่ส่งตอนเรียกใช้ |
| return | ส่งค่ากลับออกจากฟังก์ชัน |
| arrow function | รูปแบบสั้น `() => {}` |
| scope | ขอบเขตตัวแปร (ใน/นอกฟังก์ชัน) |

## ตัวอย่างสั้นๆ

```js
// ไม่รับพารามิเตอร์
function printFullName() {
  console.log('Thongchai S.')
}
printFullName()

// รับพารามิเตอร์ + return
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(fullName('Thongchai', 'S.'))

function addNumbers(a, b) {
  return a + b
}
console.log(addNumbers(2, 3)) // 5

// ค่าเริ่มต้นของพารามิเตอร์
function greet(name = 'Guest') {
  return `Hello, ${name}`
}

// arrow function
const square = (n) => n * n
console.log(square(4)) // 16
```

### BMI ตัวอย่างโครง

```js
function bmi(weightKg, heightM) {
  const value = weightKg / (heightM * heightM)
  if (value < 18.5) return 'Underweight'
  if (value < 25) return 'Normal weight'
  if (value < 30) return 'Overweight'
  return 'Obese'
}
```

(ลองเขียนเองใน practice — อย่าแค่ก็อปโครงนี้แล้วจบ ให้เข้าใจทำไมแต่ละบรรทัดอยู่)

## ลองรันยังไง

- เรียกฟังก์ชันใน Console แล้วเปลี่ยนอาร์กิวเมนต์ดูผล
- ทำ [`practice.js`](./practice.js) ให้ครบ Level 1

## แบบฝึกหัด

**Level 1:** fullName, addNumbers, พื้นที่/เส้นรอบวง, BMI, checkSeason, findMax โดยไม่ใช้ Math.max  
**Level 2–3:** สมการ, จัดการ array ในฟังก์ชัน — ดูบทอังกฤษเมื่อพร้อม

---

ไปต่อ [วัน 8](../08_Day_Objects/08_day.md)

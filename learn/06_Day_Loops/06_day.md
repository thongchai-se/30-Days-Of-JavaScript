# วัน 6 — ลูป (Loops)

[<< วัน 5](../05_Day_Arrays/05_day.md) | [ตารางเรียน](../README.md) | [วัน 7 >>](../07_Day_Functions/07_day.md)

บทอังกฤษเต็ม: [Day 6](../../06_Day_Loops/06_day_loops.md)

## วันนี้เรียนอะไร

- ทำซ้ำด้วย `for`, `while`, `do…while`
- วนสมาชิก array ด้วย `for…of`
- วน key ของ object ด้วย `for…in` (วัน 8 จะใช้บ่อยขึ้น)
- สร้าง pattern / ตารางคูณด้วยลูป

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| loop | การวนซ้ำ |
| iterate | วนทีละรอบ |
| for | วนเมื่อรู้จำนวนรอบชัดเจน |
| while | วนตราบที่เงื่อนไขยังจริง |
| do while | ทำก่อน อย่างน้อย 1 ครั้ง แล้วค่อยเช็คเงื่อนไข |
| for…of | วนค่าใน array |
| break / continue | หยุดลูป / ข้ามรอบนั้น |

## ตัวอย่างสั้นๆ

```js
// for: 0 ถึง 10
for (let i = 0; i <= 10; i++) {
  console.log(i)
}

// while
let i = 0
while (i <= 10) {
  console.log(i)
  i++
}

// do while
let j = 0
do {
  console.log(j)
  j++
} while (j <= 10)

// for...of กับ array
const fruits = ['banana', 'apple', 'mango']
for (const fruit of fruits) {
  console.log(fruit)
}
```

### Pattern

```js
for (let i = 1; i <= 7; i++) {
  console.log('#'.repeat(i))
}
```

### ตารางกำลังสอง

```js
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`)
}
```

## ลองรันยังไง

- เปิด Console แล้วเปลี่ยนขอบเขตลูปดูผล
- ทำ [`practice.js`](./practice.js)

## แบบฝึกหัด

**Level 1:** วน 0→10 และ 10→0 ด้วย for/while/do while, pattern `#`, ตารางคูณ, ยกกำลัง  
ต่อด้วย even/odd, sum, สร้าง array จากลูป — รายละเอียดเพิ่มในบทอังกฤษ

---

ไปต่อ [วัน 7](../07_Day_Functions/07_day.md)

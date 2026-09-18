# วัน 12 — Regular Expressions (RegExp)

[<< วัน 11](../11_Day_Destructuring_and_spreading/11_day.md) | [ตารางเรียน](../README.md) | [วัน 13 >>](../13_Day_Console_object_methods/13_day.md)

บทอังกฤษเต็ม: [Day 12](../../12_Day_Regular_expressions/12_day_regular_expressions.md)

## วันนี้เรียนอะไร

- RegExp = รูปแบบค้นหา/จับข้อความ
- สร้างด้วย `/pattern/flags` หรือ `new RegExp()`
- ใช้กับ `test`, `match`, `search`, `replace`, `split`

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| pattern | รูปแบบที่ต้องการจับ |
| flag `g` | global — หาทั้งหมด |
| flag `i` | ไม่สนตัวพิมพ์ใหญ่เล็ก |
| flag `m` | multiline |
| `\d` | ตัวเลข |
| `\w` | ตัวอักษร/ตัวเลข/_ |
| `+` `*` `?` | ซ้ำหนึ่งขึ้นไป / ศูนย์ขึ้นไป / ศูนย์หรือหนึ่ง |

## ตัวอย่างสั้นๆ

```js
const str = 'I love JavaScript'
const pattern = /love/gi
console.log(pattern.test(str))     // true
console.log(str.match(pattern))    // ['love']
console.log(str.replace(/JavaScript/g, 'Python'))

const text = 'He earns 4000 euro'
const nums = text.match(/\d+/g)    // ['4000']
```

```js
// ชื่อตัวแปร JS คร่าวๆ: ขึ้นต้นด้วยตัวอักษรหรือ _ หรือ $
const isValid = (name) => /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)
console.log(isValid('first_name')) // true
console.log(isValid('1name'))      // false
```

## ลองรันยังไง

ทำ [`practice.js`](./practice.js) — ทดลอง pattern ใน Console ก่อนก็ได้

## แบบฝึกหัด

ดึงตัวเลขจากข้อความรายได้, หาระยะระหว่างจุดบนแกน x, ตรวจชื่อตัวแปรที่ถูกต้อง

---

ไปต่อ [วัน 13](../13_Day_Console_object_methods/13_day.md)

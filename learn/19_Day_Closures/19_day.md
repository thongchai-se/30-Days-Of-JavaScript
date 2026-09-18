# วัน 19 — Closures

[<< วัน 18](../18_Day_Promises/18_day.md) | [ตารางเรียน](../README.md) | [วัน 20 >>](../20_Day_Writing_clean_codes/20_day.md)

บทอังกฤษเต็ม: [Day 19](../../19_Day_Closures/19_day_closures.md)

## วันนี้เรียนอะไร

- **Closure** = ฟังก์ชันด้านในที่ยังเข้าถึงตัวแปรของฟังก์ชันด้านนอกได้ แม้ฟังก์ชันนอกจะจบไปแล้ว
- ใช้เก็บ “สถานะส่วนตัว” ได้ เช่น ตัวนับ ที่ภายนอกแก้ตรงๆ ไม่ได้

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| outer function | ฟังก์ชันนอก |
| inner function | ฟังก์ชันใน |
| closure | การที่ฟังก์ชันใน “จำ” ตัวแปรของนอกได้ |
| private variable | ตัวแปรที่ภายนอกแตะตรงๆ ไม่ได้ |

## ตัวอย่างสั้นๆ

```js
function outerFunction() {
  let count = 0
  function innerFunction() {
    count++
    return count
  }
  return innerFunction
}

const counter = outerFunction()
console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3
// ภายนอกแก้ count ตรงๆ ไม่ได้
```

```js
function createAccount(firstName) {
  let balance = 0
  return {
    deposit(amount) {
      balance += amount
      return balance
    },
    getBalance() {
      return balance
    },
    info() {
      return `${firstName}: ${balance}`
    }
  }
}
```

## ลองรันยังไง

ทำ [`practice.js`](./practice.js)

## แบบฝึกหัด

สร้าง closure มี inner 1 ตัว / มี inner 3 ตัว  
Level 3: personAccount แบบ closure

---

ไปต่อ [วัน 20](../20_Day_Writing_clean_codes/20_day.md)

# วัน 1 — เริ่มต้น JavaScript

[ตารางเรียน](../README.md) | [หน้าแรก](../../README.md) | [วัน 2 >>](../02_Day_Data_types/02_day.md)

## วันนี้เรียนอะไร

- JavaScript คือภาษาที่ทำให้เว็บมีปฏิกิริยา (คลิก แสดงข้อความ คำนวณ ฯลฯ)
- เขียนโค้ดใน Console ของเบราว์เซอร์ หรือในไฟล์ `.js`
- รู้จัก **comment**, **ชนิดข้อมูลเบื้องต้น**, และ **ตัวแปร** (`let` / `const`)

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| variable | ตัวแปร — กล่องเก็บค่า |
| string | ข้อความ อยู่ใน `' '` หรือ `" "` |
| number | ตัวเลข |
| boolean | จริง/เท็จ (`true` / `false`) |
| undefined | ประกาศตัวแปรแล้ว แต่ยังไม่ใส่ค่า |
| null | ตั้งใจให้ว่าง |
| console.log | สั่งพิมพ์ค่าออกมาดู |
| comment | ข้อความอธิบายโค้ด — โปรแกรมไม่รันบรรทัดนี้ |

## ตัวอย่างสั้นๆ

### 1) พิมพ์ข้อความ

```js
console.log('Hello, World!')
```

### 2) Comment

```js
// นี่คือ comment บรรทัดเดียว
/* นี่คือ
   comment หลายบรรทัด */
```

### 3) ชนิดข้อมูลเบื้องต้น

```js
console.log(typeof 'Thongchai') // string
console.log(typeof 25)          // number
console.log(typeof true)        // boolean
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object (พิเศษของ JS — จำไว้ก่อน)
```

### 4) ประกาศตัวแปร

```js
let firstName = 'Thongchai' // เปลี่ยนค่าได้
const PI = 3.14             // ค่าคงที่ อย่าเปลี่ยน

let age                     // ยังไม่ใส่ค่า = undefined
age = 25

console.log(firstName, age, PI)
```

### 5) ประกาศหลายตัวในบรรทัดเดียว (ได้ แต่แยกบรรทัดอ่านง่ายกว่า)

```js
let name = 'Tong', job = 'student', live = 'Thailand'
```

## ลองรันยังไง

1. เปิด [`01_day_starter/index.html`](../../01_Day_Introduction/01_day_starter/index.html) ใน Chrome
2. กด F12 → แท็บ Console จะเห็นข้อความจากไฟล์ตัวอย่าง
3. หรือเปิด Console แล้วพิมพ์ `console.log(1 + 2)` เอง

## แบบฝึกหัด

ทำใน [`practice.js`](./practice.js) — **เขียนเอง ห้ามเปิดเฉลย**

1. เขียน comment บรรทัดเดียวว่า `comments can make code readable`
2. เขียน comment อีกบรรทัดว่า `Welcome to 30DaysOfJavaScript`
3. เขียน comment หลายบรรทัดว่า comments ทำให้โค้ดอ่านง่าย นำกลับมาใช้ได้ และให้ข้อมูล
4. ประกาศตัวแปรที่เป็น string, boolean, undefined, null
5. ใช้ `typeof` ตรวจชนิดข้อมูลของตัวแปรแต่ละตัว แล้ว `console.log`
6. ประกาศตัวแปร 4 ตัวโดยยังไม่ใส่ค่า
7. ประกาศตัวแปร 4 ตัวพร้อมใส่ค่า
8. เก็บชื่อ นามสกุล สถานะสมรส ประเทศ อายุ — แยกหลายบรรทัด
9. เก็บข้อมูลชุดเดียวกัน — ในบรรทัดเดียว
10. ประกาศ `myAge` และ `yourAge` แล้วพิมพ์แบบนี้:

```text
I am 25 years old.
You are 30 years old.
```

(ใส่ตัวเลขของคุณเองได้)

---

จบวัน 1 แล้วไป [วัน 2](../02_Day_Data_types/02_day.md)

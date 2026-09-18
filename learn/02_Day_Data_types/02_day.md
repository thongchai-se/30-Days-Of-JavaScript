# วัน 2 — ชนิดข้อมูล (Data Types)

[<< วัน 1](../01_Day_Introduction/01_day.md) | [ตารางเรียน](../README.md) | [วัน 3 >>](../03_Day_Booleans_operators_date/03_day.md)

บทอังกฤษเต็ม: [Day 2](../../02_Day_Data_types/02_day_data_types.md)

## วันนี้เรียนอะไร

- แยกชนิดข้อมูล: **Primitive** (ค่าเดี่ยว) กับ **Non-primitive** (อ้างอิง เช่น array, object)
- ใช้เมธอดของ **string** และ **number** ให้เป็น
- แปลงชนิดด้วย `parseInt`, `parseFloat`, `Number`, `String`
- สุ่มตัวเลขด้วย `Math.random()`

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| primitive | ชนิดพื้นฐาน: string, number, boolean, null, undefined, symbol, bigint |
| length | ความยาวของ string หรือ array |
| method | ฟังก์ชันที่ติดกับค่า เช่น `'hi'.toUpperCase()` |
| index | ตำแหน่ง เริ่มที่ 0 |
| template literal | ข้อความใน `` ` `` ใส่ตัวแปรด้วย `${}` |
| cast / convert | แปลงชนิดข้อมูล |

## ตัวอย่างสั้นๆ

### String methods ที่ใช้บ่อย

```js
let challenge = '30 Days Of JavaScript'

console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 2))   // '30'
console.log(challenge.includes('Script')) // true
console.log(challenge.split(' '))         // แยกเป็น array ตามช่องว่าง
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.indexOf('a'))
console.log(challenge.trim())
console.log(challenge.repeat(2))
```

### Number และ Math

```js
console.log(parseInt('10'))      // 10
console.log(parseFloat('9.8'))   // 9.8
console.log(Math.round(9.8))     // 10
console.log(Math.floor(9.8))     // 9
console.log(Math.ceil(9.2))      // 10
console.log(Math.max(1, 5, 3))   // 5
console.log(Math.random())       // 0 ถึงเกือบ 1
console.log(Math.floor(Math.random() * 101)) // 0–100
```

### Template literal

```js
let firstName = 'Tong'
let age = 25
console.log(`ฉันชื่อ ${firstName} อายุ ${age} ปี`)
```

## ลองรันยังไง

- เปิด Console แล้วทดลองเมธอดทีละตัว
- หรือดูตัวอย่างในโฟลเดอร์ [`02_Day_Data_types/string_methods/`](../../02_Day_Data_types/string_methods/)
- ทำโจทย์ใน [`practice.js`](./practice.js)

## แบบฝึกหัด (Level 1 — ใน practice.js)

เริ่มจากตัวแปร `challenge = '30 Days Of JavaScript'` แล้วฝึก length, toUpperCase, toLowerCase, substring, includes, split, replace, charAt, indexOf, trim, startsWith, endsWith, match, concat, repeat

Level 2–3 มีในบทอังกฤษ (quote, random, นับคำ) — ทำ Level 1 ให้คล่องก่อน

---

ไปต่อ [วัน 3](../03_Day_Booleans_operators_date/03_day.md)

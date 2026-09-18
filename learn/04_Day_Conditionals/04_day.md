# วัน 4 — เงื่อนไข (Conditionals)

[<< วัน 3](../03_Day_Booleans_operators_date/03_day.md) | [ตารางเรียน](../README.md) | [วัน 5 >>](../05_Day_Arrays/05_day.md)

บทอังกฤษเต็ม: [Day 4](../../04_Day_Conditionals/04_day_conditionals.md)

## วันนี้เรียนอะไร

- สั่งให้โปรแกรม **ตัดสินใจ**: ถ้า… แล้ว… ไม่งั้น…
- ใช้ `if`, `if…else`, `if…else if…else`
- ใช้ **ternary** `? :` สำหรับเงื่อนไขสั้นๆ
- ใช้ `switch` เมื่อเทียบค่าคงที่หลายกรณี

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| condition | เงื่อนไข ที่ได้ true/false |
| if / else | ถ้า / ไม่งั้น |
| else if | ไม่งั้นถ้า (เงื่อนไขถัดไป) |
| ternary | รูปแบบย่อ `เงื่อนไข ? ค่าเมื่อจริง : ค่าเมื่อเท็จ` |
| switch / case | เลือกตามค่าที่ตรงกับ case |
| break | หยุดออกจาก switch (สำคัญมาก) |

## ตัวอย่างสั้นๆ

### if / else if / else

```js
let weather = 'sunny'

if (weather === 'rainy') {
  console.log('พกร่ม')
} else if (weather === 'cloudy') {
  console.log('อาจมีฝน')
} else if (weather === 'sunny') {
  console.log('อากาศดี')
} else {
  console.log('ไม่รู้สภาพอากาศ')
}
```

### ตรวจเลขคู่

```js
let num = 2
if (num % 2 === 0) {
  console.log(`${num} is an even number`)
} else {
  console.log(`${num} is an odd number`)
}
```

### Ternary

```js
let a = 4
let b = 3
let result = a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`
console.log(result)
```

### switch

```js
let day = 'Saturday'
switch (day.toLowerCase()) {
  case 'saturday':
  case 'sunday':
    console.log(`${day} is a weekend`)
    break
  default:
    console.log(`${day} is a working day`)
}
```

## ลองรันยังไง

- ทดลองเปลี่ยนค่าตัวแปรแล้วดูว่าเข้ากิ่งไหน
- ข้อ `prompt` รันในเบราว์เซอร์
- ทำ [`practice.js`](./practice.js)

## แบบฝึกหัด

**Level 1:** อายุขับรถ, เทียบอายุ, เทียบ a/b, เลขคู่/คี่  
**Level 2:** เกรดคะแนน, ฤดูตามเดือน, วันทำงาน/หยุด  
**Level 3:** จำนวนวันในเดือน (+ leap year)

---

ไปต่อ [วัน 5](../05_Day_Arrays/05_day.md)

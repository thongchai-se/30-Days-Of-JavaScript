# วัน 8 — ออบเจ็กต์ (Objects)

[<< วัน 7](../07_Day_Functions/07_day.md) | [ตารางเรียน](../README.md)

บทอังกฤษเต็ม: [Day 8](../../08_Day_Objects/08_day_objects.md)

## วันนี้เรียนอะไร

- Object = เก็บข้อมูลแบบ **ชื่อ: ค่า** (key–value)
- อ่าน/เขียนด้วย `obj.key` หรือ `obj['key']`
- มีเมธอดเป็นฟังก์ชันใน object ได้
- ใช้ `Object.keys`, `Object.values`, `Object.entries`
- คัดลอกแบบไม่แก้ต้นฉบับด้วย spread `{ ...obj }`

จบวันนี้ คุณจะมีพื้นฐานพอเริ่มเขียนโปรแกรมเล็กๆ ได้: ตัวแปร → เงื่อนไข → รายการ → วนซ้ำ → ฟังก์ชัน → ข้อมูลเป็นก้อน

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| object | ออบเจ็กต์ / วัตถุข้อมูล |
| property / key | ชื่อช่องข้อมูล |
| value | ค่าในช่องนั้น |
| method | ฟังก์ชันที่เป็น property ของ object |
| this | อ้างถึง object ตัวเองในเมธอด (เรียนรู้ทีละขั้น) |

## ตัวอย่างสั้นๆ

```js
const person = {
  firstName: 'Thongchai',
  lastName: 'S.',
  age: 25,
  country: 'Thailand',
  skills: ['HTML', 'CSS', 'JavaScript'],
  isMarried: false,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.firstName)
console.log(person['age'])
person.title = 'Student'          // เพิ่ม property
person.age = 26                   // แก้ค่า

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(person.getFullName())
```

### คัดลอกไม่แก้ต้นฉบับ

```js
const copy = { ...person, firstName: 'NewName' }
```

## ลองรันยังไง

- ทำ object ใน Console แล้วเพิ่ม/แก้ property
- ทำ [`practice.js`](./practice.js) ให้จบ Level 1 ก่อน แล้วค่อย Level 2

## แบบฝึกหัด

**Level 1:** สร้าง `dog`, ใส่ name/legs/color/age/bark, อ่านค่า, เพิ่ม breed และ getDogInfo  
**Level 2:** วิเคราะห์ object `users` (คนที่มี skills เยอะสุด, คนล็อกอิน, MERN ฯลฯ)  
**Level 3:** `personAccount` มีรายรับ–รายจ่าย

## หลังจบวัน 8

ยินดีด้วย — พื้นฐานหลักครบแล้ว  
กลับไปทบทวนจุดที่ยังเขียนไม่คล่อง แล้วไปต่อวัน 9

[ตารางเรียน](../README.md) · [วัน 9 >>](../09_Day_Higher_order_functions/09_day.md)

# วัน 15 — Classes

[<< วัน 14](../14_Day_Error_handling/14_day.md) | [ตารางเรียน](../README.md) | [วัน 16 >>](../16_Day_JSON/16_day.md)

บทอังกฤษเต็ม: [Day 15](../../15_Day_Classes/15_day_classes.md)

## วันนี้เรียนอะไร

- **Class** = แม่แบบสร้าง object หลายตัวรูปแบบเดียวกัน
- มี `constructor`, method, getter/setter, static
- **Inheritance** = ลูกสืบทอดจากแม่ด้วย `extends` / `super`

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| class | คลาส / แม่แบบ |
| constructor | ฟังก์ชันที่รันตอนสร้าง object ใหม่ |
| instance | object ที่สร้างจาก class ด้วย `new` |
| extends | สืบทอดจากคลาสอื่น |
| super | เรียก constructor/method ของคลาสแม่ |
| getter / setter | อ่าน/เขียน property ผ่านเมธอด |

## ตัวอย่างสั้นๆ

```js
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const p1 = new Person('Thongchai', 'S.', 25)
console.log(p1.getFullName())
```

```js
class Student extends Person {
  constructor(firstName, lastName, age, major) {
    super(firstName, lastName, age)
    this.major = major
  }
  getInfo() {
    return `${this.getFullName()} เรียน ${this.major}`
  }
}
```

## ลองรันยังไง

ทำ [`practice.js`](./practice.js)

## แบบฝึกหัด

สร้าง `Animal`, แล้ว `Dog` / `Cat` สืบทอด  
Override method ของแม่  
Level 3 (ท้าทาย): class `Statistics` คำนวณ mean/median/mode ฯลฯ

---

ไปต่อ [วัน 16](../16_Day_JSON/16_day.md)

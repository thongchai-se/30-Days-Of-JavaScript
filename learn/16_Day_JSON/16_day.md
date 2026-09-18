# วัน 16 — JSON

[<< วัน 15](../15_Day_Classes/15_day.md) | [ตารางเรียน](../README.md) | [วัน 17 >>](../17_Day_Web_storages/17_day.md)

บทอังกฤษเต็ม: [Day 16](../../16_Day_JSON/16_day_json.md)

## วันนี้เรียนอะไร

- JSON = รูปแบบข้อความแลกเปลี่ยนข้อมูล (หน้าตาคล้าย object ของ JS)
- `JSON.stringify` = object/array → สตริง JSON
- `JSON.parse` = สตริง JSON → object/array

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| JSON | JavaScript Object Notation |
| stringify | แปลงเป็นข้อความ JSON |
| parse | แปลงข้อความ JSON กลับเป็นค่า JS |
| replacer | ตัวกรองตอน stringify ว่าจะเอา key ไหน |

## ตัวอย่างสั้นๆ

```js
const user = { name: 'Tong', age: 25, skills: ['JS', 'HTML'] }

const jsonStr = JSON.stringify(user)
console.log(jsonStr) // '{"name":"Tong",...}'

const back = JSON.parse(jsonStr)
console.log(back.name) // Tong

// เลือกเฉพาะบาง key
JSON.stringify(user, ['name', 'skills'], 4)
```

## ลองรันยังไง

ทำ [`practice.js`](./practice.js)

## แบบฝึกหัด

stringify `skills`, `age`, `isMarried`, `student`  
Level 2: stringify เฉพาะ firstName, lastName, skills  
Level 3: parse `txt` แล้วหาคนที่มี skills เยอะสุด

---

ไปต่อ [วัน 17](../17_Day_Web_storages/17_day.md)

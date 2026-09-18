# วัน 22 — สร้าง/ลบ DOM Element

[<< วัน 21](../21_Day_DOM/21_day.md) | [ตารางเรียน](../README.md) | [วัน 23 >>](../23_Day_Event_listeners/23_day.md)

บทอังกฤษเต็ม: [Day 22](../../22_Day_Manipulating_DOM_object/22_day_manipulating_DOM_object.md)

## วันนี้เรียนอะไร

- สร้าง element ใหม่ด้วย `document.createElement`
- ใส่เข้าหน้าด้วย `appendChild` / `append`
- ลบด้วย `removeChild` หรือ `remove()`

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| createElement | สร้างแท็กใหม่ในหน่วยความจำ |
| appendChild | แปะลูกเข้า parent |
| removeChild | ลบลูกออกจาก parent |

## ตัวอย่างสั้นๆ

```js
const container = document.querySelector('.wrapper')

for (let i = 0; i <= 100; i++) {
  const box = document.createElement('div')
  box.textContent = i
  if (i % 2 === 0) box.style.background = 'green'
  else box.style.background = 'yellow'
  container.appendChild(box)
}
```

## ลองรันยังไง

ใช้โฟลเดอร์ [`22_day_starters`](../../22_Day_Manipulating_DOM_object/22_day_starters/)  
checklist ใน [`practice.js`](./practice.js)

## แบบฝึกหัด

สร้างตัวเลข 0–100 สีตามคู่/คี่/เฉพาะ  
แสดงรายชื่อประเทศ  
โปรเจกต์ challenge info (project_3)

---

ไปต่อ [วัน 23](../23_Day_Event_listeners/23_day.md)

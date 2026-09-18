# วัน 23 — Event Listeners

[<< วัน 22](../22_Day_Manipulating_DOM_object/22_day.md) | [ตารางเรียน](../README.md) | [วัน 24 >>](../24_Day_Project_solar_system/24_day.md)

บทอังกฤษเต็ม: [Day 23](../../23_Day_Event_listeners/23_day_event_listeners.md)

## วันนี้เรียนอะไร

- ฟังเหตุการณ์ผู้ใช้ด้วย `addEventListener`
- เหตุการณ์ที่ใช้บ่อย: click, input, change, keyup, mouseenter
- อ่านค่าจาก `<input>` แล้วตอบสนองทันที

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| event | เหตุการณ์ เช่น คลิก พิมพ์ |
| addEventListener | ผูกฟังก์ชันกับเหตุการณ์ |
| event.target | element ที่เกิดเหตุการณ์ |
| input.value | ค่าในช่องพิมพ์ |

## ตัวอย่างสั้นๆ

```js
const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click', () => {
  console.log('clicked')
})

input.addEventListener('input', (e) => {
  console.log(e.target.value)
})

document.body.addEventListener('keyup', (e) => {
  console.log('key:', e.key, 'code:', e.keyCode)
})
```

## ลองรันยังไง

[`23_day_starters`](../../23_Day_Event_listeners/23_day_starters/) + [`practice.js`](./practice.js)

## แบบฝึกหัด

เครื่องสร้างเลขคู่/คี่/เฉพาะจากค่าที่พิมพ์  
แสดงรหัสปุ่มคีย์บอร์ดที่กด

---

ไปต่อ [วัน 24](../24_Day_Project_solar_system/24_day.md)

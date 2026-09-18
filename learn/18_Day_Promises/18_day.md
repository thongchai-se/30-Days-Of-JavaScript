# วัน 18 — Promises, Fetch, Async/Await

[<< วัน 17](../17_Day_Web_storages/17_day.md) | [ตารางเรียน](../README.md) | [วัน 19 >>](../19_Day_Closures/19_day.md)

บทอังกฤษเต็ม: [Day 18](../../18_Day_Promises/18_day_promises.md)

## วันนี้เรียนอะไร

- **Promise** = สัญญาว่าจะได้ผลลัพธ์ในอนาคต (สำเร็จหรือล้มเหลว)
- สถานะ: pending → fulfilled หรือ rejected
- ดึงข้อมูลจาก API ด้วย `fetch`
- เขียนให้อ่านง่ายด้วย `async` / `await`

## คำศัพท์สำคัญ

| อังกฤษ | ความหมาย |
| --- | --- |
| Promise | ออบเจ็กต์แทนงานแบบรอผล |
| then / catch / finally | เมื่อสำเร็จ / เมื่อพัง / ทำท้ายสุด |
| fetch | ขอข้อมูลจาก URL |
| async | บอกว่าฟังก์ชันทำงานแบบอะซิงโครนัส |
| await | รอ Promise จนเสร็จ แล้วได้ค่า |

## ตัวอย่างสั้นๆ

```js
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = Math.random()
    if (num > 0.5) resolve('สำเร็จ: ' + num)
    else reject('ล้มเหลว: ' + num)
  }, 1000)
})

doPromise
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
```

```js
// ต้องมีเน็ต — ตัวอย่าง countries API (URL ในบทอังกฤษอาจเปลี่ยนได้)
fetch('https://restcountries.com/v2/all')
  .then((res) => res.json())
  .then((data) => console.log(data[0].name))
  .catch((err) => console.log(err))

async function getCountries() {
  try {
    const res = await fetch('https://restcountries.com/v2/all')
    const data = await res.json()
    console.log(data.slice(0, 3))
  } catch (err) {
    console.log(err)
  }
}
```

## ลองรันยังไง

รันในเบราว์เซอร์ มีเน็ต  
API ในโจทย์ต้นฉบับอาจเปลี่ยน — ถ้าพังให้หา URL ใหม่ในบทอังกฤษหรือ docs ของ restcountries  
ทำ [`practice.js`](./practice.js)

## แบบฝึกหัด

ดึง countries API แล้วพิมพ์ชื่อ เมืองหลวง ภาษา ประชากร พื้นที่  
Level 2–3: cats API, ประเทศใหญ่สุด 10 ประเทศ, นับภาษา

---

ไปต่อ [วัน 19](../19_Day_Closures/19_day.md)

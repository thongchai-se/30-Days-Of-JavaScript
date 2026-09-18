// ============================================
// วัน 11 — ไฟล์ฝึก (ไม่มีเฉลย)
// ============================================

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
  { name: 'Brook', scores: 75, skills: ['HTM', 'CSS', 'JS'], age: 16 },
  { name: 'Alex', scores: 80, skills: ['HTM', 'CSS', 'JS'], age: 18 },
  { name: 'David', scores: 75, skills: ['HTM', 'CSS'], age: 22 },
  { name: 'John', scores: 85, skills: ['HTML'], age: 25 },
  { name: 'Sara', scores: 95, skills: ['HTM', 'CSS', 'JS'], age: 26 },
  { name: 'Martha', scores: 80, skills: ['HTM', 'CSS', 'JS'], age: 18 },
  { name: 'Thomas', scores: 90, skills: ['HTM', 'CSS', 'JS'], age: 20 }
]

// Level 1 ข้อ 1: destructure constants → e, pi, gravity, humanBodyTemp, waterBoilingTemp
// เขียนตรงนี้


// ข้อ 2: destructure countries → fin, est, sw, den, nor


// ข้อ 3: destructure rectangle ตาม keys


// Level 2 ข้อ 1: วน users แล้ว destructure เอา keys ทั้งหมดมาใช้


// ข้อ 2: หาคนที่มี skills น้อยกว่า 2


// Level 3 ข้อ 2 (ท้าทาย):
// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
// แกะเป็น name, skills, jsScore, reactScore ในบรรทัดเดียว

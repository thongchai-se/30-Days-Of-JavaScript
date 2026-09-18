// ============================================
// วัน 16 — ไฟล์ฝึก (ไม่มีเฉลย)
// ============================================

const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250
let isMarried = true
const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
}

const txt = `{
  "Alex": {
    "email": "alex@alex.com",
    "skills": ["HTML", "CSS", "JavaScript"],
    "age": 20,
    "isLoggedIn": false,
    "points": 30
  },
  "Asab": {
    "email": "asab@asab.com",
    "skills": ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
    "age": 25,
    "isLoggedIn": false,
    "points": 50
  },
  "Brook": {
    "email": "daniel@daniel.com",
    "skills": ["HTML", "CSS", "JavaScript", "React", "Redux"],
    "age": 30,
    "isLoggedIn": true,
    "points": 50
  }
}`

// Level 1: JSON.stringify skills, age, isMarried, student
// เขียนตรงนี้


// Level 2: stringify student เฉพาะ firstName, lastName, skills


// Level 3: JSON.parse(txt) แล้วหาคนที่มี skills เยอะสุด

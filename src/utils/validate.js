export function valiadateForm({
  name,
  surname,
  studentId,
  username,
  password,
  confirm,
}) {
  const error = {};
  if (name.trim() === "") error.name = "กรุณากรอกชื่อ";
  if (surname.trim() === "") error.surname = "pls input surname";
  if (!/^\d{10}$/.test(studentId.trim()))
    error.studentId = "pls input studentID";
  if (!/^[a-zA-Z0-9_]{4,20}$/.test(username.trim)) {
    error.username =
      "ชื่อผู้ัใช้ยาว 4-20 ตัวอักษร ใช้ได้เฉพาะ a-z A-Z 0-9 และ _";
  }
  if (password.length < 8) {
    error.password = "not more than 8 ";
  } else if (!/^[a-z A-Z]$/.test(password) || !/\d/.test(password)) {
    error.password = "ชื่อผู้ใช้ต้องเป็นตัวอักษรเท่านั้น";
  }
  if (confirm !== password) {
    error.confirm = "รหัสผ่านไม่ตรงกัน";
  }

  return error;
}

export function hasErrors(error) {
  return Object.keys(error).length > 0;
}

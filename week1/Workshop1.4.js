
username = "admin" 
password = "1234"
age = 18

if(username == "admin" && password == "1234" && age >= 18 )
    console.log("เข้าสู่ระบบสำเร็จ")
else if(age < 18)
    console.log("อายุไม่ถึงเกณฑ์")
else if(username != "admin" || password != "1234")
    console.log("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง")

//การทำงานก็ สร้างตัวเเปร username password age
//เเล้วก็สร้างเงื่อนไข กรณี ตามโจทย์ ให้ตรวจสอบว่าถูกไหม
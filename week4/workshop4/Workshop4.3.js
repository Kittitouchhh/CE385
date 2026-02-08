
function simulateAsyncOperation(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeout < 1000) {
        reject("Error: timeout ต้องไม่น้อยกว่า 1000 ms");
      } else {
        resolve(`สำเร็จหลังจาก ${timeout} ms`);
      }
    }, timeout);
  });
}

async function performAsyncTask(timeout) {
  try {
    const result = await simulateAsyncOperation(timeout);
    console.log("ผลลัพธ์:", result);
  } catch (error) {
    console.log("เกิดข้อผิดพลาด:", error);
  }
}

performAsyncTask(500); 
performAsyncTask(1500); 
 

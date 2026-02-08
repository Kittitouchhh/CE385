function fetchDataFromServer1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ข้อมูลจาก Server 1 (2 วิ)");
    }, 2000);
  });
}

function fetchDataFromServer2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Server 2 ล้มเหลว (1 วิ)");
    }, 1000);
  });
}

function fetchDataFromServer3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ข้อมูลจาก Server 3 (3 วิ)");
    }, 3000);
  });
}

Promise.any([
  fetchDataFromServer1(),
  fetchDataFromServer2(),
  fetchDataFromServer3()
])
  .then((result) => {
    console.log("กรณีที่ 1:", result);
  })
  .catch((error) => {
    console.log("ทุก server ล้มเหลว:", error);
  });



Promise.allSettled([
  fetchDataFromServer1(),
  fetchDataFromServer2(),
  fetchDataFromServer3()
]).then((results) => {
  const formattedResult = {
    server1: results[0],
    server2: results[1],
    server3: results[2]
  };

  console.log("กรณีที่ 2:", formattedResult);
});

/*
-> 데이터 불러오기
1) 사용자가 바코드를 찍으면 나오는 고유키: 제품키 or 제품 이름 : target에 저장
2) 각 collection 순서대로 탐색:
    1) market1 에서 해당 제품이름에 해당하는 필드 정보 출력
    2) market2 에서 해당 제품이름에 해당하는 필드 정보 출력
    3) market3 에서 해당 제품이름에 해당하는 필드 정보 출력
    4) market4 에서 해당 제품이름에 해당하는 필드 정보 출력
3) count collection에 이용 횟수 저장

-> 해당 제품이 없었을 떄 처리하기
*/
var target = "milk1"; //바코드 스캔해서 알 수 있는 고유 제품 key 값 저장

var query1 = market1.where("prodID", "==", target);
var query2 = market2.where("prodID", "==", target);
var query3 = market3.where("prodID", "==", target);
var query4 = market4.where("prodID", "==", target);

//7-ELEVEN 에서 해당 제품 불러오기
query1
  .get()
  .then((qr) => {
    qr.forEach((doc) => {
      console.log(doc.data().prodName);
      const name = document.getElementById("item1_name");
      const type = document.getElementById("item1_type");
      const event = document.getElementById("item1_EventType");
      const img = document.getElementById("item1_img");
      const price = document.getElementById("item1_price");
      name.innerHTML = doc.data().prodName;
      type.innerHTML = doc.data().prodType;
      event.innerHTML = doc.data().prodEventType;
      img.innerHTML =
        '<img src= doc.data().prodImg alt="No image" width="80", height="50"></img>';
      price.innerHTML =
        doc.data().prodPrice + '<span class="currency">원</span>';

      const NN = document.getElementById("main_title");
      NN.innerHTML =
        doc.data().prodName + "의 주변 편의점 가격은 다음과 같습니다!";
    });
  })
  .catch((error) => {
    console.log("Error getting document:", error);
  });

//CU 에서 해당 제품 불러오기
query2
  .get()
  .then((qr) => {
    qr.forEach((doc) => {
      console.log(doc.data().prodName);
      const name = document.getElementById("item2_name");
      const type = document.getElementById("item2_type");
      const event = document.getElementById("item2_EventType");
      const img = document.getElementById("item2_img");
      const price = document.getElementById("item2_price");
      name.innerHTML = doc.data().prodName;
      type.innerHTML = doc.data().prodType;
      event.innerHTML = doc.data().prodEventType;
      img.innerHTML =
        '<img src=doc.data().prodImg alt="No image" width="80", height="50"></img>';
      price.innerHTML =
        doc.data().prodPrice + '<span class="currency">원</span>';
    });
  })
  .catch((error) => {
    console.log("Error getting document:", error);
  });

//E-MART 에서 해당 제품 불러오기
query3
  .get()
  .then((qr) => {
    qr.forEach((doc) => {
      console.log(doc.data().prodName);
      const name = document.getElementById("item3_name");
      const type = document.getElementById("item3_type");
      const event = document.getElementById("item3_EventType");
      const img = document.getElementById("item3_img");
      const price = document.getElementById("item3_price");
      name.innerHTML = doc.data().prodName;
      type.innerHTML = doc.data().prodType;
      event.innerHTML = doc.data().prodEventType;
      img.innerHTML =
        '<img src=doc.data().prodImg alt="No image" width="80", height="50"></img>';
      price.innerHTML =
        doc.data().prodPrice + '<span class="currency">원</span>';
    });
  })
  .catch((error) => {
    console.log("Error getting document:", error);
  });
//GS25 에서 해당 제품 불러오기
query4
  .get()
  .then((qr) => {
    qr.forEach((doc) => {
      console.log(doc.data().prodName);
      const name = document.getElementById("item4_name");
      const type = document.getElementById("item4_type");
      const event = document.getElementById("item4_EventType");
      const img = document.getElementById("item4_img");
      const price = document.getElementById("item4_price");
      name.innerHTML = doc.data().prodName;
      type.innerHTML = doc.data().prodType;
      event.innerHTML = doc.data().prodEventType;
      img.innerHTML =
        '<img src=doc.data().prodImg alt="No image" width="80", height="50"></img>';
      price.innerHTML =
        doc.data().prodPrice + '<span class="currency">원</span>';
    });
  })
  .catch((error) => {
    console.log("Error getting document:", error);
  });

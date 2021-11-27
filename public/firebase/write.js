/*
크롤링한 데이터 db저장
collection(market)->document(market4개)->document(각 제품들)

저장 과정
1. (주기적으로 업데이트해주는걸로) -> result.html 호출할 때마다 로딩안되게 설정하기
2. market 마다 포함되어 있는 제품들 저장(크롤링)
*/

//1. 데이터 저장 -> 크롤링 한 수만큼 반복 (db class를 만들거나 반복문 사용해서 저장)
var market1 = db.collection("7-ELEVEN");
var market2 = db.collection("CU");
var market3 = db.collection("E-MART");
var market4 = db.collection("GS25");

////////아래는 저장 예시 코드 : set을 통해서 값 저장 /////////
market1.doc("8801117762308").set({
  prodID: "8801117762308",
  prodName: "오리온)오감자찍먹바베큐",
  prodType: "과자류",
  proEventType: null,
  prodPrice: 1500,
  prodImg: "https://bgf-cu.xcache.kinxcdn.com/product/8801117762308.jpg",
});
market2.doc("8801117762308").set({
  prodID: "8801117762308",
  prodName: "오리온)오감자찍먹바베큐",
  prodType: "과자류",
  proEventType: "2+1",
  prodPrice: 1500,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/8801117762308.jpg",
});
market3.doc("8801117762308").set({
  prodID: "8801117762308",
  prodName: "오리온)오감자찍먹바베큐",
  prodType: "과자류",
  proEventType: null,
  prodPrice: 1500,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/8801117762308.jpg",
});
market4.doc("8801117762308").set({
  prodID: "8801117762308",
  prodName: "오리온)오감자찍먹바베큐",
  prodType: "과자류",
  proEventType: null,
  prodPrice: 1500,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/8801117762308.jpg",
});

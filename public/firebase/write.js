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
market1.doc("milk1").set({
  prodID: "milk1", //크롤링 했을 때 고유키=primary_key 대체
  prodName: "바나나 우유",
  prodType: "음료",
  prodEventType: "1+1 행사 상품",
  prodPrice: 1000, //가격
  prodImg:
    "https://cdn.pixabay.com/photo/2015/04/14/12/25/drink-722061_960_720.jpg", //img url
});

market2.doc("cake1").set({
  prodID: "cake1", //크롤링 했을 때 고유키=primary_key 대체
  prodName: "크림치즈 케익",
  prodType: "케익",
  prodEventType: "포인트 할인",
  prodPrice: 3500, //가격
  prodImg:
    "https://cdn.pixabay.com/photo/2016/02/29/00/19/cake-1227842_960_720.jpg", //img url
});

market2.doc("milk1").set({
  prodID: "milk1", //크롤링 했을 때 고유키=primary_key 대체
  prodName: "바나나 우유",
  prodType: "음료",
  prodEventType: "포인트 할인",
  prodPrice: 900, //가격
  prodImg:
    "https://cdn.pixabay.com/photo/2015/04/14/12/25/drink-722061_960_720.jpg", //img url
});

market3.doc("milk1").set({
  prodID: "milk1", //크롤링 했을 때 고유키=primary_key 대체
  prodName: "바나나 우유",
  prodType: "음료",
  prodEventType: "없음",
  prodPrice: 900, //가격
  prodImg:
    "https://cdn.pixabay.com/photo/2015/04/14/12/25/drink-722061_960_720.jpg", //img url
});

market4.doc("milk1").set({
  prodID: "milk1", //크롤링 했을 때 고유키=primary_key 대체
  prodName: "바나나 우유",
  prodType: "음료",
  prodEventType: "2+1 행사 상품",
  prodPrice: 1500, //가격
  prodImg:
    "https://cdn.pixabay.com/photo/2015/04/14/12/25/drink-722061_960_720.jpg", //img url
});

////////

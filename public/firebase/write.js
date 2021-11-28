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
market1.doc("8801117752804").set({
  prodID: "8801117752804",
  prodName: "오리온)오감자그라탕1200.test",
  prodType: "과자류",
  prodEventType: "Not For Sale",
  prodPrice: 1200,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/8801117752804.jpg",
});
market2.doc("8801117752804").set({
  prodID: "8801117752804",
  prodName: "오리온)오감자그라탕1200",
  prodType: "과자류",
  prodEventType: "Not For Sale",
  prodPrice: 1200,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/8801117752804.jpg",
});
market3.doc("8801117752804").set({
  prodID: "8801117752804",
  prodName: "오리온)오감자그라탕1200",
  prodType: "과자류",
  prodEventType: "2+1 행사 상품",
  prodPrice: 1200,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/8801117752804.jpg",
});
market4.doc("8801117752804").set({
  prodID: "8801117752804",
  prodName: "오리온)오감자그라탕1200",
  prodType: "과자류",
  prodEventType: "Not For Sale",
  prodPrice: 1200,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/8801117752804.jpg",
});

market1.doc("0000000342400").set({
  prodID: "0000000342400",
  prodName: "롯데)허쉬밀크초콜릿",
  prodType: "과자류",
  prodEventType: "2+1 행사 상품",
  prodPrice: 1500,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/0000000342400.jpg",
});
market2.doc("0000000342400").set({
  prodID: "0000000342400",
  prodName: "롯데)허쉬밀크초콜릿",
  prodType: "과자류",
  prodEventType: "2+1 행사 상품",
  prodPrice: 1500,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/0000000342400.jpg",
});
market3.doc("0000000342400").set({
  prodID: "0000000342400",
  prodName: "롯데)허쉬밀크초콜릿",
  prodType: "과자류",
  prodEventType: "2+1 행사 상품",
  prodPrice: 1500,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/0000000342400.jpg",
});
market4.doc("0000000342400").set({
  prodID: "0000000342400",
  prodName: "롯데)허쉬밀크초콜릿",
  prodType: "과자류",
  prodEventType: "Not For Sale",
  prodPrice: 1500,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/0000000342400.jpg",
});

market1.doc("8801115134213").set({
  prodID: "8801115134213",
  prodName: "서울)딸기우유300ml",
  prodType: "음료",
  prodEventType: "2+1 행사 상품",
  prodPrice: 1650,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/8801115134213.jpg",
});
market2.doc("8801115134213").set({
  prodID: "8801115134213",
  prodName: "서울)딸기우유300ml",
  prodType: "음료",
  prodEventType: "2+1 행사 상품",
  prodPrice: 1650,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/8801115134213.jpg",
});
market3.doc("8801115134213").set({
  prodID: "8801115134213",
  prodName: "서울)딸기우유300ml",
  prodType: "음료",
  prodEventType: "2+1 행사 상품",
  prodPrice: 1650,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/8801115134213.jpg",
});
market4.doc("8801115134213").set({
  prodID: "8801115134213",
  prodName: "서울)딸기우유300ml",
  prodType: "음료",
  prodEventType: "2+1 행사 상품",
  prodPrice: 1650,
  prodImg: "http://bgf-cu.xcache.kinxcdn.com/product/8801115134213.jpg",
});

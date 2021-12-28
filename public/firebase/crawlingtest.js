/*
크롤링한 데이터 db저장
collection(market)->document(market4개)->document(각 제품들)

저장 과정
1. (주기적으로 업데이트해주는걸로) -> result.html 호출할 때마다 로딩안되게 설정하기
2. market 마다 포함되어 있는 제품들 저장(크롤링)
*/

// 모듈 불러오기
const axios = require("axios");
const cheerio = require("cheerio");

//1. 데이터 저장 -> 크롤링 한 수만큼 반복 (db class를 만들거나 반복문 사용해서 저장)
var market1 = [];
var market2 = [];
var market3 = [];
var market4 = [];
var test = 1;
////////아래는 저장 예시 코드 : set을 통해서 값 저장 /////////

//CU 편의점에서 크롤링한 모든 제품 정보들
const allProdgetHTML = async (page) => {
  try {
    return await axios.get(
      "https://cu.bgfretail.com/product/view.do?category=product&gdIdx=" + page
    );
  } catch (err) {
    //console.log(err);
  }
};
const allProd = async (page) => {
  const html = await allProdgetHTML(page);
  const $ = cheerio.load(html.data);
  const $prodinfo = $(".gnbView");
  const imageNode = $prodinfo
    .find("div > div.prodDetailWrap > div.prodDetail > div.prodDetail-w > img")
    .attr("src");
  if ("" !== imageNode) {
    const key = imageNode.substr(imageNode.length - 17, 13);
    const priceNode = $prodinfo
      .find(
        "div > div.prodDetailWrap > div.prodDetail > div.prodDetail-e > div > dl:nth-child(1) > dd > p > span"
      )
      .text();
    const price = parseInt(priceNode.replace(/,/, ""));
    const name = $prodinfo
      .find("div > div.prodDetailWrap > div.prodDetail > div.prodDetail-e > p")
      .text();
    const type = $prodinfo
      .find(
        "div > div.prodDetailWrap > div.hidden > ul.location > li:nth-child(2)"
      )
      .text();
    var itemObject = {
      prodID: key,
      prodName: name,
      prodType: type,
      prodEventType: null,
      prodPrice: price,
      prodImg: imageNode,
    };

    // itemObject.prodID = key;
    // itemObject.prodName = name;
    // itemObject.prodType = type;
    // itemObject.prodEventType = null;
    // itemObject.prodPrice = price;
    // itemObject.prodImg = imageNode;

    market1.push(itemObject);
    market2.push(itemObject);
    market3.push(itemObject);
    market4.push(itemObject);
    test = 2;
  }
};
const allProd_run = async () => {
  for (let i = 14000; i < 14005; i++) {
    allProd(String(i));
  }
};

allProd_run().then((_) => {
  console.log(market1);
});

//setTimeout(() => console.log(market1), 3000);

// console.log(test);
// var totalInfo = new Object();

// totalInfo.ELEVEN = market1;
// totalInfo.CU = market2;
// totalInfo.GS25 = market3;
// totalInfo.EMART = market4;
// var jsonInfo = JSON.stringify(totalInfo);
// setTimeout(() => console.log(jsonInfo), 3000);

//console.log(jsonInfo); //브라우저 f12개발자 모드에서 confole로 확인 가능

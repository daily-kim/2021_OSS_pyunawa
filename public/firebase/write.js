/*
크롤링한 데이터 db저장 
collection(market)->document(market4개)->document(각 제품들)

저장 과정
1. (주기적으로 업데이트해주는걸로) -> result.html 호출할 때마다 로딩안되게 설정하기
2. market 마다 포함되어 있는 제품들 저장(크롤링)
*/

const axios = require("axios");
const cheerio = require("cheerio");

//1. 데이터 저장 -> 크롤링 한 수만큼 반복 (db class를 만들거나 반복문 사용해서 저장)
var market1 = db.collection("7-ELEVEN");
var market2 = db.collection("CU");
var market3 = db.collection("E-MART");
var market4 = db.collection("GS25");
<<<<<<< HEAD
=======
var market5 = db.collection("ALL");
>>>>>>> 36414c9c4ab2ec73f12f504b78935c1fe1d089a5

////////아래는 저장 예시 코드 : set을 통해서 값 저장 /////////

//7-ELEVEN
const sevengetHTML = async (page) => {
  try {
    return await axios.get("https://pyony.com/brands/seven/?page=" + page);
  } catch (err) {
    console.log(err);
  }
};
const seven = async (page) => {
  const html = await sevengetHTML(page);
  const $ = cheerio.load(html.data);
  const $prodList = $(".col-md-6");
  $prodList.each((idx, node) => {
    const allprice = $(node)
      .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2)")
      .text();
    const lineprice = allprice.split("\n");
    const strprice = lineprice[3];
    const price = strprice.substr(49, 4 + (strprice.length % 5));
    market1
      .doc(
        $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text()
      )
      .set({
        prodID: $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text(), //크롤링 했을 때 고유키=primary_key 대체 -> 상품명
        prodName: $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text(),
        prodType: $(node)
          .find(
            "a > div > div.card-header.bg-seven.text-white.px-2.py-1 > small.float-right.font-weight-bold"
          )
          .text(),
        prodEventType: $(node)
          .find(
            "a > div > div.card-body.px-2.py-2 > div:nth-child(2) > span.badge.bg-seven.text-white"
          )
          .text(),
        prodPrice: parseInt(price.replace(/,/, "")), //가격
        prodImg: $(node)
          .find(
            "a > div > div.card-body.px-2.py-2 > div.prod_img_div.float-left.text-center.mr-2 > img"
          )
          .attr("src"), //img url
      });
  });
};
for (let i = 1; i < 54; i++) {
  seven(String(i));
}

//CU
const cugetHTML = async (page) => {
  try {
    return await axios.get("https://pyony.com/brands/cu/?page=" + page);
  } catch (err) {
    console.log(err);
  }
};
const cu = async (page) => {
  const html = await cugetHTML(page);
  const $ = cheerio.load(html.data);
  const $prodList = $(".col-md-6");
  $prodList.each((idx, node) => {
    const allprice = $(node)
      .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2)")
      .text();
    const lineprice = allprice.split("\n");
    const strprice = lineprice[3];
    const price = strprice.substr(49, 4 + (strprice.length % 5));
    market2
      .doc(
        $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text()
      )
      .set({
        prodID: $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text(), //크롤링 했을 때 고유키=primary_key 대체 -> 상품명
        prodName: $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text(),
        prodType: $(node)
          .find(
            "a > div > div.card-header.bg-cu.text-white.px-2.py-1 > small.float-right.font-weight-bold"
          )
          .text(),
        prodEventType: $(node)
          .find(
            "a > div > div.card-body.px-2.py-2 > div:nth-child(2) > span.badge.bg-cu.text-white"
          )
          .text(),
        prodPrice: parseInt(price.replace(/,/, "")), //가격
        prodImg: $(node)
          .find(
            "a > div > div.card-body.px-2.py-2 > div.prod_img_div.float-left.text-center.mr-2 > img"
          )
          .attr("src"), //img url
      });
  });
};
for (let j = 1; j < 51; j++) {
  cu(String(j));
}

//E-MART
const emart24getHTML = async (page) => {
  try {
    return await axios.get("https://pyony.com/brands/emart24/?page=" + page);
  } catch (err) {
    console.log(err);
  }
};
const emart24 = async (page) => {
  const html = await emart24getHTML(page);
  const $ = cheerio.load(html.data);
  const $prodList = $(".col-md-6");
  $prodList.each((idx, node) => {
    const allprice = $(node)
      .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2)")
      .text();
    const lineprice = allprice.split("\n");
    const strprice = lineprice[3];
    const price = strprice.substr(49, 4 + (strprice.length % 5));
    market3
      .doc(
        $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text()
      )
      .set({
        prodID: $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text(), //크롤링 했을 때 고유키=primary_key 대체 -> 상품명
        prodName: $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text(),
        prodType: $(node)
          .find(
            "a > div > div.card-header.bg-emart24.text-white.px-2.py-1 > small.float-right.font-weight-bold"
          )
          .text(),
        prodEventType: $(node)
          .find(
            "a > div > div.card-body.px-2.py-2 > div:nth-child(2) > span.badge.bg-emart24.text-white"
          )
          .text(),
        prodPrice: parseInt(price.replace(/,/, "")), //가격
        prodImg: $(node)
          .find(
            "a > div > div.card-body.px-2.py-2 > div.prod_img_div.float-left.text-center.mr-2 > img"
          )
          .attr("src"), //img url
      });
  });
};
for (let p = 1; p < 58; p++) {
  emart24(String(p));
}
<<<<<<< HEAD

//GS25
const gs25getHTML = async (page) => {
  try {
    return await axios.get("https://pyony.com/brands/gs25/?page=" + page);
=======
//GS25
const gs25getHTML = async (page) => {
  try {
    return await axios.get("https://pyony.com/brands/gs25/?page=" + page);
  } catch (err) {
    console.log(err);
  }
};
const gs25 = async (page) => {
  const html = await gs25getHTML(page);
  const $ = cheerio.load(html.data);
  const $prodList = $(".col-md-6");
  $prodList.each((idx, node) => {
    const allprice = $(node)
      .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2)")
      .text();
    const lineprice = allprice.split("\n");
    const strprice = lineprice[3];
    const price = strprice.substr(49, 4 + (strprice.length % 5));
    market4
      .doc(
        $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text()
      )
      .set({
        prodID: $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text(), //크롤링 했을 때 고유키=primary_key 대체 -> 상품명
        prodName: $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text(),
        prodType: $(node)
          .find(
            "a > div > div.card-header.bg-gs25.text-white.px-2.py-1 > small.float-right.font-weight-bold"
          )
          .text(),
        prodEventType: $(node)
          .find(
            "a > div > div.card-body.px-2.py-2 > div:nth-child(2) > span.badge.bg-gs25.text-white"
          )
          .text(),
        prodPrice: parseInt(price.replace(/,/, "")), //가격
        prodImg: $(node)
          .find(
            "a > div > div.card-body.px-2.py-2 > div.prod_img_div.float-left.text-center.mr-2 > img"
          )
          .attr("src"), //img url
      });
  });
};
for (let q = 1; q < 61; q++) {
  gs25(String(q));
}

//CU 편의점에서 크롤링한 모든 제품 정보들
const allProdgetHTML = async (page) => {
  try {
    return await axios.get(
      "https://cu.bgfretail.com/product/view.do?category=product&gdIdx=" + page
    );
>>>>>>> 36414c9c4ab2ec73f12f504b78935c1fe1d089a5
  } catch (err) {
    console.log(err);
  }
};
<<<<<<< HEAD
const gs25 = async (page) => {
  const html = await gs25getHTML(page);
  const $ = cheerio.load(html.data);
  const $prodList = $(".col-md-6");
  $prodList.each((idx, node) => {
    const allprice = $(node)
      .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2)")
      .text();
    const lineprice = allprice.split("\n");
    const strprice = lineprice[3];
    const price = strprice.substr(49, 4 + (strprice.length % 5));
    market4
      .doc(
        $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text()
      )
      .set({
        prodID: $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text(), //크롤링 했을 때 고유키=primary_key 대체 -> 상품명
        prodName: $(node)
          .find("a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong")
          .text(),
        prodType: $(node)
          .find(
            "a > div > div.card-header.bg-gs25.text-white.px-2.py-1 > small.float-right.font-weight-bold"
          )
          .text(),
        prodEventType: $(node)
          .find(
            "a > div > div.card-body.px-2.py-2 > div:nth-child(2) > span.badge.bg-gs25.text-white"
          )
          .text(),
        prodPrice: parseInt(price.replace(/,/, "")), //가격
        prodImg: $(node)
          .find(
            "a > div > div.card-body.px-2.py-2 > div.prod_img_div.float-left.text-center.mr-2 > img"
          )
          .attr("src"), //img url
      });
  });
};
for (let q = 1; q < 61; q++) {
  gs25(String(q));
=======
const allProd = async (page) => {
  const html = await allProdgetHTML(page);
  const $ = cheerio.load(html.data);
  const $prodinfo = $(".gnbView");
  const imageNode = $prodinfo
    .find("div > div.prodDetailWrap > div.prodDetail > div.prodDetail-w > img")
    .attr("src");
  if ("" !== imageNode) {
    const priceNode = $prodinfo
      .find(
        "div > div.prodDetailWrap > div.prodDetail > div.prodDetail-e > div > dl:nth-child(1) > dd > p > span"
      )
      .text();
    market5.doc(imageNode.substr(imageNode.length - 17, 13)).set({
      prodID: imageNode.substr(imageNode.length - 17, 13),
      prodName: $prodinfo
        .find(
          "div > div.prodDetailWrap > div.prodDetail > div.prodDetail-e > p"
        )
        .text(),
      prodType: $prodinfo
        .find(
          "div > div.prodDetailWrap > div.hidden > ul.location > li:nth-child(2)"
        )
        .text(),
      prodEventType: null,
      prodPrice: parseInt(priceNode.replace(/,/, "")),
      prodImg: imageNode,
    });
    console.log(allInfo);
  }
};
for (let i = 1; i < 14355; i++) {
  allProd(String(i));
>>>>>>> 36414c9c4ab2ec73f12f504b78935c1fe1d089a5
}

////////

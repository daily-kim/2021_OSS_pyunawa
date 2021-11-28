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
    const imgnode = $(node)
      .find(
        "a > div > div.card-body.px-2.py-2 > div.prod_img_div.float-left.text-center.mr-2 > img"
      )
      .attr("src");
    const imgNode = imgnode.substr(imgnode.length - 20, 14);
    const key = imgNode;
    const market = {
      __collections__: {
        "7-ELEVEN": {
          key: {
            prodID: key,
            prodName: $(node)
              .find(
                "a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong"
              )
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
            prodPrice: parseInt(price.replace(/,/, "")),
            prodImg: $(node)
              .find(
                "a > div > div.card-body.px-2.py-2 > div.prod_img_div.float-left.text-center.mr-2 > img"
              )
              .attr("src"),
            __collections__: {},
          },
        },
      },
    };
    const prodCrawling = JSON.stringify(market);
    console.log(prodCrawling);
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
    const imgnode = $(node)
      .find(
        "a > div > div.card-body.px-2.py-2 > div.prod_img_div.float-left.text-center.mr-2 > img"
      )
      .attr("src");
    const imgNode = imgnode.substr(imgnode.length - 20, 14);
    const key = imgNode;
    const market = {
      __collections__: {
        "7-ELEVEN": {
          key: {
            prodID: key,
            prodName: $(node)
              .find(
                "a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong"
              )
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
            prodPrice: parseInt(price.replace(/,/, "")),
            prodImg: $(node)
              .find(
                "a > div > div.card-body.px-2.py-2 > div.prod_img_div.float-left.text-center.mr-2 > img"
              )
              .attr("src"),
            __collections__: {},
          },
        },
      },
    };
    const prodCrawling = JSON.stringify(market);
    console.log(prodCrawling);
  });
};
for (let i = 1; i < 54; i++) {
  cu(String(i));
}

//emart24
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
    const imgnode = $(node)
      .find(
        "a > div > div.card-body.px-2.py-2 > div.prod_img_div.float-left.text-center.mr-2 > img"
      )
      .attr("src");
    const imgNode = imgnode.substr(imgnode.length - 20, 14);
    const key = imgNode;
    const market = {
      __collections__: {
        "7-ELEVEN": {
          key: {
            prodID: key,
            prodName: $(node)
              .find(
                "a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong"
              )
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
            prodPrice: parseInt(price.replace(/,/, "")),
            prodImg: $(node)
              .find(
                "a > div > div.card-body.px-2.py-2 > div.prod_img_div.float-left.text-center.mr-2 > img"
              )
              .attr("src"),
            __collections__: {},
          },
        },
      },
    };
    const prodCrawling = JSON.stringify(market);
    console.log(prodCrawling);
  });
};
for (let i = 1; i < 54; i++) {
  emart24(String(i));
}

//gs25
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
    const imgnode = $(node)
      .find(
        "a > div > div.card-body.px-2.py-2 > div.prod_img_div.float-left.text-center.mr-2 > img"
      )
      .attr("src");
    const imgNode = imgnode.substr(imgnode.length - 20, 14);
    const key = imgNode;
    const market = {
      __collections__: {
        "7-ELEVEN": {
          key: {
            prodID: key,
            prodName: $(node)
              .find(
                "a > div > div.card-body.px-2.py-2 > div:nth-child(2) > strong"
              )
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
            prodPrice: parseInt(price.replace(/,/, "")),
            prodImg: $(node)
              .find(
                "a > div > div.card-body.px-2.py-2 > div.prod_img_div.float-left.text-center.mr-2 > img"
              )
              .attr("src"),
            __collections__: {},
          },
        },
      },
    };
    const prodCrawling = JSON.stringify(market);
    console.log(prodCrawling);
  });
};
for (let i = 1; i < 54; i++) {
  gs25(String(i));

}

/*
//CU 편의점에서 크롤링한 모든 제품 정보들
const allProdgetHTML = async (page) => {
  try {
    return await axios.get(
      "https://cu.bgfretail.com/product/view.do?category=product&gdIdx=" + page
    );
  } catch (err) {
    console.log(err);
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
    const market = {
      __collections__: {
        "7-ELEVEN": {
          key: {
            prodID: key,
            prodName: name,
            prodType: type,
            prodEventType: null,
            prodPrice: price,
            prodImg: imageNode,
            __collections__: {},
          },
        },
      },
    };
    const prodCrawling = JSON.stringify(market);
    console.log(prodCrawling);
  }
};
for (let i = 1; i < 14355; i++) {
  allProd(String(i));
}
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
    const market = {
      __collections__: {
        CU: {
          key: {
            prodID: key,
            prodName: name,
            prodType: type,
            prodEventType: null,
            prodPrice: price,
            prodImg: imageNode,
            __collections__: {},
          },
        },
      },
    };
    const prodCrawling = JSON.stringify(market);
    console.log(prodCrawling);
  }
};
for (let i = 1; i < 14355; i++) {
  allProd(String(i));
}
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
    const market = {
      __collections__: {
        "E-MART": {
          key: {
            prodID: key,
            prodName: name,
            prodType: type,
            prodEventType: null,
            prodPrice: price,
            prodImg: imageNode,
            __collections__: {},
          },
        },
      },
    };
    const prodCrawling = JSON.stringify(market);
    console.log(prodCrawling);
  }
};
for (let i = 1; i < 14355; i++) {
  allProd(String(i));
}
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
    const market = {
      __collections__: {
        GS25: {
          key: {
            prodID: key,
            prodName: name,
            prodType: type,
            prodEventType: null,
            prodPrice: price,
            prodImg: imageNode,
            __collections__: {},
          },
        },
      },
    };
    const prodCrawling = JSON.stringify(market);
    console.log(prodCrawling);
  }
};
for (let i = 1; i < 14355; i++) {
  allProd(String(i));
}
////////
*/

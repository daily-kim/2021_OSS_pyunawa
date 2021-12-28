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

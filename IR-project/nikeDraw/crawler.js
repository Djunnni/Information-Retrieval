var axios = require('axios');
var cheerio = require('cheerio');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
   hosts: [ 'http://elastic:changeme@localhost:9200']
});
const main_url = "https://www.nike.com/kr/launch/?type=upcoming";

/**
 * NIKE GET UPCOMING SHOES DATALIST
 */
async function getHTML(url) {
    try {
      return await axios.get(url);
    } catch (error) {
      console.error(error);
    }
}

getHTML(main_url).then(html => {
let items = [];
const $ = cheerio.load(html.data);
const bodyList = $("div.launch-list-item.upcomingItem");

bodyList.each(function(i, elem) {
    target = $(elem);
    img_sect = target.find("div.img-sect");
    info_sect = target.find("div.info-sect");
    detail_page = 'https://www.nike.com'+target.find("a").attr('href');

    items[i] = {
      openTime : target.attr('data-active-date'),
      link : 'https://www.nike.com'+target.find("a").attr('href'),
      mainImg : $(this).find("div.img-sect").find("img").attr('data-src')
    };
});

return items;

}).then(res => {
  new_list = [];
  for(const j in res ){
      getHTML(res[j].link).then(html => {
          const $ = cheerio.load(html.data);
          const bodyList = $("div.product-info");
          bodyList.each(function(i, elem) {
            item = {
              opentime : res[j].openTime.replace('.0',''),
              link : res[j].link,
              shoes_img : res[j].mainImg,
              shoes_type : $(elem).find('h1.txt-subtitle').text(),
              shoes_title: $(elem).find('h5.txt-title').text(),
              shoes_price: $(elem).find('div.price').text().replace(/[^0-9]/g,''),
              shoes_opendate: $(elem).find('div.txt-date').text(),
              shoes_desc : $(elem).find('div.txt-description').eq(0).text().replace(',',''),
              shoes_draw : $(elem).find('div.txt-description').eq(1).text() !== ''? true : false
            };
          });
          return item;
      }).then(item => {
          // elastic Search 에 인덱싱 바로 넣기 // 
            client.index({
              index: 'shoes',
              id: j,
              type: 'nike',
              body: item
          }, function(err, resp, status) {
              console.log(resp);
          });
      })
  }
}); // 저장된 결과를 출력

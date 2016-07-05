var itemArray = [];
var searchSettings = {
  dataType: 'jsonp',
  type: 'GET',
  url: 'https://api.etsy.com/v2/listings/active.js?api_key=gp1swaytrsiu2jnlf92eygze&keywords=guitar&includes=Images,Shop',
  success: function (response) {
    itemArray = response.results;
    // console.log(itemArray[0].Images[0]);
    console.log(itemArray);
    itemArray.forEach(function(item, i){
        // $('.maindisplay').append('<img src=' + item.Images[0].url_170x135 + '>');
        var newElement = $('<a class="itemdisplay"></a>');
        $('.maindisplay').append(newElement);
        newElement.attr('href', item.url);
        newElement.append('<img src=' + item.Images[0].url_570xN + '>');
        if (item.title.length > 38) {
          titleAbbrev = item.title.slice(0,37) + '...';
        } else {
          titleAbbrev = item.title;
        }
        newElement.append('<p class="title">' + titleAbbrev+ '</p>');
        newElement.append('<p class="maker">' + item.Shop.shop_name + '</p>');
        newElement.append('<p class="cost">$' + item.price + '</p>');
    });
    // $('a').addClass('itemdisplay');
  }
};

$.ajax(searchSettings);

var itemArray = [];
var searchTerm = 'bowl';
var searchSettings = {
  dataType: 'jsonp',
  type: 'GET',
  url: 'https://api.etsy.com/v2/listings/active.js?api_key=gp1swaytrsiu2jnlf92eygze&keywords=' + searchTerm + '&includes=Images,Shop',
  success: settingGet
};
function settingGet (response) {
  $('.maindisplay').html('');
  // document.querySelector('.maindisplay').innerHTML = '';
  itemArray = response.results;
  itemArray.forEach(function(item, i){
      console.log('wow');
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
  $('.maindisplay').prepend('<h4>Top Results for "' + searchTerm + '"</h4>');
}

$.ajax(searchSettings);


$('input').change(function(evt){
  searchTerm = evt.target.value;
  searchSettings.url='https://api.etsy.com/v2/listings/active.js?api_key=gp1swaytrsiu2jnlf92eygze&keywords=' + searchTerm + '&includes=Images,Shop';
  $.ajax(searchSettings);
});

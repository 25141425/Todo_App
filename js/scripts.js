function newItem(){
  let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
  alert("Please write something!");
}
else {
  $('#list').append(li);
}

function crossOutItem() {
  li.toggleClass("strike");
}

li.on("dblclick", function crossOutItem() {
  li.toggleClass("strike");
});

let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('x'));
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
function deleteListItem() {
  li.addClass("delete")
}
$('#list').sortable();
 }

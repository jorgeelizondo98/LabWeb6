$("button").on("click", function(event){
    event.preventDefault();

    var name = $("#input-text").val();

    var itemList = $(".item-list")
    var itemContainer = $(`<div class = "item-container"></div>`);
    var itemName = $(`<h3 class="hh3"> ${name}</h3>`);
    var deleteButton = $(`<button id="check-button">check</button>`);
    var checkButton = $(`<button id="delete-button">delete</button>`);
    $(itemContainer).append(itemName,deleteButton,checkButton);
    $(itemList).append(itemContainer);
});


$(".item-list").on("click", "#check-button", function(){
    $(this).parent().toggleClass("checked");
})

$(".item-list").on("click", "#delete-button", function(){
    $(this).parent().remove();
})
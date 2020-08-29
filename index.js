let items = ["Milk", "Bread", "Yogurt", "Granola", "Apples"];

function printList() {
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    $(".list").append(`<div class='card'><p>${item}</p></div>`);
  };
};

printList();
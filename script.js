// Create an empty array
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#arrays
 let shoppingList = [];// 

// Function to add an item (from HTML input)
// ref: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
// ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
function addItemFromInput() {
  const input = document.getElementById("itemInput");
  const item = input.value.trim();

  if (item === "") {
    alert("Please enter an item!");
    return;
  }

   addItem(item);
     input.value = "";
}

      // Function to add an item to the array
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
   // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/Console/log
      function addItem(item) {
  shoppingList.push(item);
console.log(`${item} added to the shopping list.`);
}

   // Function to remove the last item
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
  // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
function removeLastItem() {
  if (shoppingList.length === 0) {
  console.log("The list is already empty!");
    return;
  }

  const removed = shoppingList.pop();
   
    console.log(`${removed} removed from the list.`);
}

// Function to display all items
  // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
function displayList() {
  console.log("Current Shopping List:");
  if (shoppingList.length === 0) {
    console.log("(empty)");
  } else {
    shoppingList.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}

// Task 2: Function to search items in the array
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// Filter and search items
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase\
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
function filterItems(searchTerm) {
  const term = searchTerm.toLowerCase();
  return shoppingList.filter(item => item.includes(term));
}

// Search button function
// ref: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
function searchItems() {
  const searchTerm = document.getElementById("searchInput").value.trim();
  const results = filterItems(searchTerm);
//console.log("Search Results:", results); i was testing here 
  if (results.length > 0) {
    console.log(`Search results for "${searchTerm}":`, results);  
  } else {
    console.log(`No items found matching "${searchTerm}".`); // fixed missing quotation mark
  }
}

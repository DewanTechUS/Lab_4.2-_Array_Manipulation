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
      displayList(); // Update the displayed list
}

      // Function to add an item to the array
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
   // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/Console/log
      function addItem(item) { // 🟡 ← REPLACE WHOLE FUNCTION
  const newItem = item.toLowerCase(); // make case-insensitive
  if (!shoppingList.includes(newItem)) { // avoid duplicates
    shoppingList.push(newItem); // add item
    console.log(`${item} added to the shopping list.`);
  } else {
    console.log(`${item} is already in the list.`);
  }
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
// Remove the last item
  const removed = shoppingList.pop();
   // Log the removed item
    console.log(`${removed} removed from the list.`);// updated to use template literals
    displayList(); // Update the displayed list
}

// Function to display all items
  // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// Task 2: Function to search items in the array
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// Filter and search items
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase\
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
function removeLastItem() { 
  if (shoppingList.length === 0) {
    console.log("The list is already empty!");
    return;
  }

  const removed = shoppingList.pop();
  console.log(`${removed} removed from the list.`);
  displayList(); // ← add this so the page updates
}

function filterItems(searchTerm) {
  const term = searchTerm.trim().toLowerCase();
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
// Function to display all items in the HTML list
// ref: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// ref: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
// ref: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// ref: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/for...of
// Display all items in the browser and console
function displayList() { // updated function name to avoid conflict
  console.log("Current Shopping List:");
  const ul = document.getElementById("shoppingList");
  ul.innerHTML = "";

  if (shoppingList.length === 0) {
    console.log("(empty)");
    const emptyMsg = document.createElement("li");
    emptyMsg.textContent = "(No items yet)";
    ul.appendChild(emptyMsg);
    // Added message for empty list in HTML
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
  } else {
    shoppingList.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  }
}



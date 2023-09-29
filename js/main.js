function sortElements() {
   const container = document.querySelector('.main__right');
   const elements = Array.from(container.querySelectorAll('.cards'));

   elements.sort((a, b) => {
      const priceA = parseInt(a.querySelector('.card_bottom_price').textContent);
      const priceB = parseInt(b.querySelector('.card_bottom_price').textContent);
      return priceA - priceB;
   });

   elements.forEach((element) => {
      container.appendChild(element);
   });
}
const sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', sortElements);



document.getElementById("countButton").addEventListener("click", function () {
   const cardElements = document.querySelectorAll(".card_bottom_price");
   const cards = document.querySelectorAll(".cards");

   let total = 0;
   let i = 0
   cardElements.forEach(function (cardElement) {
      if (window.getComputedStyle(cards[i]).getPropertyValue('display') !== 'none') {
         total += parseInt(cardElement.textContent);
      }
      i++;
   });

   document.querySelector(".countText").textContent = `Total: $${total}`;
});



const searchButton = document.getElementById('search_button');
const searchInput = document.getElementById('search_input');

searchButton.addEventListener('click', function () {
   const searchText = searchInput.value.toLowerCase();
   searchByText(searchText);
});

function searchByText(text) {
   const elementsToSearch = document.querySelectorAll('.card_bottom_name');

   elementsToSearch.forEach(function (element) {
      const name = element.textContent.toLowerCase();
      const card = element.closest('.cards');

      if (name.includes(text)) {
         card.style.display = 'block';
      } else {
         card.style.display = 'none';
      }
   });
}

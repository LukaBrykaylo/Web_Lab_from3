function sortElements() {
    const container = document.querySelector('.main__right');
    const elements = Array.from(container.querySelectorAll('.cards'));

    elements.sort((a, b) => {
        const priceA = parseInt(a.querySelector('.card_bottom_price').textContent);
        const priceB = parseInt(b.querySelector('.card_bottom_price').textContent);
        return priceB - priceA;
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

let deleteButtons = document.querySelectorAll('.delete_button');
let editButtons = document.querySelectorAll('.edit_button');

document.getElementById("final_create").addEventListener("click", function () {
    const animalStyles = {
        Cat: "margin-left: 9px; background: url('img/cat.jpg') no-repeat; background-size: contain;",
        Dog: "margin-left: 9px; background: url('img/dog1.jpg') no-repeat; background-size: contain;",
        Parrot: "margin-left: 12px; background: url('img/parrot.jpg') no-repeat; background-size: contain;",
        Giraffe: "margin-top: 5px; margin-left: 5px; background: url('img/giraffe.jpg') no-repeat; background-size: contain;",
        Elephant: "margin-top: 5px; margin-left: 5px; background: url('img/elephant.jpg') no-repeat; background-size: contain;"
    };

    const animalNames = ["Cat", "Dog", "Parrot", "Giraffe", "Elephant"];

    const selectedName = document.getElementById("text_name").value;

    if (selectedName && animalNames.includes(selectedName)) {
        const price = document.getElementById("text_price").value;

        if (price !== null && !isNaN(price) && parseInt(price) >= 0) {
            const container = document.querySelector(".main__right");
            const newCard = document.createElement("div");
            newCard.classList.add("cards");
            newCard.innerHTML = `
              <div class="card_top" style="${animalStyles[selectedName]}"></div>
              <div class="card_bottom">
                <p class="card_bottom_name">${selectedName}</p>
                <p class="card_bottom_price">${parseInt(price)}$</p>
                <div class="card_bottom_buttons">
                  <a href="#open" class="edit_button">E</a>
                  <a href="#" class="delete_button">D</a>
                </div>
              </div>
            `;
            container.appendChild(newCard);
            deleteButtons = document.querySelectorAll('.delete_button');
            editButtons = document.querySelectorAll('.edit_button');
            deleteAdder();
            // const lastEditButton = editButtons[editButtons.length - 1];
            add_edit_but();
        } else {
            alert("Please enter a valid price.");
        }
    } else {
        alert("Please select a valid animal name.");
    }


});


function deleteAdder() {
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            const card = event.target.closest('.cards');
            if (card) {
                card.remove();
            }
        });
    });
}

deleteAdder();

let open_modal = document.querySelectorAll('.header__left__button');
let close_modal = document.getElementById('close_modal');
let close_but = document.getElementById('final_create');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function () {
        modal.classList.add('modal_vis');
        modal.classList.remove('bounceOutDown');
        body.classList.add('body_block');
    };
}
close_modal.onclick = function () {
    modal.classList.add('bounceOutDown');
    window.setTimeout(function () {
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block');
    }, 500);
};

close_but.onclick = function () {
    modal.classList.add('bounceOutDown');
    window.setTimeout(function () {
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block');
    }, 500);
};


let close_edit_but = document.getElementById('final_edit');
let close_but2 = document.getElementById('close_modal_edit');
let modal_edit = document.getElementById('modal_edit');
let open_edit_modal = document.querySelectorAll('.edit_button');
function add_edit_but() {
    open_edit_modal = document.querySelectorAll('.edit_button');
    for (let i = 0; i < open_edit_modal.length; i++) {
        open_edit_modal[i].onclick = function (event) {
            const card = event.target.closest('.cards');
            const card_name_modal = document.getElementById("text_new_name");
            const card_price_modal = document.getElementById("text_new_price");
            const nameElement = card.querySelector('.card_bottom_name');
            const priceElement = card.querySelector('.card_bottom_price');
            card_name_modal.value = nameElement.textContent;
            card_price_modal.value = parseInt(priceElement.textContent);
    
            close_edit_but.onclick = function () {
                if (card) {
                    const nameElement = card.querySelector('.card_bottom_name');
                    const priceElement = card.querySelector('.card_bottom_price');
                    const new_name = document.getElementById("text_new_name").value;
                    const new_price = document.getElementById("text_new_price").value;
                    nameElement.textContent = new_name;
                    priceElement.textContent = `${parseInt(new_price)}$`;
                    modal_edit.classList.add('bounceOutDown');
                    window.setTimeout(function () {
                        modal_edit.classList.remove('modal_vis');
                        body.classList.remove('body_block');
                    }, 500);
                }
            }
            modal_edit.classList.add('modal_vis');
            modal_edit.classList.remove('bounceOutDown');
            body.classList.add('body_block');
        }
    };
}
add_edit_but();
close_but2.onclick = function () {
    modal_edit.classList.add('bounceOutDown');
    window.setTimeout(function () {
        modal_edit.classList.remove('modal_vis');
        body.classList.remove('body_block');
    }, 500);
};

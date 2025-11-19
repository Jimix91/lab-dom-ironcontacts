const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// Función para crear y añadir una fila
function createRow(contact) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><img src="${contact.pictureUrl}" /></td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // Delete button
  const deleteBtn = row.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => row.remove());

  // Like button
  const likeBtn = row.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => likeBtn.classList.toggle("selected"));

  tableBody.appendChild(row);
}

// --- ITERATION 0 | Example Row ---
const randomIndex0 = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex0, 1);
const randomContact0 = splicedArr[0];
createRow(randomContact0);

// --- ITERATION 1 - Display 3 contacts ---
const threeContacts = contacts.splice(0, 3);
threeContacts.forEach(contact => createRow(contact));


// --- ITERATION 4 - Add Random Contacts ---
buttonAddRandom.addEventListener("click", () => {
  if (contacts.length === 0) return;

  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts[randomIndex];

  
  contacts.splice(randomIndex, 1);

  createRow(randomContact);
});


 //añadida conjuntamente al codigo de arriba



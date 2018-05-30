const roommates = require('./roommates/render')
const data = require('./roommates/data')

const roommatesContainer = document.querySelector('#roommates')
roommates.showAll(roommatesContainer)
//To delete the cards
//Create a function deleteRoommate which deletes a card
const deleteRoommate = (event) => {
  const index = event.target.getAttribute("data-id");
  data.splice(index, 1)
  //Call showAll to display updated cards again.
  roommates.showAll(roommatesContainer);

  const deleteButtons = Array.from(document.querySelectorAll(".roommate-delete-button"))
  //add eventListeners to each of the delete buttons on click
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", deleteRoommate)
  })
  const updateButtons = Array.from(document.querySelectorAll(".roommate-edit-button"));
  updateButtons.forEach(btn => {
    btn.addEventListener("click", updateRoommate)
  })
}
// To call the fn the subsequent time
const deleteButtons = Array.from(document.querySelectorAll(".roommate-delete-button"))

deleteButtons.forEach(btn => {
  console.log("hi")
  btn.addEventListener("click", deleteRoommate)
})

const updateRoommate = (event) => {
  const sidebar = document.querySelector('#sidebar');
  const index = event.target.getAttribute("data-id");
  roommates.showUpdateForm(sidebar, data[index]);

  const form = document.querySelector("#new-roommate-form form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
      username,
      avatar,
      faction,
      street,
      suite,
      city,
      inputZip
    } = event.target;

    data[index] = {
      username: username.value,
      avatar: avatar.value,
      faction: faction.value,
      address: {
        street: street.value,
        suite: suite.value,
        city: city.value,
        zipcode: inputZip.value
      }
    };
    roommates.showAll(roommatesContainer);

    const updateButtons = Array.from(document.querySelectorAll(".roommate-edit-button"));
    updateButtons.forEach(btn => {
      btn.addEventListener("click", updateRoommate)
    })
    const deleteButtons = Array.from(document.querySelectorAll(".roommate-delete-button"))
    deleteButtons.forEach(btn => {
      console.log("hi")
      btn.addEventListener("click", deleteRoommate)
    })

  })
}

const updateButtons = Array.from(document.querySelectorAll(".roommate-edit-button"));

updateButtons.forEach(btn => {
  btn.addEventListener("click", updateRoommate)
})

const newRoommateButton = document.querySelector('#new-roommate-button')

newRoommateButton.addEventListener('click', (event) => {
  event.preventDefault();
  const sidebar = document.querySelector('#sidebar')
  roommates.showNewForm(sidebar)
  //select the form after it's been created
  const form = document.querySelector("#new-roommate-form form")
  //Add event listener to the form
  form.addEventListener("submit", (event) => {
    //prevents the form from submitting
    event.preventDefault();

    //OPTION1
    // const username = document.querySelector("#username");
    // console.log(username.value);

    //OPTION2
    // const username = event.target.username
    // console.log(username.value)

    const {
      username,
      avatar,
      faction,
      street,
      suite,
      city,
      inputZip
    } = event.target;

    populateData(username, avatar, faction, {
      street,
      suite,
      city,
      inputZip
    });

    roommates.showAll(roommatesContainer);
  })
})

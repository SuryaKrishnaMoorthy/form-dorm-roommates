const data = require('./data')
const templates = require('./templates')

function showAll(container) {
  const cards = data.map((roommate,index) => templates.card(roommate,index)).join('')
  container.innerHTML = cards
}

function showNewForm(container) {
  container.innerHTML = templates.newRoommate()
}

function showUpdateForm(container,selectedData){
  container.innerHTML = templates.editRoommate(selectedData)
  console.log(templates.editRoommate(selectedData));

}

// function insertEditedData(username, avatar, faction, address){
//   data.splice(0,1)
// }


function populateData(username, avatar, faction, address) {
  data.push({
    username: username.value,
    avatar: avatar.value,
    faction: faction.value,
    address: {
      street: address.street.value,
      suite: address.suite.value,
      city: address.city.value,
      inputZip: address.inputZip.value
    }
  })
}

module.exports = {
  showAll,
  showNewForm,
  populateData,
  showUpdateForm
}

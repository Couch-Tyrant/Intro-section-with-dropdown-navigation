let x;
// console.log('object');

function openDropdown() {
  document.getElementById('dropdown-content-ID').classList.toggle('show');
  console.log('forrrrrr');
}

window.onclick = function (event) {
  console.log(document.getElementsByClassName('dropdown-content'));
  if (!event.target.matches('.dropdown-btn')) {
    let dropdowns = document.getElementsByClassName('dropdown-content');
    console.log('dropdowns.length' + dropdowns.length);
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      console.log(openDropdown.classList);
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

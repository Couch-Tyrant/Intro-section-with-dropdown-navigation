function showDropdownMenu() {
  document
    .getElementById('dropdown-features-content-ID')
    .classList.toggle('show');
  document.getElementById('features-image').src = './images/icon-arrow-up.svg';
  downUpImage();
}

window.onclick = function (event) {
  //   console.log(event.target);
  if (!event.target.matches('.dropdown-features-btn')) {
    let dropdowns = document.getElementsByClassName(
      'dropdown-features-content'
    );
    // console.log(dropdowns);
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdowns = dropdowns[i];
      if (openDropdowns.classList.contains('show')) {
        openDropdowns.classList.remove('show');
        downUpImage();
      }
    }
  }
};

function downUpImage() {
  if (
    document
      .getElementById('dropdown-features-content-ID')
      .classList.value.includes('show')
  ) {
    document.getElementById('features-image').src =
      './images/icon-arrow-up.svg';
  } else {
    document.getElementById('features-image').src =
      './images/icon-arrow-down.svg';
  }
}

function showDropdownMenuFeatures() {
  //   console.log('object');
  //   console.log(
  //     document.getElementById('dropdown-features-content-ID').classList
  //   );
  document
    .getElementById('dropdown-features-content-ID')
    .classList.toggle('show');
  downUpImage();
}

function showDropdownMenuCompany() {
  document
    .getElementById('dropdown-company-content-ID')
    .classList.toggle('show');
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
  fun(event);
};

function fun(event) {
  if (!event.target.matches('.dropdown-company-btn')) {
    let dropdowns = document.getElementsByClassName('dropdown-company-content');
    // console.log(dropdowns);
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdowns = dropdowns[i];
      if (openDropdowns.classList.contains('show')) {
        openDropdowns.classList.remove('show');
        console.log('hi');
        downUpImage();
      }
    }
  }
}

function downUpImage() {
  if (
    document
      .getElementById('dropdown-features-content-ID')
      .classList.contains('show')
  ) {
    document.getElementById('features-image').src =
      './images/icon-arrow-up.svg';
  } else {
    document.getElementById('features-image').src =
      './images/icon-arrow-down.svg';
  }

  console.log(
    document
      .getElementById('dropdown-company-content-ID')
      .classList.contains('show'),
    'hii'
  );
  if (
    document
      .getElementById('dropdown-company-content-ID')
      .classList.contains('show')
  ) {
    document.getElementById('company-image').src = './images/icon-arrow-up.svg';
  } else {
    document.getElementById('company-image').src =
      './images/icon-arrow-down.svg';
  }
}

// Google Desktop and Mobile View Website

// Project 2

// Google Login System.
// Created By WinandaDev on 05 November 2025.
// For practice developing a website in the Front-End field.
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
  DesktopElements();
  MobileElements();
  toggleContent();

  // Custom validation for Formulir1 (desktop)
  var form1 = document.querySelector('.Formulir form');
  if (form1) {
    var emailInput1 = form1.querySelector('input[type="email"]');
    var errorMsg1 = form1.querySelector('.error-msg');
    form1.setAttribute('novalidate', true);

    form1.addEventListener('submit', function(e) {
      if (!emailInput1.value) {
        e.preventDefault();
        errorMsg1.textContent = "Masukkan email atau nomor telepon";
        emailInput1.style.borderColor = "#d93025";
        emailInput1.style.borderWidth = "2px";
      } else if (!emailInput1.checkValidity()) {
        e.preventDefault();
        errorMsg1.textContent = "Masukkan email atau nomor telepon yang valid";
        emailInput1.style.borderColor = "#d93025";
        emailInput1.style.borderWidth = "2px";
      } else {
        errorMsg1.textContent = "";
        emailInput1.style.borderColor = "#1976d2";
        emailInput1.style.borderWidth = "2px";
      }
    });

    emailInput1.addEventListener('input', function() {
      errorMsg1.textContent = "";
      emailInput1.style.borderColor = "";
      emailInput1.style.borderWidth = "";
    });
  }

  // Custom validation for Formulir2 (mobile)
  var form2 = document.querySelector('.Formulir2 form');
  if (form2) {
    var emailInput = form2.querySelector('input[type="email"]');
    var errorMsg = form2.querySelector('.error-msg');
    form2.setAttribute('novalidate', true);

    form2.addEventListener('submit', function(e) {
      if (!emailInput.value) {
        e.preventDefault();
        errorMsg.textContent = "Masukkan email atau nomor telepon";
        emailInput.style.borderColor = "#d93025";
        emailInput.style.borderWidth = "2px";
      } else if (!emailInput.checkValidity()) {
        e.preventDefault();
        errorMsg.textContent = "Masukkan email atau nomor telepon yang valid";
        emailInput.style.borderColor = "#d93025";
        emailInput.style.borderWidth = "2px";
      } else {
        errorMsg.textContent = "";
        emailInput.style.borderColor = "#1976d2";
        emailInput.style.borderWidth = "2px";
      }
    });

    emailInput.addEventListener('input', function() {
      errorMsg.textContent = "";
      emailInput.style.borderColor = "";
      emailInput.style.borderWidth = "";
    });
  }
});

window.addEventListener('resize', function() {
  DesktopElements();
  MobileElements();
  toggleContent();
});

window.addEventListener('orientationchange', function() {
  DesktopElements();
  MobileElements();
  toggleContent();
});

function Mobile() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1025;
}

function toggleContent() {
  var desktop = document.getElementById('desktop-content');
  var mobile = document.getElementById('mobile-content');
  var border1 = document.querySelector('.Border1');
  var border2 = document.querySelector('.Border2');
  if (desktop && mobile) {
    if (Mobile()) {
      desktop.style.display = 'none';
      mobile.style.display = 'block';
      if (border1) border1.style.display = 'none';
      if (border2) border2.style.display = 'block';
    } else {
      desktop.style.display = 'block';
      mobile.style.display = 'none';
      if (border1) border1.style.display = 'block';
      if (border2) border2.style.display = 'none';
    }
  }
}

function DesktopElements() {
  const Desktop = document.querySelector('.Border1');
  if (Desktop) {
    Desktop.style.position = 'fixed';
    Desktop.style.left = '50%';
    Desktop.style.bottom = '';
    Desktop.style.transform = 'translate(-50%, -55%)';
    Desktop.style.top = '50%';
    Desktop.style.right = '';
  }
}

function MobileElements() {
  const Mobile = document.querySelector('.Border2');
  if (Mobile) {
    Mobile.style.position = 'static';
    Mobile.style.marginLeft = 'auto';
    Mobile.style.marginRight = 'auto';
    Mobile.style.marginTop = 'calc(50vh - 230px)';
    Mobile.style.width = '90vw';
    Mobile.style.maxWidth = '415px';
    Mobile.style.transform = '';
    Mobile.style.left = '';
    Mobile.style.top = '';
    Mobile.style.bottom = '';
    Mobile.style.right = '';
  }
}
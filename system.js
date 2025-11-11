// Google Desktop and Mobile View Website

// Project 2

// Google Login System.
// Created By WinandaDev on 05 November 2025.
// For practice developing a website in the Front-End field.
// =====================================================

document.addEventListener('DOMContentLoaded', function() {
  function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 1025;
  }
  function toggleContent() {
    var desktop = document.getElementById('desktop-content');
    var mobile = document.getElementById('mobile-content');
    if (desktop && mobile) {
      if (isMobileDevice()) {
        desktop.style.display = 'none';
        mobile.style.display = 'block';
      } else {
        desktop.style.display = 'block';
        mobile.style.display = 'none';
      }
    }
  }
  toggleContent();
  window.addEventListener('resize', toggleContent);
  window.addEventListener('orientationchange', toggleContent);

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
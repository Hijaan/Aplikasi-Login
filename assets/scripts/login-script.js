/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/** @module Login-Script */
/**
 * @constant {HTMLElement}
 */
const loginFormElement = document.querySelector('#loginForm');

/** @constant {HTMLElement} */
const inputEmailElement = document.querySelector('#inputEmail');

/**@constant {HTMLElement} */
const inputPasswordElement = document.querySelector('#inputPassword');

/** @constant {string} */
const expectedEmail = 'admin@dicoding.com';

/**@constant {string} */
const expectedPassword = 'superpassword';

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /* membuat variabel untuk menyimpan nilai dari inputan email pengguna
  /**@constant {string} */
  const email = inputEmailElement.value;

  /* Membuat varaibel untuk menyimpan nilai dari inputan password pengguna
  /**@constant {string} */
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});

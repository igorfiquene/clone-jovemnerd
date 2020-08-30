/*
|--------------------------------------------------------------------------
| IMPORT FRAMEWORKS AND LIBRARIES
|--------------------------------------------------------------------------
*/

import jquery from 'jquery';
window.$ = window.jQuery = jquery;
// import '@fancyapps/fancybox';
// import { tns } from 'tiny-slider';

/*
|--------------------------------------------------------------------------
| APP FUNCTIONS
|--------------------------------------------------------------------------
*/

(function () {
	$(function () {
		// 

		menuMb();

		fixedSubHeader();
	});
}());


function menuMb() {
	var menuTg = document.getElementsByClassName('toggle-menu');
	var menuL = menuTg.length;

	// console.log(menu[0]);

	for (let i = 0; i < menuL; i++) {
		menuTg[i].addEventListener('click', () => {
			let menu = document.getElementsByClassName('list');
			menu[i].classList.toggle('active');
		})
	}
}

function fixedSubHeader() {
	window.addEventListener('scroll', () => {
		let scroll = document.querySelector('.sub-header');

		scroll.classList.toggle('subiu', window.scrollY > 0);
	})
}
// function openTab(evt, tabName) {
// 	var i, tabcontent, tablinks;
// 	tabcontent = document.getElementsByClassName("tabcontent");
// 	for (i = 0; i < tabcontent.length; i++) {
// 		tabcontent[i].style.display = "none";
// 	}
// 	tablinks = document.getElementsByClassName("tablinks");

// 	for (i = 0; i < tablinks.length; i++) {
// 		tablinks[i].className = tablinks[i].className.replace(" active", "");
// 	}
// 	document.getElementById(tabName).style.display = "block";
// 	evt.currentTarget.className += " active";

// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();


// function toggleNav() {
// 	let aside = document.getElementById('sidebar');
// 	aside.classList.toggle('sidebar--active');
// }

// let button = document.getElementById('navToggleButton');
// button.addEventListener('click', toggleNav);



const scrollProgress = document.getElementById('scroll-progress');
const height =
	document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
	const scrollTop =
		document.body.scrollTop || document.documentElement.scrollTop;
	scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});

let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("a");

window.onscroll = () => {
	section.forEach((i) => {
		let top = window.scrollY;
		let offset = i.offsetTop - 50;
		let height = i.offsetLeft;
		let id = i.getAttribute("id");

		if (top >= offset && top < offset + height) {
			menu.forEach((link) => {
				link.classList.remove("active");
				document
					.querySelector("a[href*=" + id + "]")
					.classList.add("active");
			});
		}
	});
};


var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
	SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
	SlideShow(slidePosition = n);
}

function SlideShow(n) {
	var i;
	var slides = document.getElementsByClassName("Containers");
	if (n > slides.length) { slidePosition = 1 }
	if (n < 1) { slidePosition = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slidePosition - 1].style.display = "block";
}
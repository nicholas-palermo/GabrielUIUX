function makeCurrent(sectionID) {

    for(let i = 1; i < 7; i++) {
        let section = document.querySelector(`#dot${i}`);
        console.log(section.classList);
        section.classList.remove('current');
        console.log(section.classList);
    }

    let section = document.querySelector(`#dot${sectionID}`);
    console.log(section.classList);
    section.classList.add('current');
}

window.addEventListener('scroll', function() {
	var element = document.querySelector('#AP-section1');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight + (window.innerHeight/2)) {
		for(let i = 1; i < 7; i++) {
            let section = document.querySelector(`#dot${i}`);
            section.classList.remove('current');
        }
        let section = document.querySelector('#dot1');
        section.classList.add('current');
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#AP-section2');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight + (window.innerHeight/2)) {
		for(let i = 1; i < 7; i++) {
            let section = document.querySelector(`#dot${i}`);
            section.classList.remove('current');
        }
        let section = document.querySelector('#dot2');
        section.classList.add('current');
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#AP-section3');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight + (window.innerHeight/2)) {
		for(let i = 1; i < 7; i++) {
            let section = document.querySelector(`#dot${i}`);
            section.classList.remove('current');
        }
        let section = document.querySelector('#dot3');
        section.classList.add('current');
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#AP-section4');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight + (window.innerHeight/2)) {
		for(let i = 1; i < 7; i++) {
            let section = document.querySelector(`#dot${i}`);
            section.classList.remove('current');
        }
        let section = document.querySelector('#dot4');
        section.classList.add('current');
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#AP-section5');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight + (window.innerHeight/2)) {
		for(let i = 1; i < 7; i++) {
            let section = document.querySelector(`#dot${i}`);
            section.classList.remove('current');
        }
        let section = document.querySelector('#dot5');
        section.classList.add('current');
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#AP-section6');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight + (window.innerHeight/2)) {
		for(let i = 1; i < 7; i++) {
            let section = document.querySelector(`#dot${i}`);
            section.classList.remove('current');
        }
        let section = document.querySelector('#dot6');
        section.classList.add('current');
	}
});
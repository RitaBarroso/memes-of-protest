let possible = [
  	['s1','s2','s3','s4','s5','s6','s7'],
    ['s4','s7','s6','s5','s3','s2','s1'],
    ['s3','s2','s4','s6','s7','s5','s1'],
	['s7','s5','s6','s2','s3','s4','s1'],
	];
  
let choice = Math.floor(Math.random() * possible.length);
let sequence = possible[choice];
let container = document.querySelector('#main');
	
 for (const id of sequence) {
  	container.appendChild(document.querySelector('#' + id));
};	
	
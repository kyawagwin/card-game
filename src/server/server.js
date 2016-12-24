const bleh = "whoa";
console.log(`hello ${bleh}`);

const obj = {hey: 1};
const obj2 = {...obj, bleh: 2};
console.log(obj2);

class AppComponent {
	static PropTypes = {
		bleh: "whoa"
	};
}

switch(bleh) {
	case 1:
		console.log("hey");
		break;
	case 2:
		console.log("whoa");
		break;
}
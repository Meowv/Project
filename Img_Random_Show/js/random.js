function column(img, chance, type) {
	this.img = img;
	this.chance = chance;
	this.type = type;
}

function dispColumn() {
	with (this)
	switch (type) {
		case "img":
			document.getElementById("CAN").innerHTML += "<img src=" + img + ">";
			break;
		default:
			document.write("");
	}
}

column.prototype.dispColumn = dispColumn;
columns = new Array();
columns[0] = new column("http://lorempixel.com/160/110/", getRandom(1, 20), "img");
columns[1] = new column("https://unsplash.it/160/110/?random", getRandom(1, 20), "img");

sum_of_all_chances = 0;
for (i = 0; i < columns.length; i++) {
	sum_of_all_chances += columns[i].chance;
}

function getRandom(min, max) {
	var r = Math.random() * (max - min);
	var re = Math.round(r + min);
	re = Math.max(Math.min(re, max), min);
	return re;
}

function randomColumn() {
	chance_limit = 0;
	randomly_selected_chance = Math.round((sum_of_all_chances - 1) * Math.random()) + 1;
	for (i = 0; i < columns.length; i++) {
		chance_limit += columns[i].chance;
		if (randomly_selected_chance <= chance_limit) {
			columns[i].dispColumn();
			break;
		}
	}
}
this_column = randomColumn();

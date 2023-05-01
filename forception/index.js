function forception(){
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var result = [];

    for (var i = 0; i < people.length; i++){
        var person = people[i];
        var tempArray = [];

        for (var j = 0; j < alphabet.length; j++){
            var letter = alphabet[j];
            tempArray.push(letter);
        }

        result.push(person + ": " + tempArray.join(", "));
    }
    return result;
}


var result = forception();
console.log(result);

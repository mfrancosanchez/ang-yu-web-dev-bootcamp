


function HouseKeeper1(firstName, lastName, yearsOfExperience, workPermit, languages, cleaningMeth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearsOfExperience = yearsOfExperience;
    this.workPermit = workPermit;
    this.languages = languages;
    this.cleaningMeth = function () {
        alert(`${this.firstName} is cleaning...`);
    }
}


let houseKeeper1 = new HouseKeeper1("Alexia", "Garcia", 2, false,
    ["spanish", "portuguese", "english", "italian"])
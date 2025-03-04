class AddressBookData {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;  // Initialize first name
        this.lastName = lastName;    // Initialize last name
        this.address = address;      // Initialize address
        this.city = city;            // Initialize city
        this.state = state;          // Initialize state
        this.zip = zip;              // Initialize zip code
        this.phoneNumber = phoneNumber; // Initialize phone number
        this.email = email;          // Initialize email
    }

    // Getters
    get firstName() { return this._firstName; }
    get lastName() { return this._lastName; }
    get address() { return this._address; }
    get city() { return this._city; }
    get state() { return this._state; }
    get zip() { return this._zip; }
    get phoneNumber() { return this._phoneNumber; }
    get email() { return this._email; }

    // Setters with validation
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');  // First name should start with a capital letter and have at least 3 characters
        if (nameRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "Name Incorrect";  // Throw error if validation fails
        }
    }

    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');  // Last name should start with a capital letter and have at least 3 characters
        if (nameRegex.test(lastName)) {
            this._lastName = lastName;
        } else {
            throw "Name Incorrect";  // Throw error if validation fails
        }
    }

    set city(city) {
        if (city.length >= 4) {
            this._city = city;
        } else throw "Incorrect City";  // Throw error if validation fails
    }

    set address(address) {
        if (address.length >= 4) {
            this._address = address;
        } else throw "Incorrect Address";  // Throw error if validation fails
    }

    set state(state) {
        if (state.length >= 4) {
            this._state = state;
        } else throw "Incorrect State";  // Throw error if validation fails
    }

    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{6}$');  // Zip should be a 6-digit number
        if (zipRegex.test(zip)) {
            this._zip = zip;
        } else throw "Invalid Pin Code";  // Throw error if validation fails
    }

    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp('^\\d{10}$');  // Phone number should be a 10-digit number
        if (phoneRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else throw "Invalid Phone Number";  // Throw error if validation fails
    }

    set email(email) {
        let emailRegex = RegExp('^[a-zA-z0-9_+.-]+@[a-zA-Z0-9]+\\.[a-zA-Z]{2,}$');  // Email should be in valid format
        if (emailRegex.test(email)) {
            this._email = email; 9
        } else throw "Invalid Email";  // Throw error if validation fails
    }

    // toString method to return a string representation of the object
    toString() {
        return "First Name: "+this.firstName+" Last Name: "+this.lastName+" Address: "+this.address+" City: "+this.city+" State: "+this.state+" Zip: "+this.zip+" Phone Number: "+this.phoneNumber+" Email: "+this.email;
    }
}
//Contact List Array
let contactList=[]
function addcontact(firstName,lastName,address,city,state,zip,phoneNumber,email){
    try{
        let duplicate=findByName(firstName,lastName);
        if(duplicate){
            console.log("Duplicate Entry Not Accepted");
            return;
        }
        let newContact=new AddressBookData(firstName,lastName,address,city,state,zip,phoneNumber,email);
        contactList.push(newContact);
        console.log("Contact Added Successfully: ");
    }
    catch(error){
        console.error(error);
    }
}
function findByName(firstName,lastName){ //function for finding by name of person
    return contactList.find(contact=>contact.firstName==firstName && contact.lastName==lastName);

}
function findByCityOrState(city,state){ // find by name or city
    return contactList.find(contact=>contact.city==city && contact.state==state);
}
function editContact(firstName,lastName,newDetails){// function for editing contact
    let contact=findByName(firstName,lastName);
    if(contact){
        for(let key in newDetails){ //
            if(contact.hasOwnProperty(key)){
                
                contact[key]=newDetails[key];
            }
        }
        console.log("Contact Edited Successfully");

    }
    else{
        console.log("Contact Not  Found")
    }
}
function deleteContactByName(firstName,lastName){
    let contactIndex=contactList.findIndex(contact=>contact.firstName==firstName && contact.lastName==lastName);
    if(contactIndex!=-1){
        contactList.splice(contactIndex,1);
        console.log("Contact Deleted Successfully");
    }
    else{
        console.log("Contact Not Found");
    }
}
function countLength(){
    return contactList.length;
}
// Function to find contacts in a particular city
function findByCity(city){
    return contactList.filter(contact => contact.city == city);
}
// Function to find contacts in a particular state
function findByState(state){
    return contactList.filter(contact=>contact.state==state);
}
// Function to view persons by city
function viewByCity(city){
    let contactsInCity=findByCity(city);
    if(contactsInCity.length>0){
        console.log("Contact in :"+city);
        contactsInCity.forEach(contact => console.log(contact.toString()));
    }
    else{
        console.log("No Contact Found:");
    }
}
// Function to view persons by state
function viewByState(state){
    let contactsInState=findByState(state);
    if(contactsInState.length>0){
        console.log("Contact in :"+state);
        contactsInState.forEach(contact => console.log(contact.toString()));
    }
    else{
        console.log("No Contact Found:");
    }
}
//Method to get Number of contact per city
function countByCity(city){
    let contactInCity=findByCity(city);
    return contactInCity.length;
}
//Method to get Number of contact per state;
function countByState(state){
    let contactsInState=findByState(state);
    return contactsInState.length;
}
// Function to sort the address book entries alphabetically by a person's name
function sortContacts() {
    contactList.sort((a, b) => {
        if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
        if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
        if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1;
        if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1;
        return 0;
    });
    console.log("Address book sorted alphabetically by person's name:");
    contactList.forEach(contact => console.log(contact.toString()));
}

// Try creating a new AddressBookData object and log it to the console
addcontact("Rahul","Roy","HNo 90 Kamal Nagar","Bhopal","Madhya Pradesh","460201",6668844521,"rhjk@gmail.com");
addcontact("Harish","Singh","HNo 09 Mahakal Lok","Indore","Madhya Pradesh","995623",7755216342,"hk11l@gmail.com");
editContact("Rahul", "Roy", { _city: "Indore", _state: "Madhya Pardesh", _phoneNumber:8966452317});
contactList.forEach(contact => console.log(contact.toString()));
//Delete contact method call
deleteContactByName("Rahul","Roy");
addcontact("Rajesh","Raman","HNo 91 Kamala Nagar","Bhopal","Madhya Pradesh","460209",6878834521,"rghl@gmail.com");
addcontact("Kamal","Ram","HNo 98 Rajesh  Nagar","Bhopal","Madhya Pradesh","660301",9665848521,"klhjk@gmail.com");
addcontact("Hamid","Ali","HNo 190 Kajal Colony","Bhopal","Madhya Pradesh","661201",6868543511,"h51jk@gmail.com");
//length counter of address book
let len=countLength();
console.log("The Number of Contact in Address Book: "+len);
// Display all contacts in the Address Book
contactList.forEach(contact => console.log(contact.toString()));
//Trying to add Duplicate Entry;
addcontact("Hamid","Ali","HNo 190 Kajal Colony","Bhopal","Madhya Pradesh","661201",6868543511,"h51jk@gmail.com");
//Calling Method for getting list by Bhopal
viewByCity("Bhopal");
//Calling Methos 
viewByState("Madhya Pradesh");

console.log("Count By City: ",countByCity("Bhopal"));
console.log("Count By State:",countByState("Madhya Pradesh"));
//Calling Method for Sorted Data By name
sortContacts();

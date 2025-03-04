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
            this._email = email;
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
        let newContact=new AddressBookData(firstName,lastName,address,city,state,zip,phoneNumber,email);
        contactList.push(newContact);
        console.log("Contact Added Successfully: ");
    }
    catch(error){
        console.error(error);
    }
}
// Try creating a new AddressBookData object and log it to the console
addcontact("Rahul","Roy","HNo 90 Kamal Nagar","Bhopal","Madhya Pradesh","460201",6668844521,"rhjk@gmail.com");
addcontact("Harish","Singh","HNo 09 Mahakal Lok","Indore","Madhya Pradesh","995623",7755216342,"hk11l@gmail.com");
// Display all contacts in the Address Book
contactList.forEach(contact => console.log(contact.toString()));
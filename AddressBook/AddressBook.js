class AddressBookData{
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this._firstName=firstName;
        this._lastName=lastName;
        this._address=address;
        this._city=city;
        this._state=state;
        this._zip=zip;
        this._phoneNumber=phoneNumber;
        this._email=email;
    }
    get firstName(){return this._firstName;}
    get lastName(){return this._lastName;}
    get address(){return this._address;}
    get city(){return this._city;}
    get state(){return this._state;}
    get zip(){return this._zip;}
    get phoneNumber(){return this._phoneNumber;}
    get email(){return this._email;}

    set firstName(firstName){this._firstName=firstName;}
    set lastName(lastName){this._lastName=lastName;}
    set city(city){this._city=city;}
    set address(address){this._address=address;}
    set state(state){this._state=state;}
    set zip(zip){this._zip=zip;}
    set phoneNumber(phoneNumber){this._phoneNumber=phoneNumber;}
    set email(email){this._email=email;}

    toString(){
        return "First Name: "+this.firstName+" Last Name: "+this.lastName+" Address: "+this.address+" City: "+this.city+" State: "+this.state+" Zip: "+this.zip+" Phone Number: "+this.phoneNumber+" Email:  "+this.email;
    }
}
let addressbookdata =new AddressBookData("Gagan","Tantwar","Karond","Bhopal","M.P","462038",9666464981,"xyz@gmail.com");
console.log(addressbookdata.toString());
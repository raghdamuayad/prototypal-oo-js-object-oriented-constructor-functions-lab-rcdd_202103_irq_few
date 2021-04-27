

  function Scooter(year, color,model) {
    this.year= year;
    this.color =color;
    this.model = model;
    this.sayHello = function() {
      console.log(`${this.year},${this.color},${this.model}`);
    };
  }
    let samson = new Scooter(2015, "red", "swoosh");
  samson.Scooter();



  function Driver(name, age,experience) {
    this.name= name;
    this.age =age;
    this.experience = experience;
    this.sayHello = function() {
      console.log(`${this.name},${this.age},${this.experience}`);
    };
  }
      let allison = new Driver("Allison", "16 years", "2 years");
 allison.Driver();



 function PickupLocation (address,city) {
   this.address= address;
   this.city =city;
   this.sayHello = function() {
     console.log(`${this.address},${ this.city}`);
   };
 }
  let poshHotel = new PickupLocation("123 Broadway","New York City");
 poshHotel.PickupLocation();

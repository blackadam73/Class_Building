//prints a ticket as to whether the floors of the building have been buffed and/or waxed

class Building {
    constructor(name,id) {
      this.name=name
      this.id=id
        }
 is_Available (available) {
     this.available = available
   }
  areFloorsWaxed () {
                   if (this.available==='true'){
                  console.log(`Building: "${this.name}"---Building ID:${this.id}--> Floors have been waxed`);
             }
                   else if (this.available ==='false') {
                    console.log(`Building: "${this.name}"---Building ID:${this.id}--> Floors have NOT been waxed  ${this.available}`);
                }
                     else 
                        console.log('True or False Please!!!');

                   }
        }
    
             let building1 = new Building('library',25);
             //let building2 = new Building('Gym',30);
             building1.is_Available('true');    //Here is where you choose the output whether it is 'true' or 'false'
             //building2.is_available === false;
             
             building1.areFloorsWaxed();
             //building2.get_Details();

             //building1.is_available === 'test';
             //building1.get_Details();


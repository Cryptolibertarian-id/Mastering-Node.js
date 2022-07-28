class CarbonOffsetProject {
  location: string;
  constructor(location: string) {
    this.location = location;
  }
  owner() {
    console.log("Melchor Group");
  }
}

class Reforestration extends CarbonOffsetProject {
  displayLocation() {
    console.log(this.location);
    super.owner();
  }
}

const roxi = new Reforestration("Aru Island");
roxi.displayLocation();
roxi.owner();

import wellIDFormatter from "./wellIDFormatter";
import PlateWells from "./getPlateWells";

// let getPlate = plateWellsClass.getPlate;
let plateWellsClass = new PlateWells();
let getPlateWells = plateWellsClass.getPlateWells;
let getPlate = plateWellsClass.getPlate;

module.exports = {
  wellIDFormatter,
  getPlate,
  getPlateWells,
};

export default wellIDFormatter;

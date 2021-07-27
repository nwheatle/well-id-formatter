import wellIDFormatter from "./wellIDFormatter";
import PlateWells from "./getPlateWells";

let plateWellsClass = new PlateWells();
let getPlateWells = plateWellsClass.getPlateWells;
let getPlate = plateWellsClass.getPlate;

module.exports = {
  wellIDFormatter: wellIDFormatter,
  getPlate: getPlate,
  getPlateWells: getPlateWells,
};

export default wellIDFormatter;

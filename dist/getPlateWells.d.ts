import { PlateSizesType, AllWellFormatsType, Plate, PlateLayouts } from "./wellTypes";
export default class PlateWells {
    plates: PlateLayouts;
    constructor();
    getPlateWells: (plateSize: PlateSizesType, wellType: AllWellFormatsType) => string[];
    getPlate: (plateSize: PlateSizesType) => Plate;
}
declare let getPlateWells: (plateSize: PlateSizesType, wellType: AllWellFormatsType) => string[];
declare let getPlate: (plateSize: PlateSizesType) => Plate;
export { getPlateWells, getPlate };

import { PlateSizesType, AllWellFormatsType, Plate, PlateLayouts } from "./wellTypes";
export default class PlateWells {
    plates: PlateLayouts;
    constructor();
    getPlateWells: (plateSize: PlateSizesType, wellType: AllWellFormatsType) => string[];
    getPlate: (plateSize: PlateSizesType) => Plate;
}

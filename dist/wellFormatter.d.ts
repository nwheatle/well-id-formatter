declare type FromWellIDTypes = "padded" | "unpadded" | "number" | null;
declare type ToWellIDTypes = FromWellIDTypes | "row" | "col";
declare function wellFormatter(from_: any, to: "padded" | "number" | "unpadded" | "row" | "col", plateLayoutNumber?: 1 | 6 | 12 | 24 | 48 | 96 | 384 | null): (string | null)[] | string | null | void;
export declare function translateWellTypes(wells: string[], fromType: FromWellIDTypes, toType: ToWellIDTypes, plateLayoutNumber: 1 | 6 | 12 | 24 | 48 | 96 | 384 | null): (string | null)[];
export declare function detectWellIDType(well: string | null | undefined): "padded" | "number" | "unpadded" | "row" | "col" | null;
export declare function detectFromWellIDType(well: string | null | undefined): FromWellIDTypes;
export default wellFormatter;

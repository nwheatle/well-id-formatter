interface RowCol {
    row: string;
    col: string;
}
interface PlateLayout {
    id: string;
    well_count: number;
    rows: string[];
    columns: string[];
    padded_columns: string[];
    well_numbers: string[];
    dims: [number, number];
    well_ids: string[];
    padded_well_ids: string[];
}
interface PlateLayouts {
    1: PlateLayout;
    6: PlateLayout;
    8: PlateLayout;
    12: PlateLayout;
    24: PlateLayout;
    48: PlateLayout;
    96: PlateLayout;
    384: PlateLayout;
}
declare type WellFormatsType = "padded" | "unpadded" | "number" | "col" | "row";
declare type AllWellFormatsType = "padded" | "unpadded" | "number" | "unique_columns" | "unique_rows" | "all_columns" | "all_rows";
declare type PlateSizesType = 1 | 6 | 12 | 24 | 48 | 96 | 384;
interface PlateWell {
    padded: string;
    unpadded: string;
    number: string;
    row: string;
    column: string;
}
declare type Plate = PlateWell[];
export type { PlateLayout, PlateLayouts, RowCol, PlateSizesType, WellFormatsType, AllWellFormatsType, Plate, PlateWell, };

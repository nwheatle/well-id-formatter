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
interface Reservoir extends PlateLayout {
    id: "plt_1";
    well_count: 1;
    rows: ["A"];
    columns: ["1"];
    padded_columns: ["01"];
    well_numbers: ["1"];
    dims: [1, 1];
    well_ids: ["A1"];
    padded_well_ids: ["A01"];
}
interface PlateLayouts {
    1: Reservoir;
    6: PlateLayout;
    8: PlateLayout;
    12: PlateLayout;
    24: PlateLayout;
    48: PlateLayout;
    96: PlateLayout;
    384: PlateLayout;
}
declare type PlateSizes = 1 | 6 | 12 | 24 | 48 | 96 | 384;
export type { PlateLayout, PlateLayouts, Reservoir, RowCol, PlateSizes };

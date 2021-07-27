// prettier-ignore
export const rows : string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF"];

let arr = new Array(50).fill(1).map((i, idx) => idx + 1);

export const cols: string[] = arr.map((col) => `${col}`);

export const padded_cols: string[] = cols.map((col) =>
  +col <= 9 ? `0${col}` : `${col}`
);

export const well_nums: string[] = new Array(384)
  .fill(1)
  .map((d, i) => `${i + 1}`);

// @ts-ignore
export const well_ids: string[] = rows
  .map((row) => cols.map((col) => `${row}${col}`))
  .flat();
// @ts-ignore
export const padded_well_ids: string[] = rows
  .map((row) =>
    cols.map((col) => (+col <= 9 ? `${row}0${col}` : `${row}${col}`))
  )
  .flat();
// @ts-ignore
var padded_only_well_id_var: string[] = rows
  .map((row) => cols.map((col) => (+col <= 9 ? `${row}0${col}` : null)))
  .flat();

export const padded_only_well_ids = padded_only_well_id_var.filter((d) => d);

export const rowRegex = new RegExp("^[A-Za-z]{1,2}");
export const colRegex = new RegExp("\\d{1,2}$");

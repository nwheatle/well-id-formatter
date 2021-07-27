# well-id-formatter

## :star2: Supports Well IDs from 384-, 96-, 48-, 24-, 12- and 6-well-plates :star2:

## wellIDFormatter(`inputWells`, `toFormat`, `plateSize` = `null`)

`inputWells`: string, number, strings array or numbers array

`toFormat`: "padded", "unpadded", "number", "row" or "col"

`plateSize` : null, 6, 12, 24, 48, 96 or 384

## Install

```bash
$ npm install well-id-formatter
```

## Version 1.1 fixed bugs :grimacing: and added new functions `getPlate` and `getPlateWells` :relaxed:.

## Usage

```js
import { wellIDFormatter, getPlate, getPlateWells } from "well-id-formatter";

//wellIDFormatter converts between different well ID formats

wellIDFormatter(["A1", "A12"], "padded"); // => ['A01', 'A12']
wellIDFormatter(["A01", "A12"], "unpadded"); // => ['A1', 'A12']
wellIDFormatter(["A01", "A12"], "row"); // => ['A', 'A']
wellIDFormatter(["A1", "A12"], "col"); // => ['1', '12']
wellIDFormatter(["A1", "A12"], "number", 96); // => ['1','12']

//plateSize required for number formatting
wellIDFormatter(["A1", "A2", "B1", "B12"], "number", 96); // => ['1', '2', '13', '24']
wellIDFormatter(["A1", "A2", "B1", "B12"], "number", 384); // => ['1', '2', '25', '36']
wellIDFormatter(["A1", "A2", "B1", "B12"], "number"); // => [null, null, null, null]
wellIDFormatter([1, 2, 13, 24], "padded", 96); // => ["A01", "A02", "B01", "B12"]

//plateSize provides stricter conversions
wellIDFormatter(["A1", "P12"], "padded"); // => ['A01','P12']
wellIDFormatter(["A1", "P12"], "padded", 96); // => ['A01',null] 'P12' does not exist in 96-well plate

//unrecognized formats return null
wellIDFormatter([null, undefined, "-", "A1"], "padded"); // => [null, null, null, "A01"]

//also accepts single well IDs
wellIDFormatter("J20", "number", 384); // => 236
wellIDFormatter(236, "row", 384); // => "J"

//getPlate(plateSize)
getPlate(6);
// =>
// [
//   { padded: 'A01', unpadded: 'A1', number: '1', row: 'A', column: '1' },
//   { padded: 'A02', unpadded: 'A2', number: '2', row: 'A', column: '2' },
//   { padded: 'A03', unpadded: 'A3', number: '3', row: 'A', column: '3' },
//   { padded: 'B01', unpadded: 'B1', number: '4', row: 'B', column: '1' },
//   { padded: 'B02', unpadded: 'B2', number: '5', row: 'B', column: '2' },
//   { padded: 'B03', unpadded: 'B3', number: '6', row: 'B', column: '3' }
// ]

//getPlateWells(plateSize, format)
getPlateWells(6, "padded"); // => [ 'A01', 'A02', 'A03', 'B01', 'B02', 'B03' ]
getPlateWells(6, "all_rows"); // => [ 'A', 'A', 'A', 'B', 'B', 'B' ]
getPlateWells(6, "unique_rows"); // => ['A', 'B']
// accepted formats = 'padded', 'unpadded', 'all_columns', 'unique_columns', 'all_rows', 'unique_rows' or 'number'
```

For Browser and NodeJS

Zero Dependencies!

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

## Usage

```js
import wellIDFormatter from "well-id-formatter";

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
```

For Browswer and Node

No Dependencies

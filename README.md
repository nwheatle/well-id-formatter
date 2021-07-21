# well-id-formatter

## Supports Well IDs from 384-, 96-, 48-, 24-, 12- and 6-well-plates :thumbsup: :bowtie: :star2:

<div style="background-color:rgb(230,230,230);padding:1em;">

## wellIDFormatter(<span style="font-style:italic;color:purple;"> inputWells</span>, <span style="font-style:italic;color:green;"> toFormat</span>,<span style="font-style:italic;color:blue;"> plateSize</span>=<span style="font-style:italic;color:grey;">null</span>)

### <span style="font-style:italic;color:purple;">inputWells</span> : string, number, strings array or numbers array

### <span style="font-style:italic;color:green;">toFormat</span> : "padded", "unpadded", "number", "row" or "col"

### <span style="font-style:italic;color:blue;">plateSize</span> : null, 6, 12, 24, 48, 96 or 384

</div>

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

//plate size required for number formatting
wellIDFormatter(["A1", "A2", "B1", "B12"], "number", 96); // => ['1', '2', '13', '24']
wellIDFormatter(["A1", "A2", "B1", "B12"], "number", 384); // => ['1', '2', '25', '36']
wellIDFormatter(["A1", "A2", "B1", "B12"], "number"); // => [null, null, null, null]
wellIDFormatter([1, 2, 13, 24], "padded", 96); // => ["A01", "A02", "B01", "B12"]

//plate size parameter provides stricter conversions
wellIDFormatter(["A1", "P12"], "padded"); // => ['A01','P12']
wellIDFormatter(["A1", "P12"], "padded", 96); // => ['A01',null] 'P12' does not exist in 96-well plate

//unrecognized formats return null
wellIDFormatter([null, undefined, "-", "A1"], "padded"); // => [null, null, null, "A01"]

//also accepts single well IDs
wellIDFormatter("J20", "number", 384); // => 236
```

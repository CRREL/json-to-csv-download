# JSON to CSV download

This module takes json and creates a CSV file and fires off a download by creating a uri link in the DOM and activating the click callback.  There are some limitations due to filesize so if this doesn't work for large datasets you were warned.

## Using

```
var json2csv = require('@corpsmap/json-to-csv-download');

var json = require('some/json/file.json');

json2csv(json, 'CSV_EXPORT', false, false);

```

## Parameters
| Param | Required | Default Value | Description |
| --- | --- | --- |
| `json` | true | | JSON object to convert to CSV |
| `title` | no | `false` | String title to use for filename and optionally in the CSV |
| `labelColumns` | no | `false` | Boolean, whether or not to add column labels to the first row of the CSV file |
| `addTitleToBody` | no | `false` | Boolean, whether or not to add the title to the first row of the CSV file (above label columns if `labelColumns` is true) |
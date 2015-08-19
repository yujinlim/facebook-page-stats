# Facebook Page Fan Stats
> get facebook page fans stats by country

## Usage
```
npm i --save facebook-page-stats
```

```javascript
var stats = require('facebook-page-stats');

stats(token, pageId)
  .then(function(result) {
    // results from fans stats
  });
```

## Sample response
```javascript
{
  'United States': 3778,
  Malaysia: 1303,
  Spain: 533,
  'United Arab Emirates': 377,
  Indonesia: 322,
  Qatar: 271,
  'United Kingdom': 259,
  Netherlands: 167,
  Germany: 100,
  Australia: 78,
  France: 76,
  Philippines: 76,
  India: 23,
  Singapore: 18,
  Pakistan: 18,
  Romania: 17,
  Iceland: 16,
  Bangladesh: 13,
  Mexico: 11,
  Thailand: 8,
  Algeria: 8,
  Italy: 8,
  Canada: 7,
  Syria: 5,
  Myanmar: 5,
  Sweden: 5,
  Switzerland: 5,
  Egypt: 5,
  Colombia: 5,
  Morocco: 4,
  Croatia: 4,
  'Korea, Republic of': 4,
  Hungary: 4,
  undefined: 4,
  Turkey: 4,
  Poland: 4,
  Ghana: 3,
  Greece: 3,
  'Sri Lanka': 3,
  Brazil: 3,
  Nepal: 3,
  Japan: 3,
  Libya: 3,
  Bulgaria: 3,
  Israel: 3
}
```

## Options
### `stats(token, pageId)`
return facebook page stats by country

#### token *(required)*
facebook api token  
Type: `String`

#### pageId *(required)*
facebook page id  
Type: `String`

## License
MIT © [Yu Jin Lim](https://github.com/yujinlim)

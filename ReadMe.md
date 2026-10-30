## Analyzer Portal

#### steps to run and test

- Clone repo
- cd `analyzer-task`
- run `npm install`
- run `npm run dev`
- open Postman of any api testing tool
- test `http://localhost:4000/analyze`:`POST` endpoint with following data.

```
{
  "users": [
    {
      "name": "John",
      "age": 25,
      "department": "IT",
      "salary": 50000
    },
    {
      "name": "Alice",
      "age": 30,
      "department": "HR",
      "salary": 60000
    },
    {
      "name": "Mike",
      "age": 28,
      "department": "IT",
      "salary": 70000
    },
     {
      "name": "John",
      "age": "18",
      "department": "ITC",
      "salary": "12000"
    }
  ]
}
```

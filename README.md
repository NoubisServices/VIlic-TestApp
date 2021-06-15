# TaskApp

TaskApp is application for interview purpose.

Due to almost no complexity I've decided to break app only into Routes and Database adapter modules. Routes module defines API and is loaded into express in entry ts file. DatabaseAdapter is class that encapsulates file database operations and simple business logic.

## Installation

Run `npm install`

## Usage

#### Running in local environment
```javascript
npm start
```
#### Building distribution
```javascript
npm run build
```

## API Reference

#### Double number

```http
  GET /double/{number}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `number` | `number` | **Required**. |

Doubles the number and returns result.

#### Count


```http
  GET /count
```
Increments the counter in file db and returns count value.

#### Joke of the day

```http
  GET /joke
```

Fetches Joke of the day from external API.

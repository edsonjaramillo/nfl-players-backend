# NFL Players Directory Backend Server

This backend server is connected to a Postgresql (Supabase) that contains the latest directory of NFL players for the 2021 season. All of the data was gathered by a web scraper.
Python program repo: [NFL Players Active Directory Web Scraper](https://github.com/edsonjaramillo/nfl-players-web-scraper)

## Technologies used:

- [Fastify Framework](https://www.fastify.io/)
- [Supabase (Postgresql)](https://supabase.com/)
- [Typescript](https://www.typescriptlang.org/)

## List Players

The route is the `GET /players` to return a list of all NFL players and their information in alphabetical order by last name according to NFL.com

### Example request using cURL:

```bash
curl -X GET \
    "http://localhost:3000/players" \
    -H "Content-Type: application/json"
```

### Response Example

```json
[
  {
    "id": 1,
    "name": "DeAundre Ford",
    "team": "Falcons",
    "position": "DB",
    "status": "ACT"
  },
  {
    "id": 2,
    "name": "Chidobe Awuzie",
    "team": "Bengals",
    "position": "CB",
    "status": "ACT"
  },
  {
    "id": 3,
    "name": "Kayode Awosika",
    "team": "Eagles",
    "position": "OT",
    "status": "ACT"
  },
  {
    "id": 4,
    "name": "Genard Avery",
    "team": "Steelers",
    "position": "OLB",
    "status": "ACT"
  },
  ...
  ]
```

## Find players by team

This route is the `POST /playersbyteam`. It returns a list of NFL players that match the team variable sent.

### Example request using cURL:

```bash
curl -X POST \
    "http://localhost:3000/playersbyteam" \
    -H "Content-Type: application/json" \
    -d '{"team":"Patriots"}'
```

#### Values that can be used

`49ers`, `Bears`, `Bengals`, `Bills`, `Broncos`, `Browns`, `Buccaneers`, `Cardinals`, `Chargers`, `Chiefs`, `Colts`, `Commanders`, `Cowboys`, `Dolphins`, `Eagles`, `Falcons`, `Giants`, `Jaguars`, `Jets`, `Lions`, `Packers`, `Panthers`, `Patriots`, `Raiders`, `Rams`, `Ravens`, `Saints`, `Seahawks`, `Steelers`, `Texans`, `Titans`, `Vikings`

### Response Example

```json
[
  {
    "id": 12,
    "name": "Devin Asiasi",
    "team": "Patriots",
    "position": "TE",
    "status": "ACT"
  },
  {
    "id": 30,
    "name": "David Andrews",
    "team": "Patriots",
    "position": "C",
    "status": "ACT"
  },
  {
    "id": 35,
    "name": "Henry Anderson",
    "team": "Patriots",
    "position": "DE",
    "status": "ACT"
  },
  {
    "id": 73,
    "name": "Nelson Agholor",
    "team": "Patriots",
    "position": "WR",
    "status": "ACT"
  },
  ...
  ]
```

## Find players by position

This route is the `POST /playersbyposition`. It returns a list of NFL players that match the position variable sent.

### Example request using cURL:

```bash
curl -X POST \
    "http://localhost:3000/playersbyposition" \
    -H "Content-Type: application/json" \
    -d '{"position":"QB"}'
```

#### Values that can be used

`C`, `CB`, `DB`, `DE`, `DL`, `DT`, `FB`, `FS`, `G`, `ILB`, `K`, `LB`, `LS`, `MLB`, `NT`, `OG`, `OL`, `OLB`, `OT`, `P`, `QB`, `RB`, `SAF`, `SS`, `TE`, `WR`

### Response Example

```json
[
  {
    "id": 7,
    "name": "Tavon Austin",
    "team": "Jaguars",
    "position": "WR",
    "status": "UFA"
  },
  {
    "id": 10,
    "name": "Tutu Atwell",
    "team": "Rams",
    "position": "WR",
    "status": "ACT"
  },
  {
    "id": 22,
    "name": "J.J. Arcega-Whiteside",
    "team": "Eagles",
    "position": "WR",
    "status": "ACT"
  },
  {
    "id": 33,
    "name": "Robby Anderson",
    "team": "Panthers",
    "position": "WR",
    "status": "ACT"
  },
  {
    "id": 42,
    "name": "Danny Amendola",
    "team": "Texans",
    "position": "WR",
    "status": "UFA"
  },
  ...
  ]
```

## Find players by status

This route is the `POST /playersbystatus`. It returns a list of NFL players that match the status variable sent.

### Example request using cURL:

```bash
curl -X POST \
    "http://localhost:3000/playersbystatus" \
    -H "Content-Type: application/json" \
    -d '{"status":"ACT"}'
```

#### Values that can be used

`ACT`, `RFA`, `SUS`, `UFA`

### Response Example

```json
[
  {
    "id": 180,
    "name": "Tom Brady",
    "team": "Buccaneers",
    "position": "QB",
    "status": "ACT"
  },
  {
    "id": 181,
    "name": "Darius Bradwell",
    "team": "Panthers",
    "position": "RB",
    "status": "ACT"
  },
  {
    "id": 182,
    "name": "Will Bradley-King",
    "team": "Commanders",
    "position": "DE",
    "status": "ACT"
  },
  {
    "id": 183,
    "name": "Shaun Bradley",
    "team": "Eagles",
    "position": "LB",
    "status": "ACT"
  },
  ...
  ]
```

# ETNAir

## Author
- JACQUEMIN Théo
- ITCHIR Bilal
- KHELIFI Lidia
- GUILLEMOT Vincent

## Description

ETNAir is a rental advert website, house and appartment for example.

## Installation

### Docker

```bash
docker compose up
````

### Adding dependencies

```bash
cd api/
npm install
````

### Launching the project

```bash
npm run dev
````

## Project

### Route
address of the site in dev : localhost:3000/

Method | Route              | Description             |
| ---- | ------------------ | ----------------------- |
get    | /                  | home page               |
get    | /utilisateurs      | List of all the users   |
post   | /utilisateurs      | create a user           |
delete | /utilisateurs/{id} | delete a user           |
put    | /utilisateurs/{id} | update a user           |
get    | /annonces          | List of all the adverts |
post   | /annonces          | create an advert        |
delete | /annonces{id}      | delete an advert        |
put    | /annonces{id}      | update an advert        |

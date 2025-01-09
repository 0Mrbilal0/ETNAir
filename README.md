# ETNAir

## Author
- JACQUEMIN Théo
- ITCHIR Bilal
- KHELIFI Lidia
- GUILLEMOT Vincent

## Description

ETNAir is a rental advert website where you can find and rent the place place for your holliday!

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

###  Config the database 

```bash
npx prisma generate
npx prisma migrate dev
````

###  Generate the rentals

```bash
npx prisma db seed
````

### Launching the project

```bash
npm run dev
````

## Project

### Route
address of the site in dev : localhost:3000/

#### Routes related to users :

Method | Route              | Description             |
| ---- | ------------------ | ----------------------- |
get    | /                  | home page               |
get    | /users             | List of all the users   |
get    | /user              |  A specific user        |
post   | /auth/register     | create a user           |
post   | /auth/login        | log in                  |
put    | /user/{id}         | update a user           |
delete | /user/{id}         | delete a user           |

#### Routes related to rentals:

Method | Route              | Description             |
| ---- | ------------------ | ----------------------- |
get    | /annonces          | List of all the adverts |
post   | /annonces          | create an advert        |
delete | /annonces{id}      | delete an advert        |
put    | /annonces{id}      | update an advert        |


#

### You can test all routes on that url :
```
localhost:3000/api_doc
```
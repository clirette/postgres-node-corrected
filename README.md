# postgres-node-corrected

Followed along from [this](https://w26.one/article/how-to-create-manage-a-postgres-database-in-node-js-from-scratch-tutorial-6c587b3c) tutorial.

The blog post was full of errors, below is a list of corrections I made:

## 1. There is no mention of tweaking `/config/config.json` for sequelize.
Going off of the database created with docker, it is necessary to edit the config file to have the following:
```
"development": {
    "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
```

## 2. There are inconsistencies between the sql create script and the eventual data models.
Going by entity, the User script has a 'name' field while the model has 'username', 'firstname', and 'lastname'. I added these fields to the script.
The Articles script has a 'minutesRead' field that is omitted from the model, so I added it to the model.

## 3. A seeder file should be created using `sequelize seed:generate --name <name>` rather than using `sequelize migration:generate --name <name>`
This is so that the seeder file can be applied using `sequelize db:seed:all` rather than have the seeder grouped in with migrations.

## 4. The hash function used in the seeder file comes from nowhere.
The hash function imported for the seeder file `const { hash } = require("../../utils");` would come from outside of the project and is not written as part of the tutorial.
Instead, I used the `bcryptjs` to hash the password:
```
const { hash } = require("bcryptjs");
...
  hash: await hash("WallayBillayItsaPassword", 10),
...
```

There may be other errors that I fixed in the course of this tutorial that I forgot about, but these were the big ones I jotted down.

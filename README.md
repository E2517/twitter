# Twitter | React, Go and Mongodb

This project will be coded with React in the frontend, Go in the backend and Mongodb as a non-relational database.

## Set up Mongodb locally

MacOS Sierra 10.13.6

After download Mongodb go to the folder and execute these commands in terminal

```
$ cd ~/Download
$ tar xzf mongodb-osx-x86_64-2.2.3.tgz (tu version de Mongodb)
$ sudo mv mongodb-osx-x86_64-2.2.3 /usr/local/mongodb
```

create MongoDB Data directory

```
$ sudo mkdir -p /data/db
```

Change the owner to yours

```
$ whoami
CCR
$ sudo chown CCR /data/db
```

Set mongodb/bin to $PATH

```
$ cd
$ pwd
/Users/codebind
$ touch .bash_profile
$ open .bash_profile
```

Add two export to the file

```
export MONGO_PATH=/usr/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin
```

Start mongodb, execute in Terminal

```
mongod
```

# Mongodb

Open a terminal an execute

```
mongo
show dbs
```

Create a database

```
use mydatabase (create a database but is not fully created until you insert data into it)
db.user.insert({name: "e2517", age: 205})

Database: mydatabase
Collection: user
Document: {name: "Ada Lovelace", age: 205}
```

Current database

```
db
```

- You can use MongoDB Compass, that include a MongoSH

![mongodb][]

## How you can work with related data in MongoDB natively not using Mongoose

```
db.users.insert([{"name": "venom", "email": "venom@email.com"},{"name": "hulka", "email": "hulka@email.com"}])

var idVenom = ObjectId("5c9ccc140aee604c4ab6cd06")
var idHulka = ObjectId("5c9ccc140aee604c4ab6cd07")

db.messages.insert([{"idFrom": idVenom, "idTo": idHulka, "message": "¿How are you?"},{"idFrom": idHulka, "idTo": idVenom, "message": "Not bad, thanks"}])

db.messages.aggregate([ {$lookup: {from: "users", localField: "idFrom", foreignField: "_id", as: "sender" }}, {$lookup: {from: "users", localField: "idTo", foreignField: "_id", as: "receiver" }}])
```

[mongodb]: https://github.com/E2517/images/blob/main/images/twitter/mongodb.png

# Twitter | React, Go and Mongodb

This project will be coded with React in the frontend, Go in the backend, Mongodb as a non-relational database and a Virtual Machine in Cloud (Amazon Web Services, Google Cloud Platform)

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

- You can work with Mongodb Atlas or mongoose, however I am trying to work locally with less dependencies or tools and create a Virtual Machine with Docker and the necessary configuration.

## Set up Go locally in MaOSX

Before starting execute this commads on the Terminal when you create the folder

```
go mod init github.com/e2527/twitter/backend
```

You will see a new file go.mod

```
module github.com/e2527/twitter/backend

go 1.15

require (
  go.mongodb.org/mongo-driver v1.4.4
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/gorilla/mux v1.8.0
	github.com/kisielk/errcheck v1.5.0 // indirect
	github.com/ptilotta/twittor v0.0.0-20200419231543-94a3074739ce
	github.com/rs/cors v1.7.0
	golang.org/x/crypto v0.0.0-20201221181555-eec23a3978ad
)

```

Execute this commands on the terminal, this will install the packages on the PATH go/src and it will create a folder github.com and will add the packages inside

```
go get go.mongodb.org/mongo-driver
go get github.com/dgrijalva/jwt-go
go get github.com/gorilla/mux
go get github.com/kisielk/errcheck
go get github.com/ptilotta/twittor
go get github.com/rs/cors
go get golang.org/x/crypto

```

[mongodb]: https://github.com/E2517/images/blob/main/images/twitter/mongodb.png

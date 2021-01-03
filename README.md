# Twitter | React, Go and Mongodb

This project will be coded with React in the frontend, Go in the backend and Mongodb as a non-relational database.

## Set up Mongodb locally

MacOS Sierra 10.13.6

After download Mongodb go to the folder and execute these commands

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

Start mongodb, execute on the Terminal

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
mydatabase.user.insert({name: "e2517", age: 205})

Database: mydatabase
Collection: user
Document: {name: "Ada Lovelace", age: 205}
```

Current database

```
db
```

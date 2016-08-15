var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var filename = 'stackClone.db';

var dbexists = false;
try {
   fs.accessSync(filename);
   dbexists = true;
} catch (ex) {
   dbexists = false;
}


var db = new sqlite3.Database(filename);

if (!dbexists) 
{
   db.serialize
   (
        function() 
        {
/*
    Table Channels:
        ID
        Name
        TeamID FK
        Description
        Type // Team vs Private
        Users
        */
            var createChannelSQL = "CREATE TABLE IF NOT EXISTS CHANNELS " +
                       "(ID CHAR(25) PRIMARY KEY NOT NULL," + 
                        "NAME CHAR(25) NOT NULL," + 
                        "Users CHAR(25) NOT NULL);";
         

           db.run(createChannelSQL);
          
           var insertChannel = "INSERT INTO CHANNELS (ID,NAME,Users) " +
              "VALUES ('1','team1','user1');";
                   
         
           db.run(insertChannel);
       }
    );
 };
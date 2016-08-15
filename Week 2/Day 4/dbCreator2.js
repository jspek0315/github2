var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');
var filename = 'slackclone.db';
var dbexists = false;
try {
   fs.accessSync(filename);
   dbexists = true;
} catch (ex) {
   dbexists = false;
}
var db = new sqlite3.Database('slackclone.db');
if (!dbexists) {
   db.serialize(function() {
        var createUsersTableSql = "CREATE TABLE IF NOT EXISTS USERS " +
                      "(USERID         CHAR(25)    PRIMARY KEY     NOT NULL," +
                      " NAME           CHAR(50)                    NOT NULL, " + 
                       " PASSWORD       CHAR(10)                    NOT NULL, " + 
                       " EMAIL          CHAR(10)                         NOT NULL, " + 
                      " Type              CHAR(50)                    NOT NULL)"; 
        console.log("Created Users Table")
    
        var createChannelsTableSql = "CREATE TABLE IF NOT EXISTS CHANNELS " +
                   "(NAME                CHAR(25)    NOT NULL," +
                   " TEAMID             CHAR(140)   NOT NULL, " + 
                     "Type              CHAR(50)    NOT NULL, " + 
                    "Description        CHAR(1000)  NOT NULL, " +
					"User				CHAR (50)   NOT NULL);"; 
        console.log("Created Channels Table")
       var createTeamTableSql = "CREATE TABLE IF NOT EXISTS TEAM " +
                   "(NAME            CHAR(25)   NOT NULL, " + 
                   " USERS          CHAR(25)   NOT NULL)";  
        console.log("Created Team Table")
       db.run(createUsersTableSql);
       db.run(createChannelsTableSql);
       db.run(createTeamTableSql);
      
       var insertUsersSql = "INSERT INTO USERS (USERID, NAME, PASSWORD,EMAIL, TYPE) " +
           "VALUES ('shuvo',   'Shuvo Ahmed',      'shuvopassword', 'shuvo@gmail.com','PRIVATE')," +
                  "('jose',   'jose jose',      'josepassword', 'jose@gmail.com','PUBLIC')," +
                  "('joe',   'joe joe',      'jorpassword', 'joe@gmail.com','PRIVATE')," +
                  "('don',   'don don',      'donopassword', 'don@gmail.com','PRIVATE')," +
                  "('swarup',  'Swarup Khatri',  'swarup','don@gmail.com','PRIVATE')"; 
       
       var insertChannelsSql = "INSERT INTO CHANNELS (NAME, TEAMID, TYPE, Description,User) " +
          "VALUES ('shuvo', '1','PUBLIC', 'shuvoshuvchannel','s')," +
                 "('DON', '2','PUBLIC', 'DONshuvchannel','d')," +
                 "('JOE', '1','PUBLIC', 'JOEshuvchannel','j')," +
                 "('SWARUP', '1','PUBLIC', 'SWARUPshuvchannel','s')";
               
       var insertTeamSql = "INSERT INTO TEAM (NAME, USERS) " +
            "VALUES ('shuvo', 'shuvo@gmail.com'), " +                    
                   "('joe', 'joe@gmail.com')"; 
       db.run(insertUsersSql);
       db.run(insertChannelsSql);      
       db.run(insertTeamSql);
   db.each("SELECT * FROM Users", function(err, row) {
           console.log(row.USERID + ": " + row.TWEET);
       });

   });
}
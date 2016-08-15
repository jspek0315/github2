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

       /*******************Joseph's Code *****************************/
       console.log("Creating Team Table");

        var createTeamTableSql = "CREATE TABLE IF NOT EXISTS Team " +
                      "(TEAMID  CHAR(25)  PRIMARY KEY  NOT NULL," +
                      "Name CHAR(50)               NOT NULL);"; 
        db.run(createTeamTableSql);

       console.log("Inserting into team table");
       var insertTeamSql = "INSERT INTO TEAM (TEAMID, Name) " +
            "VALUES ('TeamID1', 'Team 1'), " +                    
                   "('TeamID2', 'Team 2');"; 

        db.run(insertTeamSql);

        console.log("Creating Message Table");
        var createMessageTableSql = "CREATE TABLE IF NOT EXISTS Messages " +
                      "(MessageID  CHAR(25)  PRIMARY KEY  NOT NULL," +
                      "Content     CHAR(200)              NOT NULL," + 
                      "USERID      CHAR(25)               NOT NULL," + 
                      "CHANNELID   CHAR(25)               NOT NULL," +
                      "TimeStamp   CHAR(25)               NOT NULL);"; 
        db.run(createMessageTableSql);

       console.log("Inserting into Message table");
       var insertMsgSql = "INSERT INTO Messages (MessageID, Content,USERID,CHANNELID,TimeStamp) " +
            "VALUES ('messageID1', 'Some Message Content 1', 'UserID1','ChannelID1','TimeStamp1'), " +                    
                   "('messageID2', 'Some Message Content 2', 'UserID2','ChannelID2','TimeStamp2');"; 

        db.run(insertMsgSql);

        /*******************Bhavin's Code *****************************/
        /*******************Updated by Joseph**************************/

         var createUsersTableSql = "CREATE TABLE IF NOT EXISTS USERS " +
                       "(USERID         CHAR(25)        			 NOT NULL," +
                       " NAME           CHAR(50)                    NOT NULL, " + 
					   " PASSWORD       CHAR(10)                    NOT NULL, " + 
					   " EMAIL          CHAR(10)              	   	NOT NULL, " + 
                       " Type      		CHAR(50)                    NOT NULL)"; 
         console.log("Created Users Table")
     
         
         var createTeamUsersTableSql = "CREATE TABLE IF NOT EXISTS TEAMUSERS " +
                       "(TEAMUSERID     CHAR(25)      	 			 NOT NULL," +
                       " USERID          CHAR(50)                    NOT NULL, " + 
					  " TEAMID     		CHAR(50)                    NOT NULL)"; 
          
         console.log("Created TeamUsers Table")
         
         
        var createChannelsTableSql = "CREATE TABLE IF NOT EXISTS CHANNELS " +
                    "(CHANNELID       	CHAR(10)    NOT NULL," +
                    "NAME        		CHAR(25)    NOT NULL," +     
                    "TEAMID         	CHAR(140)   NOT NULL," +                     
					 "TYPE      		CHAR(50)    NOT NULL," + 
					 "DESCRIPTION       CHAR(1000)  NOT NULL," +
					 "USERID              CHAR(25)  NOT NULL)"; 
         
         console.log("Created Channels Table")
         
        db.run(createUsersTableSql);
        db.run(createTeamUsersTableSql);
        db.run(createChannelsTableSql);

        
        var insertUsersSql = "INSERT INTO USERS (USERID, NAME, PASSWORD,EMAIL, TYPE) " +
            "VALUES ('UserID1',   'User Name 1',      'pw1', 'email1@gmail.com','PRIVATE')," +
                   "('UserID2',   'User Name 2',      'pw2', 'email2@gmail.com','PUBLIC')," +
                   "('UserID3',   'User Name 3',      'pw3', 'email3@gmail.com','PRIVATE')," +
                   "('UserID4',   'User Name 4',      'pw4', 'email4@gmail.com','PRIVATE')," +
                   "('UserID5',   'User Name 5',      'pw5', 'email5@gmail.com','PRIVATE')"; 
        console.log("Inserted data in  usersTable")
        
       var insertTEAMUSERSSql = "INSERT INTO TEAMUSERS (TEAMUSERID, USERID, TEAMID) " +
            "VALUES ('TeamUserID1',  'UserID1','TeamID1')," +
                   "('TeamUserID2',  'UserID2','TeamID2')," +
                   "('TeamUserID3',  'UserID3','TeamID3')," +
                   "('TeamUserID4',  'UserID4','TeamID4')," +
                   "('TeamUserID5',  'UserID5','TeamID5')"; 
        console.log("Inserted data in  usersTable")
        
   var insertChannelsSql = "INSERT INTO CHANNELS (CHANNELID,NAME, TEAMID,  TYPE,Description, USERID) " +
           "VALUES ('ChannelID1',	'Channel Name 1', 'TeamID1', 'PUBLIC', 'Description 1', 'UserID1')," +
                  "('ChannelID2',	'Channel Name 2', 'TeamID2', 'PUBLIC', 'Description 2', 'UserID2')," +
                  "('ChannelID3',	'Channel Name 3', 'TeamID3', 'PUBLIC', 'Description 3', 'UserID3')," +
                  "('ChannelID4',	'Channel Name 4', 'TeamID4', 'PUBLIC', 'Description 4', 'UserID4')," +
                  "('ChannelID5',	'Channel Name 5', 'TeamID5', 'PUBLIC', 'Description 5',	'UserID5')";
                
     
        db.run(insertUsersSql);
        db.run(insertTEAMUSERSSql);
        db.run(insertChannelsSql);   

   });
}
db.close;
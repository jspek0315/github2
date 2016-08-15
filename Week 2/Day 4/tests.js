
var assert = require('assert');
var db = require('./db.js');
var sqlite3 = require('sqlite3').verbose();

describe('Db module',()=> {
    /*
    var conn = db.connection('test.db');
    before(() => {
        conn.transact();
    });

    after(()=> {
        conn.rollback();
    });
    */
    it('given team name, return all channel names of that team',()=> {
        var con = new sqlite3.Database('slackclone.db');
        var teamName = "JOE";
        var expected = ['j'];
        var actual = db.getChannles(con,teamName);
        con.close;
        //assert(actual,expected);
        assert(expected,actual);
        
    });
});

/*
    before(() => {
        conn = {
            insert: function(){

            },
            select: function(){

            }
        }
    });
    */
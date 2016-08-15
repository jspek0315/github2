/*

    Table Team:
        ID
        Name

    Table Users:
        ID  
        Name
        Password
        Email

    Table TeamUsers:
        ID
        UserID FK
        TeamID FK

    Table Channels:
        ID
        Name
        TeamID FK
        Description
        Type // Team vs Private
        Users
        

    Table Messages:
        ID
        Content
        UserID FK //Author
        ChannelID FK
        TimeStamp
*/

function getChannles(con,teamName)
{
    var resultArr = []
    con.each("SELECT User FROM CHANNELS where NAME = '" + teamName + "';", 
        function(err, row) 
        {
                resultArr.push(row.User);
        }
    );

    return resultArr;
}


exports.getChannles = getChannles; 


function getChannelMessages(con,teamName)
{
    var resultArr = []
    con.each("SELECT User FROM CHANNELS where NAME = '" + teamName + "';", 
        function(err, row) 
        {
                resultArr.push(row.User);
        }
    );

    return resultArr;
}


exports.getChannles = getChannles; 
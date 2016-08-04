package week1Day4b;

import java.io.IOException;
import java.util.ArrayList;

public class UniversalWriter
{
    Writer myWriter; 
    ArrayList<String> sortedList;
    
    public UniversalWriter(Writer myWriter,ArrayList<String> sortedList)
    {
        this.myWriter = myWriter;
        this.sortedList = sortedList;
    }
    
    public void writeToFile() throws IOException
    {
        
        for (String string : sortedList)
        {
            myWriter.write(string);
        }
        
        myWriter.close();
    }
}



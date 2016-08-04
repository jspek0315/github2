package week1Day4;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Collections;

public class ProgramDriver
{

    public static void main(String[] args)
    {
        // The name of the file to open.
        String fileName = "MyFile.txt";
        ArrayList<String> sortedList = new ArrayList<>();

        // This will reference one line at a time
        String line = null;

        try
        {
            // FileReader reads text files in the default encoding.
            FileReader fileReader = new FileReader(fileName);

            // Always wrap FileReader in BufferedReader.
            BufferedReader bufferedReader = new BufferedReader(fileReader);

            while ((line = bufferedReader.readLine()) != null)
            {
                // System.out.println(line);
                sortedList.add(line);
            }

            // Always close files.
            bufferedReader.close();
            Collections.sort(sortedList);

            LocalWritter myWritter = new LocalWritter(new UpperWriter("outFile.txt"),sortedList);
            myWritter.writeToFile();


            //writer.close();
        } catch (FileNotFoundException ex)
        {
            System.out.println("Unable to open file '" + fileName + "'");
        } catch (IOException ex)
        {
            System.out.println("Error reading file '" + fileName + "'");
        }
    }

}

interface Writer
{
    void write(String s) throws IOException;

    void close() throws IOException;
}

class UpperWriter implements Writer
{
    private String path; 
    private PrintWriter writer;
    
    public UpperWriter(String path) throws FileNotFoundException, UnsupportedEncodingException
    {
        writer = new PrintWriter(path, "UTF-8");
        this.path = path;
        // open file
    }

    public void write(String s) throws IOException
    {
        writer.println(s.toUpperCase());
    }

    public void close() throws IOException
    {
        writer.close();
    }
}

class LocalWritter
{
    Writer myWriter; 
    ArrayList<String> sortedList;
    
    public LocalWritter(Writer myWriter,ArrayList<String> sortedList)
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

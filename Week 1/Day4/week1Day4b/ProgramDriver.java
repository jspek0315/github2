package week1Day4b;

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

            UpperWriter writer1 = new UpperWriter("outFile.txt");
            
            UniversalWriter myWritter = new UniversalWriter(writer1,sortedList);
            
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


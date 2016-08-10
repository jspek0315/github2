package week1Day4b;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;

public class UpperWriter implements Writer
{
    private String path; 
    private PrintWriter writer;
    
    public UpperWriter(String path) throws FileNotFoundException, UnsupportedEncodingException
    {
        writer = new PrintWriter(path, "UTF-8");
        this.path = path;
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

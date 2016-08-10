package week1.Day4.Jetty;

import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Server;

public class ProgramDriver
{

    public static void main(String[] args)
    {
        Server server = new Server(8080);
        server.setHandler( new HelloHandler());
        try
        {
            server.start();
        } catch (Exception e)
        {
            e.printStackTrace();
        }
        try
        {
            server.join();
        } catch (InterruptedException e)
        {
            e.printStackTrace();
        }

    }

}

package week1.Day4.Jetty;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.handler.AbstractHandler;


public class HelloHandler extends AbstractHandler
{
    @Override
    public void handle(String target, Request baseRequest, HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException
    {
        response.setContentType("text/html;charset=utf-8");
        response.setStatus(HttpServletResponse.SC_OK);
        baseRequest.setHandled(true);
        response.getWriter().println("<h1>Hello World</h1>");
        
        System.out.println("Target: " + target);
        System.out.println("Base Request: " + baseRequest.toString());
        System.out.println("Servlet Request: " + request.toString());
        System.out.println("Servlet Response: " + response.toString());
    }

}

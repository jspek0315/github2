package threads;

import java.util.Random;

public class PrintTask implements Runnable
{

    private final int sleepTime;
    private final String taskName;
    private final static Random generator = new Random();
    
    public PrintTask(String name)
    {
        this.taskName = name;
        this.sleepTime = generator.nextInt(5000);
    }
    
    @Override
    public void run()
    {
       try
        {
          System.out.println(taskName + " going to sleep for " + sleepTime + " milliseconds.");  
          Thread.sleep(sleepTime);
        } catch (InterruptedException e)
        {
            System.out.println(taskName + " terminated early");
        }
        
       System.out.println(taskName + " done sleeping.");
    }
    
    

}

package threads;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadCreator
{

    public static void main(String[] args)
    {
        /*****************
         * Manage Threads with and Executor
         */
        PrintTask task1 = new PrintTask("Task1");
        PrintTask task2 = new PrintTask("Task2");
        PrintTask task3 = new PrintTask("Task3");
        PrintTask task4 = new PrintTask("Task4");
        
        System.out.println("Starting Executor");
        ExecutorService threadExecutor = Executors.newCachedThreadPool() ;    
        
        threadExecutor.execute(task1);
        threadExecutor.execute(task2);
        threadExecutor.execute(task3);
        threadExecutor.execute(task4);
        threadExecutor.shutdown();
        
        System.out.println("Finshed Main");
        
        /********************************************
         * Manually Create Thread
        System.out.println("Creating threads");
        
        Thread thread1 = new Thread(new PrintTask("Task1"));
        Thread thread2 = new Thread(new PrintTask("Task2"));
        Thread thread3 = new Thread(new PrintTask("Task3"));
        Thread thread4 = new Thread(new PrintTask("Task4"));
        
        System.out.println("Threads created, starting tasks. ");
        thread1.start();
        thread2.start();
        thread3.start();
        thread4.start();
        
        System.out.println("Tasks started, main ends.");
        *********************************************/
    }
}

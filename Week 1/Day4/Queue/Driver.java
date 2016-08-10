package linkedList;

public class Driver
{

    public static void main(String[] args)
    {
        QueueLinkList myList = new QueueLinkList();
        myList.push("One");
        myList.push("Two");
        myList.push("Three");
        myList.push("Four");
        
        System.out.println(myList.pop());
        System.out.println(myList.pop());
        System.out.println(myList.pop());
        System.out.println(myList.pop());
        
        try
        {
            myList.pop();
        } catch (Exception e)
        {
            System.out.println("Can't Queue");
        }

        
        myList = null; 
    }

}

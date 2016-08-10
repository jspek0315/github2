package linkedList;

public class QueueLinkList
{
    Node head; 
    
    public QueueLinkList()
    {
        head = null;
    }
    
    public void push(String data)
    {
        if(head == null)
        {
            head = new Node(data);
        }
        else
        {
            Node current = head;
            
            //Get to the last value in linked list
            while (current.getNext() != null)
            {
               current = current.getNext();
            }
            
            current.setNext(new Node(data));
        }
    }
    
    public String pop() throws IllegalAccessError
    {
        String returnVal = "";
        
        if(head != null)
        {
            returnVal = head.getData();
            Node nextNode = head.getNext();
            head = null; 
            head = nextNode;
        }
        else
        {
            throw new IllegalAccessError("Can't pop empty queue");
        }
        
        return returnVal;
    }
    
    
    
}

package linkedList;

public class QueueLinkList<T>
{
    Node<T> head; 
    
    public QueueLinkList()
    {
        head = null;
    }
    
    public void push(T data)
    {
        if(head == null)
        {
            head = new Node<T>(data);
        }
        else
        {
            Node<T> current = head;
            
            //Get to the last value in linked list
            while (current.getNext() != null)
            {
               current = current.getNext();
            }
            
            current.setNext(new Node<T>(data));
        }
    }
    
    public T pop() throws IllegalAccessError
    {
        T returnVal = null;
        
        if(head != null)
        {
            returnVal = head.getData();
            Node<T> nextNode = head.getNext();
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

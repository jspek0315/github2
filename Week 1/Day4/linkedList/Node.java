package linkedList;

public class Node<T>
{
    private T data;
    private Node<T> next;
    
    public Node()
    {
        this(null,null);
    }
    
    public Node(Node<T> next)
    {
        this(null,next);
    }
    
    public Node(T data)
    {
        this(data,null);
    }
    
    /**
     * @param data
     * @param next
     */
    public Node(T data, Node<T> next)
    {
        this.data = data;
        this.next = next;
    }
    
    public T getData()
    {
        return data;
    }
    public void setData(T data)
    {
        this.data = data;
    }
    public Node<T> getNext()
    {
        return next;
    }
    public void setNext(Node<T> next)
    {
        this.next = next;
    }
    
    
}



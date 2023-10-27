// Isha Hosur FYMCA(A) 2201055 Singly Linked List
class Node 
{
  constructor(data, next)
  {
    this.data=data;
    this.next=next;
  }
}
class LinkedList
{
  costructor()
  {
    this.head=null;
  }
  create(data)
  {
    const newNode=new Node(data);
    if(this.head==null)
    {
      this.head=newNode;
    }
    else
    {
      let current=this.head;
    while(current.next!=null)
    {
      current=current.next;
    }
    current.next=newNode;
    }
  }
  display()
  {
    if(this.head==null)
      console.log("List is empty");
    else
    {
      let current=this.head;
      while(current!=null)
      {
        console.log(current.data);
        current=current.next;
      }
    }
  }
  insertFront(data)
  {
    let newNode=new Node(data);
    newNode.next=this.head;
    this.head=newNode;
  }
  insertEnd(data)
  {
    let newNode=new Node(data);
    let l=this.head;
    while(l.next!=null)
    {
      l=l.next;
    }
    l.next=newNode;
    newNode.next=null;
  }
  insertBetween(data,pos)
  {
    let newNode=new Node(data);
    let l=this.head;
    for(let i=1;i<pos-1 && l.next!=null;i++)
    l=l.next;
    newNode.next=l.next;
    l.next=newNode;
  }
  deleteFront()
  {
    console.log("The elements that are deleted are: ", this.head.data);
    this.head=this.head.next;
  }
  deleteEnd()
  {
    let p=this.head;
    while(p.next!=null)
    {
      var q=p;
      p=q.next;
    }
    q.next=null;
    console.log("The deleted elements are: ", p.data);
  }
  deleteBetween(pos)
  {
    let p=this.head;
    for(let i=1; i<pos && p!=null; i++)
    {
      var q=p;
      p=q.next;
    }
    q.next=p.next;
  }
  rev()
  {
    var p=null,q=null,r=this.head;
    while(r!=null)
    {
      p=q;
      q=r;
      r=r.next;
      q.next=p;
      this.head=q;
    }
  }
}
const list=new LinkedList();
list.create(10);
list.create(20);
list.create(30);
list.create(40);
console.log("The elements is the linked list are: ");
list.display();
console.log("The elements after insertion at front are: ");
list.insertFront(100);
list.display();
console.log("The elements after insertion at end are: ");
list.insertEnd(200);
list.display();
console.log("The elements after insertion in between are: ");
list.insertBetween(300, 3);
list.display();
console.log("The elements after deletion from front are: ");
list.deleteFront();
list.display();
console.log("The elements after deletion from end are: ");
list.deleteEnd();
list.display();
console.log("The elements after deletion from between are: ");
list.deleteBetween(2);
list.display();
list.rev();
console.log("The elements after reversing are: ");
list.display();

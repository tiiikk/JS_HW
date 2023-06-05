// Another fundamental data structure is the queue.
//     It is a close “cousin” of the stack, but a queue is a collection of objects that are inserted and removed according to the first-in,
// first-out (FIFO) principle. That is, elements can be inserted at any time,
//     but only the element that has been in the queue the longest can be next removed.
//     We usually say that elements enter a queue at the back and are removed from the front.
//     A metaphor for this terminology is a line of people waiting to get on an amusement park ride.
//     People waiting for such a ride enter at the back of the line and get on the ride from the front of the line.
//     So implement Queue type, which has
// enqueue(e): Adds element e to the back of queue.
// dequeue( ): Removes and returns the first element from the queue(or null if the queue is empty).
// first( ): Returns the first element of the queue, without removing it (or null if the queue is empty).
// size( ): Returns the number of elements in the queue.
// isEmpty( ): Returns a boolean indicating whether the queue is empty.


function Node (value){
    this.value = value;
    this.next = undefined;
    this.previous = undefined;

}

function Queue(value){
    this.value = new Node(value);
    this.head = this.value;
    this.tail = this.value;
    this.length = 1;

    this.enqueue = function (e){
        let newValue = new Node(e);
        newValue.next = this.head;
        this.head.previous = newValue;
        this.head = newValue;
        this.length += 1;


    };

    this.dequeue = function (){
        if (this.length === 0) {
            return null;
        }
        const removedValue = this.head.value;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;

        }
        this.length -= 1;
        return `removed element: ${removedValue}`
    };

    this.first = function (){
        if(this.length >= 1){
            console.log( this.head.value)
        }else{
            console.log(null)
        }
    };

    this.size = function (){
        console.log(this.length)
    }


    this.printQueue = function (){
        let iterator = this.head
        while (iterator){
            console.log(iterator.value);
            iterator = iterator.next;
        }
    }
    this.isEmpty = function (){
        if(this.length >=1){
            console.log(false);
        }
        console.log(true)
    }

}

let elem = new Queue(1);

elem.enqueue(2)
elem.enqueue(3)
elem.printQueue()
elem.first()
elem.size()

elem.dequeue()
elem.dequeue()
elem.dequeue()
elem.isEmpty()


// Priority queue is a collection of prioritized elements that allows arbitrary element insertion,
//     and allows the removal of the element that has first priority. When an element is added to a priority queue,
//     the user designates its priority by providing an associated key.
//     The element with the minimal key will be the next to be removed from the queue
// (thus, an element with key 1 will be given priority over an element with key 2).
// Although it is quite common for priorities to be expressed numerically,
//     any Java object may be used as a key, as long as there exists means to compare any two instances a and b,
// in a way that defines a natural order of the keys.
//     So implement PriorityQueue type, which has
// insert(k, v): Creates an entry with key k and value v in the priority queue.
// min( ): Returns (but does not remove) a priority queue entry (k,v) having minimal key; returns null if the priority queue is empty.
// removeMin( ): Removes and returns an entry (k,v) having minimal key from the priority queue; returns null if the priority queue is empty.
// size( ): Returns the number of entries in the priority queue.




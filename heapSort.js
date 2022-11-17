/**
 * Creating a max heap
 * Time complexity is O(log(n))
 */

class MaxHeap {
  constructor() {
    // storing the heap elements
    this.value = [];
  }

  // finding parent of the element at index
  // O(1)
  parent(index) {
    return Math.floor((index + 1) / 2);
  }

  // index of the left child ndoe
  // O(1)
  leftChild(index) {
    return 2 * index + 1;
  }

  // index of right child
  // O(1)
  rightChild(index) {
    return 2 * index + 2;
  }

  // checking if current node is a leaf node
  // leaf node means , that doesn;t have any child nodes
  // number of leaves is (number of nodes+1)/2
  // O(1)
  isLeafNode(index) {
    return (
      index >= Math.floor(this.value.length / 2) &&
      index <= this.value.length - 1
    );
  }

  // swap two element at particular index
  swap(index1, index2) {
    [this.value[index1], this.value[index2]] = [
      this.value[index2],
      this.value[index1],
    ];
  }

  // adding element to heao
  addNode(node) {
    // add an element to the end of the heap
    this.value.push(node);

    // move element up until it reaches the correct position
    this.heapifyUp(this.value.length - 1);
  }

  // heapifyUp function to put the last element at correct postition
  // O(n)
  heapifyUp(index) {
    // fetch current index
    let currentIndex = index;
    // parent element index
    let parentIndex = this.parent(currentIndex);
    console.log({ currentIndex, parentIndex });
    // once we have to parent index we do the comparision
    while (
      parentIndex >= 0 &&
      currentIndex > 0 &&
      this.value[currentIndex] > this.value[parentIndex]
    ) {
      // if the current index is > 0 and current child is greater than the parent element , we need to swap them
      this.swap(currentIndex, parentIndex);

      // move up the binary heap
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
      console.log({ parentIndex, currentIndex });
    }
  }

  // using this technique to place the element down to its right position while
  // comparing with its childrens
  // O(n)
  heapifyDown(index) {
    // checking it this is not a leaf node
    if (!this.isLeafNode(0)) {
      // get left node
      let leftChildIndex = this.leftChild(index);

      // right child node
      let rightChildNode = this.rightChild(index);

      // let the largest be our index
      let largestIndex = index;

      // if left child is greater than parent
      if (this.value[leftChildIndex] > this.value[largestIndex]) {
        largestIndex = leftChildIndex;
      }

      // if right child is greater than parent
      if (this.value[rightChildNode] > this.value[largestIndex]) {
        largestIndex = rightChildNode;
      }

      // swap if parent is less than left or right child
      if (largestIndex != index) {
        // swap
        this.swap(index, largestIndex);
        this.heapifyDown(largestIndex);
      }
    }
  }

  // extract Maximum element from the heap
  // in heap, maximum element is the root node or the first element
  extractMax() {
    // checking for empty heap
    if (!this.value.length) return;

    // getting max value
    const max = this.value[0];
    // in heap the min value will replace the extracted element and the last element in the array will become the root and we need to
    //  do the heapify down
    const min = this.value.pop();

    // assining the last elemet as root
    this.value[0] = min;

    // heapifyDown
    this.heapifyDown(0);

    return max;
  }

  // if we need to build an heap from an array
  buildHeap(array) {
    this.value = array;
    for (let i = Math.floor(this.value.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  // find the peek of the heap
  peek() {
    return this.value[0];
  }

  // printing the max heap
  printheap() {
    let i = 0;
    if (!this.value.length) {
      return [];
    }
    while (!this.isLeafNode(this.value[i])) {
      console.log("PARENT:", this.value[i]);
      console.log("LEFT CHILD:", this.value[this.leftChild(i)]);
      console.log("RIGHT CHILD:", this.value[this.rightChild(i)]);
      i++;
    }
  }
}

let heap = new MaxHeap();
heap.buildHeap([12, 23, 5, 56, 34, 567, 87, 45, 3, 56, 7, 34, 7]);
heap.printheap();
console.log(heap.extractMax());
console.log(heap.extractMax());

console.log(heap.extractMax());

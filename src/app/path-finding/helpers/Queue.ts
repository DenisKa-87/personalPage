import { IStack } from "./IStack";
export class Queue<T> implements IStack<T> {
 
  private storage: T[] = [];
  frontIndex = 0;
  backIndex = 0
  length = 0;

  size(): number {
   // console.log(this.length)
    return this.length
  }
  push(item: T) {
    //console.log("Push!!!")
    this.storage[this.backIndex] = item
    this.backIndex++
    this.length++;
    
  }
  pop() {
    if(this.length === 0)
      return null;

    const item = this.storage[this.frontIndex]
    delete this.storage[this.frontIndex]
    this.frontIndex++
    this.length--
    return item
  }
  peek() {
    return this.storage[this.frontIndex]
  }

  
}
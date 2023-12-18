import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Field } from './models/Field';
import { add } from 'ngx-bootstrap/chronos';
import { delay, max, min } from 'rxjs';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {


  ngOnInit(): void {
    this.field = new Field;
  }

  changeType(value): void {
    this.type = value;
  }
  changeDelay(value):void{
    this.delay = value;
    console.log('delay: ' + this.delay)
  }

  field: Field;
  arraylength = 50;
  array = this.randomizeArray(this.arraylength);
  minInd = 0;

  // currentColumn = 0;
  // columnToSwap = 1;
  type = "bubble"
  delay = 100;

  createRange(arg0: number): any {
    return Array(arg0)
  }

  randomizeArray(length: number) {
    var array = new Array(length);
    var added = new Set()
    for (var i = 0; i < array.length; i++) {
      while (true) {
        var rnd = Math.floor(Math.random() * array.length) + 1
        if (!added.has(rnd))
          break;
      }
      array[i] = rnd;
      added.add(rnd);
      //console.log(rnd);
    }
    return array;
  }
  shuffle() {
    this.array = this.randomizeArray(this.arraylength)
  }

  sort(type: string) {
    switch (type) {
      case "selection": {
        this.selectionSort(this.array)
        break;
      }
      case "bubble": {
        this.bubbleSort(this.array)
        break;
      }
      // case "merge": {
      //   //this.array = 
      //   this.mergeSort(this.array,this.array.slice(), 0, 0)
      //   break;
      // }
    }

  }

  selectionSort(array: number[]) {
    
    for (let i = 0; i < array.length - 1; i++) {
      setTimeout(() => {
        this.minInd = i;
        for (let j = i + 1; j < array.length; j++) {
          if (array[this.minInd] > array[j]) {
            this.minInd = j;
          }
        }
        var tmp = array[i];
        array[i] = array[this.minInd];
        array[this.minInd] = tmp;
      }, this.delay * i)
    }
  }

  bubbleSort(array: number[]) {
    console.log('bubble sort')
    console.log(array)
    var changesMade = false
    for (let i = 0; i < array.length; i++) {
      //var changesMade = false
      console.log(changesMade)
      setTimeout(() => {
        for (let j = 0; j < array.length - i - 1; j++) {
          setTimeout(() => {
          if (array[j] > array[j + 1]) {

            var tmp = array[j + 1]
            array[j + 1] = array[j]
            array[j] = tmp
            
          }
          changesMade = true;
        }, this.delay * i + this.delay*j/(array.length - i - 1));
          //if (!changesMade)
            //break;
        }

      }, this.delay * i);
    }
  }

  //     need to solve animation problems //

  // mergeSort(initialArray: number[], array: number[], startInd: number, iteration: number) {
  //   if (array.length === 1)
  //     return array;
  //   var middle = Math.floor(array.length / 2);
  //   var arr1 = array.slice(0, middle)
  //   var arr2 = array.slice(middle)
  //   arr1 = this.mergeSort(initialArray, arr1, startInd, iteration += 1);
  //   arr2 = this.mergeSort(initialArray, arr2, startInd+middle, iteration += 1);
  //   array = this.merge(arr1, startInd, arr2, initialArray, iteration);  
  //   for(let i = startInd; i < array.length; i++){
  //     setTimeout(() => {
  //       initialArray[i] = array[i - startInd]
  //      // console.log('swapping')
  //     }, 
  //     (this.delay*i + iteration*this.delay));      
  //   }
  //   return array;
  // }
  

   merge(arr1: number[], start1: number, arr2: number[], initialArray, iteration: number) {
    var i = 0;
    var j = 0;
    var b = 0;
    var result = Array(arr1.length + arr2.length);
    while (b < result.length) {
      if (i == arr1.length) {
        while (j < arr2.length) {
          result[b] = arr2[j];
          j++;
          b++;

        }
        break;
      }
      if (j == arr2.length) {
        while (i < arr1.length) {
          result[b] = arr1[i];
          i++;
          b++;
        }
        break;
      }
      if (arr1[i] < arr2[j]) {
        result[b] = arr1[i];
        i++;
      }
      else {
        result[b] = arr2[j];
        j++;
      }
      b++;
    }
    return result;
  }
}



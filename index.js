class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items = this.items.concat(item).sort((a, b) => {return a - b;});
    this.length = this.items.length;
  }

  get(pos) {
    
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');;
    }
  }

  max() {
    if (this.items.length>0){
      return Math.max(...this.items)
    }else{
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length>0){
      return Math.min(...this.items)
    }else{
      throw new Error('EmptySortedList');
    }
  }

  sum() {
     return this.items.reduce((a, b)=> a + b, 0)
    
  }

  avg() {
    if(this.items.length>0){
      return (this.items.reduce((a, b)=> a + b, 0))/this.items.length;
    }else{
      throw new Exception('EmptySortedList'); 
    }
  }
}



module.exports = SortedList;

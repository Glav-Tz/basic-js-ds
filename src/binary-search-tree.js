const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  
  constructor () {
    this.arrData = [],
    this.newObj = {
      data: 0
    };    
  }
  
  root() {    
    if (this.arrData.length === 0) {      
      return null
    }   
    this.newObj.data = this.arrData[0]    
    return this.newObj 
  }

  add(data) {
    this.arrData.push(data)
  }

  has(data) {
    let element = this.arrData.indexOf(data);
    if (element !== -1) {      
      return true
    } else {      
      return false
    }
  }

  find(data) {
    let element = this.arrData.indexOf(data);
     if (element !== -1) {      
      this.newObj.data = this.arrData[element]       
      return this.newObj
    } else {      
      return null
    }
  }

  remove(data) {
    let element = this.arrData.indexOf(data);
    if (element !== -1); {
      this.arrData.splice(element, 1);
    } 
  }

  min() {
    if (this.arrData.length === 0) {
      return null
    }
    let newArr = []
    newArr = this.arrData.slice();
    newArr.sort(function(a, b) {
      return a - b;
    });    
    return newArr[0] 
  }

  max() {
    if (this.arrData.length === 0) {
      return null
    }
    let newArr = []
    newArr = this.arrData.slice();
    newArr.sort(function(a, b) {
      return a - b;
    });    
    return newArr[newArr.length - 1] 
  }
}

module.exports = {
  BinarySearchTree
};
// Code your solution here
/* eslint-disable no-unused-vars, no-prototype-builtins */
const bookPrototype = {
    getInfo: function () {
      return this.title + " by " + this.author;
    },
    getPrice: function () {
        return this.price;
    },
    addRating: function(stars) {
       this.rating.push(stars) 
    },
    getRating: function(){
        let count = 0
        for (let i of this.rating){
            for (let x in i){
                count += 1;
            }
        }
        return count / this.rating.length;
    }
  };

function createBook(id, title, author, price) {

    const bookInstance = Object.create(bookPrototype);

    bookInstance.id = id;
    bookInstance.title = title;
    bookInstance.author = author;
    bookInstance.price = price;
    bookInstance.rating = [];

    return bookInstance;

  }

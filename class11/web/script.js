//write your student id, firstname, and lastname here
// 64130500017 - Naronkrach Tanajarusawas
class BookMark {
  //code here
  constructor(isbn, totalPages = 0) {
    this.isbn = isbn;
    this.totalPages = totalPages;
    this.bookMarks = [];
  }

  addBookMark(pageNumber) {
    pageNumber > this.totalPages ||
    pageNumber < 1 ||
    this.bookMarks.some((item) => item === pageNumber)
      ? null
      : this.bookMarks.push(pageNumber);
    return this.bookMarks.length;
  }

  removeBookMark = (pageNumber) => {
    let index = this.bookMarks.findIndex((item) => item === pageNumber);
    if (index === -1) return undefined;
    return this.bookMarks.splice(index, 1)[0];
  };

  goToFirstBookMark = () => this.bookMarks[0] || undefined;

  goToLastBookMark = () =>
    this.bookMarks[this.bookMarks.length - 1] || undefined;

  getBookMarks = () => this.bookMarks;
}

// const bookMark = new BookMark("1234567890", 100);
// console.log(bookMark.addBookMark(10));
// console.log(bookMark.getBookMarks())

export default BookMark;

function pageDTO(page, cnt){
  this.page = page;
  this.realEnd = Math.ceil(cnt / 5);
  this.endPage = Math.ceil(page / 5) * 5;
  this.startPage = this.endPage - 4;
  this.endPage = this.endPage > this.realEnd ? this.realEnd : this.endPage;
  this.prev = this.startPage > 1;
  this.next = this.endPage < this.realEnd;
}

module.exports = pageDTO;
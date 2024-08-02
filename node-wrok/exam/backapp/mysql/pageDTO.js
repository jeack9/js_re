function pageDTO(page, cnt) {
  this.page = page;
  this.realEnd = Math.ceil(cnt / 10);
  this.endPage = Math.ceil(page / 10) * 10;
  this.startPage = this.endPage - 9;
  this.endPage = this.endPage > this.realEnd ? this.realEnd : this.endPage;
  this.prev = this.startPage > 1;
  this.next = this.endPage < this.realEnd;
}

module.exports = pageDTO;

function fieldSet(obj){
  for (key in obj){
    $(`#${key}`).val(obj[key]);
  }
}
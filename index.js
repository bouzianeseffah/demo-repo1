let timeOutId;
function startTimer (){
  timeOutId = setTimeout(() => window.alert('hello'), 3000);
  console.log('STARTED')
}
function cleartTimer (){
  clearTimeout(timeOutId);
  console.log('CLEARED')
}
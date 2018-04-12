var katzDeliLine = [];
//katzDeliLine is an array that contains current list of people
//name is the new person's name to add to the list
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  for(var i = 0; i < katzDeliLine.length; i++){
    console.log(`Welcome ${name}. You are number ${katzDeliLine.indexOf(name)+1}`);
  }
  
  
}
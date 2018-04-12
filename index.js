var katzDeliLine = [];
//katzDeliLine is an array that contains current list of people
//name is the new person's name to add to the list
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`);
  
  
  
}
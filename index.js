var katzDeliLine = [];

//katzDeliLine is an array that contains current list of people
//name is the new person's name to add to the list

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
}

function nowServing(katzDeliLine){
    if(katzDeliLine.length === 0){
      return `There is nobody waiting to be served!`;
    }
    else{
      return `Currently serving ${katzDeliLine.shift()}.`;
    }
  
}

function currentLine(katzDeliLine){
  var temp = [];
  var val = [];
  if(katzDeliLine.length === 0){
    return `The line is currently empty.`;
  }
  else{
   for(var i = 0; i < katzDeliLine.length; i++){
      val.push(`${katzDeliLine.indexOf(i)+1}. `); //push the numbers into an array
      temp.push(katzDeliLine[i]); //push the names into an array
      
      
    }
   
   
  }
}
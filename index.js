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
  var list = {};
  if(katzDeliLine.length === 0){
    return `The line is currently empty.`;
  }
  else{
   //return {[index of name]+1}. {[name]}
  }
}
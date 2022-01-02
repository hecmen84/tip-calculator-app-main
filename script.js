const radio = document.getElementsByName('tip');
radio.forEach((item) =>{
  item.addEventListener('click', () => {
    const bill = parseFloat(document.getElementById('bill').value);
    const people = parseFloat(document.getElementById('people').value);
    const theTip =  tip(bill, item.value,people);
    const theCalc = calculateSplit(bill, theTip, people);
    const tipPerP = tipPerPeson(theTip, people);
    const displayTip = document.getElementById('displayTip');
    const displayTotal = document.getElementById('displayTotal');
    displayTip.textContent = `$ ${tipPerP}`;
    displayTotal.textContent = `$ ${theCalc}`;

  })
})

const tip = (bill, tip, people)=>{
  return (bill*(tip/100));
}

const calculateSplit = (bill, tip, people)=>{
  return (bill+tip) / people;
}

const tipPerPeson = (tip, people)=>{
  return tip / people;
} 
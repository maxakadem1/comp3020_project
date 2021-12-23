
//Set spending goal range default values to 0 and 0

function fetchFields()
{
  var currSpendingData = JSON.parse(localStorage.getItem('spendingData'))

  if(localStorage.getItem('spendingStartWeekSaved') == null){
    localStorage.setItem('spendingStartWeekSaved',currSpendingData.length)
  }

  if(localStorage.getItem('spendingSpanSaved') == null){
    localStorage.setItem('spendingSpanSaved',0)
  }

  if(localStorage.getItem('spendingGoalNumberSaved') == null){
    localStorage.setItem('spendingGoalNumberSaved',1)
  }

  //Set playtime goal range default values to 0 and 0
  if(localStorage.getItem('ptStartWeekSaved') == null){
    localStorage.setItem('ptStartWeekSaved',0)
  }

  if(localStorage.getItem('ptSpanSaved') == null){
    localStorage.setItem('ptSpanSaved',0)
  }

  if(localStorage.getItem('ptGoalNumberSaved') == null){
    localStorage.setItem('ptGoalNumberSaved',1)
  }

  //If there is a spending goal range saved, retrieve it
  if(localStorage.getItem('spendingStartWeekSaved') != null){
    document.getElementById('spendingStartWeek').value = JSON.parse(localStorage.getItem('spendingStartWeekSaved'))
  }

  if(localStorage.getItem('spendingSpanSaved') != null){
    document.getElementById('spendingSpan').value = JSON.parse(localStorage.getItem('spendingSpanSaved'))
  }

  if(localStorage.getItem('spendingGoalNumberSaved') != null){
    document.getElementById('spendingGoalNumber').value = JSON.parse(localStorage.getItem('spendingGoalNumberSaved'))
  }

  //If there is a playtime goal range saved, retrieve it
  if(localStorage.getItem('ptStartWeekSaved') != null){
    document.getElementById('ptStartWeek').value = JSON.parse(localStorage.getItem('ptStartWeekSaved'))
  }

  if(localStorage.getItem('ptSpanSaved') != null){
    document.getElementById('ptSpan').value = JSON.parse(localStorage.getItem('ptSpanSaved'))
  }

  if(localStorage.getItem('ptGoalNumberSaved') != null){
    document.getElementById('ptGoalNumber').value = JSON.parse(localStorage.getItem('ptGoalNumberSaved'))
  }


  //Fill spending progress
  var spendingTotal = 0
  var spendingPeriod = JSON.parse(document.getElementById('spendingSpan').value)
  var currSpendingData = JSON.parse(localStorage.getItem('spendingData'))

  for(var i = 0; i <= spendingPeriod; i++)
  {
    if(JSON.parse(document.getElementById('spendingStartWeek').value + i <= currSpendingData.length))
    {
      spendingTotal += currSpendingData[JSON.parse(document.getElementById('spendingStartWeek').value) + i]
    }
  }
  var spendingBarPercent = (spendingTotal*1.0 / JSON.parse(document.getElementById('spendingGoalNumber').value)) * 100
  document.getElementById("spendingGoalText").innerHTML = spendingBarPercent.toFixed(2) + "%"
  document.getElementById("spendingGoalProgressBar").style.width = spendingBarPercent + "%"

  //Fill playtime progress
  var ptTotal = 0
  var ptPeriod = JSON.parse(document.getElementById('ptSpan').value) - JSON.parse(document.getElementById('ptStartWeek').value)
  var currPtData = JSON.parse(localStorage.getItem('playtimeData'))

  for(var i = 0; i < ptPeriod; i++)
  {
    ptTotal += currPtData[JSON.parse(document.getElementById('ptStartWeek').value) + i]
  }
  var ptBarPercent = (ptTotal*1.0 / document.getElementById('ptGoalNumber').value) * 100
  document.getElementById("ptGoalText").innerHTML = ptBarPercent.toFixed(2) + "%"
  document.getElementById("ptGoalProgressBar").style.width = ptBarPercent + "%"
}

//Save goal
function goalSave(){
  //If the starting and ending week are not null, ant if the starting week is less than or equal to the ending week, save
  var currSpendingData = JSON.parse(localStorage.getItem('spendingData'))
  var spendingStartValid = new Boolean(document.getElementById('spendingStartWeek') != null && document.getElementById('spendingStartWeek').value >= 0 && document.getElementById('spendingStartWeek').value < currSpendingData.length)
  var ptStartValid = document.getElementById('ptStartWeek') != null && document.getElementById('ptStartWeek').value >= 0 && document.getElementById('ptStartWeek').value < currSpendingData.length
  var spendingGoalValid = document.getElementById('spendingGoalNumber') != null && document.getElementById('spendingGoalNumber').value > 0
  var ptGoalValid = document.getElementById('ptGoalNumber') != null && document.getElementById('ptGoalNumber').value > 0
  var spendingSpanValid = document.getElementById('spendingSpan') != null && document.getElementById('spendingSpan').value >= 0
  var ptSpanValid = document.getElementById('ptSpan') != null && document.getElementById('ptSpan').value >= 0

  if(spendingStartValid && ptStartValid && spendingSpanValid && ptSpanValid){
    if(spendingGoalValid && ptGoalValid){

      localStorage.setItem('spendingStartWeekSaved',JSON.stringify(document.getElementById('spendingStartWeek').value))
      localStorage.setItem('spendingSpanSaved',JSON.stringify(document.getElementById('spendingSpan').value))
      localStorage.setItem('spendingGoalNumberSaved',JSON.stringify(document.getElementById('spendingGoalNumber').value))

      localStorage.setItem('ptStartWeekSaved',JSON.stringify(document.getElementById('ptStartWeek').value))
      localStorage.setItem('ptSpanSaved',JSON.stringify(document.getElementById('ptSpan').value))
      localStorage.setItem('ptGoalNumberSaved',JSON.stringify(document.getElementById('ptGoalNumber').value))

      document.getElementById('goalSaveMessage').innerHTML = "Goal Periods Saved"
    }
    else {
      document.getElementById('goalSaveMessage').innerHTML = "Enter Valid Goal Amount"
    }
  }
  else {
    document.getElementById('goalSaveMessage').innerHTML = "Enter Valid Goal Period"
  }

  createMessage(currSpendingData)
  fetchFields()
}

function createMessage()
{


}

function emptyFields()
{
  document.getElementById('spendingStartWeek').value = ''
  document.getElementById('spendingSpan').value = ''
  document.getElementById('spendingGoalNumber').value = ''
  document.getElementById('ptStartWeek').value = ''
  document.getElementById('ptSpan').value = ''
  document.getElementById('ptGoalNumber').value = ''
  document.getElementById('goalSaveMessage').innerHTML = ''
}

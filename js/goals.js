
//Set spending goal range default values to 0 and 0
if(localStorage.getItem('spendingStartWeekSaved') == null){
  localStorage.setItem('spendingStartWeekSaved',0)
}

if(localStorage.getItem('spendingEndWeekSaved') == null){
  localStorage.setItem('spendingEndWeekSaved',0)
}

if(localStorage.getItem('spendingGoalNumberSaved') == null){
  localStorage.setItem('spendingGoalNumberSaved',0)
}

//Set playtime goal range default values to 0 and 0
if(localStorage.getItem('ptStartWeekSaved') == null){
  localStorage.setItem('ptStartWeekSaved',0)
}

if(localStorage.getItem('ptEndWeekSaved') == null){
  localStorage.setItem('ptEndWeekSaved',0)
}

if(localStorage.getItem('ptGoalNumberSaved') == null){
  localStorage.setItem('ptGoalNumberSaved',0)
}

function fetchFields()
{
  //If there is a spending goal range saved, retrieve it
  if(localStorage.getItem('spendingStartWeekSaved') != null){
    document.getElementById('spendingStartWeek').value = JSON.parse(localStorage.getItem('spendingStartWeekSaved'))
  }

  if(localStorage.getItem('spendingEndWeekSaved') != null){
    document.getElementById('spendingEndWeek').value = JSON.parse(localStorage.getItem('spendingEndWeekSaved'))
  }

  if(localStorage.getItem('spendingGoalNumberSaved') != null){
    document.getElementById('spendingGoalNumber').value = JSON.parse(localStorage.getItem('spendingGoalNumberSaved'))
  }

  //If there is a playtime goal range saved, retrieve it
  if(localStorage.getItem('ptStartWeekSaved') != null){
    document.getElementById('ptStartWeek').value = JSON.parse(localStorage.getItem('ptStartWeekSaved'))
  }

  if(localStorage.getItem('ptEndWeekSaved') != null){
    document.getElementById('ptEndWeek').value = JSON.parse(localStorage.getItem('ptEndWeekSaved'))
  }

  if(localStorage.getItem('ptGoalNumberSaved') != null){
    document.getElementById('ptGoalNumber').value = JSON.parse(localStorage.getItem('ptGoalNumberSaved'))
  }


  //Fill spending progress
  var spendingTotal = 0
  var spendingPeriod = JSON.parse(document.getElementById('spendingEndWeek').value) - JSON.parse(document.getElementById('spendingStartWeek').value)
  var currSpendingData = JSON.parse(localStorage.getItem('spendingData'))

  for(var i = 0; i < spendingPeriod; i++)
  {
    spendingTotal += currSpendingData[JSON.parse(document.getElementById('spendingStartWeek').value) + i]
  }
  var spendingBarPercent = (spendingTotal*1.0 / JSON.parse(document.getElementById('spendingGoalNumber').value)) * 100
  document.getElementById("spendingGoalText").innerHTML = spendingBarPercent.toFixed(2) + "%"
  document.getElementById("spendingGoalProgressBar").style.width = spendingBarPercent + "%"

  //Fill playtime progress
  var ptTotal = 0
  var ptPeriod = JSON.parse(document.getElementById('ptEndWeek').value) - JSON.parse(document.getElementById('ptStartWeek').value)
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
  if(document.getElementById('ptStartWeek') != null && document.getElementById('ptEndWeek') != null && document.getElementById('spendingStartWeek') != null && document.getElementById('spendingEndWeek') != null && JSON.parse(document.getElementById('spendingStartWeek').value) <= JSON.parse(document.getElementById('spendingEndWeek').value)){
    if(document.getElementById('spendingGoalNumber') != null && document.getElementById('spendingGoalNumber').value >= 0 && document.getElementById('ptGoalNumber') != null && document.getElementById('ptGoalNumber').value >= 0){

      localStorage.setItem('spendingStartWeekSaved',JSON.stringify(document.getElementById('spendingStartWeek').value))
      localStorage.setItem('spendingEndWeekSaved',JSON.stringify(document.getElementById('spendingEndWeek').value))
      localStorage.setItem('spendingGoalNumberSaved',JSON.stringify(document.getElementById('spendingGoalNumber').value))

      localStorage.setItem('ptStartWeekSaved',JSON.stringify(document.getElementById('ptStartWeek').value))
      localStorage.setItem('ptEndWeekSaved',JSON.stringify(document.getElementById('ptEndWeek').value))
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

  fetchFields()
}

function emptyFields()
{
  document.getElementById('spendingStartWeek').value = ''
  document.getElementById('spendingEndWeek').value = ''
  document.getElementById('spendingGoalNumber').value = ''
  document.getElementById('ptStartWeek').value = ''
  document.getElementById('ptEndWeek').value = ''
  document.getElementById('ptGoalNumber').value = ''
}

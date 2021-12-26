// Playtime Default Data
const playtimeDefault = [3, 5, 2, 0, 9, 11, 4, 8, 1, 7, 10, 4, 3, 3, 5, 1, 8, 5, 11, 6, 3, 7, 10, 9, 4, 5, 7, 4, 11, 8, 5, 11, 1, 0, 5, 10, 7, 1, 6, 2, 0, 1, 6, 8, 3, 5, 5, 3, 1, 0, 6, 7, 11, 11, 4, 11, 11, 7, 10, 4, 5, 0, 2, 6, 4, 5, 8, 3, 2, 5, 4, 1, 1, 6, 4, 1, 4, 10, 6, 11, 2, 9, 3, 3, 6, 11, 4, 5, 5, 5, 11, 6, 6, 11, 1, 7, 9, 3, 2, 2, 6, 0, 7, 10, 1, 11, 1, 0, 10, 9, 5, 1, 4, 1, 3, 0, 5, 11, 9, 7, 11, 4, 1, 7, 3, 8, 10, 9, 5, 1]

if (localStorage.getItem('playtimeData') == null) {
    localStorage.setItem('playtimeData', JSON.stringify(playtimeDefault))
    console.log(localStorage.getItem('playtimeData'));
}

const playtimeDefault2 = [3, 5, 2, 0, 9, 11, 4, 8, 1, 7, 10, 4, 3, 3, 5, 1, 8, 5, 11, 6, 3, 7, 10, 9, 4, 5, 7, 4, 11, 8, 5, 11, 1, 0, 5, 10, 7, 1, 6, 2, 0, 1, 6, 8, 3, 5, 5, 3, 1, 0, 6, 7, 11, 11, 4, 11, 11, 7, 10, 4, 5, 0, 2, 6, 4, 5, 8, 3, 2, 5, 4, 1, 1, 6, 4, 1, 4, 10, 6, 11, 2, 9, 3, 3, 6, 11, 4, 5, 5, 5, 11, 6, 6, 11, 1, 7, 9, 3, 2, 2, 6, 0, 7, 10, 1, 11, 1, 0, 10, 9, 5, 1, 4, 1, 3, 0, 5, 11, 9, 7, 11, 4, 1, 7, 3, 8, 10, 9, 5, 1]

if (localStorage.getItem('playtimeData2') == null) {
    localStorage.setItem('playtimeData2', JSON.stringify(playtimeDefault2))
    console.log(localStorage.getItem('playtimeData2'));
}

const playtimeDefault3 = [3, 5, 2, 0, 9, 11, 4, 8, 1, 7, 10, 4, 3, 3, 5, 1, 8, 5, 11, 6, 3, 7, 10, 9, 4, 5, 7, 4, 11, 8, 5, 11, 1, 0, 5, 10, 7, 1, 6, 2, 0, 1, 6, 8, 3, 5, 5, 3, 1, 0, 6, 7, 11, 11, 4, 11, 11, 7, 10, 4, 5, 0, 2, 6, 4, 5, 8, 3, 2, 5, 4, 1, 1, 6, 4, 1, 4, 10, 6, 11, 2, 9, 3, 3, 6, 11, 4, 5, 5, 5, 11, 6, 6, 11, 1, 7, 9, 3, 2, 2, 6, 0, 7, 10, 1, 11, 1, 0, 10, 9, 5, 1, 4, 1, 3, 0, 5, 11, 9, 7, 11, 4, 1, 7, 3, 8, 10, 9, 5, 1]

if (localStorage.getItem('playtimeData3') == null) {
    localStorage.setItem('playtimeData3', JSON.stringify(playtimeDefault3))
    console.log(localStorage.getItem('playtimeData3'));
}

const playtimeDefault4 = [3, 5, 2, 0, 9, 11, 4, 8, 1, 7, 10, 4, 3, 3, 5, 1, 8, 5, 11, 6, 3, 7, 10, 9, 4, 5, 7, 4, 11, 8, 5, 11, 1, 0, 5, 10, 7, 1, 6, 2, 0, 1, 6, 8, 3, 5, 5, 3, 1, 0, 6, 7, 11, 11, 4, 11, 11, 7, 10, 4, 5, 0, 2, 6, 4, 5, 8, 3, 2, 5, 4, 1, 1, 6, 4, 1, 4, 10, 6, 11, 2, 9, 3, 3, 6, 11, 4, 5, 5, 5, 11, 6, 6, 11, 1, 7, 9, 3, 2, 2, 6, 0, 7, 10, 1, 11, 1, 0, 10, 9, 5, 1, 4, 1, 3, 0, 5, 11, 9, 7, 11, 4, 1, 7, 3, 8, 10, 9, 5, 1]

if (localStorage.getItem('playtimeData4') == null) {
    localStorage.setItem('playtimeData4', JSON.stringify(playtimeDefault4))
    console.log(localStorage.getItem('playtimeData4'));
}

// Spending Default Data
const spendingDefaultData = [84, 0, 0, 0, 87, 0, 0, 0, 27, 0, 0, 0, 40, 0, 0, 0, 65, 0, 0, 0, 56, 0, 0, 0, 99, 0, 0, 0, 0, 0, 0, 0, 94, 0, 0, 0, 47, 0, 0, 0, 99, 0, 0, 0, 99, 0, 0, 0, 12, 0, 0, 0, 19, 0, 0, 0, 7, 0, 0, 0, 37, 0, 0, 0, 77, 0, 0, 0, 27, 0, 0, 0, 39, 0, 0, 0, 67, 0, 0, 0, 7, 0, 0, 0, 54, 0, 0, 0, 38, 0, 0, 0, 60, 0, 0, 0, 78, 0, 0, 0, 68, 0, 0, 0, 91, 0, 0, 0, 93, 0, 0, 0, 18, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 77, 0]

if (localStorage.getItem('spendingData') == null) {
    localStorage.setItem('spendingData', JSON.stringify(spendingDefaultData))
    console.log(localStorage.getItem('spendingData'));
}
// create a date obj for feb 20, 2013, 3:12am with a local timezone
let feb20 = new Date(2013, 1, 1, 3, 12)
console.log(feb20)
// show a weekday as a prefix

function getWeekDay(date) {
    let datePrefix = ['sun','mon', 'tue', 'wed', 'thur', 'fri', 'sat']
    console.log(datePrefix[date.getDay()])
}

let date = new Date(2013, 1, 10, 3, 12)

getWeekDay(date)
// european weekday
function getLocalDay(date) {
    let day = date.getDay()
    if (day == 0) {
        day = 7
    }
    console.log(day)
}
let europeanDate = new Date(2013, 1, 10, 3, 12)
getLocalDay(europeanDate)

// which day of month was many days ago
let datetouse = new Date(2015, 0, 2)
function getDateAgo(date, ago = 0) {
    let newdate = new Date(date)
    date.setDate( newdate.getDate() - ago )
    console.log(date)
}
getDateAgo(datetouse, 365)

//last day of month
function lastDayOfTheMonth(year, month) {
    let date = new Date()
    date.setFullYear(year, month +1, 0)
    console.log(date.getDate(), date)
}
lastDayOfTheMonth(2012, 1)

// how many seconds have passed today
function getSecondsTodaay() {
    let date = new Date()
    return date.getSeconds() + date.getMinutes() * 60 + date.getHours * 3600
}

// format date
function formatDate(date) {
    let dateFormat = new Date() - date
    if (dateFormat < 1000) {
        console.log('right now')
    }else if (Math.floor(dateFormat/1000) < 60){
        console.log(Math.floor(dateFormat/1000) + 'sec. ago')
    }else if(Math.floor(dateFormat/60000) < 60){
        console.log(Math.floor(dateFormat/60000) + 'min. ago')
    }else if(Math.floor(dateFormat/3600000) < 24){
        console.log(Math.floor(dateFormat/3600000) + 'hour ago')
    }else{
        let d = date.getFullYear().toString().slice(-2)
        let m = date.getMonth() + 1 < 10 ? '0' + date.getMonth() : date.getMonth()
        let da = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        console.log(d + '.' + m + '.' + da +'.' + Math.floor(dateFormat/3600000) + 'hr :' + Math.floor(dateFormat/60000) + 'mins ') 
    }
}
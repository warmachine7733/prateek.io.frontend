import moment from 'moment'

export const calcCareerDuration = ( data ) => {
  console.log(2,"inbound", data)
  var newArr = data.work.map(each => ({...each, duration: getFormatedStringFromDays(duration(each.jDate, each.rDate))}))
  console.log("6", newArr)
  var newArr2 = data.work.map(each=>duration(each.jDate, each.rDate)).reduce((a, b) => a + b, 0)
  const totalXp = getFormatedStringFromDays(newArr2)
  console.log("7", totalXp)
  return totalXp
}

const duration = (jDate, rDate) => {
    return moment(rDate ? rDate : moment().format('DD/MM/YYYY'), 'DD/MM/YYYY').diff(moment(jDate, 'DD/MM/YYYY'),'days')
 }

 const getFormatedStringFromDays = (numberOfDays) => {
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);

    return years + ` year${years > 0 && 's '}` +   months + ' months ' + days + ' days'
}
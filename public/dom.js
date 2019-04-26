
let time = new Date().getHours();
let greeting = '';

//  switch (time) {
//      case time < 12:
//      greeting = 'good morning'
//      console.log('false')
//      break;
//      case time > 12:
//      greeting = 'good afternoon'
//      console.log('true')
//      break;
//     //  case time > 17 || time <= 24:
//     //  greeting = 'good evening';
//      default:
//      greeting = 'hello'
// }


    if (time < 12){
        greeting = 'good morning'
    } 
    if (time >= 12 && time < 17){
        greeting = 'good afternoon'
    }
    if (time >=17 && time <= 24) {
        greeting = 'good evening'
    }



document.getElementById('user-greeting').innerText = `${greeting}, what's your dream?`
// change first letter to uppercase
function ucFirstchar(string) {
   let firstLettercap = string[0].toUpperCase()
   let restofstring = string.slice(1)
   console.log(firstLettercap + restofstring)
}

ucFirstchar('john')

// check for spam
function chechSpam(string) {
    string.toLowerCase()
    if (string.includes('viagra') || string.includes('xxx')) {
        console.log('true')
    }
}

chechSpam('buy viagra now')

//truncate the text 

function truncate(str, maxlength) {
    if (str.length > maxlength) {
       let newStr = str.slice(0, maxlength-1)
       console.log(`${newStr}...`)
    }else{
        console.log(str)
    }
}

truncate("What I'd like to tell on this topic is:", 20)

//Extract the money
function extractCurrencyValue(curValue) {
    console.log(+curValue.slice(1))
}

extractCurrencyValue('f100')
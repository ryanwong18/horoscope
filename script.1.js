//Array for zodiacs
const zodiac = [
    {
        name:"aries",
        month1:"03",
        day1:"20",
        month2:"04",
        day2:"20",
        // date:["03-20", "04-20  "],
        description: {}
    },
    {
        name:"taurus",
        month1:"04",
        day1:"21",
        month2:"05",
        day2:"21",
        // date:["04-21", "05=21"],
        description: "LOREM"
    },
    {
        name:"gemini",
        month1:"05",
        day1:"22",
        month2:"06",
        day2:"21",
        // date:["05-22", "06-21"],
        description:"LOREM"
    },
    {
        name:"cancer",
        month1:"06",
        day1:"22",
        month2:"07",
        day2:"23",
        // date:["06-22","07-23"],
        description:"LOREM"
    },
    {
        name:"leo",
        month1:"07",
        day1:"24",
        month2:"08",
        day2:"23",
        // date:["07-24", "08-23"],
        description: "LOREM"
    },
    {
        name:"virgo",
        month1:"08",
        day1:"24",
        month2:"09",
        day2:"23",
        // date:["08-24", "09-23"],
        description: "LOREM"
    },
    {
        name:"libra",
        month1:"09",
        day1:"24",
        month2:"10",
        day2:"23",
        // date:["09-24", "10-23"],
        description: "LOREM"
    },
    {
        name:"scorpio",
        month1:"10",
        day1:"24",
        month2:"11",
        day2:"22",
        // date:["10-24", "11-22"],
        description: "LOREM"
    },
    {
        name:"sagittarius",
        month1:"11",
        day1:"23",
        month2:"12",
        day2:"22",
        // date:["11-23", "12-22"],
        description: "LOREM"
    },
    {
        name:"capricorn",
        month1:"12",
        day1:"23",
        month2:"01",
        day2:"20",
        // date:["12-23", "01-20"],
        description: "LOREM"
    },
    {
        name:"aquarius",
        month1:"01",
        day1:"21",
        month2:"02",
        day2:"18",
        // date:["01-21", "02-18"],
        description: "LOREM"
    },
    {
        name:"pisces",
        month1:"02",
        day1:"19",
        month2:"03",
        day2:"19",
        // date:["02-19", "03-19"],
        description: "LOREM"
    }
];

// Variable definitions

let inputname;
let inputbday;
let finalzodiac;
let finaldescription;

$(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        inputname = $("input[type=text]").val();
        inputbday = $("input[type=date]").val();
        
        const inputupdatebday = inputbday.slice(5);
        const inputupdatemonth = inputupdatebday.slice(0,2);
        const inputupdateday = inputupdatebday.slice(3);

        //for loop that finds out zodiac symbol based on birthday
        for(let i = 0; i < zodiac.length ; i = i + 1) {
            if(inputupdatemonth === zodiac[i].month1 && (inputupdateday >= zodiac[i].day1)) {
                finalzodiac = zodiac[i].name;
                finaldescription = zodiac[i].description;
                console.log(finalzodiac);
            }
            if(inputupdatemonth === zodiac[i].month2 && (inputupdateday <= zodiac[i].day2)) {
                finalzodiac = zodiac[i].name;
                console.log(finalzodiac);
                finaldescription = zodiac[i].description;
            }
        }
        
        //commentary output from name and birthday input
        $(".zodiac-commentary").append(`<h2>Hey ${inputname}, your zodiac sign is ${finalzodiac}. You probably have no idea what that means and probably don't care, but let me tell you anyway.</h2>`).append(`<h3>People of the ${finalzodiac} sign are ${finaldescription}</h3>`);
        
        //clears the name and birthday inputs
        $("input[type=text]").val("");
        $("input[type=date]").val("");
        
        let zodiacimage = $(".zodiac-commentary").find(`.${finalzodiac}`);
    
    
        // console.log(inputname);
        // console.log(inputbday);
        
        // console.log(inputupdatebday);
        
        // console.log(inputupdatemonth);
        // console.log(inputupdateday);
    })
});


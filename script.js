//Array for zodiacs
const zodiac = [
    {
        name:"aries",
        month1:"03",
        day1:"20",
        month2:"04",
        day2:"20",
        // date:["03-20", "04-20  "],
        description: "You burn bright with the power to be courageous, energetic, willful and commanding. However, you often lead when following may be better suited.",
        initialScore:10
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
let inputName;
let inputBday;
let finalZodiac;
let finalDescription;

// On function
$(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        inputName = $("input[type=text]").val();
        inputBday = $("input[type=date]").val();
        
        const inputUpdateBday = inputBday.slice(5);
        const inputUpdateMonth = inputUpdateBday.slice(0,2);
        const inputUpdateDay = inputUpdateBday.slice(3);
        let zodiacIndexNum;

        //for loop that finds out zodiac symbol based on birthday
        for(let i = 0; i < zodiac.length ; i = i + 1) {
            if(inputUpdateMonth === zodiac[i].month1 && (inputUpdateDay >= zodiac[i].day1)) {
                zodiacIndexNum = zodiac.indexOf(zodiac[i]);
                finalZodiac = zodiac[i].name;
                finalDescription = zodiac[i].description;
                console.log(finalZodiac);
                console.log(zodiacIndexNum);
            }
            if(inputUpdateMonth === zodiac[i].month2 && (inputUpdateDay <= zodiac[i].day2)) {
                zodiacIndexNum = zodiac.indexOf(zodiac[i]);
                finalZodiac = zodiac[i].name;
                finalDescription = zodiac[i].description;
                console.log(finalZodiac);
                console.log(zodiacIndexNum);
            }
        }
        
        //commentary output from name and birthday input
        $(".zodiac-commentary").append(`<h2>Hey ${inputName}, your zodiac sign is ${finalZodiac}. Cool story bruh - you probably have no idea what that means and probably don't care, but let me tell you anyway.</h2>`).append(`<h3${finalDescription}</h3>`);
        
        //clears the name and birthday inputs
        $("input[type=text]").val("");
        $("input[type=date]").val("");
        
        //displays image of corresponding zodiac sign
        let zodiacImage = $(".zodiac-commentary").find(`.${finalZodiac}`);
    })
});


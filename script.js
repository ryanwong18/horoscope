//Array for zodiacs
const zodiac = [
    {
        name:"Aries",
        month1:"03",
        day1:"20",
        month2:"04",
        day2:"20",
        // date:["03-20", "04-20  "],
        description: "According to our trusty source, Wikipedia, Aries is the first astrological sign in the zodiac and you exhibit characteristics of a dumpster fire with moonshine poured on it - enthusiasm, fierce, frank and enthusiastic. Not sure why they decided on a ram for your symbol, but hey, I didn't make the rules. Some famous people who are also Aries include Emma Watson, Lady Gaga, Christopher Walken, Robert Downey Jr, Russell Crowe and Steven Seagal. Is it getting a bit hot in here or is it just me?",
        initialScore:10
    },
    {
        name:"Taurus",
        month1:"04",
        day1:"21",
        month2:"05",
        day2:"21",
        // date:["04-21", "05=21"],
        description: "According to our trusty source, Wikipedia, Taurus is the second astrological sign in the zodiac and apparently you are very reliable, practical, ambitious and down to earth. However, you can be very lazy, materialistic and frugal. I also heard from the grapevine that you tend to snore and scratch yourself when you're sleeping?!?! On the bright side, you're in good company with Dwayne 'The Rock' Johnson, Adele, Janet Jackson, George Clooney, David Beckham and the one and only HOMER SIMPSON.",
        initialScore:9
    },
    {
        name:"Gemini",
        month1:"05",
        day1:"22",
        month2:"06",
        day2:"21",
        // date:["05-22", "06-21"],
        description:"According to our trusty source, Wikipedia, Gemini is the third astrological sign in the zodiac. Apparently people of the Gemini sign like to take short trips around town - wait, who doesn't like that?! You are gentle, affectionate, adaptable, quick to learn and a SERIOUS party animal. After a couple of drinks, your dance moves are better than Michael Jackson doing the moonwalk for the first time. One word: EPIC. You are joined by a supporting cast of Morgan Freeman, Johnny Depp, Angelina Jolie, Tupac, Nicole Kidman, Venus Williams and Natalie Portman. Not a bad entourage you got there *slow clap*.",
        initialScore:8
    },
    {
        name:"Cancer",
        month1:"06",
        day1:"22",
        month2:"07",
        day2:"23",
        // date:["06-22","07-23"],
        description:"According to our trusty source, Wikipedia, Cancer is the fourth astrological sign in the zodiac. They are tenacious, imaginative, emotional and dislike people who diss their mommas. This is 2018, who is still doing that? #mommajokesareso2000. Their symbol may be the crab, but they have the potential to unleash rage upon anyone, so this is a warning to everyone else. Some individuals who share the same sign are Lionel Messi, Selena Gomez, Ariana Grande, Kevin Hart and Tom Cruise. That's a mixed bag if I've ever seen one.",
        initialScore:11
    },
    {
        name:"Leo",
        month1:"07",
        day1:"24",
        month2:"08",
        day2:"23",
        // date:["07-24", "08-23"],
        description: "According to our trusty source, Wikipedia, Leo is the fifth astrological sign in the zodiac. People of this sign are passionate, creative, generous, warm-hearted and cheerful. They like to be king of the jungle, similar to Simba, but they sleep like a starfish at night and tend to hog the covers. Good riddance. Individuals of the same sign include Barack Obama, Jennifer Lopez, J.K. Rowling, Whitney Houston, Jennifer Lawrence and Mick Jagger - if that isn't star power, I don't know what is.",
        initialScore:10
    },
    {
        name:"Virgo",
        month1:"08",
        day1:"24",
        month2:"09",
        day2:"23",
        // date:["08-24", "09-23"],
        description: "According to our trusty source, Wikipedia, Virgo is the sixth astrological sign in the zodiac and you are an analytical, kind, hardworking and practical person. Nice! You also have a sweet tooth and tend to drink too much coffee, but at least those Starbucks points are rolling. Some famous people with the same sign are Blake Lively, Chris Pine, Cameron Diaz and Keanu Reeves.",
        initialScore:7
    },
    {
        name:"Libra",
        month1:"09",
        day1:"24",
        month2:"10",
        day2:"23",
        // date:["09-24", "10-23"],
        description: "According to our trusty source, Wikipedia, Libra is the seventh astrological sign in the zodiac. You are diplomatic, gracious, social and enjoy sleeping 23 out of 24 hours a day. I think you'd give koalas a run for their money. However, given some of the people who share the same sign such as Vladimir Putin and Kim Kardashian, maybe it's better to continue the train of zzz's.",
        initialScore:9
    },
    {
        name:"Scorpio",
        month1:"10",
        day1:"24",
        month2:"11",
        day2:"22",
        // date:["10-24", "11-22"],
        description: "According to our trusty source, Wikipedia, Scorpio is the eigth astrological sign in the zodiac. They are resourceful, brave and passionate people - if you're in a full on fist fight, you should call one up. They are also determined and decisive - so if you have multiple options for lunch and you're flip flopping, call one up. You share the same sign as Ryan Reynolds, Katy Perry, Julia Roberts, Ryan Gosling, Anne Hathaway and our very own Drake from the 6ix.",
        initialScore:11
    },
    {
        name:"Sagittarius",
        month1:"11",
        day1:"23",
        month2:"12",
        day2:"22",
        // date:["11-23", "12-22"],
        description: "According to our trusty source, Wikipedia, Sagittarius is the ninth astrological sign in the zodiac. You are like a kid with a great sense of humor and embrace freedom for all it's worth. Similar to most people, you dislike people who are class 5 clingers and irrelevant details that put you in a rabbit hole to nowhere. Your life revolves around travel and adventure #instagramlife. You are joined by Miley Cyrus, Taylor Swift, Ben Stiller, Britney Spears, Jay-Z, Brad Pitt and Samuel L. Jackson.",
        initialScore:7
    },
    {
        name:"Capricorn",
        month1:"12",
        day1:"23",
        month2:"01",
        day2:"20",
        // date:["12-23", "01-20"],
        description: "According to our trusty source, Wikipedia, Capricorn is the tenth astrological sign in the zodiac. People of this sign have great self control, discipline and are responsible for their actions. They will only ride bicycles in the winter, wear flip flops with socks, eat a maximum of 4,000 calories and devour maple syrup if it's from Canada, EH! You are joined by the likes of Martin Luther King Jr, Isaac Newton, Benjamin Franklin, Muhammad Ali, Al Capone...wait, why are all these Capricorns deceased?",
        initialScore:8
    },
    {
        name:"Aquarius",
        month1:"01",
        day1:"21",
        month2:"02",
        day2:"18",
        // date:["01-21", "02-18"],
        description: "According to our trusty source, Wikipedia, Aquarius is the eleventh astrological sign in the zodiac with progressive, independent and humanitarian traits. You tend to be a bit shy, but enjoy intellectual conversations and dislike being lonely, broken promises and restrictions. High maintenance anyone?! People who share the same sign include Oprah Winfrey, Cristiano Ronaldo, Michael Jordan, Bob Marley, Mozart and Abraham Lincoln.",
        initialScore:10
    },
    {
        name:"Pisces",
        month1:"02",
        day1:"19",
        month2:"03",
        day2:"19",
        // date:["02-19", "03-19"],
        description: "According to our trusty source, Wikipedia, Pisces is the last of twelve astrological signs in the zodiac. You are a compassionate, artistic, intuitive person and have a deep love for exotic fruits, especially durian (How can you stand the smell?!?!). They enjoy meditation and yoga five times a day and eat exactly 200 grains of rice a day. They really dislike being criticized, emotional baggage and cruelty of any kind. Hm, maybe shouldn't have left that whoopee cushion on their chair...oh well *shrug* You are joined by a star studded group of individuals including Daniel Craig, Rihanna, Justin Bieber, Jessica Biel, Albert Einstein and Adam Levine.",
        initialScore:12
    }
];


//Arrays for behind the scenes point system
const industry = [
    {
        name:"arts",
        points:-2
    },
    {
        name:"science",
        points:2
    },
    {
        name:"education",
        points:1
    },
    {
        name:"sports",
        points:3
    },
    {
        name:"business",
        points:3
    },
    {
        name:"computer",
        points:5
    },
    {
        name:"illegal",
        points:8
    }
];

const exercise = [
    {
        name: "daily",
        points: 5
    },
    {
        name: "weekly",
        points: 3
    },
    {
        name: "monthly",
        points: 1
    },
    {
        name: "yearly",
        points: 0
    },
    {
        name: "never",
        points: -2
    }
];

const love = [
    {
        name: "doug",
        points: 8
    },
    {
        name: "married",
        points: 4
    },
    {
        name: "parents",
        points: 2
    },
    {
        name: "relationship",
        points:3
    },
    {
        name: "single",
        points: 1
    },
    {
        name: "alone",
        points: -3
    }
];


// Based on aggregated points, we assign a conclusion
const totalScoreCommentary = [
    {
        points: [0, 1, 2, 3, 4 , 5],
        conclusion:"Oh geez, where do we start with you? You are probably far away from where you want to be in life, but not to worry. We provide consultations and advice for a small sum of only $3,000/month. Please call us at 1-800-MY-STARS or you can reach us at horoscopes@horoscope.com."
    },
    {
        points: [6, 7, 8, 9, 10],
        conclusion: "You're a pretty cool person, but it appears that you may be struggling a bit in life. More exposure to the big dipper constellation could help you. I would recommend star gazing for about 5 hours a day. Good things could come from this experience which you didn't initially expect. "
    },
    {
        points: [11, 12, 13, 14, 15],
        conclusion: "You're fairing well in life, but you may be aspiring to kick it up a notch. I would suggest powering up with regular Red Bull and coffee to give you the extra juice needed to get passed any bumps in your life. It's also not a bad idea to try extreme sports such as skydiving and bungee jumping once in a while to keep the adrenaline rolling."
    },  
    {
        points: [16, 17, 18, 19, 20],
        conclusion: "You are the most normal person among your friends. That also means you are probably the most boring. To spice up your life, I would recommend taking a massive loan and traveling around the world to gain perspective and experiences. Based on the alignment of star patterns on your birthday, Moldova and Laos could be good options."
    },
    {
        points: [21, 22, 23, 24, 25],
        conclusion: "The stars shine bright for you and will guide the way towards an ascending path in life. In common lingo that basically means, I have no idea what I'm doing and it sounds all mystical and stuff, so hopefully you'll accept it for what it is."
    },
    {
        points: [26, 27, 28, 29, 30, 31, 32, 33],
        conclusion: "You are a TOTAL boss and you are wasting time on this website. Immediately hit CTRL + W on your windows keyboard or COMMAND + W on your mac to exit this tab. Also, stop spending so much time on Twitter, Facebook and Instagram - get out there and be a real human being."
    },
]

// Variable definitions
let inputName;
let inputBday;
let finalZodiac;
let finalDescription;
let industrySelection;

// On function
$(function() {
    $(".wrapper a").smoothScroll({
        speed:800
    });

    $(".reset-button a").on("click", function() {
        $("html").animate({scrollTop:0}, "slow");

        //clears the name and birthday inputs
        $("input[type=text]").val("");
        $("input[type=date]").val("");

        $("input[type=radio]").prop("checked", false);

        $(".javascript-section").empty();
    });

    $("form").on("submit", function(e) {
        e.preventDefault();

        //NAME AND BIRTHDAY SECTION
        inputName = $("input[type=text]").val();
        inputBday = $("input[type=date]").val();
        
        const inputUpdateBday = inputBday.slice(5);
        const inputUpdateMonth = inputUpdateBday.slice(0,2);
        const inputUpdateDay = inputUpdateBday.slice(3);
        let zodiacIndexNum;
        let zodiacInitialScore;

        //for loop that finds out zodiac symbol based on birthday
        for(let i = 0; i < zodiac.length ; i = i + 1) {
            if(inputUpdateMonth === zodiac[i].month1 && (inputUpdateDay >= zodiac[i].day1)) {
                zodiacIndexNum = zodiac.indexOf(zodiac[i]);
                finalZodiac = zodiac[i].name;
                finalDescription = zodiac[i].description;
                zodiacInitialScore = zodiac[i].initialScore;
                console.log(finalZodiac);
                console.log(zodiacIndexNum);
                console.log(zodiacInitialScore);
            }
            else if(inputUpdateMonth === zodiac[i].month2 && (inputUpdateDay <= zodiac[i].day2)) {
                zodiacIndexNum = zodiac.indexOf(zodiac[i]);
                finalZodiac = zodiac[i].name;
                finalDescription = zodiac[i].description;
                zodiacInitialScore = zodiac[i].initialScore;
                console.log(finalZodiac);
                console.log(zodiacIndexNum);
                console.log(zodiacInitialScore);
            }
        }
        
        //commentary output from name and birthday input
        $(".javascript-section").append(`<h3>Hey <span>${inputName}</span>, your zodiac sign is <span> ${finalZodiac} </span> <p>${finalDescription}</p>`);
    
        
        //INDUSTRY QUESTION SECTION
        let industryScore;
        
        //grabs radio input from user
        industrySelection = $(".industry-question input[type=radio]:checked").val();
        console.log(industrySelection);

        //for loop to translate user input into score from object
        for(i = 0; i < industry.length ; i = i + 1) {
            if(industry[i].name === industrySelection) {
                industryScore = industry[i].points;
            }
        }

        //updates initial score
        zodiacInitialScore = zodiacInitialScore + industryScore;
        console.log(`your new score is ${zodiacInitialScore}`);



        //EXERCISE QUESTION SECTION
        let exerciseScore;

        exerciseSelection = $(".exercise-question input[type=radio]:checked").val();
        console.log(exerciseSelection);

        for(i = 0; i < exercise.length; i = i + 1) {
            if(exercise[i].name === exerciseSelection) {
                exerciseScore = exercise[i].points;
            }
        }
        console.log(exerciseScore);

        zodiacInitialScore = zodiacInitialScore + exerciseScore;
        console.log(`your score is now ${zodiacInitialScore}`);



        //LOVE QUESTION SECTION
        let loveScore;

        loveSelection = $(".love-question input[type=radio]:checked").val();
        console.log(loveSelection);

        for(i = 0; i < love.length; i = i + 1) {
            if(love[i].name === loveSelection) {
                loveScore = love[i].points;
            }
        }
        console.log(loveScore);

        zodiacInitialScore = zodiacInitialScore + loveScore;
        console.log(`Your score is now ${zodiacInitialScore}`);


        //Double for loop with if statement to search for the number which matches the zodiac score
        let conclusion;
        for(i = 0; i < totalScoreCommentary.length; i = i + 1) {
            for(j = 0 ; j < totalScoreCommentary[i].points.length; j = j + 1) {
                if(zodiacInitialScore === totalScoreCommentary[i].points[j]) {
                    conclusion = totalScoreCommentary[i].conclusion;
                    // console.log(conclusion);
                }
            }
        }

        //OUPUT COMMENTARY AND SCORE
        $(".javascript-section").append(`<h3>Based on your answers and our complex algorithm:</h3><p>${conclusion}</p>`)

        //submit button scroll
       $("html").animate({
        scrollTop:$(".javascript-section").offset().top
       });
    })
});


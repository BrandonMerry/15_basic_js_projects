const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];




// make const to select items from your HTML

    const giveaway = document.querySelector(".giveaway");
    const deadline = document.querySelector(".deadline");

//   does this to select all items in the h4 from the parent div
// shows that this command (querySelectorAll) is super powerful 
    const items = document.querySelectorAll(".deadline-format h4");

// this lets us get a new date instead of hard coding the timer

// this is for the current date 
        // let futureDate = new Date();
        // console.log(futureDate);

// month is zero index based array (0-11)
// year/month/day/hours(0-24)/minutes/seconds
    let futureDate = new Date(2022,1,24,20,30,0);
    //  console.log(futureDate);

// extract contents from futureDate 1 at a time
// easiest ones are | years | Hours | Minutes | Date

    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const minutes =futureDate.getMinutes();
    const date = futureDate.getDate();

// difficult to extract |Months |Weekday
// use the array at the top of the page

    let month = futureDate.getMonth();
//this calls from the array the number which is returned from the let function 
    month = months[month];
    // console.log(months[month]);


// the non-override way to use a nested feature 
//.getDay() returns a number 0-6 -- thats why you set it inside of the array you created 
    const weekday = weekdays[futureDate.getDay()];

// this updates the <div class="giveaway"></div>
// you have to write in the template literal (``) your text -- Ending... pm
    giveaway.textContent = `Ending ${weekday}, ${date}th ${month} ${year} at ${hours}:${minutes}`


    // *****************************
    // setup for countdown timer
    // *****************************

// this gives a large number -- all are milliseconds 
        const futureTime = futureDate.getTime();
        // console.log(futureTime);

// a function to get the remaining time
        function getRemainingTime(){
            // this is logged in milliseconds 
                const today = new Date().getTime()
            // set up your own variable  (this case is 't)
            // today is js function already 
            // produces a number value in milliseconds 
                const t = futureTime - today;
            // lets you check time in browser 
                console.log(t);

            // values in MS   |1s = 1000ms | 1m = 60s | 1hr = 60min| 1d = 24hr|
                const oneDay = 24*60*60*1000;
                const oneHour = 60*60*1000;
                const oneMinute = 60*1000;

            // calculates all values | t is difference between futureTime and current time [today]
                let days = t / oneDay;
            // math floor to only get the whole number and not decimal points 
                days = Math.floor(days);
                // console.log(days);
            //use the modulus operator to get the remainder after whats left from days then divide by one hour   
                let hours = Math.floor(t % oneDay) /oneHour;
                let minutes = Math.floor(t % oneHour) / oneMinute;
                let seconds = Math.floor(t % oneMinute) / 1000;




    
        };


        getRemainingTime();
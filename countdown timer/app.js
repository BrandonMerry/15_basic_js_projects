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
     console.log(futureDate);

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
    giveaway.textContent = `Ending ${weekday}, ${date}th ${month} ${year} ${hours}:${minutes}pm`


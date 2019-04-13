class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
    this.hour = Date.prototype.getHours();
    this.minutes = Date.prototype.getMinutes();
    this.seconds = Date.prototype.getSeconds();
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hour}:${this.minutes}:${this.seconds}`)
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.

    Clock.prototype.call = function () {
    window.setInterval(this.update.bind(this), 1000);
    };

    setInterval( () => {
      this.seconds += 1;
      this.printTime();
    }, 1000);

  }


}

const clock = new Clock();
clock._tick();
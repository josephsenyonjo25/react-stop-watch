THE STOP WATCH

Aim:

Allows the user to press a button "Start" to start the stopwatch
While the stopwatch is started, the incrementing time should be displayed
Allows the user to press a button "Pause" to pause the stopwatch at the current time
Re-clicking the "Pause" button should resume the stopwatch
Allows the user to press a button "Reset" to stop the stopwatch and reset the time to 0
 
My methodology:
 First, I set state, initializing the counter to zero and defalut state to false (not counting).
 Second, I declared three methods: handleReset, handleStart and handlePause.
 
 
 PseudoCode:
 
 handleReset Method:
 set state counter back to 0 and 'started' to false. Clear timer interval to stop clock.
 
 handleStart
 if clock not started, set interval with callback function to increment state counter and set 'started' to true.
 
 handlePause
 if stop is running, set 'started' to false, clear timer interval to to stop clock, else call handleStart method to restart the clock.



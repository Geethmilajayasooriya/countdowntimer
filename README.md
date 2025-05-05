# 🎉 Countdown Timer to New Year 🎉

This is a simple JavaScript countdown timer that shows the time remaining until the end of the current year. It updates live every second and displays the remaining **seconds**, **minutes**, **hours**, and **days**.

## 🚀 Features

- Live countdown that updates every second
- Accurate calculation of days based on leap year detection
- Written in plain JavaScript (no libraries required)
- Easy to integrate into any web page

## 🛠️ How It Works

1. The script gets the current date and time using JavaScript's `Date` object.
2. It checks if the current year is a leap year (366 days) or not (365 days).
3. Based on the current month and day, it calculates how many days remain until the end of the year.
4. It displays:
   - Seconds left in the current minute
   - Minutes left in the current hour
   - Hours left in the current day
   - Days left in the year

## 📋 HTML Structure

Make sure your HTML contains the following elements for the countdown to display correctly:

```html
<div>
  <p>Seconds left: <span id="sec"></span></p>
  <p>Minutes left: <span id="min"></span></p>
  <p>Hours left: <span id="hours"></span></p>
  <p>Days left: <span id="days"></span></p>
</div>

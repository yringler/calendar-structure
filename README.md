# date-flexible-calendar

Date pickers are hard. Calendar systems are complicated. Managing multiple calendars
is even more complicated. Which makes it very difficult to write a date picker which
handles multiple calendars.

This library attempts to solve that problem by making the calendar details
1. A display issue
2. A client issue

We name a point in time September 16th, 2024. That same point in time can also be called
Elul 13, 5784. Or Rabiʻ I 13, 1446. A date picker doesn't have to concern itself with these
UI details, as long as it provides a way for the client to customize how a date is displayed.
This makes handling various month names etc a moot point.

The real issue is the actual calendar - the number of months, and the number of days in a
month, can vary year by year. How can a date picker handle multiple calendar systems, without
getting bogged down in the complexities of those systems?

By making that a client issue.

At the heart of it, all we need to know is the composition of a given year, where the composition
is the number of months, and how long each month is. If we delegate month start and end to an
interface which defines years, we can open up our date pickers to any calendar system.

# Calendar structure

I'm calling the classes and interfaces "structures", because they expose the bare bones
structure of the calendar, leaving all details to the client.
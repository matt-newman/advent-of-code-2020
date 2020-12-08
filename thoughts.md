So, the natural start for me would seem to be to read the problem definition and then to take the examples provided and turn those into tests, even just the skeleton of tests simply to get something quickly runnable going, I enjoy having runnable tests!

Day 1.1
So, scan a list for a combination of entries that add to 2020. My immediate reaction is to translate this to scan an array, setting a target as 2020 (or zero) and deducting the index entry from 2020 and seeing if the resulting number is found in the array.

Ok, so setting up the simplest example of finding a sum total from entries in an array immediately reveals a few potential traps:

A number that immediately matches the total, meaning if you just look x+y = z then if you have x = z and y = 0, it'll match, but the problem comes when you do the subsequent multiplication then it'll always be 0.

Also, it could be possible that there are multiple matches available, do we trust the input... simple answer, never! (or trust but verify).
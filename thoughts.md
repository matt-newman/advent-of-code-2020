So, the natural start for me would seem to be to read the problem definition and then to take the examples provided and turn those into tests, even just the skeleton of tests simply to get something quickly runnable going, I enjoy having runnable tests!

# Day 1
## Part 1:
So, scan a list for a combination of entries that add to 2020. My immediate reaction is to translate this to scan an array, setting a target as 2020 (or zero) and deducting the index entry from 2020 and seeing if the resulting number is found in the array.

Ok, so setting up the simplest example of finding a sum total from entries in an array immediately reveals a few potential traps:

A number that immediately matches the total, meaning if you just look x+y = z then if you have x = z and y = 0, it'll match, but the problem comes when you do the subsequent multiplication then it'll always be 0.

Also, it could be possible that there are multiple matches available, do we trust the input... simple answer, never! (or trust but verify).

A thought about the algo of doing array.map with an inner array.find ... could that be made more efficient (almost definitely), first thought is, once you've searched below target/2 then you've already scanned the higher numbers (if the input is sorted) therefore you won't find a match if you keep going.

What if there are two (or more) of the same number...

So an actual problem my tests didn't catch that I had to spend a long time debugging (which I now remember from a previous year... is the input difference between being a number and a string, when I setup the test cases, they're numbers because I've copied them in, but when I read in input from a file and split, it makes an array of strings, therefore, comparison or searching the array for a number doesn't work...)

FFFFFFUUUUUUUUUUU.......

will have example tests for both numbers and strings of array input (although thats effectively overkill, the actual program will always be strings due to readFile and split...)

Hopefully I've solved this problem from here on by mapping the input passing it through parseInt.

## Part 2:
So, now we'll potentially have to find a match for a given target number for n number of factors, so the brute force way of solving this would be to simply try all possible combinations in the array, for the problem, you could just have a nested loop, e.g: 

```
items.forEach
    x = target - item
    items.forEach
        y = x - item
        items.find(y) 
```

This is obviously computationally expensive/inefficient and can be improved in a number of ways.

# Day 2
## Part 1:

I just kinda worked through this on first pass by setting up the test cases, luckily (perhaps) it just seemed to work.

## Part 2:

Ok, my immediate thought based on my implementation is that I could easily just duplicate the 'isValid' function from part one changing the check done so that it suits the new critera, this is obviously not something I'd do on a corporate codebase, but trying to consider YAGNI, this is probably ok for now, and can be refactored if its used again later.

My suspicion is that it will be re-used and that we'll need to do a combination of the checks.

# Day 3
## Part 1:

so it feels like a relatively simple exercise in simply looping and checking what is at the given index in each loop.

Trying to use array.reduce has tripped me up here, so debug logging to see the output shows that its very close, but i'm simply incrementing the accumulator each time, regardless of whether its a match for a tree or not.

Whilst my first pass is only trying to calculate the total trees where x and y are the same, I'm assuming that I'll be able to use the width of the input combined with modulo and the current index to constantly have the correct x,y coordinates.

## Part 2:

Ok, so changing the x coordinate is easy and built into my program, changing the y means I'll have to do something with reduce, my initial thought is simply accumulator * 1 until you reach the next y coordinate.

Ok, so its not that simple with y, as my x will continue to increment... so I need to stop that happening

In fact I realise I can just filter the rows not being used, as the y of the input is always full length

# Day 4
## Part 1:

First thing is to get the input data setup correctly, first guess is splitting by \n\n should give all entries, then maybe split by regex for space?

## Part 2:

So this was complicated, simply in terms of setting up reasonable test cases, and the framework for validating the rules, the code itself was all fairly easy. though I've heavily lent on regex, which is risky but normally suitable for text

So a simple error about the number of fields required means that my first answer was too high.

... this ended up being really tough to solve and took a couple of hours :/

mainly some functions I wrote/used didn't behave as I expected I also repeatedly had simple counting errors with the number of fields when including the 'cid' field, which didn't help

# Day 5
## Part 1:

This was relatively straight forward

## Part 2:

This seems like its a case in manually working out the min and max, based on the formula for seat id.

Otherwise, getting the full seat, taking only the ids and then sorting and looking for the gap

# Day 6
## Part 1:

Immediately this looks tougher, but I think its probably a case of correctly using a reduce function.



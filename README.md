# CPNT-262 Achievement 4 - If This, Then That
## By: Edgar Caballero

Inspiration:
 - Got the idea of making a rock paper scissors using conditionals and `.random` statements from an old Python learning course i did last year.

Troubleshooting:
 - the "`math.random`" function worked fine, except that it only gave a random number from my first index (0) to the second to the last index (1):
    - i.e random[0,1] instead of random[0,1,2] 
```
const rpsRandom = rps[Math.floor(Math.random() * (rps.length - 1))];
```
 - I thought that "`rps.length - 1`" would include the first index[0] until the last index[2] but that was not the case.
  - changed it to:
```
const rpsRandom = rps[Math.floor(Math.random() * (rps.length))];
```
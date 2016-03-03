---
layout: layout.hbs
---

# Specification

# Data

Our app uses the following structure for the database backend:

* score
  * bar1
  * bar2
  * bar3
  * ...
  * timesig
    * valTop
    * valBot
* note
  * value
    * a
    * b
    * c
    * d
    * e
    * f
    * g
  * isSharp
    * true/false
  * isFlat
    * true/false
  * length
    * iswhole
      * true/false
    * isquarter
      * true/false
    * ishalf 
      * true/false
    * isRest
      * true/false
  * location 
    * 1
    * 2
    * 3
    * 4
  * User
    * color
* User
  * Active
    * Name: color
  * Inactive 
    * Name: color
* Colors
  * 1
    * Red
  * 2 
    * Blue
  * ...

# Actions

The major actions of our app are:
* Login
* Logout
* Interactability with other Users
* Update the Score
* Add bars to score


## Action: Login CONNOR


### case: login for the first time

### case: keep login-ed status even when window is closed 


## Action: Logout CONNOR

### case: logout when button is toggeled

### case: stay logged out when window is closed and re-opened


## Action: Interactability with other Users STEVEN

### case: chat box opens when clicked
``` javascript
button.onclick
{
  chatRef.onAuth:
  if auth:
	chat enable
  else
	error
}

chat enable {
 chat = new Firechat(firebaseRef, options)
 this.roomQueue = [];
 this.user = user;
 this.userName = userName;
 this.sessionId = sessionReference; 
}

### case: invite users to chat room
``` javascript
send Invite onclick{
 inviteRef = firebase user ref;
 if (!authenticated){
   return err;
 }
 if (roomtype){
   authorizedUser.set(true, roomId);
 }
 inviteRef.set(id, fromUser, roomId, toUser);
}

acceptInvite {
   inviteRef = snapshot.val();
   enterRoom(invite.roomId);
   inviteRef.setstatus = accepted;
   inviteRef.userName = username;
}

declineInvite {
   inviteRef = snapshot.val();
   inviteRef.setstatus = declined;
   inviteRef.userName = username;   
}

## Action: Update Score

### Case: Add Note
``` javascript
//given
foo.bar.score is
{
  'score':'note',
    "isFlat" : [ false ],
    "isSharp" : [ true ],
    "length" : {
      "isHalf" : [ true ],
      "isQuarter" : [ false ],
      "isWhole" : [ false ]
    },
    "location" : [1],
    "value" : ["e"]
}

//when
add_note(flat, not sharp, half, location)

foo.bar.score is

{
  'score':'note',
    "isFlat" : [ false ],
    "isSharp" : [ true ],
    "length" : {
      "isHalf" : [ true ],
      "isQuarter" : [ false ],
      "isWhole" : [ false ]
    },
    "location" : [1],
    "value" : ["e"]
}

{
  'score':'note',
    "isFlat" : [ true ],
    "isSharp" : [ false ],
    "length" : {
      "isHalf" : [ true ],
      "isQuarter" : [ false ],
      "isWhole" : [ false ]
    },
    "location" : [3],
    "value" : ["f"]
}

### Case: Remove Note
``` javascript
//given
foo.bar.score is
{
  'score':'note',
    "isFlat" : [ false ],
    "isSharp" : [ true ],
    "length" : {
      "isHalf" : [ true ],
      "isQuarter" : [ false ],
      "isWhole" : [ false ]
    },
    "location" : [1],
    "value" : ["e"]
}

{
  'score':'note',
    "isFlat" : [ true ],
    "isSharp" : [ false ],
    "length" : {
      "isHalf" : [ true ],
      "isQuarter" : [ false ],
      "isWhole" : [ false ]
    },
    "location" : [3],
    "value" : ["f"]
}

//when
remove_note(flat, not sharp, half, location)

foo.bar.score is

{
  'score':'note',
    "isFlat" : [ false ],
    "isSharp" : [ true ],
    "length" : {
      "isHalf" : [ true ],
      "isQuarter" : [ false ],
      "isWhole" : [ false ]
    },
    "location" : [1],
    "value" : ["e"]
}


## Action: Add bars to score BROOKE

### case: when button clicked updates the number of bars by one

### case: all other users can see update in real time



(remove the example below before submission)

## Action: Post A Message (Example)

### case: post a message 'd'

``` javascript
// given
foo.bar.messages is
{
  '-cadsace': 'a',
  '-cadsacf': 'b',
  '-cadsacg': 'c'
}

// when
post_a_message(text = 'd')

// then
foo.bar.messages should be
{
  '-cadsace': 'a',
  '-cadsacf': 'b',
  '-cadsacg': 'c',
  '-cadsach': 'd',
}
```

### case: delete a message

``` javascript
// given
foo.bar.messages is
{
  '-cadsace': 'a',
  '-cadsacf': 'b',
  '-cadsacg': 'c'
}

// when
delete_a_message(id = '-cadsacg')

// then
foo.bar.messages should be
{
  '-cadsace': 'a',
  '-cadsacf': 'b'
}
```

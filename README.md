# Welcome!


**App Features**
Let start by saying that this app includes only Step 1 and Step 2 of the challenge. Both steps are fully functional! In summary, this app can
- Make a API call to `api.salesloft.com/v2/people.json`
- Display all results in a table that includes Names, Email addresses and Titles
- Display a frequency count of each letter in all of the addresses that are recieved from the API call in a seperate table on click.

 # What happened to Step 3?
Unfortunately, I was unable to complete Step 3 of this challenge due to time constraints. I spent a majority of my time doing a deep dive on React/Redux and ensuring that the code I wrote was functional and clean. 
If I had more time, I would approach step 3 by:
- Pass the `email` prop from the `Click Me` component to a new component let's call it `Frequency`. From there I would create a function that would loop through all of the emails and grab the first 3 characters after special characters and spaces have been removed. I would store that info into an object, as I loop through each array of emails I would check to see if they contain the same first 3 characters that are currently being held in the object. Then, I would ultimately loop through that object and check for matching values possibly using the `hasOwnProperty` method. Finally, I would push the results of that into an array and displays those values. This probably isn't the best solution but it would be a great starting point to get the data I need and I could always go back an refactor, MVP...right? :)

## My approach
 
I definitely had to refresh myself React and Redux so I relied on React/Redux docs ALOT. In addition to the docs, I familiarized myself with the structure of the default code that was provided and ensured that I could make a successful API call and see the results in the console. I took this approach also when passing props through components. Before trying to render anything on the page I would test using the console and the React Dev tools to make sure I had the data I wanted in the structure that I needed.

### Conclusion

As a Junior Developer I know I have a lot to learn, the great thing about being a novice is that I have an open mind, I'm flexible and I LOVE to learn! When time meets opportunity, I always seize the moment and take advantage of the learning opportunity. I would love to join a team who loves to teach just as much as I love to learn. I know my strengths and I know my weaknesses and 'm not afraid to admit when I don't know something. All in all, I'm proud of what I've been able to complete and hope that it meets at least the minimum requirements. Thanks for this opportunity and I look forward to discussing my project!




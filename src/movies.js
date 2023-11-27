// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return dirArray=moviesArray.map(currentMovie=>currentMovie.director)  
 }
 
 // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
 function howManyMovies(moviesArray) {
     const filteredMovies=moviesArray.filter(currentMovie=>
     currentMovie.director==='Steven Spielberg' && currentMovie.genre.includes('Drama'))
     return filteredMovies.length
 
 }
 
 // Iteration 3: All scores average - Get the average of all scores with 2 decimals
 function scoresAverage(moviesArray) {
 if (moviesArray.length===0){
     return 0;
 }
 const filteredScores=moviesArray.filter(currentMovie=>
     !(isNaN(currentMovie.score)))
 const totalScore=filteredScores.reduce((accumulator, currentMovie)=>accumulator+currentMovie.score,0)
 averageScore = totalScore/(moviesArray.length);
 averageScore=+averageScore.toFixed(2)
 return averageScore
 }
 
 // Iteration 4: Drama movies - Get the average of Drama Movies
 function dramaMoviesScore(moviesArray) {
   
     const filteredMovies=moviesArray.filter(currentMovie=>
         currentMovie.genre.includes('Drama'))
         if (filteredMovies.length===0){
             return 0;
         }
 
     const totalScore=filteredMovies.reduce((accumulator, currentMovie)=>accumulator+currentMovie.score,0)
     averageScore = totalScore/(filteredMovies.length);
     averageScore=+averageScore.toFixed(2)
     return averageScore
 }
 
 // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
 function orderByYear(moviesArray) {
 
  moviesCopy = moviesArray.map((x) => x);
 
  moviesCopy.sort((a,b)=>{
     if (a.year-b.year===0){ 
         return a.title.localeCompare(b.title)
     }
     else {
         return a.year-b.year 
     }
  });
 return moviesCopy;
 }
 
 // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
 function orderAlphabetically(moviesArray) {
     moviesCopy = moviesArray.map((x) => x);
     
     moviesCopy.sort((a,b)=> a.title.localeCompare(b.title))
     let sorted=moviesCopy.map(currentElement=>currentElement.title)
     return sorted.slice(0,20)
 
 }
 
 // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
 function turnHoursToMinutes(moviesArray) {}
 
 // BONUS - Iteration 8: Best yearly score average - Best yearly score average
 function bestYearAvg(moviesArray) {}
 
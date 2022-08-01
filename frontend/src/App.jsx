import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [titles, setTitles] = useState([])

  // 21 titles have the letter 'o'
  // Thunderball, Live and Let Die, The Living Daylights, Skyfall, Spectre, Never say Never Again 
  // I got these titles from https://www.pocket-lint.com/tv/news/148096-james-bond-007-best-movie-viewing-order-chronological-release
  let all_titles = [
    "Dr. No",
    "From Russia with Love",
    "Goldfinger",
    "Thunderball",
    "You Only Live Twice",
    "On Her Majesty's Secret Service",
    "Diamonds Are Forever",
    "Live and Let Die",
    "The Man with the Golden Gun",
    "The Spy Who Loved Me",
    "Moonraker",
    "For Your Eyes Only",
    "Octopussy",
    "A View To A Kill",
    "The Living Daylights",
    "License to Kill",
    "GoldenEye",
    "Tomorrow Never Dies",
    "The World Is Not Enough",
    "Die Another Day",
    "Casino Royale",
    "Quantum of Solace",
    "Skyfall",
    "Spectre",
    "No Time to Die",
    "Never Say Never Again"
  ]


  // Return a list of repeated words in the titles
  const renderTitles = () => {
    let elements = []

    let title_dict = {}

    // for (let movie_title of titles) {      // this is for the api call
    for (let movie_title of all_titles) {
      movie_title = movie_title.toLowerCase()
      let title_arr = movie_title.split(" ")
      for (let word of title_arr) {
        if (title_dict[word] === undefined) {
          title_dict[word] = 0
        }
        title_dict[word] += 1
      }
    }

    // Create items array
    var items = Object.keys(title_dict).map(function (key) {
      return [key, title_dict[key]];
    });

    // sort alphabetically first
    items.sort()

    // THEN, sort the array by word count
    items.sort(function (first, second) {
      return second[1] - first[1]
    });

    console.log(items)

    for (let i = 0; i < items.length; ++i) {
      let item = items[i]
      if (item[1] > 1) {
        elements.push(
          <p>
            <strong>{i + 1}.</strong>
            WORD:
            <strong>
              {item[0]}
            </strong>
            <br />
            COUNT: {item[1]}
          </p>
        )
      }
    }

    return (
      <div className='word_list'>
        {elements}
      </div>
    )
  }


  // on mount, send request to api
  // get all james bond titles that contain the letter o
  // const options = {
  //   method: 'GET',
  //   url: 'https://james-bond-movie-series-data.p.rapidapi.com/titles/o',
  //   headers: {
  //     'X-RapidAPI-Key': 'KEY GOES HERE',
  //     'X-RapidAPI-Host': 'james-bond-movie-series-data.p.rapidapi.com'
  //   }
  // };

  // useEffect(() => {
  //   axios.request(options).then(function (response) {
  //     console.log(response.data.data);
  //     // make a list of titles ONLY
  //     let foo = []
  //     for (let item of response.data.data) {
  //       foo.push(item.title)
  //     }
  //     console.log(foo)

  //     setTitles(foo)
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }, [])

  return (
    <div className="App">
      <h2>Words That Appear More Than Once in James Bond Film Titles</h2>
      <hr />

      {renderTitles()}
    </div>
  )
}

export default App
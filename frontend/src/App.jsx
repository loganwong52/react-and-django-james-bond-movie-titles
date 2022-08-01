import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [titles, setTitle] = useState([])

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

    // Sort the array based on the second element
    items.sort(function (first, second) {
      return second[1] - first[1];
    });

    console.log(items)

    for (let item of items) {
      if (item[1] > 1) {
        elements.push(
          <p>
            WORD: {item[0]}
            <br />
            COUNT: {item[1]}
          </p>
        )
      }
    }

    return (
      <div>
        {elements}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Words That Appear More Than Once in James Bond Film Titles</h1>

      {renderTitles()}
    </div>
  )
}

export default App
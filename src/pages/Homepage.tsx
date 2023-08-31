import React from 'react'

const Homepage = () => {

  const rawData = [
    {
    name: "Rawle",
    age: 28,
    state: "Maryland"
  },
  {
    name: "John",
    age: 40,
    state: "California"
  },
  {
    name: "Jill",
    age: 50,
    state: "New York"
  }]

  const data = rawData.map(d => ({
    name: d.name,
    age: d.age
  }))

  return (<>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <div>
      <h1> Hey there!</h1>
    </div>


    <div id="chart-container">

    </div>
    </>
  )
}

export default Homepage

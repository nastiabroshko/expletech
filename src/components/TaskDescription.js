import React from 'react'
import '../styles/task_description.css'

export default function TaskDescription() {
  return (
    <div className='main_task_description'>
      <div className='title_description'>Task Description</div>
      <p>Use API documentation from https://jsonplaceholder.typicode.com/</p>
      <p>Create SPA with ReactJS with presentations of a carousel of posts, with async loading
        comments for each post.</p>
      <p>Add the ability to add posts via a modal window with good validation.</p>
      <p>Suggestions: use MaterialUI, SemanticUI, or another modern UI framework.</p>
      <ul>
        <li>SPA should look nice and showcases your UI/UX skills.</li>
        <li>Divide the page into components. Demonstrate your architecture skills by clean
          coding patterns and designs</li>
        <li>Use store and services when working with data</li>
        <li>Add Readme File attach screenshots or video/gif which show how the application
          works</li>
      </ul>


    </div>
  )
}

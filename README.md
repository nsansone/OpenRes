# OpenRes

[See the live site here](https://openres-aa.herokuapp.com/#/)

## Background and Overview

OpenRes is a single-page, full-stack web application modeled after OpenTable that uses Ruby on Rails with a PostgresSQL database on the back-end, and React.js and Redux on the front-end. It also utilizes Amazon Web Services for image hosting and implements Google Maps API for searching based on geographical map bounds. 

![openres gif](./assets/images/openres.gif)


## Key Features

### User Authentication
  * Users can sign up, log in with an existing account, or log out
  * Users can use a demo log in to test out the site
  * Users cannot use certain features unless logged in

### Restaurants and Search
 * Restaurants can be searched by either name, location, or cuisine. Additionally, the index page can be toggled to a map that allows filtering based on the zoom of the map
 * Each restaurant page features a description, details about the restaurants, a list of reviews, a form to create a reservation, and a map showing the location of that specific restaurant 

### Reservations
  * Logged in users are able to create a reservation for a future date
  * Users are able to access their reservations in their profile, available in the dropdown of the navigational bar when the users are logged in
  * Users are able to cancel/edit existing reservations that have not already occurred
  * Users are able to write reviews for reservations that have already occurred

### Reviews 
  * Users are able to write reviews for restaurants once they are logged in
  * The review form can be accessed either on the restaurant's page or next to the user's past reservations in their profile
  * Each Restaurant shows an overall rating that updates as an average of all existing reviews
  * Each Restaurant shows a list of all existing reviews

### Accessibility Mode
  * Users can toggle to an accessibility mode from the top right corner of the app or from the dropdown in the navigational bar once logged in
  * Accessibility mode changes the font/contrasts/sizing to enhance user experience for those with visual/cognitive impairments
  * The app has been configured so that it can be navigated without a mouse, using the tab bar to access all functionality in order to increase usability for those with physical disabilities  


## Bonus

* Implement the ability to favorite restaurants and have those favorites show in the profile
* Add category joins tables for pricing, attire, tags, etc.

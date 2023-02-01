# Welcome to Yep!

[Live Link](https://yepppp.herokuapp.com/#/)

Yep is a fullstack, single page app clone of Yelp. Users will be able to utilize many familiar features, such as signing up, logging in, creating reviews, search for restaurants etc. 

## Technologies

Yep was built using the following technologies:
</br>
* <b>Frontend: React/Redux and JavaScript/JSX</b>
* <b>Backend: Ruby on Rails</b>
* <b>Database: PostgreSQL</b>
* <b>Design/Styling: HTML and CSS</b>
* <b>Image Hosting: AWS</b>
* <b>Third Party API: Google Maps JavaScript API</b>
* <b>Hosting: Heroku</b>

## Key Features

### User Authentication

* Users can signup a new account and/or login to an existing account
* Users can login as a demo user for quicker access around the site
* Errors are rendered in the event of inputting invalid credentials


### Reviews (Create, Read, Update, Delete)

* Users must be logged in to be able to write a new review, or edit/delete their existing reviews
* All users will be able to read through reviews for any business
* Errors will render if a rating or body of text aren't provided
* Submitted reviews will affect the business's overall rating, as well as any deleted reviews


### Searchbar and Filters

* Users can search for businesses by category/name for both Frontend and Backend
* Markers on the map will update according to any search query or filter
* Users can click on any of the markers to be redirected to that business's show page


### Business Show Page

* Users can view each business's various information (hours, address, rating, etc.)
* Users must be logged in to create a new review
* Users can click on the map to get directions to the business, or be redirected to the business's website by clicking on the link


### Future Improvements

* User profile where they can view all of their reviews
* Allow users to upload photos when writing a review


### To run this app
* npm start
* rails s



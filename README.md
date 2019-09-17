# OpenRes

[See the live site here](https://openres-aa.herokuapp.com/#/)

## Background and Overview

OpenRes is a single-page, full-stack web application modeled after OpenTable that uses Ruby on Rails with a PostgresSQL database on the back-end, and React.js and Redux on the front-end. It also utilizes Amazon Web Services for image hosting and implements Google Maps API for searching based on geographical map bounds. 

![openres gif](./app/assets/images/openres.gif)


## Key Features

### User Authentication
  * Users can sign up, log in with an existing account, or log out
  * Users can use a demo log in to test out the site
  * Users cannot use certain features unless logged in

  ```ruby
  class User < ApplicationRecord

    validates :email, :fname, :lname, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :reservations 

    has_many :reviews,
        foreign_key: :author_id
    
    after_initialize :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end

    def reset_session_token!
        self.update!(session_token: SecureRandom.urlsafe_base64)
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
  end
```

### Restaurants and Search
 * Restaurants can be searched by either name, location, or cuisine. Additionally, the index page can be toggled to a map that allows filtering based on the zoom of the map

```ruby
  class Restaurant < ApplicationRecord
    //...
      def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
      end

      def self.text_includes(string)
          self.where("lower(name) LIKE '%#{string.downcase}%'")
      end
    //...
  end
```
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

  ```javascript
  const RestaurantIndexItem = ({restaurant}) => {
    //...
    let totalRating = 0
    restaurant.numReviews.forEach(review => {
        totalRating += parseInt(review[1])
    })
    let averageRating = totalRating/restaurant.numReviews.length * 1.0
    
    let reviewNum = restaurant.numReviews.length !== 0 ? `(${restaurant.numReviews.length})` : ""; 
    if (restaurant.numReviews.length === 0){
        reviewWord = "No reviews yet!";
    }
    if (averageRating <= 2 && restaurant.numReviews.length !== 0){
        reviewWord = "Not amazing";
    }
    if (averageRating > 2 && averageRating < 3){
        reviewWord = "Okay";
    }
    if (averageRating >= 3 && averageRating < 4) {
        reviewWord = "Good";
    }
    if (averageRating >= 4 && averageRating < 4.7) {
        reviewWord = "Awesome";
    }
    if (averageRating >= 4.7) {
        reviewWord = "Exceptional";
    }
    //...
  };
  ```
  * Each Restaurant shows a list of all existing reviews

### Accessibility Mode
  * Users can toggle to an accessibility mode from the top right corner of the app or from the dropdown in the navigational bar once logged in

  ```javascript
  class AccessibilityHeader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {accessibility: "accessibility-visible",                     standard: "standard-hidden"}
      this.swapStyleSheet = this.swapStyleSheet.bind(this);
    }

    swapStyleSheet(sheet) {
      return e => {
        document.getElementById('theme').setAttribute('href', sheet);
        if (this.state.accessibility === 'accessibility-visible') {
          this.setState({ accessibility: 'accessibility-hidden' });
          this.setState({ standard: 'standard-visible' });
        } else {
          this.setState({ accessibility: 'accessibility-visible' });
          this.setState({ standard: 'standard-hidden' });
        }
      }
    }

    render() {
      return (
        <div className="accessibility-header">
          <button tabIndex="0" className={this.state.accessibility} onClick={this.swapStyleSheet("/assets/main_accessibility.scss")}>Switch to Accessibility Mode&nbsp;&nbsp;</button>
          <button tabIndex="0" className={this.state.standard} onClick={this.swapStyleSheet("/assets/main.scss")}>Switch to Standard Mode&nbsp;&nbsp;</button>
        </div>
      );
    }    
  }
  ```
  * Accessibility mode changes the font/contrasts/sizing to enhance user experience for those with visual/cognitive impairments
  * The app has been configured so that it can be navigated without a mouse, using the tab bar to access all functionality in order to increase usability for those with physical disabilities  

## Technologies

* React/Redux
* Ruby on Rails
* PostgreSQL
* JavaScript
* HTML5/SCSS
* Webpack
* Amazon Web Services S3
* Google Maps API

## Bonus

* Implement the ability to favorite restaurants and have those favorites show in the profile
* Add category joins tables for pricing, attire, tags, etc.

# AceBook

REQUIRED INSTRUCTIONS:

1. Fork this repository to `acebook-teamname` and customize
the below**

[You can find the engineering project outline here.](https://github.com/makersacademy/course/tree/master/engineering_projects/rails)

2. The card wall is here: <please update>

## How to contribute to this project
See [CONTRIBUTING.md](CONTRIBUTING.md)

## Quickstart

First, clone this repository. Then:

```bash
> bundle install
> bin/rails db:create
> bin/rails db:migrate

> bundle exec rspec # Run the tests to ensure it works
> bin/rails server # Start the server at localhost:3000
```

## Troubleshooting

If you don't have Node.js installed yet, you might run into this error when running rspec:
```
ExecJS::RuntimeUnavailable:
  Could not find a JavaScript runtime. See https://github.com/rails/execjs for a list of available runtimes.
 ```
That is because Rails will use a Javascript runtime (such as Node) under the hood. The easiest way is to install Node by running `brew install node` - 
and then run `bundle exec rspec` again
  
  ---------------------------------
  
## AceBook Engineering Project

<details>
  <summary> Learning Objectives </summary>

### High Level
* Diagram a high-level view of Rails MVC architecture
* Compare and contrast to another MVC framework
* Diagram the sequence of events when you run rails server
* Diagram a request and response cycle of a user interacting with the rails app

### Concepts
* Evaluate the benefits and drawbacks of convention over configuration.
* Describe the primary aspects of Rails that utilise this idiom.
* Describe the asset pipeline.
* Discuss the meaning of skinny controllers over fat controllers and skinny models over fat models and mechanisms to address these.

### What is MVC?
  #### Working with Rails models (Active Model)
* Discuss the role of migrations in relation to source code control and application versioning.
* Identify the issues that can arise when doing the following:
* Editing migrations.
* Deleting migrations.
* Using models in a migration.

#### Apply the following features of ActiveRecord:
* Validations.
* Associations.
* Scopes.

#### Understand the following features of ActiveRecord:
Callbacks.
Query interface.

### Working with Rails controllers (Action Controller)
* Understand the relationship between resources and REST.
* Understand nested routing and how to restrict resources routes using except and only.
* Describe the Rails routing process from browser request through to controller action.
* Understand how to respond to requests for different formats (e.g. HTML/ JSON) on the same route.
* Describe controller filters and how these relate to controller inheritance.

### Working with Rails views (Action View)
* Describe the relationship between link_to and Rails routing.
* Differentiate between business logic and presentation logic and understand where in Rails this code should be.
* Evaluate at least two templating languages. What does whitespace agnostic mean?
* Consider the pros and cons with Rails views and consider alternatives

### Testing
* Describe the different types of tests and their purpose you can use to test a rails app.
* Explain why most Rails web apps are feature and unit tested.
* Test a rails app with Capybara, RSpec, Cucumber, MiniTest

### Tools
* Identify and utilise the main Rails Rake tasks and generators.
* Discuss the advantages of using Rails console.

### Community
Evaluate and implement some of the most popular libraries of code from the community, e.g.:
* Devise.
* FactoryBot.
* Shoulda.

</details>

<p>&nbsp;</p>
  
## Features
  <b> User </b>
  [ ] User can sign up
  [ ] User can sign in
  [ ] User can sign out
  [ ] Browser remembers user long term
  [ ] User details are securely stored (encrypted)
  [ ] User can upload a profile picture
  [ ] User can edit personal information in settings
  [ ] User can view personal info on a profile page
 <br>
  <b> Posts </b>
  [ ] User can post updates 
  [ ] User can edit their own posts
  [ ] User can delete posts
  [ ] User can post images 
  [ ] User can view all Acebook users' posts on a main feed
  [ ] User can view all own posts on profile timeline
  [ ] User can post directly on other users' walls
  [ ] User can comment on posts
  [ ] User can like/unlike posts and comments
  [ ] User can respond to posts with emoji reacts 
  
 <br>
  <b> Additional Features </b>
  [ ] User can change between dark and light mode (selected mode persists through page refresh)
  [ ] User can search for other users
  [ ] User can add other users as friends
  [ ] User can limit public profile visibility to friends only
  [ ] User can instant message other users
<br>  

## User Stories

<details>
  <summary>USER</summary>

```
As a user
So I can join the community
I would like to sign up

As a user
So I can go on my website
I would like to login

As a user
So I can stay online
I would like to logout

As a user
So people know what I look like
I would like to add a profile picture to my account

As a user
So I don't get hacked
I would like to logout

As a user
So I can sign up easily
I would like to connect to Acebook using either my github or gmail 
```
</details>

<details>
  <summary>POSTS</summary>

```
As a user
So I can be part of the app
I would like to be able to create posts

As a user
So I can show my photography skills
I would like to upload photos

As a user
So I can interact with others
I would like to be able to leave comments on posts

As a user
So I can be identified
I would like my avatar to appear on posts and comments I make

As a user
To show my support
I would like to be able to add a like to posts and comments

As a user
I change my mind often
I would like to remove a like I have given

As a user
To modify mistakes
I would like to update my posts

As a user
To clean my profile
I would like to delete my posts and comments

As a user
So I know when posts are created
I would like to see a timestamp per post

As a user
So I am kept up to date
I would like to see posts in reverse chronological order

As a user
So I know who create posts and comments
I would like posts to link to the user who created the post

As a user
To show my friends interesting posts
I would like to share posts
```
</details>

<details>
  <summary>PROFILE</summary>

```
As a user
So I can show my individuality
I would like to personalise the theme of my profile page

As a user
To add a bit of flare
I would like to add a cover photo

As a user
So I know what posts I created
I would like my posts to appear on my profile wall

As a user
As circumstances can change
I would like to update my profile when needed
```
</details>

### Process
#### Design and Planning
- Who is it for?

- Wireframe mock ups

- Deciding colour palette

- Feature Ideation

- Breaking user stories into tickets

#### Approach

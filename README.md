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
  
  AceBook Engineering Project

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


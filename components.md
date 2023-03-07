# DATA

## DATA LAYER

- List of exercises (each exercise):

  - Name: string
  - Image url: string
  - Number of reps: number
  - Number of sets: numbers.
  - Type: string
  - Equipment: string
  - Difficulty: number
  - Duration: number
  - Description: string

## DATA MODIFICATIONS

- Load exercises to exercise list
- Delete an exercise from exercise list
- Add an exercise to exercise list
- Modify exercise properties.

# COMPONENTS

## APP

- Shows Layout page component

## LAYOUT

- Receives children components.
- Shows the header.
- Shows the navigation bar.
- Shows the children components.

## HEADER

- Shows the application logo and Navbar component.

## HOME PAGE

- Shows a hero section with a title and a description.
- Shows an exercise list component.

## DETAIL PAGE

- Shows layout component.
- Receives an exercise.
- Shows an exercise card.
- Shows the name of the exercise.
- Shows an image of the exercise.
- Shows the number of reps of the exercise.
- Shows the number of sets of the exercise.
- Shows the type of the exercise.
- Shows the equipment needed for the exercise.
- Shows the difficulty of the exercise.
- Shows the duration of the exercise.
- Shows the muscles worked of the exercise.
- Shows a button to edit the exercise.
- Shows a button to delete the exercise.

## LOGIN PAGE

- Shows layout component.
- Shows a login form component with email and password inputs.
- Shows a button to submit the form.
- Redirects to home page on successful login.
- Shows a link to the register page.

## REGISTER PAGE

- Shows layout component.
- Shows a registration form component with name, email, password, and confirm password inputs.
- Shows a button to submit the form.
- Redirects to home page on successful registration.
- Shows a link to the login page.

## CREATE EXERCISE PAGE

- Shows layout component.
- Shows a form component to add a new exercise.
- Shows a button to submit the form.
- Redirects to home page on successful exercise creation.

## EDIT EXERCISE PAGE

- Shows layout component.
- Receives an exercise.
- Shows a form component to edit the exercise.
- Shows a button to submit the form.
- Redirects to detail page on successful exercise edit.

## NAV BAR

- Shows links to home, favourites, create, modify.
- Shows a link to create a new exercise page if the user is logged in.

## HERO SECTION

- Receives a title and a description.
- Shows a title.
- Shows a description.

## EXERCISE LIST

- Receives a list of exercises.
- Shows a list of exercise card components.
- Sends an exercise card component for every exercise in the list of exercises.

## EXERCISE CARD

- Receives an exercise.
- Shows the name of the exercise.
- Shows an image of the exercise.
- Shows a button to edit the exercise.
- Shows a button to delete the exercise.

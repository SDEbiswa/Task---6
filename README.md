# Task---6
 Contact Form and Validate Inputs Using JavaScript

1. HTML (index.html) – Structure of the Form
   This file builds the core layout of your contact form using standard HTML5:

   Key Elements:
  <form> tag with id="contactForm" — lets JavaScript access and control the form.

   Three main fields:

   -> Name: <input type="text">
   -> Email: <input type="email">
   -> Message: <textarea>

    A Submit button: <button type="submit">

    <div>s for showing error messages under each input field.

    A <div> to show a success message when the form is valid.

    It links to:
    styles.css for styling
    script.js for validation logic

 2. CSS (styles.css) – Styling the Form
    This file styles the form for clarity and a clean user experience:

    Key Styling Features:
    The form is centered and styled with a white background, padding, and a box shadow.

    Inputs and textareas:

    -> Full-width
    -> Rounded borders
    -> Clear font size and spacing

     Error messages:
    -> Colored red and placed just under the inputs.

     Success message:
    -> Colored green, shown after a successful form submission.

     Button:
    -> Styled with a blue color, hover effect, and padding for clarity.

3.   JavaScript (script.js) – Validation Logic
     This file adds client-side validation to your form:

     What It Does:
     -> Selects the form and input elements using document.getElementById(...).

     Defines a regular expression (regex) for email validation:

     -> /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     This checks for a basic structure like user@example.com.
     listens for the submit event on the form.

     On submission:

     Prevents default submission using event.preventDefault().
     Clears previous error/success messages.

     Checks:
     -> If Name is empty → show error
     -> If Email is empty or invalid → show error
     -> If Message is empty → show error

     If all inputs are valid:
     -> Shows a success message
     -> Resets the form using form.reset()




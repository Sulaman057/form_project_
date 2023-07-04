# Form Validation Project

This project is a web application built with Next.js, Formik, and Yup to provide form validation functionality. It allows users to submit a form with various fields while ensuring the accuracy and integrity of the entered data. The form includes validations for name, email, date of birth, checkboxes, radio buttons, and a dropdown for country selection. It also features responsive design for optimal user experience across different devices.


## Features

- **Name Validation:** The name field is limited to a maximum of 20 characters to ensure proper input length.
- **Email Validation:** The email field enforces a valid email format to prevent incorrect entries.
- **Date of Birth (DOB) Validation:** The calendar field captures the user's date of birth. If the user is under 18 years old, an error message is displayed, indicating that they must be at least 18 years old to submit the form.
- **Checkbox Validation:** Users must check the terms and conditions and privacy policy checkboxes to proceed with form submission.
- **Radio Buttons for Gender Selection:** Radio buttons provide an intuitive interface for users to select their gender.
- **Dropdown for Country Selection:** A dropdown menu allows users to select their country from a predefined list, ensuring accurate data capture.
- **Error Handling:** Empty fields or inputs that do not meet validation criteria trigger appropriate error messages.

## Technologies Used

- Next.js
- Formik
- Yup
- HTML
- Tailwind CSS

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Acknowledgements

- Visit this form validation project: [https://form-validation-bysulaman.vercel.app/](https://form-validation-bysulaman.vercel.app/)
- Next.js: [https://nextjs.org/](https://nextjs.org/)
- Formik: [https://formik.org/](https://formik.org/)
- Yup: [https://github.com/jquense/yup](https://github.com/jquense/yup)

"use client"
import { useFormik } from "formik";
import * as  Yup from "yup"

const Form = () => {

  const {values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting, setSubmitting} = useFormik({
    initialValues: {
      name: "",
      email: "",
      dob: "",
      gender: "",
      country: "",
      terms: "",
      privacyPolicy: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().max(20, "Your name must be with in 20 characters").required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is requied"),
      dob: Yup.date().required("Date of birth is required").test("DOB","Your age must be 18 or above", function (values){ 
        const currentDate = new Date();
        const selectedDate = new Date(values);
        const timeDiff = Math.abs(currentDate.getTime() - selectedDate.getTime());
        const ageInYears = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
        return ageInYears >= 18 ;
      }),
      gender: Yup.string().required("Select gender"),
      country: Yup.string().required("Please select a country"),
      terms: Yup.boolean().required("Terms and conditions must be checked").oneOf( [true], "Terms and conditions must be checked"),
      privacyPolicy: Yup.boolean().required("Read privacy policy must be checked").oneOf( [true], "Read privacy policy must be checked")
    }),

    onSubmit:  (values) => {
      console.log("form submitted"); 
      console.log(values);
      // await new Promise((resolve) => setTimeout(resolve, 30000))
      // setSubmitting(false);
      // actions.resetForm();
    }

  });

  return (
    <form
     onSubmit={handleSubmit}
     className='py-7 px-5 md:px-20 sm:px-10 sm:py-20  bg-stone-300 shadow-md flex items-center rounded-lg max-w-sm mx-auto my-auto  md:max-w-xl md:my-20 sm:max-w-lg sm:my-10  '
    >
      {
        isSubmitting ?
          <div className=' w-full '>
            <h1 className='text-4xl text-stone-800 pb-2 font-semibold'>Thank you {values.name}</h1>
            <h2 className='text-xl text-stone-600 font-semibold'>for subscribing premium package</h2>
            <div className="mt-6">
            <p className='text-lg text-stone-600'>We have sent you a link at your given email address: {values.email}</p>

            </div>
          </div>
         :
          <div className=' w-full '>
              <h1 className='text-4xl text-stone-800 pb-2 font-semibold'>Welcome</h1>
              <p className='text-lg text-stone-600'>Register to get premium package</p>


              <div className='mt-6'>

                {/* name */}

                <div className='pb-4'>
                  <label 
                  className={` mb-2 block ${touched.name && errors.name ? "text-red-400" : "text-stone-900"}`}
                  htmlFor="name"
                  >
                    {touched.name && errors.name ? errors.name : "Name"}
                  </label>
                  <input
                    className='p-2 w-full text-stone-600 shadow-lg rounded-md focus:outline-none focus:shadow-outline'
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                  />
                </div>

                {/* email */}

                <div className='pb-4'>
                  <label htmlFor="email" className={`mb-2 block ${touched.email && errors.email ? "text-red-400" : "text-stone-900"}`}>
                    {touched.email && errors.email ? errors.email : "Email"}
                  </label>
                  <input
                    className='p-2 w-full text-stone-600 shadow-lg rounded-md focus:outline-none focus:shadow-outline'
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                  />
                </div>

                {/* DOB */}

                <div className='pb-4'>
                  <label htmlFor="dob" className={`mb-2 block ${touched.dob && errors.dob ? "text-red-400" : "text-stone-900"}`}>
                    {touched.dob && errors.dob ? errors.dob : "DOB"}
                  </label>
                  <input
                    className='p-2 w-full text-stone-600 shadow-lg rounded-md focus:outline-none focus:shadow-outline'
                    type="date"
                    name="dob"
                    onChange={handleChange}
                    value={values.dob}
                    onBlur={handleBlur}
                  />
                </div>

                {/* radio male or female */}

                <div className='pb-4 my-2 flex flex-col'>
                  <p className="mb-2 block text-red-400">{touched.gender && errors.gender ? errors.gender : ""}</p>
                  <div>
                    <div className='mr-4 flex items-center' >
                      <input
                        className='m-2 w-4 h-4'
                        type="radio"
                        name="gender"
                        value="male"
                        checked={values.gender=="male"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      /><p>Male</p>
                    </div>
                    <div className='mr-4 flex items-center'>
                      <input
                        className='m-2 w-4 h-4'
                        type="radio"
                        name="gender"
                        value="female"
                        checked={values.gender=="female"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      /><p>Female</p>
                    </div>
                  </div>
                </div>

                {/* country */}

                <div className='pb-4'>
                  <p className="mb-2 block text-red-400">{touched.country && errors.country ? errors.country : ""}</p>
                  <select
                    className='p-2 w-full text-stone-600 shadow-lg rounded-md focus:outline-none focus:shadow-outline'
                    type="dropdown"
                    name="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select your country</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="india">India</option>
                    <option value="united_states">United States</option>
                    <option value="united_kingdom">United Kingdom</option>
                    <option value="canada">Canda</option>
                  </select>
                </div>

                {/* checkboxes for terms and conditions */}

                <div className='my-4'>
                  <div className='mb-1 flex items-center' >
                    <input
                      className='h-4 w-4'
                      type='checkbox'
                      name='terms'
                      onChange={handleChange}
                      value={values.terms}
                      onBlur={handleBlur}
                    />
                    <p className={`inline ml-2 ${touched.terms && errors.terms ? "text-red-400" : "text-stone-900"}`} >{touched.terms && errors.terms ? errors.terms : "I agree to the Terms & Conditions."}</p>
                  </div>
                  <div className='flex items-center'>
                    <input
                      className='h-4 w-4'
                      type='checkbox'
                      name='privacyPolicy'
                      onChange={handleChange}
                      value={values.privacyPolicy}
                      onBlur={handleBlur}
                    />
                    <p className={`inline ml-2 ${touched.privacyPolicy && errors.privacyPolicy ? "text-red-400" : "text-stone-900"}`} >{touched.privacyPolicy && errors.privacyPolicy ? errors.privacyPolicy : "I have read Privacy Policy."}</p>
                  </div>
                </div>

                {/* button */}

                <button
                  type="submit"
                  className='bg-stone-500 text-stone-300 p-3 w-full rounded-lg mt-4 hover:text-stone-500 hover:bg-stone-100 '
                >
                  Submit form
                </button>

              </div>
          </div>

        
        



        
      }
    </form>
  )
}

export default Form

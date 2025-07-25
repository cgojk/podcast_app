
export default function FormsContact() {
 function signUp(formData) {
    const FirstName = formData.get("name")
    const LastName = formData.get("lastname")
    const email = formData.get("email")
    const employmentStatus = formData.get("employmentStatus")
    console.log(employmentStatus)
  }



  return (
    <section className="container">
      <h1>Signup form</h1>
      <form action={signUp}>

         <label htmlFor="name">Name:</label>
        <input id="name" defaultValue="Carolina" type="name" name="name" aria-label="name"placeholder="Carolina" />

         <label htmlFor="lastname">last name:</label>
        <input id="lastname" defaultValue="Gonzalves" type="name" name="name" aria-label="name"placeholder="Carolina" />

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" aria-label="Name"placeholder="joe@schmoe.com" />
        
        <label htmlFor="description">Message:</label>
        <textarea id="description" name="message" defaultValue="This is a description"></textarea>

        
        <button className="button_submit">Submit</button>

      

      </form>
    </section>
  )
}





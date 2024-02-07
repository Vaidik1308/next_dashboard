import React from 'react'

const page = () => {
    const handleForm = async (formData) => {
        "use server"
        console.log(formData);
        console.log("server actions");
        const username = formData.get("username")
        console.log(username);
        // alert("Server actions")
    }
  return (
    <div>
        <form action={handleForm}>
            <input type="text" name="username" id="" />
            <button>Send</button>
        </form>
    </div>
  )
}

export default page
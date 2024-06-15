// import login from "./backend/controllers/auth";
// import router from "./backend/routes/user";
//         try {
//             const response = fetch("{BASE_URL}/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ username, password })
//             });
    
//             // Assuming the API returns JSON data
//             const data = response.json();
    
//             // Assuming the API returns a token upon successful sign-in
//             if (response.ok) {
//                 // Token is stored in localStorage for future use
//                 localStorage.setItem("token", data.token);
//                 // Redirect to a new page or do something else upon successful sign-in
//                 window.location.href = "dashboard.html";
//             } else {
//                 // Display an error message to the user if sign-in fails
//                 alert(data.message);
//             }
//         } catch (error) {
//             console.error("Error during sign-in:", error);
//             // Display a generic error message if an unexpected error occurs
//             alert("An error occurred during sign-in. Please try again later.");
//         }


document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // const username = document.getElementById('username').value;
    // const password = document.getElementById('password').value;

    // const savedUserResponse = await fetch(
    //     `${process.env.REACT_APP_BASE_URL}/login`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ ...data }),
    //     }
    //   );
  
    //   console.log("FORM RESPONSE......", savedUserResponse);
  
    //   navigate("/")
});


//--------------------------------------------------------------------



const handleSignup = async (data) => {

    const savedUserResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );

    console.log("FORM RESPONSE......", savedUserResponse);

    navigate("/")
}





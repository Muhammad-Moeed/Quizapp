let savedEmail = '';
let savedPassword = '';
let savedUsername = '';

// ********************Sign up *****************

function signup() {
  savedUsername = document.getElementById('signupUsername').value;
  savedEmail = document.getElementById('signupEmail').value;
  savedPassword = document.getElementById('signupPassword').value;

  swal({
    title: "Signup Successful!",
    text: `Welcome, ${savedUsername}! Your account has been created.`,
    icon: "success",
    button: "OK",
  });
  console.log('User Information:', {
    username: savedUsername,
    email: savedEmail,
    password: savedPassword
  });

  return false; // Prevent form submission and page reload
}

//********************* */ Login ***********************

function login() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
  
    if (loginEmail !== savedEmail) {
      swal("Error!", "Invalid email!", "error");
    } else if (loginPassword !== savedPassword) {
      swal("Error!", "Invalid password!", "error");
    } else {
        swal({
            title: "Success!",
            text: "Login successful!",
            icon: "success",
            button: "OK",
          }).then(() => {
            localStorage.setItem('username', savedUsername);
            window.location.href = "./routes/welcome.html";
          });
      
          console.log("Logged in User:", {
            username: savedUsername,
            email: savedEmail,
          });
      console.log("Logged in User:", {
        username: savedUsername,
        email: savedEmail,
      });
    }
  
  
  return false;
}

// *****************************Logout ***********************

function logout() {
    savedEmail = '';
    savedPassword = '';
    savedUsername = '';
  
    swal({
      title: "Logged Out",
      text: "You have been successfully logged out.",
      icon: "info",
      button: "OK",
    }).then(() => {
      window.location.href = "../../index.html";
    });
  
    console.log("User logged out");
  }

  const username = localStorage.getItem('username');
document.getElementById('name').innerHTML = `
${username}
`
const username1 = localStorage.getItem('username');
document.getElementById('myname').innerHTML = `
Welcome , ${username}
`

// ********************Redirect pages *********************

function webdev(){
    window.location.href = "./webdev/index.html";
}
function python(){
  window.location.href = "./python/index.html";
}
function module(){
  window.location.href = "./module/index.html";
}

//*********************** */ Redirect Quiz Window*******************
function htmlcss(){
  window.location.href = "./htmlcss.html";
}

function js(){
  window.location.href = "./js.html";
}




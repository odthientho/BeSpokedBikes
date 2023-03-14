const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector('#authentication-login-email').value.trim();
  const password = document.querySelector('#authentication-login-password').value.trim();  
  if (email && password) {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }, 
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  } else alert("Please input your email and password.");
};

document
  .querySelector('#authentication-login-submit')
  .addEventListener('click', loginFormHandler);
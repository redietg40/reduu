       const form = document.getElementById('form');
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const female = document.getElementById('female');
        const male = document.getElementById('male');
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/;
        const erroremail = document.getElementById('erroremail');
        const errorpassword = document.getElementById('errorpassword');
        const errorname = document.getElementById('error');
        const errorsex = document.getElementById('errorsex');

        [name, email, password].forEach(input => {
            input.addEventListener('input', () => {
                errorname.innerHTML = "";
                erroremail.innerHTML = "";
                errorpassword.innerHTML ="";
                errorsex.innerHTML = "";
            });
        });

        form.addEventListener('submit', (event) => {
            let valid = true; 

            if (name.value === "" || name.value === "null") {
                event.preventDefault(); 
                errorname.innerHTML = "Please enter your name.";
                valid = false;
            }
            if (email.value === "" || email.value === "null") {
                event.preventDefault(); 
                erroremail.innerHTML = "Please enter your email.";
                valid = false;
            }

            if (password.value === "" || password.value === "null") {
                event.preventDefault(); 
                errorpassword.innerHTML = "Please enter your password.";
                valid = false;
            } else if (!passwordRegex.test(password.value)) {
                event.preventDefault();
                errorpassword.innerHTML = "Password must fulfill the rule (uppercase, lowercase, number, symbol).";
                valid = false;
            }

            if (!(female.checked || male.checked)) {
                event.preventDefault(); 
                errorsex.innerHTML = "Please select your gender.";
                valid = false;
            }

        });
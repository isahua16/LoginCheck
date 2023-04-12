function log_in_user(event)
{
    if(document.querySelector(`#error_message`))
    {
        document.querySelector(`#error_message`).remove();
    }

    let user_email = document.querySelector(`#email_input`)[`value`];
    let user_password = document.querySelector(`#password_input`);

    axios.request(
        {
            method: `POST`,
            url: `https://reqres.in/api/login`,
            data: {
                email: user_email,
                password: user_password
            }
        }
    ).then(log_in_success).catch(log_in_error);
}

function log_in_success(res)
{
    Cookies.set(`auth`, res[`data`][`token`]);
    window.location = `/pages/logout.html`;
}

function log_in_error(err)
{
    login_button.insertAdjacentHTML(`afterend`, `<h4 id="error_message">There was an error.</h4>`);
}

let login_button = document.querySelector(`#submit`);
login_button.addEventListener(`click`, log_in_user);
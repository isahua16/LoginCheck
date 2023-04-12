function log_out_user(event)
{
    
    if(document.querySelector(`#error_message`))
    {
        document.querySelector(`#error_message`).remove();
    }
    
    axios.request(
        {
            method: `DELETE`,
            url: `https://reqres.in/api/users/2`,
            data: {
                token: auth_token
            }
        }
        ).then(log_out_success).catch(log_out_error);
        Cookies.remove(`auth`);
}

function log_out_success(res)
{
    window.location(`/index.html`);
}

function log_out_error(err)
{
    document.querySelector(`#title`).insertAdjacentHTML(`afterend`, `<h4 id="error_message">An error occured.</h4>`)
}

let auth_token = Cookies.get(`auth`);
if (auth_token === undefined)
{
    window[`location`] = `/index.html`;
}
else
{
    document.querySelector(`#title`).insertAdjacentHTML(`afterend`, `<button id="logout_button">Logout</button>`);
    document.querySelector(`#logout_button`).addEventListener(`click`, log_out_user);
}

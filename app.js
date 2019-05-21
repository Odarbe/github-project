//Init Github
const github = new Github();

const ui = new UI();



// Search input

const searchUser = document.getElementById('searchUser');

//Search input event  listener
searchUser.addEventListener('keyup',(e) => {
    
    //Get input Text
    const userText = e.target.value;
    if(userText !== '') {
        // console.log(searchUser);
        github.getUser(userText)
        .then(data => {
            // console.log(data);
            if(data.profile.message === 'Not Found') {

                //Show alert
                ui.showAlert('User not found', 'alert alert-danger');
                ui.clearProfile();

            } else {
                //show Profile
                ui.showProfie(data.profile);
                ui.showRepos(data.repos);
            }
        });

    } else {
        //clear
        ui.clearProfile();

    }
});
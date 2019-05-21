class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfie(user) {
        //console.log(user);
        this.profile.innerHTML =`
        
        <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3"><img src="${user.avatar_url}" alt="" class="img-fluid mb-2"><a href="${user.html_url}"target='_blank' class="btn-primary">View Profile</a></div>
             
      

    <div class="col-md-9"><span class="badge badge-primary"> Public Repos: ${user.public_repos}</span>

            <span class="badge badge-secondary" >Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers Gists: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>


            <ul class="list group">
                <li class="list-group-item">Company:${user.company}</li>
                <li class="list-group-item">website/Blog:${user.blog}</li>
                <li class="list-group-item">location:${user.location}</li>
                <li class="list-group-item">Member Since:${user.created_at}</li>
            </ul>
        </div>

    </div>
</div>

<h3 class="page-heading mb-3">lastest Repos</h3>
<div id="repos"></div>
        
        
        `;
    }

    showRepos(repos) {
        let output = '';
        // console.log(repos);

        repos.forEach(res => {
            output += `
            
            <div class="card card-body mb-2">
             <div class="row">
                 <div class="col-md-6">
                     <a href="${repos.html_url}"target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6"><span class="badge badge-primary">Stars: ${repo.stargazer_count}</span></div>
                   
                    <div class="col-md-6"><span class="badge badge-secondary">Watcher: ${repo.stargazer_count}</span></div>
                    
                    <div class="col-md-6"><span class="badge badge-primary">Fork: ${repo.stargazer_count}</span></div>
                    </div>
             </div>

            `;
        });

        document.getElementById('repos')
    }

    //show alert message
    showAlert(message, className) {

        this.cleartAlert();

        //Create div
        const div = document.createElement('div');

        //Add class
        div.className = className;

        // add text
        div.appendChild(document.createTextNode(message));

        //Get Parent
        const container = document.querySelector('.searchContainer');

        // Get search box
        const search = document.querySelector('.search');

        //Insert Alert
        container.insertBefore(div, search);

        // Timeout after 3s
        setTimeout(() => {
            this.cleartAlert();
        }, 3000);
    }

    cleartAlert(){
        const currenAlert = document.querySelector('.alert');
        if(currenAlert){
            currenAlert.remove();

        }
    }

    // Clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}
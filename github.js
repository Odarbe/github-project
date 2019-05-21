class Github {
    constructor() {
        this.client_id = 'f4212a51314204e9b224';
        this.client_secret = 'e52fed722d327572b297d1fa97aab9fe2ad2b4a3';

        this.repos_count = 5;
        this.repos_sort = 'create: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/user/${user}/repos?per_pages=${this.repos_count}&sort${this.repos_sort}&client_secret=${this.client_secret}`);

        

        const profile = await profileResponse.json();
        const repos = await profileResponse.json();

    return {
        profile, repos
    };
}
}
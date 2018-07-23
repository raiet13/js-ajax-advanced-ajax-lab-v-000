function getRepositories() {
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}


// ** NOTE : Uses Handlebars template
function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  const src = document.getElementById("repository-template").innerHTML
  const template = Handlebars.compile(src)
  const repoList = template(repos)
  document.getElementById("repositories").innerHTML = repoList
}

// ** NOTE : Added Handlebars partial
document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});


// ** NOTE : Uses string interpolation
// function showRepositories(event, data) {
//   const repos = JSON.parse(this.responseText)
//   const repoList = '<ul>' + repos.map(r => {
//   return (`
//           <li>
//             <h2><a href="${r.html_url}">${r.name}</a></h2>
//             <p>Watchers: ${r.watchers_count}</p>
//             <p>Forks: ${r.forks_count}</p>
//             <p>Issues: ${r.open_issues_count}</p>
//           </li>`
//           )
//   }).join('') + "</ul>"
//   document.getElementById("repositories").innerHTML = repoList
// }


// ** NOTE : Uses string concatenation
// function showRepositories(event, data) {
//   const repos = JSON.parse(this.responseText)
//   const repoList = `<ul>${repos.map(r => '<li>' + r.name + '</li>').join('')}</ul>`
//   document.getElementById("repositories").innerHTML = repoList
// }

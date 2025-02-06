const posts = [{}]

$.ajax({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts",
}) .done(function(response){
  renderData(response)
}).fail(function(error){
  renderError()
})

function renderData(response){
  posts.pop(0)
  response.forEach(element=>{
    posts.push(element)
  })
}

  function getId(posts) {
    const result = new Array
    posts.forEach(element => {
      result.push(element.id)
    });
    console.log(result)
  }

  function getPostsThatContainNamInTheirTitle(posts){
    const newPosts = new Array(posts)
    posts.forEach(element => {
      if(element.title.includes("nam")) newPosts.push(element)
    });
    console.log(newPosts)
  }

  function getIdAndTitleAsNewObject(posts){
    const newPosts = [{}]
    newPosts.pop(0)
    posts.forEach(element => {
      newPosts.push({
        id: element.id,
        title: element.title
      })
    })
    console.log(newPosts)
  }

  function getSumOfAllId(posts){
    let sum = 0
    posts.forEach(element =>{
      sum = sum + element.id
    })
    console.log(sum)
  }
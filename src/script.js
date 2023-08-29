const addPageBtn = document.getElementById("addPageBtn");
const blogs = document.getElementById("blogs");
const submitBlog = document.getElementById("submit-blog");
let defaultPost = [
  {
    blogUrl:
      "https://cdn.pixabay.com/photo/2016/11/19/22/25/html5-1841458_640.png",
    title: "HTML",
    description:
      "HTML, which stands for HyperText Markup Language, is the foundational language used to create and structure content on the World Wide Web.",

    write:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
  },
  {
    blogUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png",
    title: "JavaScript",
    description: "About JavaScript",
    write:
      "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior,[10] often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users",
  },
  {
    blogUrl:
      "https://cdn.pixabay.com/photo/2016/11/19/23/00/css3-1841590_640.png",
    title: "CSS",
    description: "About CSS",
    write:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]",
  },
];


const defaultData = JSON.parse(localStorage.getItem('defaultPost'))
// console.log(defaultData);
if(!defaultData){
  let data = localStorage.setItem('defaultPost',JSON.stringify(defaultPost))
  console.log(data);

}

submitBlog.addEventListener("click", (event) => {
  let blogUrl = document.getElementById("blogUrl").value;
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let write = document.getElementById("write").value;

  if(!blogUrl || !title || !description || !write){
    alert('All field Required !')
    return new Error('All field Required !')
  }



  let userData = JSON.parse(localStorage.getItem("defaultPost")) ?? [];
  userData.push({
    blogUrl: blogUrl,
    title: title,
    description: description,
    write: write,
  });


  localStorage.setItem("defaultPost", JSON.stringify(userData));
  
  event.preventDefault();

  displayCard();
});
// data()

function displayCard() {
try {
  
  let userData = JSON.parse(localStorage.getItem("defaultPost")) ?? [];
  console.log(userData);
  let finaldata = "";
  userData.forEach((element, index) => {
    // console.log(element.title);
    finaldata += `
            <div class="demo-blog-box drop-in">
            <img src="${element.blogUrl}" alt="blog-1" width="160px" height="160px">
            <h2>Blog Title: ${element.title}</h2>
            <p>${element.description}</p>
            <div class="delete-readBtn">
            <button class="spn read-del" onclick='removeData(${index})'> Delete </button>
            <button class="read"><a href="./src/blog/blog.html?post=${index}">Read More</a></button>

                </button>
                </div>
                </div>
                `;
    blogs.innerHTML = finaldata;
  });
  

} catch (error) {
  console.log(error);
}


}

let removeData = (index) => {
  //    alert(index)
  let userData = JSON.parse(localStorage.getItem("defaultPost")) ?? [];
  userData.splice(index, 1);

  localStorage.setItem("defaultPost", JSON.stringify(userData));

  displayCard();


};


displayCard();

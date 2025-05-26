// (
//     async function () {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// json data url: https://jsonplaceholder.typicode.com/posts

// function without_async(){
    
//     fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//     // .then((res)=> {   console.log(res);  });  method first by defaut
//     .then((res)  => {
//        return res.json();  // first line convert to data in a json formets
//     })
//     .then((finaldata)=> {
//         console.log('Customer ID:-' ,finaldata[1].id);  
//         console.log('This is Title:-' ,finaldata[1].name);
//         console.log('This is body text:-',finaldata[1].email);
//         console.log('User ID:-' ,finaldata[1].postId);  
//     }) // this line get all data uo the finaldata variable
//     .catch((error)=>{
//         console.log('Data is not found', error);
//     })
// }
// without_async();

const Userdata = ['Pranshu', 'Himanshu', 'Hirsh'];

Userdata.push('Ram');

console.log(Userdata);

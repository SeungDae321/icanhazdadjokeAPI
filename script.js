const button = document.querySelector('button');
const ul = document.querySelector('ul');


const getSomeJokes = async()=>{
    const header = {headers:{Accept:"application/json"}}
    const res = await axios.get('https://icanhazdadjoke.com', header);
    const li = document.createElement('li');
    li.append(res.data.joke);
    ul.append(li);
};


button.addEventListener('click',()=>{
    getSomeJokes()
})
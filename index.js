const url = 'https://swapi.dev/api/people/?search='
let id;
async function getData(){
    let query = document.getElementById('query').value
    let data = await fetch('https://swapi.dev/api/people/?search='+query)
     data = await data.json()
     return data.results
}

function append(data){
    let container = document.getElementById('results')


    data.slice(0, 7).forEach(el => {
        var card = document.createElement('div')
        var left = document.createElement('div')
        var right = document.createElement('div')
        var name = document.createElement('p')
        var yob = document.createElement('p')
        var gender = document.createElement('p')


        card.className = 'result'
        left.className = 'left'
        right.className = 'right'
        name.className = 'name'
        yob.className = 'yob'
        gender.className = 'gender'

        // functions

        card.onmouseover =()=>{
            name.style.color = '#FEEB01'
        }
        card.onmouseout=()=>{
            name.style.color = 'white'
        }

        card.addEventListener('click',()=>{
            localStorage.setItem('charecter', JSON.stringify(el))
            location.href = '/'
        })


        name.innerText = el.name
        yob.innerText = el.birth_year
        gender.innerText = el.gender

        left.append(name,yob)
        right.append(gender)
        card.append(left,right)
        container.append(card)
    });
}

async function main(){
    let data = await getData();

    append(data)
}


function debouncing(event,delay){
    console.log(id)
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        event()
    },delay)
}
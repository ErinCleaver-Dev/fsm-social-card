var index = 0;

async function loadCard () {
    let resp = await fetch('https://erincleaver-grcc.github.io/card-json/card.json')
    
    console.log(resp)

    let result = await resp.json();
    console.log(result)
    let load_card = document.getElementById('loadmore');
    let cardsTemplate = Handlebars.compile(
        document.getElementById("cardsTpl").innerHTML);
    const change_card = () => { 
        console.log('changing...');
        console.log(index)
    
       

        if(index < result['cards'].length){
             document.getElementById("social-card").innerHTML = cardsTemplate(result['cards'][index]);
        }
       //0
       //1
       //2 -> 0

       if(index >= result['cards'].length-1){
        index = 0 ;
       } else {
            index++;
       }


    }
    setTimeout(change_card, 1000)

    load_card.onclick =  change_card;


  }
  
  loadCard()
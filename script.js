var lots = new Set()
let container=document.querySelector('#searchResultsRows')


//function next_page(){
//	document.querySelector('.next_page').click()
//}


function test(){
	//if(document.querySelector('#beautiful-button') == null){
	//	document.querySelector('.control_panel_2>.block_1').insertAdjacentHTML('afterend', '<button id="beautiful-button" type="button" name="next" OnClick="next_page();">дальше</button>')
	//}
	
	document.querySelector('#mainContents').setAttribute('style', '')

	for (let i of document.querySelector('#searchResultsRows').children){
		if (i.hasAttribute('style')){
			if (i.style.background.includes('linear-gradient') == false){
				i.style.visibility='hidden'
				i.style.display="none"
			}
			else{
				lots.add(i)
			}
		}
		
	}


	//if(document.querySelector('.sih_pagination>.buttons>.info').innerText.split(' ')[0] % 5 == 0){
	//	//container.children.splice(1).style.visibility='hidden'
	//	//container.children.splice(1).style.display='none'
	//	//document.querySelector('#searchResultsRows').appendChild(lots)
	//	for(lot of lots){
	//		console.log(lot)
	//		document.querySelector('#searchResultsRows').appendChild(lot)
	//	}
	//}
	if(document.querySelector('.sih_pagination>.buttons>.info').innerText.split(' ')[0] % 5 != 0){
		document.querySelector('.next_page').click()
	}


	for(lot of lots){
		for(let i of document.querySelector('#searchResultsRows').children){
			if (lot.getAttribute('id') != i.getAttribute('id')){
				document.querySelector('#searchResultsRows').appendChild(lot)
			}
		}
	}
}

setInterval(test, 5000) // задержка шоб работало после 'steam inventory helper'



//let weapons=document.querySelector('#searchResultsRows').children
//
//function test(){
//	for(w of weapons){
//	console.log(w.querySelector('.itemfloat>span'))
//	}
//}
//
//setTimeout(test, 30)


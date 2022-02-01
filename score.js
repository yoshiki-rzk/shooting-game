function score(){
	var array = localStorage.getItem("score");
	
	if (array === null){
		array = [];
		displayscore.innerHTML="プレイ履歴がありません"
	}else {
		//ランキング上
		var table = document.getElementById('Table');
		
		var newRow = table.insertRow();
		/*
		newCell = newRow.insertCell();
		newText = document.createTextNode('　ランキング　');
		newCell.appendChild(newText);
		*/
		
		newCell = newRow.insertCell();
		newText = document.createTextNode('　スコア　');
		newCell.appendChild(newText);

		newCell = newRow.insertCell();
		newText = document.createTextNode('　プレイ時間　');
		newCell.appendChild(newText);
		array = JSON.parse(array);

		//ランキング書き込み
		for(var i=0;i<array.length;i++){
			table = document.getElementById('Table');
				newRow = table.insertRow();
				
				/*
				newCell = newRow.insertCell();
				newText = document.createTextNode(i+1+'位');
				newCell.appendChild(newText);
				*/

				newCell = newRow.insertCell();
				newText = document.createTextNode(array[i].score+'点');
				newCell.appendChild(newText);

				newCell = newRow.insertCell();
				newText = document.createTextNode(array[i].time);
				newCell.appendChild(newText);
			}
			
	}
}


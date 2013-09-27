var playerTurn=1;

	
// Checks for winner
function navCells(){
	var cellArray = [["", "", ""], ["", "", ""], ["", "", ""]];
	for(r=0;r<=2;++r)
	{
		for(c=0;c<=2;++c)
		{
			cellArray[r][c] = 
			document.getElementById("cell"+(r+1)+"_"+(c+1)).innerHTML;
			// document.getElementById("cell"+(r+1)+"_"+(c+1)).onclick = 
			// function()
		}	
	}
	for(x=0;x<=2;++x)
		{
		if(cellArray[0][x] == cellArray[1][x] &&
		cellArray[1][x] == cellArray[2][x] && 
		cellArray[0][x] != "")
		alert(cellArray[0][x] + " won in column " + (x+1));

		if(cellArray[x][0] == cellArray[x][1] &&
		cellArray[x][1] == cellArray[x][2] && 
		cellArray[x][0] != "")
		alert(cellArray[x][0] + " won in row " + (x+1));

		}
		// hard code the diagonal to right
		if(cellArray[0][0] == cellArray[1][1] &&
		(cellArray[1][1] == cellArray[2][2]) && 
		cellArray[0][0] != "")
		alert(cellArray[0][0] + " won in diagonal to right ");

		// hard code the diagonal to the left
		if(cellArray[0][2] == cellArray[1][1] &&
		(cellArray[1][1] == cellArray[2][0]) && 
		cellArray[2][2] != "")
		alert(cellArray[0][0] + " won in diagonal to left ");
}
// Makes the X's and O's appear
function playBox(){
	if (event.target.innerHTML.length > 0)
		false
	else if	(playerTurn%2==0){
		event.target.innerHTML="X"}
	else 
		{event.target.innerHTML="O"}

	playerTurn +=1
	}

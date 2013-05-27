var generator = new AttackedFieldgenerator();
function validateBishop (initial_position, next_position){
	var generatorLoc = new AttackedFieldgenerator();
	return contains(generatorLoc.bishop(initial_position),next_position);
}

function checkForCheck(attacked_positions, kings_position){
	if(contains(attacked_positions,kings_position))return true;
	else return false;
}
var allfigures = [generator.bishop(1,2),generator.knight(2,2),generator.queen(5,5), generator.pawn(7,1), generator.king(3,5),
generator.rook(6,6)];
checkForCheck(allfigures,[4,4]);


function checkForMate(kings_position){
	var kings_coordinates = generator.king(kings_position);
	if(containsAll(allfigures,kings_coordinates)&&checkForCheck(kings_position)===true)return true;
}

function checkForStalemate(kings_position){
	if(checkForCheck(kings_position)===false && allfigures.length === 0)return true;
}

function checkForDraw(){
	//FIFTY-MOVE RULE If in the previous fifty moves by each side, no pawn 
	// has moved and no capture has been made, a draw may be claimed by either player.
	
	// THREEFOLD REPETITION If an identical position has just occurred three times with 
	//the same player to move, or will occur after the player on turn makes his move, the player on move may claim a draw
	
	// IMPOSSIBILITY OF CHECKMATE 
	// king versus king
	// king and bishop versus king
	// king and knight versus king
	// king and bishop versus king and bishop with the bishops on the same colour
	
	checkForStalemate();
	
}
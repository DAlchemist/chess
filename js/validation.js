	
	// checkRook: function(initial_position, next_position){
	// 	return contains(chessEngine.rook(initial_position),next_position);
	// }
	// checkQueen: function(initial_position, next_position){
	// 	return contains(chessEngine.queen(initial_position),next_position);
	// }
	// checkKing: function(initial_position, next_position){
	// 	return contains(chessEngine.king(initial_position),next_position);
	// }
	// checkPawn: function(initial_position, next_position){
	// 	return contains(chessEngine.pawn(initial_position),next_position);
	// }
	// checkKnight: function(initial_position, next_position){
	// 	return contains(chessEngine.knight(initial_position),next_position);
	// }


	
	
			
	
	
	// checkForCheck :function (all_attacked_positions, kings_position){
	// 	if(contains(all_attacked_positions,kings_position))return true;
	// 	else return false;
	// },
	
	// checkForMate: function(kings_position, all_attacked_positions){
	// 	var kings_attacking_positions = generator.king(kings_position);
	// 	if(containsAll(all_attacked_positions,kings_attacking_positions) && checkForCheck(all_attacked_positions,kings_position)===true)return true;
	// },

	//  checkForStalemate: function(kings_position, all_own_attacked_positions, all_attacked_positions){
	// 	if(checkForCheck(all_attacked_positions,kings_position)===false && all_own_attacked_positions.length === 0)return true;
	// },

	// checkForDraw: function(){
		
	// }




// var allfigures = [generator.bishop(1,2),generator.knight(2,2),generator.queen(5,5), generator.pawn(7,1), generator.king(3,5),
// var generator = new AttackedFieldgenerator();
// generator.rook(6,6)];
// checkForCheck(allfigures,[4,4]);
// function checkForDraw(){
// 	//FIFTY-MOVE RULE If in the previous fifty moves by each side, no pawn 
// 	// has moved and no capture has been made, a draw may be claimed by either player.
	
// 	// THREEFOLD REPETITION If an identical position has just occurred three times with 
// 	//the same player to move, or will occur after the player on turn makes his move, the player on move may claim a draw
	
// 	// IMPOSSIBILITY OF CHECKMATE 
// 	// king versus king
// 	// king and bishop versus king
// 	// king and knight versus king
// 	// king and bishop versus king and bishop with the bishops on the same colour
	
// 	checkForStalemate();
	
// }
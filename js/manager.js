$(function() {
	
	function contains(arr, pair){
        for (var i = 0; i < arr.length; i++) {
            if( arr[i][0] === pair[0] && arr[i][1] === pair[1] ) return true;
        }
        return false;
    }

     function generateEmptyTable(){
        return   [[0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0]
                 ];
    }

    function MatrixWrite (matrix){
		var key;
        for(var i = 0; i < matrix.length; i++){
        	for (var j = 0; j < matrix[i].length; j++) {
        		key = matrix[i][j];
        		$('.engine').eq(i).children().eq(j).text(key);
        	}
        }    
    }
	
	function drawBoard(){
		
		function countPositions (limit) {
			var positions = [];
			for (var i = 0; i < limit; i++) {
				positions.push(i);
			}
			return positions;
		}
		var pos = countPositions($('.letter').length);

		for (var k = 0; k<8; k++) {
			var order = k % 2 === 1 ? 1 : 2;
			for(var i = 0; i<8; i++ ) {
				var color; 
				if (order === 1 ) {
					color = i % 2 === 1 ? 'white' : 'grey';
					$('.letter').eq(pos.shift()).css("background-color", color);
				} else {
					color = i % 2 === 1 ? 'grey' :'white';
		     		$('.letter').eq(pos.shift()).css("background-color", color);
		     	}
		     	
		    }//end second for
	    }//end first for
	}//end function
	
	function enableDraggable(element){
		var elementClass = '.'+element;
		$(elementClass).draggable({
			cursor: 'move',
			revert: true,
			revertDuration: 60,
			start:function(){
				initialPosition[element] = [$(this).parent().parent().index(),$(this).parent().index()]
				figureType =  $(this).attr('class').split(' ')[0];
				figColor = $(this).attr('id');
			}
		})
	}

	function createFigures(matrix,direction){
		
		for (var k = 0; k < 8; k++) {
			matrix[direction[0]][k] = 1;
			matrix[direction[1]][k] = 1;
		}

		for (var i = 0; i < 8; i++) {
			matrix[direction[2]][i] = -1;
			matrix[direction[3]][i] = -1;
		}
	}


	var figureType, figureType, figColor;
	
	var initialPosition = { 
		bishop : [], knight : [], queen : [], 
		king : [], rook : []
	}

	var marker = {
			white: {
				rook: 1, knight: 1, bishop: 1, 
				king: 1, queen: 1, pawn: 1
			},

			black: {
				rook: -1, knight: -1, bishop: -1, 
				king: -1, queen: -1, pawn: -1
			}
		}


	var figures_array = [
			'bishop','queen','king',
		'rook','knight','pawn',
	];

	/*******************************************************************************/
	/*GAME STARTER*/
	/*******************************************************************************/
	
	var direction = [6,7,0,1];	
	
	var board = generateEmptyTable();
	var testBoard = generateEmptyTable();
	var chessEngine = new ChessEngine()

	createFigures(board,direction);

	drawBoard();
	$('.letter').addClass('drop');
	
	
	/*make images draggable*/
	figures_array.forEach(enableDraggable);

	MatrixWrite(board);

	/*******************************************************************************/

	
	var moveCounter = 0;
    var allowed = 'white';

  	$(".drop").droppable({

		drop: function(ev, ui) {
			
			var dropped = ui.draggable;
            var droppedOn = $(this);
			var next = [$(this).parent().index(), $(this).index()]
            
          

           	var eatMatrix = chessEngine[figureType](board,initialPosition[figureType][0],initialPosition[figureType][1],figColor).em;
           	var positionsMatrix = chessEngine[figureType](board,initialPosition[figureType][0],initialPosition[figureType][1],figColor).pm;
           	
			
			var eatingValidation = contains(eatMatrix, next);
            var movingValidation = contains(positionsMatrix, next)

        	if (movingValidation && allowed===figColor) {

          		board[initialPosition[figureType][0]][initialPosition[figureType][1]] = 0;
          		board[next[0]][next[1]] = marker[figColor][figureType]
          		MatrixWrite(board);
          		
          		allowed = moveCounter%2===0 ? "black" : "white";
          		moveCounter++;

            	$(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
            	
            } else if (eatingValidation && allowed===figColor){
            	
            	board[initialPosition[figureType][0]][initialPosition[figureType][1]] = 0;
          		board[next[0]][next[1]] = marker[figColor][figureType]
          		MatrixWrite(board);

          		allowed = moveCounter%2===0 ? "black" : "white";
          		moveCounter++;

            	var eaten = droppedOn.children()
            	
				$(eaten).detach().css({top: 0,left: 0});
            	$(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
          
			} else {
            	return false;
            }
        }
    });
});
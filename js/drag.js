				
			var figMeth;
			var figProp;
			var figColor;
			var initPos = {
				Bishop1 : [],
				Bishop2 : [],
				Knight1 : [],
				Knight2 : [],
				Queen   : [],
				King    : [],
				Rook1   : [],
				Rook2   : []
 			}


			$('.dragBishop1').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Bishop1 = [$(this).parent().parent().index(),$(this).parent().index()];
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
				}

			});

			$('.dragBishop2').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Bishop2 = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
				}

			});

			$('.dragQueen').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Queen = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
				}

			});

			$('.dragKing').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.King = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
					
				}

			});

			$('.dragRook1').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Rook1 = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
					
				}

			});

			$('.dragRook2').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Rook2 = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
					
				}

			});

			$('.dragKnight1').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Knight1 = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
				}

			});

			$('.dragKnight2').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Knight2 = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
				}

			});

			$('.dragPawn1').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Pawn1 = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
				}

			});

			$('.dragPawn2').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Pawn2 = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
				}

			});

			$('.dragPawn3').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Pawn3 = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
				}

			});

			$('.dragPawn4').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Pawn4 = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
				}
			});

			$('.dragPawn5').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Pawn5 = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
				}
			});

			$('.dragPawn6').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Pawn6 = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
				}

			});

			$('.dragPawn7').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Pawn7 = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
				}

			});

			$('.dragPawn8').draggable({
				cursor: 'move',
				revert: true,
				revertDuration: 60,
				start:function(){
					initPos.Pawn8 = [$(this).parent().parent().index(),$(this).parent().index()]
					figMeth = $(this).attr('id').substring(5);
					figColor = $(this).attr('id').substring(0,5);
					figProp = $(this).attr('class').split(' ')[0].substring(4);
				}
			});
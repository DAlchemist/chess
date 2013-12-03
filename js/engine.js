        function tableLimit(ver,hor){
            return ver>=0 && hor>=0 && ver<8 && hor<8;
        }
        function validator(tabel,ver,hor){
            return ver>=0 && hor>=0 && ver<8 && hor<8;
        }


        var ChessEngine = (function() {
            
            function ChessEngine() {
                this.pawnCounter = 0;
            };
            
            ChessEngine.prototype.bishop = function(tabela,ver,hor,side){
                 
                var PositionsMatrix = [];
                var EatMatrix = [];
                var checkSide;
                
              
                
                function mapFigure(mnozioc_VER, mnozioc_HOR) {
                    checkSide = {
                        black: function(i) { return tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]>0 },
                        white: function(i) { return tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]<0 }
                    }
                    // console.log(ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR));
                    

                   for (var i = 1; i<10; i++) {
                        console.log(ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR));
                        if(tableLimit(ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)) && tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]===0){
                            PositionsMatrix.push([ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)]);
                        } else if(tableLimit(ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)) && checkSide[side](i)) {
                            EatMatrix.push([ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)]);
                            break
                        }else{
                            break
                        }
                    }   
                }

                mapFigure(-1,+1);
                mapFigure(+1,-1);
                mapFigure(+1,+1);
                mapFigure(-1,-1);
                
               return {pm: PositionsMatrix, em: EatMatrix}
            
            };   
            /*********************************************************/    
                        /*QUEEN-ATTACK POSITIONS*/

            ChessEngine.prototype.queen = function(tabela,ver,hor,side){
                   
                    var PositionsMatrix = [];
                    var EatMatrix = [];
                    var checkSide;
                    
                    function mapFigure(mnozioc_VER, mnozioc_HOR) {
                        checkSide = {
                            black: function(i) { return tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]>0 },
                            white: function(i) { return tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]<0 }
                        }
                        // console.log(ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR));
                        

                       for (var i = 1; i<10; i++) {
                            console.log(ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR));
                            if(tableLimit(ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)) && tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]===0){
                                PositionsMatrix.push([ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)]);
                            } else if(tableLimit(ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)) && checkSide[side](i)) {
                                EatMatrix.push([ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)]);
                                break
                            }else{
                                break
                            }
                        }   
                    }


                    mapFigure(-1,+1);
                    mapFigure(+1,-1);
                    mapFigure(+1,+1);
                    mapFigure(-1,-1);
                    mapFigure(-1, 0);
                    mapFigure(+1, 0);
                    mapFigure( 0,-1);
                    mapFigure( 0,+1);
                   
                    return {pm: PositionsMatrix, em: EatMatrix}
                };

            /*********************************************************/
                            /*ROOK-ATTACK POSITIONS*/

            ChessEngine.prototype.rook = function(tabela,ver,hor,side){
                
                var PositionsMatrix = [];
                var EatMatrix = [];
                var checkSide;
                
                function mapFigure(mnozioc_VER, mnozioc_HOR) {
                    checkSide = {
                        black: function(i) { return tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]>0 },
                        white: function(i) { return tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]<0 }
                    }
                    
                   for (var i = 1; i<10; i++) {
                        console.log(ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR));
                        if(tableLimit(ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)) && tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]===0){
                            PositionsMatrix.push([ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)]);
                        } else if(tableLimit(ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)) && checkSide[side](i)) {
                            EatMatrix.push([ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)]);
                            break
                        }else{
                            break
                        }
                    }   
                }

                
                mapFigure(-1, 0);
                mapFigure(+1, 0);
                mapFigure( 0,-1);
                mapFigure( 0,+1);
                           
               return { pm: PositionsMatrix, em: EatMatrix}
            };

            /*********************************************************/    
                            /*KING ATTACK-POSITIONS*/

            ChessEngine.prototype.king = function(tabela,ver,hor,side){
                var KING_ATTACK_DIRECTIONS =  [[-1, -1], [-1, 0], [-1, 1], 
                                               [0, -1], [0, 1], [1, -1], 
                                               [1, 0], [1, 1]]
                var PositionsMatrix = [];
                var EatMatrix = [];
                var checkSide;

                function do_it (element) {
                    
                    var v = Math.abs(ver + element[0]);
                    var h = Math.abs(hor + element[1]);
                    
                    checkSide = {
                        black: function() { return tabela[v][h]>0 },
                        white: function() { return tabela[v][h]<0 }
                    }

                    if(validator(tabela,v,h) && tabela[v][h]===0){
                        PositionsMatrix.push([v,h]);
                    }else if(validator(tabela,v,h) && checkSide[side]()){
                        EatMatrix.push([v,h]);
                    }
                };
                
                KING_ATTACK_DIRECTIONS.forEach(do_it);
                
                return { pm: PositionsMatrix, em: EatMatrix }
            };

            /*********************************************************/    
                            /*KNIGHT ATTACK-POSITIONS*/
             
            ChessEngine.prototype.knight = function(tabela,ver,hor,side){
                
                var KNIGHT_ATTACK_DIRECTIONS = [[-2, +1], [-2, -1], [-1, -2], 
                                                [+1, -2], [+2, -1], [+2, +1],
                                                [-1, +2], [+1, +2]];
                var PositionsMatrix = [];
                var EatMatrix = [];
                var opposingSide;


                function do_it (element) {
                    
                    var v = Math.abs(ver + element[0]);
                    var h = Math.abs(hor + element[1]);

                    var checkSide = {
                        black: function() { return tabela[v][h]>0 },
                        white: function() { return tabela[v][h]<0 }
                    }
                    
                    if(validator(tabela,v,h) && tabela[v][h]===0){
                        PositionsMatrix.push([v,h]);
                    } else if(validator(tabela,v,h) && checkSide[side]()){
                        EatMatrix.push([v,h]);
                    }
                };

                KNIGHT_ATTACK_DIRECTIONS.forEach(do_it);

                return {pm: PositionsMatrix, em:EatMatrix}
            };

            

            /*********************************************************/    
                            /*PAWN ATTACK-POSITIONS*/

            ChessEngine.prototype.pawn = function(tabela,ver,hor,side){
                
                var direction;
                var PositionsMatrix = [];
                var EatMatrix = [];
                var checkSide,v,h;
                
                direction = side==="black"? 1 :-1;

            
                var PAWN_ATTACK_POSITIONS = ["attack",[direction,-1],[direction,+1]] 
                var PAWN_MOVE_POSITIONS = ["move",[direction,0]]
                
                
                function findPositions (arr) {
                    
                    for (var i = 1; i < arr.length; i++) {
                        v = ver + arr[i][0];
                        h = hor + arr[i][1];

                        checkSide = {
                            black: function() { return tabela[v][h]>0 },
                            white: function() { return tabela[v][h]<0 }
                        }

                        if (arr[0]==="attack" && checkSide[side]()) {
                            EatMatrix.push([v,h])
                        } else if (arr[0]==="move" && tabela[v][h]===0){
                            PositionsMatrix.push([v,h])
                        }
                    }
                }
                
                findPositions(PAWN_ATTACK_POSITIONS)
                findPositions(PAWN_MOVE_POSITIONS)
                
                
                return {pm: PositionsMatrix, em: EatMatrix}
            };

            return ChessEngine;

        })();
        /*********************************************************/  
   

        

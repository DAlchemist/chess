


        /*********************************************************/    
                        /*AUXILIARY FUNCTIONS*/

        function MatrixWrite (matrix){
            for(var i = 0; i < matrix.length; i++){
                for(var j = 0; j<matrix[i].length; j++ ){
                    document.write(matrix[i][j]+" ");
                }
                document.write("<br>")
            }    
        }
            
        function setOne(tabela,ver, hor) {
            if(ver>=0 && hor>=0)tabela[ver][hor] = 1;
        }

        function contains(niz, par){
            for (var i = 0; i < niz.length; i++) {
                if( niz[i][0] === par[0] && niz[i][1] === par[1] ) return true;
            }
            return false;
        }

        function containsAll (niz1,niz2) {
           for (var i = 0; i < niz2.length; i++) {
               if( !contains(niz1,niz2[i]) )return false;
           };
           return true;
        } 

        function validator (tabela, ver, hor) {
           return ver>=0 && hor>=0 && ver<8 && hor<8;
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

        
        
        var AttackedFieldgenerator = Object.extend({
            
            //generator prima tabelu ver, hor i na osnovu toga generise funkcije
            bishop: function (tabela,ver,hor,side){
                 
                var PositionsMatrix = [];
                var EatMatrix = [];
                var checkSide;
                
                function NORTH_EAST(){   
                    if(ver+hor<=7)return ver
                    else return 7-hor;
                }
                function SOUTH_EAST(){
                    if(ver>=hor)return 7-ver
                    else return 7-hor;
                }
                function SOUTH_WEST(){   
                    if(ver+hor>=8)return 7-ver
                    else return hor;
                }
                function NORTH_WEST(){
                    if(ver<=hor) return ver;
                    else return hor;
                }
               
                
                function mapFigure(mnozioc_VER, mnozioc_HOR, granica) {
                    checkSide = {
                        black: function(i) { return tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]>0 },
                        white: function(i) { return tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]<0 }
                    }
                    for (var i = 1; i<=granica; i++) {
                        if(tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]===0){
                            PositionsMatrix.push([ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)]);
                        } else if(checkSide[side](i)) {
                            EatMatrix.push([ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)]);
                            break
                        }else{
                            break
                        }
                    }  
                }

                mapFigure(-1,+1,NORTH_EAST());
                mapFigure(+1,-1,SOUTH_WEST());
                mapFigure(+1,+1,SOUTH_EAST());
                mapFigure(-1,-1,NORTH_WEST());
                
               return {pm: PositionsMatrix, em: EatMatrix}
               //im attacking these positions and im attacking this figure on these cooridinates(AttackedFigureMatrix)
            },   
            /*********************************************************/    
                        /*QUEEN-ATTACK POSITIONS*/

            queen: function (tabela,ver,hor,side){
                   
                    var PositionsMatrix = [];
                    var EatMatrix = [];
                    var checkSide;
                    
                    function NORTH_EAST(){   
                       if(ver+hor<=7)return ver
                        else return  7-hor;
                    }
                    function SOUTH_EAST(){
                        if(ver>=hor)return 7-ver
                        else return 7-hor;
                    }
                    function SOUTH_WEST(){   
                        if(ver+hor>=8)return 7-ver
                        else return hor;
                    }
                    function NORTH_WEST(){
                        if(ver<=hor)return ver
                        else return hor;
                    }
                    
                    function mapFigure(mnozioc_VER, mnozioc_HOR, granica){
                        
                        checkSide = {
                            black: function(i) { return tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]>0 },
                            white: function(i) { return tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]<0 }
                        }
                        
                        for (var i = 1; i<=granica; i++) {
                            if(tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]===0){
                                PositionsMatrix.push([ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)]);
                            } else if(checkSide[side](i)) {
                                EatMatrix.push([ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)]);
                                 break
                            }else{
                                break
                            }
                        }  
                    }


                    mapFigure(-1,+1,NORTH_EAST());
                    mapFigure(+1,-1,SOUTH_WEST());
                    mapFigure(+1,+1,SOUTH_EAST());
                    mapFigure(-1,-1,NORTH_WEST());
                    mapFigure(-1,0,ver);
                    mapFigure(+1,0,(7-ver));
                    mapFigure(0,-1,hor);
                    mapFigure(0,+1,(7-hor));
                   
                    return {pm: PositionsMatrix, em: EatMatrix}
                },

            /*********************************************************/
                            /*ROOK-ATTACK POSITIONS*/

            rook: function(tabela,ver,hor,side){
                
                var PositionsMatrix = [];
                var EatMatrix = [];
                var checkSide;
                
                function mapFigure(mnozioc_VER, mnozioc_HOR, granica){
                    checkSide = {
                        black: function(i) { return tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]>0 },
                        white: function(i) { return tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]<0 }
                    }
                     for (var i = 1; i<=granica; i++) {
                        if(tabela[ver+(i*mnozioc_VER)][hor+(i*mnozioc_HOR)]===0){
                            PositionsMatrix.push([ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)]);
                        }else if(checkSide[side](i)) {
                            EatMatrix.push([ver+(i*mnozioc_VER),hor+(i*mnozioc_HOR)]);
                            break
                        }else{
                            break
                        }
                    }  
                }
                
                mapFigure(-1,0,ver);
                mapFigure(+1,0,(7-ver));
                mapFigure(0,-1,hor);
                mapFigure(0,+1,(7-hor));
                           
               return { pm: PositionsMatrix, em: EatMatrix}
            },

            /*********************************************************/    
                            /*KING ATTACK-POSITIONS*/

            king: function(tabela,ver,hor,side){
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
            },

            /*********************************************************/    
                            /*KNIGHT ATTACK-POSITIONS*/
             
            knight: function(tabela,ver,hor,side){
                
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
            },

            

            /*********************************************************/    
                            /*PAWN ATTACK-POSITIONS*/

            pawn: function(tabela,ver,hor,side){
                
                var direction;
                var PositionsMatrix = [];
                var EatMatrix = [];
                var checkSide,v,h;
                
               
                if (side==="black") {
                    direction = -1;
                } else {
                    direction = 1
                }

                
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
            }


        });
        /*********************************************************/  
   

        

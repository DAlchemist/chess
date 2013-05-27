var AttackedFieldTests = test("AttackedFieldgenerator", function() {

    var tryout = new AttackedFieldgenerator();

    test('Testing Bishop', function() {

        test("testing if the Bishop is in center", function() {        
            var table1 = generateEmptyTable();
            var positions = tryout.bishop(table1,4,4);
            var ocekivanje = [ [3, 5], [2, 6] ,[1, 7],
                               [3, 3] ,[2, 2] ,[1, 1],
                               [0, 0] ,[5, 5] ,[6, 6],
                               [7, 7] ,[5, 3] ,[6, 2] ,[7, 1] ];

            return containsAll( positions, ocekivanje );
        });
       
        
        
        test("testing if the Bishop is in the corner", function() {
            var table2 = generateEmptyTable();
            var positions =  tryout.bishop(table2,0,7);
            var ocekivanje = [[1, 6], [2, 5], [3, 4], 
                              [4, 3], [5, 2], [6, 1], 
                              [7, 0]]; 
            return containsAll(positions,ocekivanje);
        });
        
        
        
        test("testing if the Bishop is in the near opposite corner", function() {
            var table3 = generateEmptyTable();
            var positions = tryout.bishop(table3,6,1);
            var ocekivanje = [[5, 2], [4, 3], [3, 4], 
                              [2, 5], [1, 6], [0, 7], 
                              [5, 0], [7, 0], [7, 2]]; 
            return containsAll(positions, ocekivanje);
        });
    });

    test('Testing Rook', function() {
        
        test("testing if the Rook is in center", function() { 
            var table = generateEmptyTable();
            var positions = tryout.rook(table,4,4)   
            var ocekivanje =[[3, 4], [2, 4], [1, 4], [0, 4],
                             [5, 4], [6, 4], [7, 4], [4, 5], 
                             [4, 6], [4, 7], [4, 3], [4, 2], 
                             [4, 1], [4, 0]]
            return containsAll(positions, ocekivanje);
        });
        

        test("testing if the Rook is in corner", function() {
            var table = generateEmptyTable();
            var positions = tryout.rook(table,0,7);
            var ocekivanje = [[0, 6], [0, 6], [0, 4], [0, 3], 
                              [0, 2], [0, 1], [0, 0], [1, 7], 
                              [2, 7], [3, 7], [4, 7], [5, 7], 
                              [6, 7], [7, 7]]
            return containsAll(positions,ocekivanje);
       
        });

        test("testing if the Rook is in near opposite corner", function() {
            var table = generateEmptyTable();
            var positions = tryout.rook(table,6,1);
            var ocekivanje = [[5, 1], [4, 1], [3, 1], [2, 1], 
                              [1, 1], [0, 1], [6, 2], [6, 3], 
                              [6, 4], [6, 4], [6, 6], [6, 7], 
                              [7, 1], [6, 0]]
            return containsAll(positions, ocekivanje);
       
        });
    });    
        
    test('Testing Queen', function() {
        
        test("testing if the Queen is in center", function() { 
            var table = generateEmptyTable();
            var positions = tryout.queen(table,4,4);
            var ocekivanje= [[3, 4], [2, 4], [1, 4], [0, 4],
                             [5, 4], [6, 4], [7, 4], [4, 5], 
                             [4, 6], [4, 7], [4, 3], [4, 2], 
                             [4, 1], [4, 0], [3, 5], [2, 6],
                             [1, 7], [3, 3] ,[2, 2] ,[1, 1],
                             [0, 0] ,[5, 5] ,[6, 6], [7, 7], 
                             [5, 3] ,[6, 2] ,[7, 1]]
            return containsAll(positions, ocekivanje);
        });
       

         test("testing if the Queen is in corner", function() { 
            var table = generateEmptyTable();
            var positions = tryout.queen(table,0,7);
            var ocekivanje = [[0, 6], [0, 6], [0, 4], [0, 3], 
                              [0, 2], [0, 1], [0, 0], [1, 7], 
                              [2, 7], [3, 7], [4, 7], [5, 7], 
                              [6, 7], [7, 7], [1, 6], [2, 5], 
                              [3, 4], [4, 3], [5, 2], [6, 1], 
                              [7, 0]]
            return containsAll(positions, ocekivanje);
        });
        
        
         test("testing if the Queen is in near opposite corner", function() { 
            var table = generateEmptyTable();
            var positions = tryout.queen(table,6,1);
            var ocekivanje = [[5, 1], [4, 1], [3, 1], [2, 1], 
                              [1, 1], [0, 1], [6, 2], [6, 3], 
                              [6, 4], [6, 4], [6, 6], [6, 7], 
                              [7, 1], [6, 0], [5, 2], [4, 3], 
                              [3, 4], [2, 5], [1, 6], [0, 7], 
                              [5, 0], [7, 0], [7, 2]]
            return containsAll(positions, ocekivanje); 
        });
    });
    
    test('Testing King', function() {
        
        test("testing if the King is in center", function() {
                var table = generateEmptyTable();
                var positions = tryout.king(table,4,4);
                var ocekivanje = [[3, 3], [3, 4], [3, 5], 
                                  [5, 5], [5, 4], [5, 3], 
                                  [4, 5], [4, 3]] 
                return containsAll(positions, ocekivanje);   
             });
            test("testing if the King is in corner", function() {
                var table = generateEmptyTable();
                var positions = tryout.king(table,0,7);
                var ocekivanje = [[0, 6], [1, 7], [1, 6]];
                return containsAll(positions, ocekivanje); 
             });
            
           test("testing if the King is in near opposite corner", function() {
                var table = generateEmptyTable();
                var positions = tryout.king(table,6,0);
                var ocekivanje = [[6, 1], [5, 1], [7, 1], 
                                  [5, 0], [7, 0]] 
                                  
       
               return containsAll(positions,ocekivanje);
             });
    });
   
    test('Testing Knight', function() {
        
        test("testing if the Knight is in center", function() {
            var table = generateEmptyTable();
            var positions = tryout.knight(table,4,4);
            var ocekivanje =[[2, 5], [2, 3], [6, 5], [6, 3], 
                             [5, 6], [5, 2], [3, 6], [3, 2]] 
            return containsAll(positions, ocekivanje); 
        });
        
        test("testing if the Knight is in corner", function() {
            var table = generateEmptyTable();
            var positions = tryout.knight(table,0,7); 
            var ocekivanje = [[1, 5],[2, 6]] 
            return containsAll(positions, ocekivanje); 
        });
        
        test("testing if the Knight is in near opposite corner", function() {
            var table = generateEmptyTable();
            var positions = tryout.knight(table,6,1); 
            var ocekivanje = [[4, 2],[5, 3],[4, 0],[7, 3]] 
            return containsAll(positions,ocekivanje); 
        });
    });
    
    test('Testing Pawn', function() {
        
        test("testing if the Pawn is in center", function() {
            var table = generateEmptyTable();
            var positions = tryout.pawn(table,4,4);
            var ocekivanje = [[3,3], [3,5]];
            return containsAll(positions, ocekivanje);
        });
        
       test("testing if the Pawn is in corner", function() {
            var table = generateEmptyTable();
            var positions = tryout.pawn(table,0,7);
            var ocekivanje = [];
            return containsAll(positions, ocekivanje);
        });
        
        test("testing if the Pawn is in near opposite corner", function() {
            var table = generateEmptyTable();
            var positions = tryout.pawn(table,6,0);
            var ocekivanje = [[5,1]];
            return containsAll(positions, ocekivanje);
        }); 
    });

});
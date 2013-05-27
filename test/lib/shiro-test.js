(function() {
    var tests = [];
    var inTest = false;

    window.test = function( name, callback ) {
        var res = { 
            start: function() {
                inTest = true;
                tests.push({ name: name, result: {passed: 0, failed: 0}, subtests: [] });
                
                var result = callback();
                
                // it can also be undefined :P
                if( result === true) { tests[tests.length-1].result.passed++ }
                else if( result === false ) { tests[tests.length-1].result.failed++ };
        
                if( tests.length > 1 ) {
                    var last = tests.pop();
                    tests[tests.length-1].subtests.push( last );
                    tests[tests.length-1].result.passed += last.result.passed; 
                    tests[tests.length-1].result.failed += last.result.failed;
                } else {
                    inTest = false;
                    return tests.pop();
                }
            }
        };
        
        if( inTest ) {
            res.start();
        } else {
            return res;
        }
    };
    
    window.displayTestResults = function( result, onlyFailed ) {
        function display(result) {
            var $el = $('<div>').addClass('test');
            
            if( result.subtests.length > 0 ) {
                var text = result.name + " ( " + 
                          result.result.passed + ' passed, ' + 
                          result.result.failed + " failed )";
                
                $('<p>').addClass('test-name').text( text ).appendTo( $el );
            } else {
                $('<p>').addClass('test-name').text( result.name ).appendTo( $el );
                
                var value = result.result.failed > 0 ? 'FAIL':'PASSED';
                var test_class = result.result.failed > 0 ? 'test-failed' : 'test-passed';
                $('<p>').addClass('test-value').text( value ).appendTo( $el );
                $el.addClass( test_class ).addClass('test-last');
            }
            
            result.subtests.forEach( function(result) {
                if( result.result.failed === 0 && onlyFailed ) return;
                $el.append( display(result) );
            });
            
            return $el;
        }
        
        var container = $('<div>').addClass('test-container').appendTo('body');
        var $el;
        console.log('here');
        if( result.result.failed === 0 && onlyFailed ) {
            $el = $('<div>').addClass('test');
            
            var text = result.name + " ( " + 
                       result.result.passed + ' passed, ' + 
                       result.result.failed + " failed )";
                
            $('<p>').addClass('test-name').text( text ).appendTo( $el );
            container.addClass('test-all-passed');
        } else {
            $el = display(result);
        }
        
        container.append( $el );
    };
    
}());

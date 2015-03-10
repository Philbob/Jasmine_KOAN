describe('', function(){

    var jasmineDescribe;
    
    it('Declare a suite, using the title "Describes a suite of tests"', function(){
        jasmineDescribe = jasmine.createSpy("describe");

        describingTestsSuites(jasmineDescribe);
        
        expect(jasmineDescribe).toHaveBeenCalledWith('Describes a suite of tests', jasmine.any(Function));
    });
    
    
    describe("a set of nested test suites", function(){

        var jasmineDDescribe,jasmineXDescribe; 
        beforeEach(function(){
            jasmineDescribe = jasmine.createSpy("describe");
            jasmineDDescribe = jasmine.createSpy("ddescribe");
            jasmineXDescribe = jasmine.createSpy("xdescribe");

            describingTestsSuites(jasmineDescribe, jasmineDDescribe, jasmineXDescribe);
            
            var outerTestFixture = jasmineDescribe.mostRecentCall.args[1]
            outerTestFixture();
        });
        
                
        it('Create a nested suite, using the title "You can also nest your suites"', function(){
            expect(jasmineDescribe).toHaveBeenCalledWith('You can also nest your suites', jasmine.any(Function));
        });

        it('Create a nested test suite which will be the only one to execute', function(){ 
            expect(jasmineDDescribe).toHaveBeenCalled();
        });

        it('Create a nested test suite which will not execute', function(){
            expect(jasmineXDescribe).toHaveBeenCalled();
        });
    });
});
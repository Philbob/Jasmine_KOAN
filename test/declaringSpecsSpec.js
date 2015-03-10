describe('declaring test specs - ', function(){

    var jasmineIt, jasmineIIt, jasmineXIt; 
        
        beforeEach(function(){
            var jasmineDescribe = jasmine.createSpy("describe");
            jasmineIt = jasmine.createSpy("it");
            jasmineIIt = jasmine.createSpy("iit");
            jasmineXIt = jasmine.createSpy("xit");

            describingTestSpecs(jasmineDescribe, jasmineIt, jasmineIIt, jasmineXIt);
            

            var outerTestFixture = jasmineDescribe.mostRecentCall.args[1]
            outerTestFixture();
        });
        
                
        it('Create a test Spec, using the title "this is a test spec"', function(){
            expect(jasmineIt).toHaveBeenCalledWith('this is a test spec', jasmine.any(Function));
        });

        it('Create a test Spec, and make it the only one to execute', function(){ 
            expect(jasmineIIt).toHaveBeenCalled();
        });

        it('Create a test Spec, and make it not execute', function(){
            expect(jasmineXIt).toHaveBeenCalled();
        });


});
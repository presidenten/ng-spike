describe("ng-spike", function() {
    describe("The Reverse filter it", function() {
        var reverse;
        beforeEach(module('myApp'));

        beforeEach(inject(function(reverseFilter){
            reverse = reverseFilter;
        }));

        it("handles empty strings", function() {
            expect(reverse('')).toBe('');
        });
        it("handles strings of uneven length", function() {
            expect(reverse('Kalle')).toBe('ellaK');
        });
        it("handles strings of even length", function() {
            expect(reverse('Anders')).toBe('srednA');
        });
    });
});

describe("Testappen", function() {
    describe("Reversefiltret", function() {
        var reverse;
        beforeEach(module('myApp'));

        beforeEach(inject(function(reverseFilter){
            reverse = reverseFilter;
        }));

        it("klara tomma strängar", function() {
            expect(reverse('')).toBe('');
        });
        it("klara strängar av udda längd", function() {
            expect(reverse('Kalle')).toBe('ellaK');
        });
        it("klara strängar av jämn längd", function() {
            expect(reverse('Anders')).toBe('srednA');
        });
    });
});
'use strict';


describe('url', function() {
    beforeEach(module('ADE'));
    beforeEach(module('ngSanitize'));

    var linky, urlFilter;

    beforeEach(inject(function($filter) {
        linky = $filter('linky');
        urlFilter = $filter('url');
    }));

    it('should convert url string into a clickable link', function() {
        expect(urlFilter("http://www.apple.com")).toEqual('<a href="http://www.apple.com">http://www.apple.com</a>');
        expect(urlFilter(" http://www.apple.com ")).toEqual('<a href="http://www.apple.com">http://www.apple.com</a>');
        expect(urlFilter("https://www.apple.com")).toEqual('<a href="https://www.apple.com">https://www.apple.com</a>');
        expect(urlFilter("www.apple.com")).toEqual('<a href="http://www.apple.com">http://www.apple.com</a>');
        expect(urlFilter(" www.apple.com ")).toEqual('<a href="http://www.apple.com">http://www.apple.com</a>');
        expect(urlFilter("http://www.apple.com/~jake/index.html#tag")).toEqual('<a href="http://www.apple.com/~jake/index.html#tag">http://www.apple.com/~jake/index.html#tag</a>');

    });

    it('should echo non-link results', function() {
        expect(urlFilter('')).toBe('');
        expect(urlFilter('abcd')).toBe('abcd');
        expect(urlFilter(1234)).toBe('1234');
        expect(urlFilter('http')).toBe('http');
    });
});

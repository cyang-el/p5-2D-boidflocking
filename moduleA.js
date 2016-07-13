define('moduleA', [],
    function () {

        function first() {
            return 100;
        }

        function second() {
        }
        
        return {
            first: first,
            second:second
        }
    }
)

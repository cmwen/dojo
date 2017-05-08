
function Identity(any) {
    return {
        _value : any,
        value: function() {
            return this._value;
        },

        map: function( func ) {
            return Identity(func(this._value));
        }
    }
}

function Maybe(any) {
    return {
        _value : any,
        value: function () {
            return this._value;
        },
        map: function( func ) {
            let result = func( this.value);
            if (result) {
                return Maybe(result);
            } else {
                return Maybe(null);
            }
        }
    }
}

module.exports = {
    Identity: Identity,
    Maybe: Maybe
};

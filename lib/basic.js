(function() {
  var __slice = Array.prototype.slice;

  this.before = function(decoration) {
    return function(base) {
      return function() {
        decoration.apply(this, arguments);
        return base.apply(this, arguments);
      };
    };
  };

  this.after = function(decoration) {
    return function(base) {
      return function() {
        var __value__;
        decoration.call(this, __value__ = base.apply(this, arguments));
        return __value__;
      };
    };
  };

  this.around = function(decoration) {
    return function(base) {
      return function() {
        var argv, callback, __value__,
          _this = this;
        argv = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        __value__ = void 0;
        callback = function() {
          return __value__ = base.apply(_this, argv);
        };
        decoration.apply(this, [callback].concat(argv));
        return __value__;
      };
    };
  };

  this.provided = function(predicate) {
    return function(base) {
      return function() {
        if (predicate.apply(this, arguments)) return base.apply(this, arguments);
      };
    };
  };

  this.excepting = function(condition) {
    return function(base) {
      return function() {
        if (!condition.apply(this, arguments)) return base.apply(this, arguments);
      };
    };
  };

}).call(this);

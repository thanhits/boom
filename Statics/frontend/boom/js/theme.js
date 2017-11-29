!function (l) {
    /**
     * @param {number} i
     * @return {?}
     */
    function result(i) {
        if (t[i]) {
            return t[i].exports;
        }
        var m = t[i] = {
            i: i,
            l: false,
            exports: {}
        };
        return l[i].call(m.exports, m, m.exports, result), m.l = true, m.exports;
    }
    var t = {};
    /** @type {Array} */
    result.m = l;
    result.c = t;
    /**
     * @param {?} b
     * @return {?}
     */
    result.i = function (b) {
        return b;
    };
    /**
     * @param {string} input
     * @param {number} key
     * @param {Object} opts
     * @return {undefined}
     */
    result.d = function (input, key, opts) {
        if (!result.o(input, key)) {
            Object.defineProperty(input, key, {
                configurable: false,
                enumerable: true,
                get: opts
            });
        }
    };
    /**
     * @param {Object} c
     * @return {?}
     */
    result.n = function (c) {
        /** @type {function (): ?} */
        var value = c && c.__esModule ? function () {
            return c.default;
        } : function () {
            return c;
        };
        return result.d(value, "a", value), value;
    };
    /**
     * @param {?} name
     * @param {number} type
     * @return {?}
     */
    result.o = function (name, type) {
        return Object.prototype.hasOwnProperty.call(name, type);
    };
    /** @type {string} */
    result.p = "";
    result(result.s = 26);
}([function (module, dataAndEvents) {
    module.exports = jQuery;
}, function (module, dataAndEvents) {
    //module.exports = prestashop;
}, function (module, self, require) {
    /**
     * @param {?} dataAndEvents
     * @param {Function} object
     * @return {undefined}
     */
    function stub(dataAndEvents, object) {
        if (!(dataAndEvents instanceof object)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    Object.defineProperty(self, "__esModule", {
        value: true
    });
    var onErrorFnPrev = function () {
        /**
         * @param {Function} object
         * @param {Array} d
         * @return {undefined}
         */
        function defineProperty(object, d) {
            /** @type {number} */
            var i = 0;
            for (; i < d.length; i++) {
                var desc = d[i];
                desc.enumerable = desc.enumerable || false;
                /** @type {boolean} */
                desc.configurable = true;
                if ("value" in desc) {
                    /** @type {boolean} */
                    desc.writable = true;
                }
                Object.defineProperty(object, desc.key, desc);
            }
        }
        return function (x, current, a) {
            return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
        };
    }();
    var url = require(0);
    var obj = function (url) {
        return url && url.__esModule ? url : {
            default: url
        };
    }(url);
    var compassResult = function () {
        /**
         * @param {Object} e
         * @return {undefined}
         */
        function error(e) {
            stub(this, error);
            /** @type {Object} */
            this.el = e;
        }
        return onErrorFnPrev(error, [{
            key: "init",
            /**
             * @return {undefined}
             */
            value: function () {
                this.el.on("show.bs.dropdown", function (opt_e, lhs) {
                    if (lhs) {
                        (0, obj.default)("#" + lhs).find(".dropdown-menu").first().stop(true, true).slideDown();
                    } else {
                        (0, obj.default)(opt_e.target).find(".dropdown-menu").first().stop(true, true).slideDown();
                    }
                });
                this.el.on("hide.bs.dropdown", function (opt_e, lhs) {
                    if (lhs) {
                        (0, obj.default)("#" + lhs).find(".dropdown-menu").first().stop(true, true).slideUp();
                    } else {
                        (0, obj.default)(opt_e.target).find(".dropdown-menu").first().stop(true, true).slideUp();
                    }
                });
                this.el.find("select.link").each(function (dataAndEvents, $window) {
                    (0, obj.default)($window).on("change", function (dataAndEvents) {
                        window.location = (0, obj.default)(this).val();
                    });
                });
            }
        }]), error;
    }();
    self.default = compassResult;
    module.exports = self.default;
}, function (module, self, require) {
    /**
     * @param {?} dataAndEvents
     * @param {Function} object
     * @return {undefined}
     */
    function stub(dataAndEvents, object) {
        if (!(dataAndEvents instanceof object)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    Object.defineProperty(self, "__esModule", {
        value: true
    });
    var onErrorFnPrev = function () {
        /**
         * @param {Function} proto
         * @param {Array} name
         * @return {undefined}
         */
        function defineProperty(proto, name) {
            /** @type {number} */
            var i = 0;
            for (; i < name.length; i++) {
                var desc = name[i];
                desc.enumerable = desc.enumerable || false;
                /** @type {boolean} */
                desc.configurable = true;
                if ("value" in desc) {
                    /** @type {boolean} */
                    desc.writable = true;
                }
                Object.defineProperty(proto, desc.key, desc);
            }
        }
        return function (context, name, tag) {
            return name && defineProperty(context.prototype, name), tag && defineProperty(context, tag), context;
        };
    }();
    var url = require(0);
    var obj = function (url) {
        return url && url.__esModule ? url : {
            default: url
        };
    }(url);
    var compassResult = function () {
        /**
         * @return {undefined}
         */
        function error() {
            stub(this, error);
        }
        return onErrorFnPrev(error, [{
            key: "init",
            /**
             * @return {undefined}
             */
            value: function () {
                (0, obj.default)(".js-product-miniature").each(function (dataAndEvents, context) {
                    var toolbar = (0, obj.default)(context).find(".discount-percentage");
                    var testNode = (0, obj.default)(context).find(".on-sale");
                    var volumeHandle = (0, obj.default)(context).find(".new");
                    if (toolbar.length) {
                        volumeHandle.css("top", 2 * toolbar.height() + 10);
                        toolbar.css("top", -(0, obj.default)(context).find(".thumbnail-container").height() + (0, obj.default)(context).find(".product-description").height() + 10);
                    }
                    if (testNode.length) {
                        toolbar.css("top", parseFloat(toolbar.css("top")) + testNode.height() + 10);
                        volumeHandle.css("top", 2 * toolbar.height() + testNode.height() + 20);
                    }
                    if ((0, obj.default)(context).find(".color").length > 5) {
                        (function () {
                            /** @type {number} */
                            var elem3 = 0;
                            (0, obj.default)(context).find(".color").each(function (dataAndEvents, error) {
                                if (dataAndEvents > 4) {
                                    (0, obj.default)(error).hide();
                                    elem3++;
                                }
                            });
                            (0, obj.default)(context).find(".js-count").append("+" + elem3);
                        })();
                    }
                });
            }
        }]), error;
    }();
    self.default = compassResult;
    module.exports = self.default;
}, function (module, opt_obj, element) {
    var f;
    var JsDiff;
    !function (win) {
        /**
         * @param {?} obj
         * @return {?}
         */
        function isArraylike(obj) {
            var length = obj.length;
            var type = jQuery.type(obj);
            return "function" !== type && (!jQuery.isWindow(obj) && (!(1 !== obj.nodeType || !length) || ("array" === type || (0 === length || "number" == typeof length && (length > 0 && length - 1 in obj)))));
        }
        if (!win.jQuery) {
            /**
             * @param {Element} selector
             * @param {number} context
             * @return {?}
             */
            var jQuery = function jQuery(selector, context) {
                return new jQuery.fn.init(selector, context);
            };
            /**
             * @param {Object} obj
             * @return {?}
             */
            jQuery.isWindow = function (obj) {
                return obj && obj === obj.window;
            };
            /**
             * @param {string} obj
             * @return {?}
             */
            jQuery.type = function (obj) {
                return obj ? "object" == typeof obj || "function" == typeof obj ? class2type[core_toString.call(obj)] || "object" : typeof obj : obj + "";
            };
            /** @type {function (*): boolean} */
            jQuery.isArray = Array.isArray || function (obj) {
                return "array" === jQuery.type(obj);
            };
            /**
             * @param {?} obj
             * @return {?}
             */
            jQuery.isPlainObject = function (obj) {
                var key;
                if (!obj || ("object" !== jQuery.type(obj) || (obj.nodeType || jQuery.isWindow(obj)))) {
                    return false;
                }
                try {
                    if (obj.constructor && (!core_hasOwn.call(obj, "constructor") && !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf"))) {
                        return false;
                    }
                } catch (t) {
                    return false;
                }
                for (key in obj) {
                }
                return void 0 === key || core_hasOwn.call(obj, key);
            };
            /**
             * @param {Function} object
             * @param {Function} callback
             * @param {?} args
             * @return {?}
             */
            jQuery.each = function (object, callback, args) {
                /** @type {number} */
                var name = 0;
                var length = object.length;
                var isArray = isArraylike(object);
                if (args) {
                    if (isArray) {
                        for (; name < length && false !== callback.apply(object[name], args) ; name++) {
                        }
                    } else {
                        for (name in object) {
                            if (object.hasOwnProperty(name) && false === callback.apply(object[name], args)) {
                                break;
                            }
                        }
                    }
                } else {
                    if (isArray) {
                        for (; name < length && false !== callback.call(object[name], name, object[name]) ; name++) {
                        }
                    } else {
                        for (name in object) {
                            if (object.hasOwnProperty(name) && false === callback.call(object[name], name, object[name])) {
                                break;
                            }
                        }
                    }
                }
                return object;
            };
            /**
             * @param {?} event
             * @param {?} key
             * @param {number} value
             * @return {?}
             */
            jQuery.data = function (event, key, value) {
                if (void 0 === value) {
                    var ontype = event[jQuery.expando];
                    var cache = ontype && cur[ontype];
                    if (void 0 === key) {
                        return cache;
                    }
                    if (cache && key in cache) {
                        return cache[key];
                    }
                } else {
                    if (void 0 !== key) {
                        var j = event[jQuery.expando] || (event[jQuery.expando] = ++jQuery.uuid);
                        return cur[j] = cur[j] || {}, cur[j][key] = value, value;
                    }
                }
            };
            /**
             * @param {?} event
             * @param {string} defaults
             * @return {undefined}
             */
            jQuery.removeData = function (event, defaults) {
                var ontype = event[jQuery.expando];
                var buf = ontype && cur[ontype];
                if (buf) {
                    if (defaults) {
                        jQuery.each(defaults, function (dataAndEvents, off) {
                            delete buf[off];
                        });
                    } else {
                        delete cur[ontype];
                    }
                }
            };
            /**
             * @return {?}
             */
            jQuery.extend = function () {
                var src;
                var copyIsArray;
                var copy;
                var name;
                var options;
                var clone;
                var target = arguments[0] || {};
                /** @type {number} */
                var i = 1;
                /** @type {number} */
                var l = arguments.length;
                /** @type {boolean} */
                var deep = false;
                if ("boolean" == typeof target) {
                    /** @type {boolean} */
                    deep = target;
                    target = arguments[i] || {};
                    i++;
                }
                if ("object" != typeof target) {
                    if ("function" !== jQuery.type(target)) {
                        target = {};
                    }
                }
                if (i === l) {
                    target = this;
                    i--;
                }
                for (; i < l; i++) {
                    if (options = arguments[i]) {
                        for (name in options) {
                            if (options.hasOwnProperty(name)) {
                                src = target[name];
                                copy = options[name];
                                if (target !== copy) {
                                    if (deep && (copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy))))) {
                                        if (copyIsArray) {
                                            /** @type {boolean} */
                                            copyIsArray = false;
                                            clone = src && jQuery.isArray(src) ? src : [];
                                        } else {
                                            clone = src && jQuery.isPlainObject(src) ? src : {};
                                        }
                                        target[name] = jQuery.extend(deep, clone, copy);
                                    } else {
                                        if (void 0 !== copy) {
                                            target[name] = copy;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return target;
            };
            /**
             * @param {?} name
             * @param {number} type
             * @param {?} data
             * @return {?}
             */
            jQuery.queue = function (name, type, data) {
                if (name) {
                    /** @type {string} */
                    type = (type || "fx") + "queue";
                    var queue = jQuery.data(name, type);
                    return data ? (!queue || jQuery.isArray(data) ? queue = jQuery.data(name, type, function (arr, param) {
                        var ret = param || [];
                        return arr && (isArraylike(Object(arr)) ? function (first, second) {
                            /** @type {number} */
                            var repeat = +second.length;
                            /** @type {number} */
                            var j = 0;
                            var i = first.length;
                            for (; j < repeat;) {
                                first[i++] = second[j++];
                            }
                            if (repeat !== repeat) {
                                for (; void 0 !== second[j];) {
                                    first[i++] = second[j++];
                                }
                            }
                            first.length = i;
                        }(ret, "string" == typeof arr ? [arr] : arr) : [].push.call(ret, arr)), ret;
                    }(data)) : queue.push(data), queue) : queue || [];
                }
            };
            /**
             * @param {?} elem
             * @param {string} type
             * @return {undefined}
             */
            jQuery.dequeue = function (elem, type) {
                jQuery.each(elem.nodeType ? [elem] : elem, function (dataAndEvents, elem) {
                    type = type || "fx";
                    var queue = jQuery.queue(elem, type);
                    var matches = queue.shift();
                    if ("inprogress" === matches) {
                        matches = queue.shift();
                    }
                    if (matches) {
                        if ("fx" === type) {
                            queue.unshift("inprogress");
                        }
                        matches.call(elem, function () {
                            jQuery.dequeue(elem, type);
                        });
                    }
                });
            };
            jQuery.fn = jQuery.prototype = {
                /**
                 * @param {?} content
                 * @return {?}
                 */
                init: function (content) {
                    if (content.nodeType) {
                        return this[0] = content, this;
                    }
                    throw new Error("Not a DOM node.");
                },
                /**
                 * @return {?}
                 */
                offset: function () {
                    var otherElementRect = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: otherElementRect.top + (win.pageYOffset || (document.scrollTop || 0)) - (document.clientTop || 0),
                        left: otherElementRect.left + (win.pageXOffset || (document.scrollLeft || 0)) - (document.clientLeft || 0)
                    };
                },
                /**
                 * @return {?}
                 */
                position: function () {
                    var marker = this[0];
                    var node = function (object) {
                        var elem = object.offsetParent;
                        for (; elem && ("html" !== elem.nodeName.toLowerCase() && (elem.style && "static" === elem.style.position)) ;) {
                            elem = elem.offsetParent;
                        }
                        return elem || document;
                    }(marker);
                    var offset = this.offset();
                    var parentOffset = /^(?:body|html)$/i.test(node.nodeName) ? {
                        top: 0,
                        left: 0
                    } : jQuery(node).offset();
                    return offset.top -= parseFloat(marker.style.marginTop) || 0, offset.left -= parseFloat(marker.style.marginLeft) || 0, node.style && (parentOffset.top += parseFloat(node.style.borderTopWidth) || 0, parentOffset.left += parseFloat(node.style.borderLeftWidth) || 0), {
                        top: offset.top - parentOffset.top,
                        left: offset.left - parentOffset.left
                    };
                }
            };
            var cur = {};
            /** @type {string} */
            jQuery.expando = "velocity" + (new Date).getTime();
            /** @type {number} */
            jQuery.uuid = 0;
            var class2type = {};
            /** @type {function (this:Object, *): boolean} */
            var core_hasOwn = class2type.hasOwnProperty;
            /** @type {function (this:*): string} */
            var core_toString = class2type.toString;
            /** @type {Array.<string>} */
            var codeSegments = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
            /** @type {number} */
            var i = 0;
            for (; i < codeSegments.length; i++) {
                /** @type {string} */
                class2type["[object " + codeSegments[i] + "]"] = codeSegments[i].toLowerCase();
            }
            jQuery.fn.init.prototype = jQuery.fn;
            win.Velocity = {
                /** @type {function (Element, number): ?} */
                Utilities: jQuery
            };
        }
    }(window);
    (function (e) {
        if ("object" == typeof module && "object" == typeof module.exports) {
            module.exports = e();
        } else {
            /** @type {function (): ?} */
            f = e;
            if (void 0 !== (JsDiff = "function" == typeof f ? f.call(opt_obj, element, opt_obj, module) : f)) {
                module.exports = JsDiff;
            }
        }
    })(function () {
        return function (options, global, doc, radio) {
            /**
             * @param {(Object|string)} array
             * @return {?}
             */
            function queue(array) {
                /** @type {number} */
                var index = -1;
                var length = array ? array.length : 0;
                /** @type {Array} */
                var q = [];
                for (; ++index < length;) {
                    var source = array[index];
                    if (source) {
                        q.push(source);
                    }
                }
                return q;
            }
            /**
             * @param {Object} obj
             * @return {?}
             */
            function clone(obj) {
                return _.isWrapped(obj) ? obj = core_toString.call(obj) : _.isNode(obj) && (obj = [obj]), obj;
            }
            /**
             * @param {Element} elem
             * @return {?}
             */
            function fn(elem) {
                var parent = target.data(elem, "velocity");
                return null === parent ? radio : parent;
            }
            /**
             * @param {Element} context
             * @param {number} value
             * @return {undefined}
             */
            function clear(context, value) {
                var test = fn(context);
                if (test) {
                    if (test.delayTimer) {
                        if (!test.delayPaused) {
                            test.delayRemaining = test.delay - value + test.delayBegin;
                            /** @type {boolean} */
                            test.delayPaused = true;
                            clearTimeout(test.delayTimer.setTimeout);
                        }
                    }
                }
            }
            /**
             * @param {Element} el
             * @param {number} value
             * @return {undefined}
             */
            function text(el, value) {
                var test = fn(el);
                if (test) {
                    if (test.delayTimer) {
                        if (test.delayPaused) {
                            /** @type {boolean} */
                            test.delayPaused = false;
                            /** @type {number} */
                            test.delayTimer.setTimeout = setTimeout(test.delayTimer.next, test.delayRemaining);
                        }
                    }
                }
            }
            /**
             * @param {number} i
             * @return {?}
             */
            function func(i) {
                return function (amount) {
                    return Math.round(amount * i) * (1 / i);
                };
            }
            /**
             * @param {number} k
             * @param {number} key
             * @param {number} a
             * @param {number} index
             * @return {?}
             */
            function add(k, key, a, index) {
                /**
                 * @param {number} rejected
                 * @param {number} data
                 * @return {?}
                 */
                function done(rejected, data) {
                    return 1 - 3 * data + 3 * rejected;
                }
                /**
                 * @param {number} response
                 * @param {number} _xhr
                 * @return {?}
                 */
                function successFn(response, _xhr) {
                    return 3 * _xhr - 6 * response;
                }
                /**
                 * @param {number} content
                 * @return {?}
                 */
                function output(content) {
                    return 3 * content;
                }
                /**
                 * @param {number} date
                 * @param {number} result
                 * @param {number} data
                 * @return {?}
                 */
                function callback(date, result, data) {
                    return ((done(result, data) * date + successFn(result, data)) * date + output(result)) * date;
                }
                /**
                 * @param {number} s
                 * @param {number} result
                 * @param {number} data
                 * @return {?}
                 */
                function cb(s, result, data) {
                    return 3 * done(result, data) * s * s + 2 * successFn(result, data) * s + output(result);
                }
                /**
                 * @param {number} n
                 * @param {number} obj
                 * @return {?}
                 */
                function f(n, obj) {
                    /** @type {number} */
                    var i = 0;
                    for (; i < padLength; ++i) {
                        var desc = cb(obj, k, a);
                        if (0 === desc) {
                            return obj;
                        }
                        obj -= (callback(obj, k, a) - n) / desc;
                    }
                    return obj;
                }
                /**
                 * @return {undefined}
                 */
                function apply() {
                    /** @type {number} */
                    var idx = 0;
                    for (; idx < length; ++idx) {
                        data[idx] = callback(idx * diff, k, a);
                    }
                }
                /**
                 * @param {number} from
                 * @param {number} start
                 * @param {number} val
                 * @return {?}
                 */
                function indexOf(from, start, val) {
                    var diff;
                    var end;
                    /** @type {number} */
                    var b = 0;
                    do {
                        end = start + (val - start) / 2;
                        /** @type {number} */
                        diff = callback(end, k, a) - from;
                        if (diff > 0) {
                            val = end;
                        } else {
                            start = end;
                        }
                    } while (Math.abs(diff) > snapToNext && ++b < nodeListLen);
                    return end;
                }
                /**
                 * @param {number} value
                 * @return {?}
                 */
                function transform(value) {
                    /** @type {number} */
                    var i = 0;
                    /** @type {number} */
                    var offset = 1;
                    /** @type {number} */
                    var padLength = length - 1;
                    for (; offset !== padLength && data[offset] <= value; ++offset) {
                        i += diff;
                    }
                    --offset;
                    /** @type {number} */
                    var multiplier = (value - data[offset]) / (data[offset + 1] - data[offset]);
                    /** @type {number} */
                    var obj = i + multiplier * diff;
                    var actual = cb(obj, k, a);
                    return actual >= expected ? f(value, obj) : 0 === actual ? obj : indexOf(value, i, i + diff);
                }
                /**
                 * @return {undefined}
                 */
                function helper() {
                    /** @type {boolean} */
                    E = true;
                    if (!(k === key && a === index)) {
                        apply();
                    }
                }
                /** @type {number} */
                var padLength = 4;
                /** @type {number} */
                var expected = 0.001;
                /** @type {number} */
                var snapToNext = 1E-7;
                /** @type {number} */
                var nodeListLen = 10;
                /** @type {number} */
                var length = 11;
                /** @type {number} */
                var diff = 1 / (length - 1);
                /** @type {boolean} */
                var supportFloat32Array = "Float32Array" in global;
                if (4 !== arguments.length) {
                    return false;
                }
                /** @type {number} */
                var j = 0;
                for (; j < 4; ++j) {
                    if ("number" != typeof arguments[j] || (isNaN(arguments[j]) || !isFinite(arguments[j]))) {
                        return false;
                    }
                }
                /** @type {number} */
                k = Math.min(k, 1);
                /** @type {number} */
                a = Math.min(a, 1);
                /** @type {number} */
                k = Math.max(k, 0);
                /** @type {number} */
                a = Math.max(a, 0);
                /** @type {(Array|Float32Array)} */
                var data = supportFloat32Array ? new Float32Array(length) : new Array(length);
                /** @type {boolean} */
                var E = false;
                /**
                 * @param {number} value
                 * @return {?}
                 */
                var fn = function (value) {
                    return E || helper(), k === key && a === index ? value : 0 === value ? 0 : 1 === value ? 1 : callback(transform(value), key, index);
                };
                /**
                 * @return {?}
                 */
                fn.getControlPoints = function () {
                    return [{
                        x: k,
                        y: key
                    }, {
                        x: a,
                        y: index
                    }];
                };
                /** @type {string} */
                var callStr = "generateBezier(" + [k, key, a, index] + ")";
                return fn.toString = function () {
                    return callStr;
                }, fn;
            }
            /**
             * @param {string} properties
             * @param {number} name
             * @return {?}
             */
            function extend(properties, name) {
                /** @type {string} */
                var TAG = properties;
                return _.isString(properties) ? self.Easings[properties] || (TAG = false) : TAG = _.isArray(properties) && 1 === properties.length ? func.apply(null, properties) : _.isArray(properties) && 2 === properties.length ? matcherFunction.apply(null, properties.concat([name])) : !(!_.isArray(properties) || 4 !== properties.length) && add.apply(null, properties), false === TAG && (TAG = self.Easings[self.defaults.easing] ? self.defaults.easing : defaultEasing), TAG;
            }
            /**
             * @param {Object} el
             * @return {undefined}
             */
            function show(el) {
                if (el) {
                    var index = self.timestamp && true !== el ? el : S.now();
                    var jl = self.State.calls.length;
                    if (jl > 1E4) {
                        self.State.calls = queue(self.State.calls);
                        jl = self.State.calls.length;
                    }
                    /** @type {number} */
                    var j = 0;
                    for (; j < jl; j++) {
                        if (self.State.calls[j]) {
                            var object = self.State.calls[j];
                            var listenerStacks = object[0];
                            var o = object[2];
                            var width = object[3];
                            /** @type {boolean} */
                            var name = !!width;
                            /** @type {null} */
                            var total = null;
                            var res = object[5];
                            var next = object[6];
                            if (width || (width = self.State.calls[j][3] = index - 16), res) {
                                if (true !== res.resume) {
                                    continue;
                                }
                                /** @type {number} */
                                width = object[3] = Math.round(index - next - 16);
                                /** @type {null} */
                                object[5] = null;
                            }
                            /** @type {number} */
                            next = object[6] = index - width;
                            /** @type {number} */
                            var wrapper = Math.min(next / o.duration, 1);
                            /** @type {number} */
                            var targetType = 0;
                            var ln = listenerStacks.length;
                            for (; targetType < ln; targetType++) {
                                var map = listenerStacks[targetType];
                                var elem = map.element;
                                if (fn(elem)) {
                                    /** @type {boolean} */
                                    var O = false;
                                    if (o.display !== radio && (null !== o.display && "none" !== o.display)) {
                                        if ("flex" === o.display) {
                                            /** @type {Array} */
                                            var which = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            target.each(which, function (dataAndEvents, step) {
                                                that.setPropertyValue(elem, "display", step);
                                            });
                                        }
                                        that.setPropertyValue(elem, "display", o.display);
                                    }
                                    if (o.visibility !== radio) {
                                        if ("hidden" !== o.visibility) {
                                            that.setPropertyValue(elem, "visibility", o.visibility);
                                        }
                                    }
                                    var id;
                                    for (id in map) {
                                        if (map.hasOwnProperty(id) && "element" !== id) {
                                            var value;
                                            var options = map[id];
                                            var callback = _.isString(options.easing) ? self.Easings[options.easing] : options.easing;
                                            if (_.isString(options.pattern)) {
                                                /** @type {function (?, ?, boolean): ?} */
                                                var indent = 1 === wrapper ? function (dataAndEvents, property, asNumber) {
                                                    var value = options.endValue[property];
                                                    return asNumber ? Math.round(value) : value;
                                                } : function (dataAndEvents, i, asNumber) {
                                                    var b = options.startValue[i];
                                                    /** @type {number} */
                                                    var c = options.endValue[i] - b;
                                                    var value = b + c * callback(wrapper, o, c);
                                                    return asNumber ? Math.round(value) : value;
                                                };
                                                value = options.pattern.replace(/{(\d+)(!)?}/g, indent);
                                            } else {
                                                if (1 === wrapper) {
                                                    value = options.endValue;
                                                } else {
                                                    /** @type {number} */
                                                    var y = options.endValue - options.startValue;
                                                    value = options.startValue + y * callback(wrapper, o, y);
                                                }
                                            }
                                            if (!name && value === options.currentValue) {
                                                continue;
                                            }
                                            if (options.currentValue = value, "tween" === id) {
                                                total = value;
                                            } else {
                                                var i;
                                                if (that.Hooks.registered[id]) {
                                                    i = that.Hooks.getRoot(id);
                                                    var param = fn(elem).rootPropertyValueCache[i];
                                                    if (param) {
                                                        options.rootPropertyValue = param;
                                                    }
                                                }
                                                var q = that.setPropertyValue(elem, id, options.currentValue + (end < 9 && 0 === parseFloat(value) ? "" : options.unitType), options.rootPropertyValue, options.scrollData);
                                                if (that.Hooks.registered[id]) {
                                                    if (that.Normalizations.registered[i]) {
                                                        fn(elem).rootPropertyValueCache[i] = that.Normalizations.registered[i]("extract", null, q[1]);
                                                    } else {
                                                        fn(elem).rootPropertyValueCache[i] = q[1];
                                                    }
                                                }
                                                if ("transform" === q[0]) {
                                                    /** @type {boolean} */
                                                    O = true;
                                                }
                                            }
                                        }
                                    }
                                    if (o.mobileHA) {
                                        if (fn(elem).transformCache.translate3d === radio) {
                                            /** @type {string} */
                                            fn(elem).transformCache.translate3d = "(0px, 0px, 0px)";
                                            /** @type {boolean} */
                                            O = true;
                                        }
                                    }
                                    if (O) {
                                        that.flushTransformCache(elem);
                                    }
                                }
                            }
                            if (o.display !== radio) {
                                if ("none" !== o.display) {
                                    /** @type {boolean} */
                                    self.State.calls[j][2].display = false;
                                }
                            }
                            if (o.visibility !== radio) {
                                if ("hidden" !== o.visibility) {
                                    /** @type {boolean} */
                                    self.State.calls[j][2].visibility = false;
                                }
                            }
                            if (o.progress) {
                                o.progress.call(object[1], object[1], wrapper, Math.max(0, width + o.duration - index), width, total);
                            }
                            if (1 === wrapper) {
                                init(j);
                            }
                        }
                    }
                }
                if (self.State.isTicking) {
                    success(show);
                }
            }
            /**
             * @param {number} prop
             * @param {boolean} dataAndEvents
             * @return {?}
             */
            function init(prop, dataAndEvents) {
                if (!self.State.calls[prop]) {
                    return false;
                }
                var values = self.State.calls[prop][0];
                var deferred = self.State.calls[prop][1];
                var options = self.State.calls[prop][2];
                var ok = self.State.calls[prop][4];
                /** @type {boolean} */
                var l = false;
                /** @type {number} */
                var i = 0;
                var valuesLen = values.length;
                for (; i < valuesLen; i++) {
                    var elem = values[i].element;
                    if (!dataAndEvents) {
                        if (!options.loop) {
                            if ("none" === options.display) {
                                that.setPropertyValue(elem, "display", options.display);
                            }
                            if ("hidden" === options.visibility) {
                                that.setPropertyValue(elem, "visibility", options.visibility);
                            }
                        }
                    }
                    var data = fn(elem);
                    if (true !== options.loop && ((target.queue(elem)[1] === radio || !/\.velocityQueueEntryFlag/i.test(target.queue(elem)[1])) && data)) {
                        /** @type {boolean} */
                        data.isAnimating = false;
                        data.rootPropertyValueCache = {};
                        /** @type {boolean} */
                        var p = false;
                        target.each(that.Lists.transforms3D, function (dataAndEvents, option) {
                            /** @type {number} */
                            var n = /^scale/.test(option) ? 1 : 0;
                            var cssValue = data.transformCache[option];
                            if (data.transformCache[option] !== radio) {
                                if ((new RegExp("^\\(" + n + "[^.]")).test(cssValue)) {
                                    /** @type {boolean} */
                                    p = true;
                                    delete data.transformCache[option];
                                }
                            }
                        });
                        if (options.mobileHA) {
                            /** @type {boolean} */
                            p = true;
                            delete data.transformCache.translate3d;
                        }
                        if (p) {
                            that.flushTransformCache(elem);
                        }
                        that.Values.removeClass(elem, "velocity-animating");
                    }
                    if (!dataAndEvents && (options.complete && (!options.loop && i === valuesLen - 1))) {
                        try {
                            options.complete.call(deferred, deferred);
                        } catch (t) {
                            setTimeout(function () {
                                throw t;
                            }, 1);
                        }
                    }
                    if (ok) {
                        if (true !== options.loop) {
                            ok(deferred);
                        }
                    }
                    if (data) {
                        if (true === options.loop) {
                            if (!dataAndEvents) {
                                target.each(data.tweensContainer, function (qualifier, a) {
                                    if (/^rotate/.test(qualifier) && (parseFloat(a.startValue) - parseFloat(a.endValue)) % 360 == 0) {
                                        var e = a.startValue;
                                        a.startValue = a.endValue;
                                        a.endValue = e;
                                    }
                                    if (/^backgroundPosition/.test(qualifier)) {
                                        if (100 === parseFloat(a.endValue)) {
                                            if ("%" === a.unitType) {
                                                /** @type {number} */
                                                a.endValue = 0;
                                                /** @type {number} */
                                                a.startValue = 100;
                                            }
                                        }
                                    }
                                });
                                self(elem, "reverse", {
                                    loop: true,
                                    delay: options.delay
                                });
                            }
                        }
                    }
                    if (false !== options.queue) {
                        target.dequeue(elem, options.queue);
                    }
                }
                /** @type {boolean} */
                self.State.calls[prop] = false;
                /** @type {number} */
                var j = 0;
                var jl = self.State.calls.length;
                for (; j < jl; j++) {
                    if (false !== self.State.calls[j]) {
                        /** @type {boolean} */
                        l = true;
                        break;
                    }
                }
                if (false === l) {
                    /** @type {boolean} */
                    self.State.isTicking = false;
                    delete self.State.calls;
                    /** @type {Array} */
                    self.State.calls = [];
                }
            }
            var target;
            var end = function () {
                if (doc.documentMode) {
                    return doc.documentMode;
                }
                /** @type {number} */
                var t = 7;
                for (; t > 4; t--) {
                    /** @type {Element} */
                    var div = doc.createElement("div");
                    if (div.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", div.getElementsByTagName("span").length) {
                        return div = null, t;
                    }
                }
                return radio;
            }();
            var noop = function () {
                /** @type {number} */
                var y = 0;
                return global.webkitRequestAnimationFrame || (global.mozRequestAnimationFrame || function (del) {
                    var i;
                    /** @type {number} */
                    var h = (new Date).getTime();
                    return i = Math.max(0, 16 - (h - y)), y = h + i, setTimeout(function () {
                        del(h + i);
                    }, i);
                });
            }();
            var S = function () {
                /** @type {(Performance|{})} */
                var params = global.performance || {};
                if ("function" != typeof params.now) {
                    /** @type {number} */
                    var n = params.timing && params.timing.navigationStart ? params.timing.navigationStart : (new Date).getTime();
                    /**
                     * @return {?}
                     */
                    params.now = function () {
                        return (new Date).getTime() - n;
                    };
                }
                return params;
            }();
            var core_toString = function () {
                /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
                var self = Array.prototype.slice;
                try {
                    return self.call(doc.documentElement), self;
                } catch (e) {
                    return function (d, n) {
                        var c = this.length;
                        if ("number" != typeof d && (d = 0), "number" != typeof n && (n = c), this.slice) {
                            return self.call(this, d, n);
                        }
                        var i;
                        /** @type {Array} */
                        var progressValues = [];
                        var start = d >= 0 ? d : Math.max(0, c + d);
                        var end = n < 0 ? c + n : Math.min(n, c);
                        /** @type {number} */
                        var length = end - start;
                        if (length > 0) {
                            if (progressValues = new Array(length), this.charAt) {
                                /** @type {number} */
                                i = 0;
                                for (; i < length; i++) {
                                    progressValues[i] = this.charAt(start + i);
                                }
                            } else {
                                /** @type {number} */
                                i = 0;
                                for (; i < length; i++) {
                                    progressValues[i] = this[start + i];
                                }
                            }
                        }
                        return progressValues;
                    };
                }
            }();
            /**
             * @return {?}
             */
            var register = function () {
                return Array.prototype.includes ? function ($state, B) {
                    return $state.includes(B);
                } : Array.prototype.indexOf ? function (arr, chunk) {
                    return arr.indexOf(chunk) >= 0;
                } : function (haystack, needle) {
                    /** @type {number} */
                    var i = 0;
                    for (; i < haystack.length; i++) {
                        if (haystack[i] === needle) {
                            return true;
                        }
                    }
                    return false;
                };
            };
            var _ = {
                /**
                 * @param {?} value
                 * @return {?}
                 */
                isNumber: function (value) {
                    return "number" == typeof value;
                },
                /**
                 * @param {string} obj
                 * @return {?}
                 */
                isString: function (obj) {
                    return "string" == typeof obj;
                },
                /** @type {function (*): boolean} */
                isArray: Array.isArray || function (obj) {
                    return "[object Array]" === Object.prototype.toString.call(obj);
                },
                /**
                 * @param {?} obj
                 * @return {?}
                 */
                isFunction: function (obj) {
                    return "[object Function]" === Object.prototype.toString.call(obj);
                },
                /**
                 * @param {Object} obj
                 * @return {?}
                 */
                isNode: function (obj) {
                    return obj && obj.nodeType;
                },
                /**
                 * @param {string} obj
                 * @return {?}
                 */
                isWrapped: function (obj) {
                    return obj && (obj !== global && (_.isNumber(obj.length) && (!_.isString(obj) && (!_.isFunction(obj) && (!_.isNode(obj) && (0 === obj.length || _.isNode(obj[0])))))));
                },
                /**
                 * @param {Element} element
                 * @return {?}
                 */
                isSVG: function (element) {
                    return global.SVGElement && element instanceof global.SVGElement;
                },
                /**
                 * @param {?} obj
                 * @return {?}
                 */
                isEmptyObject: function (obj) {
                    var member;
                    for (member in obj) {
                        if (obj.hasOwnProperty(member)) {
                            return false;
                        }
                    }
                    return true;
                }
            };
            /** @type {boolean} */
            var bmMarked = false;
            if (options.fn && options.fn.jquery ? (target = options, bmMarked = true) : target = global.Velocity.Utilities, end <= 8 && !bmMarked) {
                throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            }
            if (end <= 7) {
                return void (jQuery.fn.velocity = jQuery.fn.animate);
            }
            /** @type {number} */
            var time = 400;
            /** @type {string} */
            var defaultEasing = "swing";
            var self = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: global.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: doc.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: false,
                    calls: [],
                    delayedElements: {
                        count: 0
                    }
                },
                CSS: {},
                Utilities: target,
                Redirects: {},
                Easings: {},
                Promise: global.Promise,
                defaults: {
                    queue: "",
                    duration: time,
                    easing: defaultEasing,
                    begin: radio,
                    complete: radio,
                    progress: radio,
                    display: radio,
                    visibility: radio,
                    loop: false,
                    delay: false,
                    mobileHA: true,
                    _cacheValues: true,
                    promiseRejectEmpty: true
                },
                /**
                 * @param {Element} elem
                 * @return {undefined}
                 */
                init: function (elem) {
                    target.data(elem, "velocity", {
                        isSVG: _.isSVG(elem),
                        isAnimating: false,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    });
                },
                hook: null,
                mock: false,
                version: {
                    major: 1,
                    minor: 5,
                    patch: 0
                },
                debug: false,
                timestamp: true,
                /**
                 * @param {string} inputType
                 * @return {undefined}
                 */
                pauseAll: function (inputType) {
                    /** @type {number} */
                    var udataCur = (new Date).getTime();
                    target.each(self.State.calls, function (dataAndEvents, values) {
                        if (values) {
                            if (inputType !== radio && (values[2].queue !== inputType || false === values[2].queue)) {
                                return true;
                            }
                            values[5] = {
                                resume: false
                            };
                        }
                    });
                    target.each(self.State.delayedElements, function (dataAndEvents, c) {
                        if (c) {
                            clear(c, udataCur);
                        }
                    });
                },
                /**
                 * @param {string} inputType
                 * @return {undefined}
                 */
                resumeAll: function (inputType) {
                    /** @type {number} */
                    var udataCur = (new Date).getTime();
                    target.each(self.State.calls, function (dataAndEvents, values) {
                        if (values) {
                            if (inputType !== radio && (values[2].queue !== inputType || false === values[2].queue)) {
                                return true;
                            }
                            if (values[5]) {
                                /** @type {boolean} */
                                values[5].resume = true;
                            }
                        }
                    });
                    target.each(self.State.delayedElements, function (dataAndEvents, failures) {
                        if (failures) {
                            text(failures, udataCur);
                        }
                    });
                }
            };
            if (global.pageYOffset !== radio) {
                /** @type {Window} */
                self.State.scrollAnchor = global;
                /** @type {string} */
                self.State.scrollPropertyLeft = "pageXOffset";
                /** @type {string} */
                self.State.scrollPropertyTop = "pageYOffset";
            } else {
                /** @type {Element} */
                self.State.scrollAnchor = doc.documentElement || (doc.body.parentNode || doc.body);
                /** @type {string} */
                self.State.scrollPropertyLeft = "scrollLeft";
                /** @type {string} */
                self.State.scrollPropertyTop = "scrollTop";
            }
            var matcherFunction = function () {
                /**
                 * @param {Object} opts
                 * @return {?}
                 */
                function init(opts) {
                    return -opts.tension * opts.x - opts.friction * opts.v;
                }
                /**
                 * @param {Object} obj
                 * @param {number} x
                 * @param {?} options
                 * @return {?}
                 */
                function update(obj, x, options) {
                    var params = {
                        x: obj.x + options.dx * x,
                        v: obj.v + options.dv * x,
                        tension: obj.tension,
                        friction: obj.friction
                    };
                    return {
                        dx: params.v,
                        dv: init(params)
                    };
                }
                /**
                 * @param {Object} value
                 * @param {number} x
                 * @return {?}
                 */
                function set(value, x) {
                    var settings = {
                        dx: value.v,
                        dv: init(value)
                    };
                    var options = update(value, 0.5 * x, settings);
                    var result = update(value, 0.5 * x, options);
                    var a = update(value, x, result);
                    /** @type {number} */
                    var f = 1 / 6 * (settings.dx + 2 * (options.dx + result.dx) + a.dx);
                    /** @type {number} */
                    var acc = 1 / 6 * (settings.dv + 2 * (options.dv + result.dv) + a.dv);
                    return value.x = value.x + f * x, value.v = value.v + acc * x, value;
                }
                return function onSuccess(data, value, contacts) {
                    var isNodeList;
                    var children;
                    var node;
                    var that = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    };
                    /** @type {Array} */
                    var configList = [0];
                    /** @type {number} */
                    var ret = 0;
                    /** @type {number} */
                    data = parseFloat(data) || 500;
                    /** @type {number} */
                    value = parseFloat(value) || 20;
                    contacts = contacts || null;
                    /** @type {number} */
                    that.tension = data;
                    /** @type {number} */
                    that.friction = value;
                    /** @type {boolean} */
                    isNodeList = null !== contacts;
                    if (isNodeList) {
                        ret = onSuccess(data, value);
                        /** @type {number} */
                        children = ret / contacts * 0.016;
                    } else {
                        /** @type {number} */
                        children = 0.016;
                    }
                    for (; ;) {
                        if (node = set(node || that, children), configList.push(1 + node.x), ret += 16, !(Math.abs(node.x) > 1E-4 && Math.abs(node.v) > 1E-4)) {
                            break;
                        }
                    }
                    return isNodeList ? function (dataAndEvents) {
                        return configList[dataAndEvents * (configList.length - 1) | 0];
                    } : ret;
                };
            }();
            self.Easings = {
                /**
                 * @param {?} t
                 * @return {?}
                 */
                linear: function (t) {
                    return t;
                },
                /**
                 * @param {number} p
                 * @return {?}
                 */
                swing: function (p) {
                    return 0.5 - Math.cos(p * Math.PI) / 2;
                },
                /**
                 * @param {number} pos
                 * @return {?}
                 */
                spring: function (pos) {
                    return 1 - Math.cos(4.5 * pos * Math.PI) * Math.exp(6 * -pos);
                }
            };
            target.each([["ease", [0.25, 0.1, 0.25, 1]], ["ease-in", [0.42, 0, 1, 1]], ["ease-out", [0, 0, 0.58, 1]], ["ease-in-out", [0.42, 0, 0.58, 1]], ["easeInSine", [0.47, 0, 0.745, 0.715]], ["easeOutSine", [0.39, 0.575, 0.565, 1]], ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]], ["easeInQuad", [0.55, 0.085, 0.68, 0.53]], ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]], ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]], ["easeInCubic", [0.55, 0.055, 0.675, 0.19]], ["easeOutCubic", [0.215, 0.61, 0.355, 1]], ["easeInOutCubic",
            [0.645, 0.045, 0.355, 1]], ["easeInQuart", [0.895, 0.03, 0.685, 0.22]], ["easeOutQuart", [0.165, 0.84, 0.44, 1]], ["easeInOutQuart", [0.77, 0, 0.175, 1]], ["easeInQuint", [0.755, 0.05, 0.855, 0.06]], ["easeOutQuint", [0.23, 1, 0.32, 1]], ["easeInOutQuint", [0.86, 0, 0.07, 1]], ["easeInExpo", [0.95, 0.05, 0.795, 0.035]], ["easeOutExpo", [0.19, 1, 0.22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [0.6, 0.04, 0.98, 0.335]], ["easeOutCirc", [0.075, 0.82, 0.165, 1]], ["easeInOutCirc", [0.785,
            0.135, 0.15, 0.86]]], function (dataAndEvents, item) {
                self.Easings[item[0]] = add.apply(null, item[1]);
            });
            var that = self.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        aliceblue: "240,248,255",
                        antiquewhite: "250,235,215",
                        aquamarine: "127,255,212",
                        aqua: "0,255,255",
                        azure: "240,255,255",
                        beige: "245,245,220",
                        bisque: "255,228,196",
                        black: "0,0,0",
                        blanchedalmond: "255,235,205",
                        blueviolet: "138,43,226",
                        blue: "0,0,255",
                        brown: "165,42,42",
                        burlywood: "222,184,135",
                        cadetblue: "95,158,160",
                        chartreuse: "127,255,0",
                        chocolate: "210,105,30",
                        coral: "255,127,80",
                        cornflowerblue: "100,149,237",
                        cornsilk: "255,248,220",
                        crimson: "220,20,60",
                        cyan: "0,255,255",
                        darkblue: "0,0,139",
                        darkcyan: "0,139,139",
                        darkgoldenrod: "184,134,11",
                        darkgray: "169,169,169",
                        darkgrey: "169,169,169",
                        darkgreen: "0,100,0",
                        darkkhaki: "189,183,107",
                        darkmagenta: "139,0,139",
                        darkolivegreen: "85,107,47",
                        darkorange: "255,140,0",
                        darkorchid: "153,50,204",
                        darkred: "139,0,0",
                        darksalmon: "233,150,122",
                        darkseagreen: "143,188,143",
                        darkslateblue: "72,61,139",
                        darkslategray: "47,79,79",
                        darkturquoise: "0,206,209",
                        darkviolet: "148,0,211",
                        deeppink: "255,20,147",
                        deepskyblue: "0,191,255",
                        dimgray: "105,105,105",
                        dimgrey: "105,105,105",
                        dodgerblue: "30,144,255",
                        firebrick: "178,34,34",
                        floralwhite: "255,250,240",
                        forestgreen: "34,139,34",
                        fuchsia: "255,0,255",
                        gainsboro: "220,220,220",
                        ghostwhite: "248,248,255",
                        gold: "255,215,0",
                        goldenrod: "218,165,32",
                        gray: "128,128,128",
                        grey: "128,128,128",
                        greenyellow: "173,255,47",
                        green: "0,128,0",
                        honeydew: "240,255,240",
                        hotpink: "255,105,180",
                        indianred: "205,92,92",
                        indigo: "75,0,130",
                        ivory: "255,255,240",
                        khaki: "240,230,140",
                        lavenderblush: "255,240,245",
                        lavender: "230,230,250",
                        lawngreen: "124,252,0",
                        lemonchiffon: "255,250,205",
                        lightblue: "173,216,230",
                        lightcoral: "240,128,128",
                        lightcyan: "224,255,255",
                        lightgoldenrodyellow: "250,250,210",
                        lightgray: "211,211,211",
                        lightgrey: "211,211,211",
                        lightgreen: "144,238,144",
                        lightpink: "255,182,193",
                        lightsalmon: "255,160,122",
                        lightseagreen: "32,178,170",
                        lightskyblue: "135,206,250",
                        lightslategray: "119,136,153",
                        lightsteelblue: "176,196,222",
                        lightyellow: "255,255,224",
                        limegreen: "50,205,50",
                        lime: "0,255,0",
                        linen: "250,240,230",
                        magenta: "255,0,255",
                        maroon: "128,0,0",
                        mediumaquamarine: "102,205,170",
                        mediumblue: "0,0,205",
                        mediumorchid: "186,85,211",
                        mediumpurple: "147,112,219",
                        mediumseagreen: "60,179,113",
                        mediumslateblue: "123,104,238",
                        mediumspringgreen: "0,250,154",
                        mediumturquoise: "72,209,204",
                        mediumvioletred: "199,21,133",
                        midnightblue: "25,25,112",
                        mintcream: "245,255,250",
                        mistyrose: "255,228,225",
                        moccasin: "255,228,181",
                        navajowhite: "255,222,173",
                        navy: "0,0,128",
                        oldlace: "253,245,230",
                        olivedrab: "107,142,35",
                        olive: "128,128,0",
                        orangered: "255,69,0",
                        orange: "255,165,0",
                        orchid: "218,112,214",
                        palegoldenrod: "238,232,170",
                        palegreen: "152,251,152",
                        paleturquoise: "175,238,238",
                        palevioletred: "219,112,147",
                        papayawhip: "255,239,213",
                        peachpuff: "255,218,185",
                        peru: "205,133,63",
                        pink: "255,192,203",
                        plum: "221,160,221",
                        powderblue: "176,224,230",
                        purple: "128,0,128",
                        red: "255,0,0",
                        rosybrown: "188,143,143",
                        royalblue: "65,105,225",
                        saddlebrown: "139,69,19",
                        salmon: "250,128,114",
                        sandybrown: "244,164,96",
                        seagreen: "46,139,87",
                        seashell: "255,245,238",
                        sienna: "160,82,45",
                        silver: "192,192,192",
                        skyblue: "135,206,235",
                        slateblue: "106,90,205",
                        slategray: "112,128,144",
                        snow: "255,250,250",
                        springgreen: "0,255,127",
                        steelblue: "70,130,180",
                        tan: "210,180,140",
                        teal: "0,128,128",
                        thistle: "216,191,216",
                        tomato: "255,99,71",
                        turquoise: "64,224,208",
                        violet: "238,130,238",
                        wheat: "245,222,179",
                        whitesmoke: "245,245,245",
                        white: "255,255,255",
                        yellowgreen: "154,205,50",
                        yellow: "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    /**
                     * @return {undefined}
                     */
                    register: function () {
                        /** @type {number} */
                        var color = 0;
                        for (; color < that.Lists.colors.length; color++) {
                            /** @type {string} */
                            var e = "color" === that.Lists.colors[color] ? "0 0 0 1" : "255 255 255 1";
                            /** @type {Array} */
                            that.Hooks.templates[that.Lists.colors[color]] = ["Red Green Blue Alpha", e];
                        }
                        var key;
                        var params;
                        var files;
                        if (end) {
                            for (key in that.Hooks.templates) {
                                if (that.Hooks.templates.hasOwnProperty(key)) {
                                    params = that.Hooks.templates[key];
                                    files = params[0].split(" ");
                                    var namespaces = params[1].match(that.RegEx.valueSplit);
                                    if ("Color" === files[0]) {
                                        files.push(files.shift());
                                        namespaces.push(namespaces.shift());
                                        /** @type {Array} */
                                        that.Hooks.templates[key] = [files.join(" "), namespaces.join(" ")];
                                    }
                                }
                            }
                        }
                        for (key in that.Hooks.templates) {
                            if (that.Hooks.templates.hasOwnProperty(key)) {
                                params = that.Hooks.templates[key];
                                files = params[0].split(" ");
                                var fileName;
                                for (fileName in files) {
                                    if (files.hasOwnProperty(fileName)) {
                                        var i = key + files[fileName];
                                        /** @type {string} */
                                        var path = fileName;
                                        /** @type {Array} */
                                        that.Hooks.registered[i] = [key, path];
                                    }
                                }
                            }
                        }
                    },
                    /**
                     * @param {string} i
                     * @return {?}
                     */
                    getRoot: function (i) {
                        var v = that.Hooks.registered[i];
                        return v ? v[0] : i;
                    },
                    /**
                     * @param {string} val
                     * @param {number} id
                     * @return {?}
                     */
                    getUnit: function (val, id) {
                        var data = (val.substr(id || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        return data && register(that.Lists.units, data) ? data : "";
                    },
                    /**
                     * @param {string} template
                     * @return {?}
                     */
                    fixColors: function (template) {
                        return template.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (dataAndEvents, val, obj) {
                            return that.Lists.colorNames.hasOwnProperty(obj) ? (val || "rgba(") + that.Lists.colorNames[obj] + (val ? "" : ",1)") : val + obj;
                        });
                    },
                    /**
                     * @param {?} key
                     * @param {string} letter
                     * @return {?}
                     */
                    cleanRootPropertyValue: function (key, letter) {
                        return that.RegEx.valueUnwrap.test(letter) && (letter = letter.match(that.RegEx.valueUnwrap)[1]), that.Values.isCSSNullValue(letter) && (letter = that.Hooks.templates[key][1]), letter;
                    },
                    /**
                     * @param {?} name
                     * @param {(number|string)} e
                     * @return {?}
                     */
                    extractValue: function (name, e) {
                        var ca = that.Hooks.registered[name];
                        if (ca) {
                            var camelKey = ca[0];
                            var c = ca[1];
                            return e = that.Hooks.cleanRootPropertyValue(camelKey, e), e.toString().match(that.RegEx.valueSplit)[c];
                        }
                        return e;
                    },
                    /**
                     * @param {?} key
                     * @param {string} data
                     * @param {(RegExp|string)} e
                     * @return {?}
                     */
                    injectValue: function (key, data, e) {
                        var owner = that.Hooks.registered[key];
                        if (owner) {
                            var raw;
                            var camelKey = owner[0];
                            var unlock = owner[1];
                            return e = that.Hooks.cleanRootPropertyValue(camelKey, e), raw = e.toString().match(that.RegEx.valueSplit), raw[unlock] = data, raw.join(" ");
                        }
                        return e;
                    }
                },
                Normalizations: {
                    registered: {
                        /**
                         * @param {?} aField
                         * @param {?} idx
                         * @param {Object} value
                         * @return {?}
                         */
                        clip: function (aField, idx, value) {
                            switch (aField) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var val;
                                    return that.RegEx.wrappedValueAlreadyExtracted.test(value) ? val = value : (val = value.toString().match(that.RegEx.valueUnwrap), val = val ? val[1].replace(/,(\s+)?/g, " ") : value), val;
                                case "inject":
                                    return "rect(" + value + ")";
                            }
                        },
                        /**
                         * @param {?} fromFocus
                         * @param {?} e
                         * @param {(number|string)} x
                         * @return {?}
                         */
                        blur: function (fromFocus, e, x) {
                            switch (fromFocus) {
                                case "name":
                                    return self.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    /** @type {number} */
                                    var t = parseFloat(x);
                                    if (!t && 0 !== t) {
                                        var horizontalOffset = x.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        t = horizontalOffset ? horizontalOffset[1] : 0;
                                    }
                                    return t;
                                case "inject":
                                    return parseFloat(x) ? "blur(" + x + ")" : "none";
                            }
                        },
                        /**
                         * @param {?} el
                         * @param {Element} map
                         * @param {number} value
                         * @return {?}
                         */
                        opacity: function (el, map, value) {
                            if (end <= 8) {
                                switch (el) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var ctrl = value.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return value = ctrl ? ctrl[1] / 100 : 1;
                                    case "inject":
                                        return map.style.zoom = 1, parseFloat(value) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(value), 10) + ")";
                                }
                            } else {
                                switch (el) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                        ;
                                    case "inject":
                                        return value;
                                }
                            }
                        }
                    },
                    /**
                     * @return {undefined}
                     */
                    register: function () {
                        /**
                         * @param {string} WIDTH
                         * @param {Element} key
                         * @param {boolean} deepDataAndEvents
                         * @return {?}
                         */
                        function addAnimation(WIDTH, key, deepDataAndEvents) {
                            if ("border-box" === that.getPropertyValue(key, "boxSizing").toString().toLowerCase() === (deepDataAndEvents || false)) {
                                var i;
                                var size;
                                /** @type {number} */
                                var totalSize = 0;
                                /** @type {Array} */
                                var sides = "width" === WIDTH ? ["Left", "Right"] : ["Top", "Bottom"];
                                /** @type {Array} */
                                var codeSegments = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];
                                /** @type {number} */
                                i = 0;
                                for (; i < codeSegments.length; i++) {
                                    /** @type {number} */
                                    size = parseFloat(that.getPropertyValue(key, codeSegments[i]));
                                    if (!isNaN(size)) {
                                        totalSize += size;
                                    }
                                }
                                return deepDataAndEvents ? -totalSize : totalSize;
                            }
                            return 0;
                        }
                        /**
                         * @param {string} b
                         * @param {boolean} deepDataAndEvents
                         * @return {?}
                         */
                        function log(b, deepDataAndEvents) {
                            return function (aField, subKey, a) {
                                switch (aField) {
                                    case "name":
                                        return b;
                                    case "extract":
                                        return parseFloat(a) + addAnimation(b, subKey, deepDataAndEvents);
                                    case "inject":
                                        return parseFloat(a) - addAnimation(b, subKey, deepDataAndEvents) + "px";
                                }
                            };
                        }
                        if (!(end && !(end > 9))) {
                            if (!self.State.isGingerbread) {
                                /** @type {Array} */
                                that.Lists.transformsBase = that.Lists.transformsBase.concat(that.Lists.transforms3D);
                            }
                        }
                        /** @type {number} */
                        var i = 0;
                        for (; i < that.Lists.transformsBase.length; i++) {
                            !function () {
                                var part = that.Lists.transformsBase[i];
                                /**
                                 * @param {?} aField
                                 * @param {Element} elem
                                 * @param {number} qualifier
                                 * @return {?}
                                 */
                                that.Normalizations.registered[part] = function (aField, elem, qualifier) {
                                    switch (aField) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return fn(elem) === radio || fn(elem).transformCache[part] === radio ? /^scale/i.test(part) ? 1 : 0 : fn(elem).transformCache[part].replace(/[()]/g, "");
                                        case "inject":
                                            /** @type {boolean} */
                                            var o = false;
                                            switch (part.substr(0, part.length - 1)) {
                                                case "translate":
                                                    /** @type {boolean} */
                                                    o = !/(%|px|em|rem|vw|vh|\d)$/i.test(qualifier);
                                                    break;
                                                case "scal":
                                                    ;
                                                case "scale":
                                                    if (self.State.isAndroid) {
                                                        if (fn(elem).transformCache[part] === radio) {
                                                            if (qualifier < 1) {
                                                                /** @type {number} */
                                                                qualifier = 1;
                                                            }
                                                        }
                                                    }
                                                    /** @type {boolean} */
                                                    o = !/(\d)$/i.test(qualifier);
                                                    break;
                                                case "skew":
                                                    ;
                                                case "rotate":
                                                    /** @type {boolean} */
                                                    o = !/(deg|\d)$/i.test(qualifier);
                                            }
                                            return o || (fn(elem).transformCache[part] = "(" + qualifier + ")"), fn(elem).transformCache[part];
                                    }
                                };
                            }();
                        }
                        /** @type {number} */
                        var l = 0;
                        for (; l < that.Lists.colors.length; l++) {
                            !function () {
                                var param = that.Lists.colors[l];
                                /**
                                 * @param {?} aField
                                 * @param {?} dataAndEvents
                                 * @param {string} className
                                 * @return {?}
                                 */
                                that.Normalizations.registered[param] = function (aField, dataAndEvents, className) {
                                    switch (aField) {
                                        case "name":
                                            return param;
                                        case "extract":
                                            var title;
                                            if (that.RegEx.wrappedValueAlreadyExtracted.test(className)) {
                                                /** @type {string} */
                                                title = className;
                                            } else {
                                                var type;
                                                var colors = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                if (/^[A-z]+$/i.test(className)) {
                                                    type = colors[className] !== radio ? colors[className] : colors.black;
                                                } else {
                                                    if (that.RegEx.isHex.test(className)) {
                                                        /** @type {string} */
                                                        type = "rgb(" + that.Values.hexToRgb(className).join(" ") + ")";
                                                    } else {
                                                        if (!/^rgba?\(/i.test(className)) {
                                                            /** @type {string} */
                                                            type = colors.black;
                                                        }
                                                    }
                                                }
                                                title = (type || className).toString().match(that.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                                            }
                                            return (!end || end > 8) && (3 === title.split(" ").length && (title += " 1")), title;
                                        case "inject":
                                            return /^rgb/.test(className) ? className : (end <= 8 ? 4 === className.split(" ").length && (className = className.split(/\s+/).slice(0, 3).join(" ")) : 3 === className.split(" ").length && (className += " 1"), (end <= 8 ? "rgb" : "rgba") + "(" + className.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")");
                                    }
                                };
                            }();
                        }
                        that.Normalizations.registered.innerWidth = log("width", true);
                        that.Normalizations.registered.innerHeight = log("height", true);
                        that.Normalizations.registered.outerWidth = log("width");
                        that.Normalizations.registered.outerHeight = log("height");
                    }
                },
                Names: {
                    /**
                     * @param {string} string
                     * @return {?}
                     */
                    camelCase: function (string) {
                        return string.replace(/-(\w)/g, function (dataAndEvents, letter) {
                            return letter.toUpperCase();
                        });
                    },
                    /**
                     * @param {string} cls
                     * @return {?}
                     */
                    SVGAttribute: function (cls) {
                        /** @type {string} */
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (end || self.State.isAndroid && !self.State.isChrome) && (e += "|transform"), (new RegExp("^(" + e + ")$", "i")).test(cls);
                    },
                    /**
                     * @param {string} name
                     * @return {?}
                     */
                    prefixCheck: function (name) {
                        if (self.State.prefixMatches[name]) {
                            return [self.State.prefixMatches[name], true];
                        }
                        /** @type {Array} */
                        var domPrefixes = ["", "Webkit", "Moz", "ms", "O"];
                        /** @type {number} */
                        var i = 0;
                        /** @type {number} */
                        var len = domPrefixes.length;
                        for (; i < len; i++) {
                            var attr;
                            if (attr = 0 === i ? name : domPrefixes[i] + name.replace(/^\w/, function (letter) {
                              return letter.toUpperCase();
                            }), _.isString(self.State.prefixElement.style[attr])) {
                                return self.State.prefixMatches[name] = attr, [attr, true];
                            }
                        }
                        return [name, false];
                    }
                },
                Values: {
                    /**
                     * @param {string} value
                     * @return {?}
                     */
                    hexToRgb: function (value) {
                        var match;
                        /** @type {RegExp} */
                        var rxhtmlTag = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                        /** @type {RegExp} */
                        var rchecked = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return value = value.replace(rxhtmlTag, function (dataAndEvents, r, g, b) {
                            return r + r + g + g + b + b;
                        }), match = rchecked.exec(value), match ? [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)] : [0, 0, 0];
                    },
                    /**
                     * @param {string} str
                     * @return {?}
                     */
                    isCSSNullValue: function (str) {
                        return !str || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(str);
                    },
                    /**
                     * @param {string} value
                     * @return {?}
                     */
                    getUnitType: function (value) {
                        return /^(rotate|skew)/i.test(value) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(value) ? "" : "px";
                    },
                    /**
                     * @param {Element} elem
                     * @return {?}
                     */
                    getDisplayType: function (elem) {
                        var nType = elem && elem.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(nType) ? "inline" : /^(li)$/i.test(nType) ? "list-item" : /^(tr)$/i.test(nType) ? "table-row" : /^(table)$/i.test(nType) ? "table" : /^(tbody)$/i.test(nType) ? "table-row-group" : "block";
                    },
                    /**
                     * @param {string} element
                     * @param {string} value
                     * @return {undefined}
                     */
                    addClass: function (element, value) {
                        if (element) {
                            if (element.classList) {
                                element.classList.add(value);
                            } else {
                                if (_.isString(element.className)) {
                                    element.className += (element.className.length ? " " : "") + value;
                                } else {
                                    var filter = element.getAttribute(end <= 7 ? "className" : "class") || "";
                                    element.setAttribute("class", filter + (filter ? " " : "") + value);
                                }
                            }
                        }
                    },
                    /**
                     * @param {string} element
                     * @param {string} className
                     * @return {undefined}
                     */
                    removeClass: function (element, className) {
                        if (element) {
                            if (element.classList) {
                                element.classList.remove(className);
                            } else {
                                if (_.isString(element.className)) {
                                    element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                                } else {
                                    var text = element.getAttribute(end <= 7 ? "className" : "class") || "";
                                    element.setAttribute("class", text.replace(new RegExp("(^|s)" + className.split(" ").join("|") + "(s|$)", "gi"), " "));
                                }
                            }
                        }
                    }
                },
                /**
                 * @param {Element} elem
                 * @param {string} name
                 * @param {string} value
                 * @param {boolean} dataAndEvents
                 * @return {?}
                 */
                getPropertyValue: function (elem, name, value, dataAndEvents) {
                    /**
                     * @param {Element} elem
                     * @param {string} name
                     * @return {?}
                     */
                    function load(elem, name) {
                        /** @type {number} */
                        var ret = 0;
                        if (end <= 8) {
                            ret = target.css(elem, name);
                        } else {
                            /** @type {boolean} */
                            var l = false;
                            if (/^(width|height)$/.test(name)) {
                                if (0 === that.getPropertyValue(elem, "display")) {
                                    /** @type {boolean} */
                                    l = true;
                                    that.setPropertyValue(elem, "display", that.Values.getDisplayType(elem));
                                }
                            }
                            /**
                             * @return {undefined}
                             */
                            var clear = function () {
                                if (l) {
                                    that.setPropertyValue(elem, "display", "none");
                                }
                            };
                            if (!dataAndEvents) {
                                if ("height" === name && "border-box" !== that.getPropertyValue(elem, "boxSizing").toString().toLowerCase()) {
                                    /** @type {number} */
                                    var c = elem.offsetHeight - (parseFloat(that.getPropertyValue(elem, "borderTopWidth")) || 0) - (parseFloat(that.getPropertyValue(elem, "borderBottomWidth")) || 0) - (parseFloat(that.getPropertyValue(elem, "paddingTop")) || 0) - (parseFloat(that.getPropertyValue(elem, "paddingBottom")) || 0);
                                    return clear(), c;
                                }
                                if ("width" === name && "border-box" !== that.getPropertyValue(elem, "boxSizing").toString().toLowerCase()) {
                                    /** @type {number} */
                                    var f = elem.offsetWidth - (parseFloat(that.getPropertyValue(elem, "borderLeftWidth")) || 0) - (parseFloat(that.getPropertyValue(elem, "borderRightWidth")) || 0) - (parseFloat(that.getPropertyValue(elem, "paddingLeft")) || 0) - (parseFloat(that.getPropertyValue(elem, "paddingRight")) || 0);
                                    return clear(), f;
                                }
                            }
                            var computedStyle;
                            computedStyle = fn(elem) === radio ? global.getComputedStyle(elem, null) : fn(elem).computedStyle ? fn(elem).computedStyle : fn(elem).computedStyle = global.getComputedStyle(elem, null);
                            if ("borderColor" === name) {
                                /** @type {string} */
                                name = "borderTopColor";
                            }
                            ret = 9 === end && "filter" === name ? computedStyle.getPropertyValue(name) : computedStyle[name];
                            if (!("" !== ret && null !== ret)) {
                                ret = elem.style[name];
                            }
                            clear();
                        }
                        if ("auto" === ret && /^(top|right|bottom|left)$/i.test(name)) {
                            var result = load(elem, "position");
                            if ("fixed" === result || "absolute" === result && /top|left/i.test(name)) {
                                ret = target(elem).position()[name] + "px";
                            }
                        }
                        return ret;
                    }
                    var ret;
                    if (that.Hooks.registered[name]) {
                        /** @type {string} */
                        var file = name;
                        var type = that.Hooks.getRoot(file);
                        if (value === radio) {
                            value = that.getPropertyValue(elem, that.Names.prefixCheck(type)[0]);
                        }
                        if (that.Normalizations.registered[type]) {
                            value = that.Normalizations.registered[type]("extract", elem, value);
                        }
                        ret = that.Hooks.extractValue(file, value);
                    } else {
                        if (that.Normalizations.registered[name]) {
                            var normalizedName;
                            var c;
                            normalizedName = that.Normalizations.registered[name]("name", elem);
                            if ("transform" !== normalizedName) {
                                c = load(elem, that.Names.prefixCheck(normalizedName)[0]);
                                if (that.Values.isCSSNullValue(c)) {
                                    if (that.Hooks.templates[name]) {
                                        c = that.Hooks.templates[name][1];
                                    }
                                }
                            }
                            ret = that.Normalizations.registered[name]("extract", elem, c);
                        }
                    }
                    if (!/^[\d-]/.test(ret)) {
                        var matched = fn(elem);
                        if (matched && (matched.isSVG && that.Names.SVGAttribute(name))) {
                            if (/^(height|width)$/i.test(name)) {
                                try {
                                    ret = elem.getBBox()[name];
                                } catch (t) {
                                    /** @type {number} */
                                    ret = 0;
                                }
                            } else {
                                ret = elem.getAttribute(name);
                            }
                        } else {
                            ret = load(elem, that.Names.prefixCheck(name)[0]);
                        }
                    }
                    return that.Values.isCSSNullValue(ret) && (ret = 0), self.debug, ret;
                },
                /**
                 * @param {Element} context
                 * @param {string} name
                 * @param {string} val
                 * @param {(Node|string)} result
                 * @param {Object} info
                 * @return {?}
                 */
                setPropertyValue: function (context, name, val, result, info) {
                    /** @type {string} */
                    var id = name;
                    if ("scroll" === name) {
                        if (info.container) {
                            /** @type {string} */
                            info.container["scroll" + info.direction] = val;
                        } else {
                            if ("Left" === info.direction) {
                                global.scrollTo(val, info.alternateValue);
                            } else {
                                global.scrollTo(info.alternateValue, val);
                            }
                        }
                    } else {
                        if (that.Normalizations.registered[name] && "transform" === that.Normalizations.registered[name]("name", context)) {
                            that.Normalizations.registered[name]("inject", context, val);
                            /** @type {string} */
                            id = "transform";
                            val = fn(context).transformCache[name];
                        } else {
                            if (that.Hooks.registered[name]) {
                                /** @type {string} */
                                var camelKey = name;
                                var args = that.Hooks.getRoot(name);
                                result = result || that.getPropertyValue(context, args);
                                val = that.Hooks.injectValue(camelKey, val, result);
                                name = args;
                            }
                            if (that.Normalizations.registered[name] && (val = that.Normalizations.registered[name]("inject", context, val), name = that.Normalizations.registered[name]("name", context)), id = that.Names.prefixCheck(name)[0], end <= 8) {
                                try {
                                    /** @type {string} */
                                    context.style[id] = val;
                                } catch (t) {
                                    self.debug;
                                }
                            } else {
                                var res = fn(context);
                                if (res && (res.isSVG && that.Names.SVGAttribute(name))) {
                                    context.setAttribute(name, val);
                                } else {
                                    /** @type {string} */
                                    context.style[id] = val;
                                }
                            }
                            self.debug;
                        }
                    }
                    return [id, val];
                },
                /**
                 * @param {Element} elem
                 * @return {undefined}
                 */
                flushTransformCache: function (elem) {
                    /** @type {string} */
                    var flag = "";
                    var elemData = fn(elem);
                    if ((end || self.State.isAndroid && !self.State.isChrome) && (elemData && elemData.isSVG)) {
                        /**
                         * @param {string} x
                         * @return {?}
                         */
                        var $ = function (x) {
                            return parseFloat(that.getPropertyValue(elem, x));
                        };
                        var transforms = {
                            translate: [$("translateX"), $("translateY")],
                            skewX: [$("skewX")],
                            skewY: [$("skewY")],
                            scale: 1 !== $("scale") ? [$("scale"), $("scale")] : [$("scaleX"), $("scaleY")],
                            rotate: [$("rotateZ"), 0, 0]
                        };
                        target.each(fn(elem).transformCache, function (key) {
                            if (/^translate/i.test(key)) {
                                /** @type {string} */
                                key = "translate";
                            } else {
                                if (/^scale/i.test(key)) {
                                    /** @type {string} */
                                    key = "scale";
                                } else {
                                    if (/^rotate/i.test(key)) {
                                        /** @type {string} */
                                        key = "rotate";
                                    }
                                }
                            }
                            if (transforms[key]) {
                                flag += key + "(" + transforms[key].join(" ") + ") ";
                                delete transforms[key];
                            }
                        });
                    } else {
                        var item;
                        var returnItem;
                        target.each(fn(elem).transformCache, function (root) {
                            if (item = fn(elem).transformCache[root], "transformPerspective" === root) {
                                return returnItem = item, true;
                            }
                            if (9 === end) {
                                if ("rotateZ" === root) {
                                    /** @type {string} */
                                    root = "rotate";
                                }
                            }
                            flag += root + item + " ";
                        });
                        if (returnItem) {
                            flag = "perspective" + returnItem + " " + flag;
                        }
                    }
                    that.setPropertyValue(elem, "transform", flag);
                }
            };
            that.Hooks.register();
            that.Normalizations.register();
            /**
             * @param {Object} e
             * @param {string} name
             * @param {string} value
             * @return {?}
             */
            self.hook = function (e, name, value) {
                var ret;
                return e = clone(e), target.each(e, function (dataAndEvents, elem) {
                    if (fn(elem) === radio && self.init(elem), value === radio) {
                        if (ret === radio) {
                            ret = that.getPropertyValue(elem, name);
                        }
                    } else {
                        var result = that.setPropertyValue(elem, name, value);
                        if ("transform" === result[0]) {
                            self.CSS.flushTransformCache(elem);
                        }
                        ret = result;
                    }
                }), ret;
            };
            /**
             * @return {?}
             */
            var x = function init() {
                /**
                 * @return {?}
                 */
                function done() {
                    return result ? promise.promise || null : failed;
                }
                /**
                 * @param {string} elem
                 * @param {?} index
                 * @return {undefined}
                 */
                function run(elem, index) {
                    /**
                     * @param {?} deepDataAndEvents
                     * @return {?}
                     */
                    function init(deepDataAndEvents) {
                        var obj;
                        var animations;
                        if (options.begin && 0 === Darwin_Growl) {
                            try {
                                options.begin.call(a, a);
                            } catch (t) {
                                setTimeout(function () {
                                    throw t;
                                }, 1);
                            }
                        }
                        if ("scroll" === type) {
                            var items;
                            var alternateValue;
                            var str;
                            /** @type {string} */
                            var direction = /^x$/i.test(options.axis) ? "Left" : "Top";
                            /** @type {number} */
                            var last = parseFloat(options.offset) || 0;
                            if (options.container) {
                                if (_.isWrapped(options.container) || _.isNode(options.container)) {
                                    options.container = options.container[0] || options.container;
                                    items = options.container["scroll" + direction];
                                    str = items + target(elem).position()[direction.toLowerCase()] + last;
                                } else {
                                    /** @type {null} */
                                    options.container = null;
                                }
                            } else {
                                items = self.State.scrollAnchor[self.State["scrollProperty" + direction]];
                                alternateValue = self.State.scrollAnchor[self.State["scrollProperty" + ("Left" === direction ? "Top" : "Left")]];
                                str = target(elem).offset()[direction.toLowerCase()] + last;
                            }
                            state = {
                                scroll: {
                                    rootPropertyValue: false,
                                    startValue: items,
                                    currentValue: items,
                                    endValue: str,
                                    unitType: "",
                                    easing: options.easing,
                                    scrollData: {
                                        container: options.container,
                                        direction: direction,
                                        alternateValue: alternateValue
                                    }
                                },
                                element: elem
                            };
                            self.debug;
                        } else {
                            if ("reverse" === type) {
                                if (!(obj = fn(elem))) {
                                    return;
                                }
                                if (!obj.tweensContainer) {
                                    return void target.dequeue(elem, options.queue);
                                }
                                if ("none" === obj.opts.display) {
                                    /** @type {string} */
                                    obj.opts.display = "auto";
                                }
                                if ("hidden" === obj.opts.visibility) {
                                    /** @type {string} */
                                    obj.opts.visibility = "visible";
                                }
                                /** @type {boolean} */
                                obj.opts.loop = false;
                                /** @type {null} */
                                obj.opts.begin = null;
                                /** @type {null} */
                                obj.opts.complete = null;
                                if (!data.easing) {
                                    delete options.easing;
                                }
                                if (!data.duration) {
                                    delete options.duration;
                                }
                                options = target.extend({}, obj.opts, options);
                                animations = target.extend(true, {}, obj ? obj.tweensContainer : null);
                                var i;
                                for (i in animations) {
                                    if (animations.hasOwnProperty(i) && "element" !== i) {
                                        var endValue = animations[i].startValue;
                                        animations[i].startValue = animations[i].currentValue = animations[i].endValue;
                                        animations[i].endValue = endValue;
                                        if (!_.isEmptyObject(data)) {
                                            animations[i].easing = options.easing;
                                        }
                                        self.debug;
                                    }
                                }
                                state = animations;
                            } else {
                                if ("start" === type) {
                                    obj = fn(elem);
                                    if (obj) {
                                        if (obj.tweensContainer) {
                                            if (true === obj.isAnimating) {
                                                animations = obj.tweensContainer;
                                            }
                                        }
                                    }
                                    /**
                                     * @param {string} i
                                     * @param {Array} args
                                     * @return {?}
                                     */
                                    var init = function (i, args) {
                                        var ret;
                                        var key = that.Hooks.getRoot(i);
                                        /** @type {boolean} */
                                        var data = false;
                                        var item = args[0];
                                        var pageY = args[1];
                                        var value = args[2];
                                        if (!(obj && obj.isSVG || ("tween" === key || (false !== that.Names.prefixCheck(key)[1] || that.Normalizations.registered[key] !== radio)))) {
                                            return void self.debug;
                                        }
                                        if (options.display !== radio && (null !== options.display && "none" !== options.display) || options.visibility !== radio && "hidden" !== options.visibility) {
                                            if (/opacity|filter/.test(i)) {
                                                if (!value) {
                                                    if (0 !== item) {
                                                        /** @type {number} */
                                                        value = 0;
                                                    }
                                                }
                                            }
                                        }
                                        if (options._cacheValues && (animations && animations[i])) {
                                            if (value === radio) {
                                                value = animations[i].endValue + animations[i].unitType;
                                            }
                                            data = obj.rootPropertyValueCache[key];
                                        } else {
                                            if (that.Hooks.registered[i]) {
                                                if (value === radio) {
                                                    data = that.getPropertyValue(elem, key);
                                                    value = that.getPropertyValue(elem, i, data);
                                                } else {
                                                    data = that.Hooks.templates[key][1];
                                                }
                                            } else {
                                                if (value === radio) {
                                                    value = that.getPropertyValue(elem, i);
                                                }
                                            }
                                        }
                                        var result;
                                        var b;
                                        var a;
                                        /** @type {boolean} */
                                        var op = false;
                                        /**
                                         * @param {string} selector
                                         * @param {string} v
                                         * @return {?}
                                         */
                                        var filter = function (selector, v) {
                                            var result;
                                            var i;
                                            return i = (v || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (subKey) {
                                                return result = subKey, "";
                                            }), result || (result = that.Values.getUnitType(selector)), [i, result];
                                        };
                                        if (value !== item && (_.isString(value) && _.isString(item))) {
                                            /** @type {string} */
                                            ret = "";
                                            /** @type {number} */
                                            var idx = 0;
                                            /** @type {number} */
                                            var pos = 0;
                                            /** @type {Array} */
                                            var matches = [];
                                            /** @type {Array} */
                                            var _results = [];
                                            /** @type {number} */
                                            var alpha = 0;
                                            /** @type {number} */
                                            var stack = 0;
                                            /** @type {number} */
                                            var memory = 0;
                                            value = that.Hooks.fixColors(value);
                                            item = that.Hooks.fixColors(item);
                                            for (; idx < value.length && pos < item.length;) {
                                                var c = value[idx];
                                                var p = item[pos];
                                                if (/[\d\.-]/.test(c) && /[\d\.-]/.test(p)) {
                                                    var token = c;
                                                    var v = p;
                                                    /** @type {string} */
                                                    var lf = ".";
                                                    /** @type {string} */
                                                    var R = ".";
                                                    for (; ++idx < value.length;) {
                                                        if ((c = value[idx]) === lf) {
                                                            /** @type {string} */
                                                            lf = "..";
                                                        } else {
                                                            if (!/\d/.test(c)) {
                                                                break;
                                                            }
                                                        }
                                                        token += c;
                                                    }
                                                    for (; ++pos < item.length;) {
                                                        if ((p = item[pos]) === R) {
                                                            /** @type {string} */
                                                            R = "..";
                                                        } else {
                                                            if (!/\d/.test(p)) {
                                                                break;
                                                            }
                                                        }
                                                        v += p;
                                                    }
                                                    var name = that.Hooks.getUnit(value, idx);
                                                    var text = that.Hooks.getUnit(item, pos);
                                                    if (idx += name.length, pos += text.length, name === text) {
                                                        if (token === v) {
                                                            ret += token + name;
                                                        } else {
                                                            ret += "{" + matches.length + (stack ? "!" : "") + "}" + name;
                                                            matches.push(parseFloat(token));
                                                            _results.push(parseFloat(v));
                                                        }
                                                    } else {
                                                        /** @type {number} */
                                                        var m = parseFloat(token);
                                                        /** @type {number} */
                                                        var r = parseFloat(v);
                                                        ret += (alpha < 5 ? "calc" : "") + "(" + (m ? "{" + matches.length + (stack ? "!" : "") + "}" : "0") + name + " + " + (r ? "{" + (matches.length + (m ? 1 : 0)) + (stack ? "!" : "") + "}" : "0") + text + ")";
                                                        if (m) {
                                                            matches.push(m);
                                                            _results.push(0);
                                                        }
                                                        if (r) {
                                                            matches.push(0);
                                                            _results.push(r);
                                                        }
                                                    }
                                                } else {
                                                    if (c !== p) {
                                                        /** @type {number} */
                                                        alpha = 0;
                                                        break;
                                                    }
                                                    ret += c;
                                                    idx++;
                                                    pos++;
                                                    if (0 === alpha && "c" === c || (1 === alpha && "a" === c || (2 === alpha && "l" === c || (3 === alpha && "c" === c || alpha >= 4 && "(" === c)))) {
                                                        alpha++;
                                                    } else {
                                                        if (alpha && alpha < 5 || alpha >= 4 && (")" === c && --alpha < 5)) {
                                                            /** @type {number} */
                                                            alpha = 0;
                                                        }
                                                    }
                                                    if (0 === stack && "r" === c || (1 === stack && "g" === c || (2 === stack && "b" === c || (3 === stack && "a" === c || stack >= 3 && "(" === c)))) {
                                                        if (3 === stack) {
                                                            if ("a" === c) {
                                                                /** @type {number} */
                                                                memory = 1;
                                                            }
                                                        }
                                                        stack++;
                                                    } else {
                                                        if (memory && "," === c) {
                                                            if (++memory > 3) {
                                                                /** @type {number} */
                                                                stack = memory = 0;
                                                            }
                                                        } else {
                                                            if (memory && stack < (memory ? 5 : 4) || stack >= (memory ? 4 : 3) && (")" === c && --stack < (memory ? 5 : 4))) {
                                                                /** @type {number} */
                                                                stack = memory = 0;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            if (!(idx === value.length && pos === item.length)) {
                                                self.debug;
                                                ret = radio;
                                            }
                                            if (ret) {
                                                if (matches.length) {
                                                    self.debug;
                                                    /** @type {Array} */
                                                    value = matches;
                                                    /** @type {Array} */
                                                    item = _results;
                                                    /** @type {string} */
                                                    b = a = "";
                                                } else {
                                                    ret = radio;
                                                }
                                            }
                                        }
                                        if (!ret) {
                                            result = filter(i, value);
                                            value = result[0];
                                            a = result[1];
                                            result = filter(i, item);
                                            item = result[0].replace(/^([+-\/*])=/, function (dataAndEvents, abandon) {
                                                return op = abandon, "";
                                            });
                                            b = result[1];
                                            /** @type {number} */
                                            value = parseFloat(value) || 0;
                                            /** @type {number} */
                                            item = parseFloat(item) || 0;
                                            if ("%" === b) {
                                                if (/^(fontSize|lineHeight)$/.test(i)) {
                                                    item /= 100;
                                                    /** @type {string} */
                                                    b = "em";
                                                } else {
                                                    if (/^scale/.test(i)) {
                                                        item /= 100;
                                                        /** @type {string} */
                                                        b = "";
                                                    } else {
                                                        if (/(Red|Green|Blue)$/i.test(i)) {
                                                            /** @type {number} */
                                                            item = item / 100 * 255;
                                                            /** @type {string} */
                                                            b = "";
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        if (/[\/*]/.test(op)) {
                                            b = a;
                                        } else {
                                            if (a !== b && 0 !== value) {
                                                if (0 === item) {
                                                    b = a;
                                                } else {
                                                    x = x || function () {
                                                        var e = {
                                                            myParent: elem.parentNode || doc.body,
                                                            position: that.getPropertyValue(elem, "position"),
                                                            fontSize: that.getPropertyValue(elem, "fontSize")
                                                        };
                                                        /** @type {boolean} */
                                                        var b = e.position === position.lastPosition && e.myParent === position.lastParent;
                                                        /** @type {boolean} */
                                                        var a = e.fontSize === position.lastFontSize;
                                                        position.lastParent = e.myParent;
                                                        position.lastPosition = e.position;
                                                        position.lastFontSize = e.fontSize;
                                                        var offset = {};
                                                        if (a && b) {
                                                            /** @type {null} */
                                                            offset.emToPx = position.lastEmToPx;
                                                            /** @type {null} */
                                                            offset.percentToPxWidth = position.lastPercentToPxWidth;
                                                            /** @type {null} */
                                                            offset.percentToPxHeight = position.lastPercentToPxHeight;
                                                        } else {
                                                            /** @type {Element} */
                                                            var c = obj && obj.isSVG ? doc.createElementNS("http://www.w3.org/2000/svg", "rect") : doc.createElement("div");
                                                            self.init(c);
                                                            e.myParent.appendChild(c);
                                                            target.each(["overflow", "overflowX", "overflowY"], function (dataAndEvents, propertyName) {
                                                                self.CSS.setPropertyValue(c, propertyName, "hidden");
                                                            });
                                                            self.CSS.setPropertyValue(c, "position", e.position);
                                                            self.CSS.setPropertyValue(c, "fontSize", e.fontSize);
                                                            self.CSS.setPropertyValue(c, "boxSizing", "content-box");
                                                            target.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (dataAndEvents, propertyName) {
                                                                self.CSS.setPropertyValue(c, propertyName, "100%");
                                                            });
                                                            self.CSS.setPropertyValue(c, "paddingLeft", "100em");
                                                            /** @type {number} */
                                                            offset.percentToPxWidth = position.lastPercentToPxWidth = (parseFloat(that.getPropertyValue(c, "width", null, true)) || 1) / 100;
                                                            /** @type {number} */
                                                            offset.percentToPxHeight = position.lastPercentToPxHeight = (parseFloat(that.getPropertyValue(c, "height", null, true)) || 1) / 100;
                                                            /** @type {number} */
                                                            offset.emToPx = position.lastEmToPx = (parseFloat(that.getPropertyValue(c, "paddingLeft")) || 1) / 100;
                                                            e.myParent.removeChild(c);
                                                        }
                                                        return null === position.remToPx && (position.remToPx = parseFloat(that.getPropertyValue(doc.body, "fontSize")) || 16), null === position.vwToPx && (position.vwToPx = parseFloat(global.innerWidth) / 100, position.vhToPx = parseFloat(global.innerHeight) / 100), offset.remToPx = position.remToPx, offset.vwToPx = position.vwToPx, offset.vhToPx = position.vhToPx, self.debug, offset;
                                                    }();
                                                    /** @type {string} */
                                                    var curD = /margin|padding|left|right|width|text|word|letter/i.test(i) || (/X$/.test(i) || "x" === i) ? "x" : "y";
                                                    switch (a) {
                                                        case "%":
                                                            value *= "x" === curD ? x.percentToPxWidth : x.percentToPxHeight;
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            value *= x[a + "ToPx"];
                                                    }
                                                    switch (b) {
                                                        case "%":
                                                            value *= 1 / ("x" === curD ? x.percentToPxWidth : x.percentToPxHeight);
                                                            break;
                                                        case "px":
                                                            break;
                                                        default:
                                                            value *= 1 / x[b + "ToPx"];
                                                    }
                                                }
                                            }
                                        }
                                        switch (op) {
                                            case "+":
                                                item = value + item;
                                                break;
                                            case "-":
                                                /** @type {number} */
                                                item = value - item;
                                                break;
                                            case "*":
                                                item *= value;
                                                break;
                                            case "/":
                                                /** @type {number} */
                                                item = value / item;
                                        }
                                        state[i] = {
                                            rootPropertyValue: data,
                                            startValue: value,
                                            currentValue: value,
                                            endValue: item,
                                            unitType: b,
                                            easing: pageY
                                        };
                                        if (ret) {
                                            state[i].pattern = ret;
                                        }
                                        self.debug;
                                    };
                                    var key;
                                    for (key in value) {
                                        if (value.hasOwnProperty(key)) {
                                            var url = that.Names.camelCase(key);
                                            var parts = function (data, name) {
                                                var result;
                                                var names;
                                                var value;
                                                return _.isFunction(data) && (data = data.call(elem, index, width)), _.isArray(data) ? (result = data[0], !_.isArray(data[1]) && /^[\d-]/.test(data[1]) || (_.isFunction(data[1]) || that.RegEx.isHex.test(data[1])) ? value = data[1] : _.isString(data[1]) && (!that.RegEx.isHex.test(data[1]) && self.Easings[data[1]]) || _.isArray(data[1]) ? (names = name ? data[1] : extend(data[1], options.duration), value = data[2]) : value = data[1] || data[2]) : result = data, name || (names =
                                                names || options.easing), _.isFunction(result) && (result = result.call(elem, index, width)), _.isFunction(value) && (value = value.call(elem, index, width)), [result || 0, names, value];
                                            }(value[key]);
                                            if (register(that.Lists.colors, url)) {
                                                var tag = parts[0];
                                                var cur = parts[1];
                                                var selector = parts[2];
                                                if (that.RegEx.isHex.test(tag)) {
                                                    /** @type {Array} */
                                                    var channels = ["Red", "Green", "Blue"];
                                                    var elements = that.Values.hexToRgb(tag);
                                                    var match = selector ? that.Values.hexToRgb(selector) : radio;
                                                    /** @type {number} */
                                                    var j = 0;
                                                    for (; j < channels.length; j++) {
                                                        /** @type {Array} */
                                                        var jQuery = [elements[j]];
                                                        if (cur) {
                                                            jQuery.push(cur);
                                                        }
                                                        if (match !== radio) {
                                                            jQuery.push(match[j]);
                                                        }
                                                        init(url + channels[j], jQuery);
                                                    }
                                                    continue;
                                                }
                                            }
                                            init(url, parts);
                                        }
                                    }
                                    /** @type {string} */
                                    state.element = elem;
                                }
                            }
                        }
                        if (state.element) {
                            that.Values.addClass(elem, "velocity-animating");
                            ret.push(state);
                            obj = fn(elem);
                            if (obj) {
                                if ("" === options.queue) {
                                    obj.tweensContainer = state;
                                    obj.opts = options;
                                }
                                /** @type {boolean} */
                                obj.isAnimating = true;
                            }
                            if (Darwin_Growl === width - 1) {
                                self.State.calls.push([ret, a, options, null, promise.resolver, null, 0]);
                                if (false === self.State.isTicking) {
                                    /** @type {boolean} */
                                    self.State.isTicking = true;
                                    show();
                                }
                            } else {
                                Darwin_Growl++;
                            }
                        }
                    }
                    var x;
                    var options = target.extend({}, self.defaults, data);
                    var state = {};
                    switch (fn(elem) === radio && self.init(elem), parseFloat(options.delay) && (false !== options.queue && target.queue(elem, options.queue, function (next) {
                        /** @type {boolean} */
                      self.velocityQueueEntryFlag = true;
                        /** @type {number} */
                      var tag = self.State.delayedElements.count++;
                        /** @type {string} */
                      self.State.delayedElements[tag] = elem;
                      var elements = function (tag) {
                        return function () {
                        /** @type {boolean} */
                          self.State.delayedElements[tag] = false;
                          next();
                    };
                    }(tag);
                        /** @type {number} */
                      fn(elem).delayBegin = (new Date).getTime();
                        /** @type {number} */
                      fn(elem).delay = parseFloat(options.delay);
                      fn(elem).delayTimer = {
                        setTimeout: setTimeout(next, parseFloat(options.delay)),
                        next: elements
                    };
                    })), options.duration.toString().toLowerCase()) {
                        case "fast":
                            /** @type {number} */
                            options.duration = 200;
                            break;
                        case "normal":
                            /** @type {number} */
                            options.duration = time;
                            break;
                        case "slow":
                            /** @type {number} */
                            options.duration = 600;
                            break;
                        default:
                            /** @type {number} */
                            options.duration = parseFloat(options.duration) || 1;
                    }
                    if (false !== self.mock && (true === self.mock ? options.duration = options.delay = 1 : (options.duration *= parseFloat(self.mock) || 1, options.delay *= parseFloat(self.mock) || 1)), options.easing = extend(options.easing, options.duration), options.begin && (!_.isFunction(options.begin) && (options.begin = null)), options.progress && (!_.isFunction(options.progress) && (options.progress = null)), options.complete && (!_.isFunction(options.complete) && (options.complete = null)), options.display !==
                    radio && (null !== options.display && (options.display = options.display.toString().toLowerCase(), "auto" === options.display && (options.display = self.CSS.Values.getDisplayType(elem)))), options.visibility !== radio && (null !== options.visibility && (options.visibility = options.visibility.toString().toLowerCase())), options.mobileHA = options.mobileHA && (self.State.isMobile && !self.State.isGingerbread), false === options.queue) {
                        if (options.delay) {
                            /** @type {number} */
                            var idx = self.State.delayedElements.count++;
                            /** @type {string} */
                            self.State.delayedElements[idx] = elem;
                            var next = function (index) {
                                return function () {
                                    /** @type {boolean} */
                                    self.State.delayedElements[index] = false;
                                    init();
                                };
                            }(idx);
                            /** @type {number} */
                            fn(elem).delayBegin = (new Date).getTime();
                            /** @type {number} */
                            fn(elem).delay = parseFloat(options.delay);
                            fn(elem).delayTimer = {
                                setTimeout: setTimeout(init, parseFloat(options.delay)),
                                next: next
                            };
                        } else {
                            init();
                        }
                    } else {
                        target.queue(elem, options.queue, function (deepDataAndEvents, dataAndEvents) {
                            if (true === dataAndEvents) {
                                return promise.promise && promise.resolver(a), true;
                            }
                            /** @type {boolean} */
                            self.velocityQueueEntryFlag = true;
                            init(deepDataAndEvents);
                        });
                    }
                    if (!("" !== options.queue && "fx" !== options.queue)) {
                        if (!("inprogress" === target.queue(elem)[0])) {
                            target.dequeue(elem);
                        }
                    }
                }
                var options;
                var result;
                var failed;
                var j;
                var a;
                var value;
                var data;
                var n = arguments[0] && (arguments[0].p || (target.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || _.isString(arguments[0].properties)));
                if (_.isWrapped(this)) {
                    /** @type {boolean} */
                    result = false;
                    /** @type {number} */
                    j = 0;
                    a = this;
                    failed = this;
                } else {
                    /** @type {boolean} */
                    result = true;
                    /** @type {number} */
                    j = 1;
                    a = n ? arguments[0].elements || arguments[0].e : arguments[0];
                }
                var promise = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (result && (self.Promise && (promise.promise = new self.Promise(function (resolver, reject) {
                  promise.resolver = resolver;
                  promise.rejecter = reject;
                }))), n ? (value = arguments[0].properties || arguments[0].p, data = arguments[0].options || arguments[0].o) : (value = arguments[j], data = arguments[j + 1]), !(a = clone(a))) {
                    return void (promise.promise && (value && (data && false === data.promiseRejectEmpty) ? promise.resolver() : promise.rejecter()));
                }
                var width = a.length;
                /** @type {number} */
                var Darwin_Growl = 0;
                if (!/^(stop|finish|finishAll|pause|resume)$/i.test(value) && !target.isPlainObject(data)) {
                    /** @type {number} */
                    var k = j + 1;
                    data = {};
                    /** @type {number} */
                    var i = k;
                    for (; i < arguments.length; i++) {
                        if (_.isArray(arguments[i]) || !/^(fast|normal|slow)$/i.test(arguments[i]) && !/^\d/.test(arguments[i])) {
                            if (_.isString(arguments[i]) || _.isArray(arguments[i])) {
                                data.easing = arguments[i];
                            } else {
                                if (_.isFunction(arguments[i])) {
                                    data.complete = arguments[i];
                                }
                            }
                        } else {
                            data.duration = arguments[i];
                        }
                    }
                }
                var type;
                switch (value) {
                    case "scroll":
                        /** @type {string} */
                        type = "scroll";
                        break;
                    case "reverse":
                        /** @type {string} */
                        type = "reverse";
                        break;
                    case "pause":
                        /** @type {number} */
                        var pdataOld = (new Date).getTime();
                        return target.each(a, function (dataAndEvents, c) {
                            clear(c, pdataOld);
                        }), target.each(self.State.calls, function (dataAndEvents, source) {
                            /** @type {boolean} */
                            var n = false;
                            if (source) {
                                target.each(source[1], function (dataAndEvents, b) {
                                    var dataValue = data === radio ? "" : data;
                                    return true !== dataValue && (source[2].queue !== dataValue && (data !== radio || false !== source[2].queue)) || (target.each(a, function (dataAndEvents, a) {
                                        if (a === b) {
                                            return source[5] = {
                                                resume: false
                                            }, n = true, false;
                                        }
                                    }), !n && void 0);
                                });
                            }
                        }), done();
                    case "resume":
                        return target.each(a, function (dataAndEvents, failures) {
                            text(failures, pdataOld);
                        }), target.each(self.State.calls, function (dataAndEvents, source) {
                            /** @type {boolean} */
                            var n = false;
                            if (source) {
                                target.each(source[1], function (dataAndEvents, b) {
                                    var dataValue = data === radio ? "" : data;
                                    return true !== dataValue && (source[2].queue !== dataValue && (data !== radio || false !== source[2].queue)) || (!source[5] || (target.each(a, function (dataAndEvents, a) {
                                        if (a === b) {
                                            return source[5].resume = true, n = true, false;
                                        }
                                    }), !n && void 0));
                                });
                            }
                        }), done();
                    case "finish":
                        ;
                    case "finishAll":
                        ;
                    case "stop":
                        target.each(a, function (dataAndEvents, elem) {
                            if (fn(elem)) {
                                if (fn(elem).delayTimer) {
                                    clearTimeout(fn(elem).delayTimer.setTimeout);
                                    if (fn(elem).delayTimer.next) {
                                        fn(elem).delayTimer.next();
                                    }
                                    delete fn(elem).delayTimer;
                                }
                            }
                            if (!("finishAll" !== value)) {
                                if (!(true !== data && !_.isString(data))) {
                                    target.each(target.queue(elem, _.isString(data) ? data : ""), function (dataAndEvents, isSorted) {
                                        if (_.isFunction(isSorted)) {
                                            isSorted();
                                        }
                                    });
                                    target.queue(elem, _.isString(data) ? data : "", []);
                                }
                            }
                        });
                        /** @type {Array} */
                        var tests = [];
                        return target.each(self.State.calls, function (test, source) {
                            if (source) {
                                target.each(source[1], function (dataAndEvents, undef) {
                                    var dataValue = data === radio ? "" : data;
                                    if (true !== dataValue && (source[2].queue !== dataValue && (data !== radio || false !== source[2].queue))) {
                                        return true;
                                    }
                                    target.each(a, function (dataAndEvents, elem) {
                                        if (elem === undef) {
                                            if ((true === data || _.isString(data)) && (target.each(target.queue(elem, _.isString(data) ? data : ""), function (dataAndEvents, isSorted) {
                                              if (_.isFunction(isSorted)) {
                                                isSorted(null, true);
                                            }
                                            }), target.queue(elem, _.isString(data) ? data : "", [])), "stop" === value) {
                                                var p = fn(elem);
                                                if (p) {
                                                    if (p.tweensContainer) {
                                                        if (false !== dataValue) {
                                                            target.each(p.tweensContainer, function (dataAndEvents, field) {
                                                                field.endValue = field.currentValue;
                                                            });
                                                        }
                                                    }
                                                }
                                                tests.push(test);
                                            } else {
                                                if (!("finish" !== value && "finishAll" !== value)) {
                                                    /** @type {number} */
                                                    source[2].duration = 1;
                                                }
                                            }
                                        }
                                    });
                                });
                            }
                        }), "stop" === value && (target.each(tests, function (dataAndEvents, cb) {
                            init(cb, true);
                        }), promise.promise && promise.resolver(a)), done();
                    default:
                        if (!target.isPlainObject(value) || _.isEmptyObject(value)) {
                            if (_.isString(value) && self.Redirects[value]) {
                                options = target.extend({}, data);
                                var speed = options.duration;
                                var base = options.delay || 0;
                                return true === options.backwards && (a = target.extend(true, [], a).reverse()), target.each(a, function (i, req) {
                                    if (parseFloat(options.stagger)) {
                                        options.delay = base + parseFloat(options.stagger) * i;
                                    } else {
                                        if (_.isFunction(options.stagger)) {
                                            options.delay = base + options.stagger.call(req, i, width);
                                        }
                                    }
                                    if (options.drag) {
                                        /** @type {number} */
                                        options.duration = parseFloat(speed) || (/^(callout|transition)/.test(value) ? 1E3 : time);
                                        /** @type {number} */
                                        options.duration = Math.max(options.duration * (options.backwards ? 1 - i / width : (i + 1) / width), 0.75 * options.duration, 200);
                                    }
                                    self.Redirects[value].call(req, req, options || {}, i, width, a, promise.promise ? promise : radio);
                                }), done();
                            }
                            /** @type {string} */
                            var message = "Velocity: First argument (" + value + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return promise.promise ? promise.rejecter(new Error(message)) : global.console, done();
                        }
                        /** @type {string} */
                        type = "start";
                }
                var position = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                };
                /** @type {Array} */
                var ret = [];
                target.each(a, function (name, obj) {
                    if (_.isNode(obj)) {
                        run(obj, name);
                    }
                });
                options = target.extend({}, self.defaults, data);
                /** @type {number} */
                options.loop = parseInt(options.loop, 10);
                /** @type {number} */
                var clen = 2 * options.loop - 1;
                if (options.loop) {
                    /** @type {number} */
                    var c = 0;
                    for (; c < clen; c++) {
                        var opts = {
                            delay: options.delay,
                            progress: options.progress
                        };
                        if (c === clen - 1) {
                            opts.display = options.display;
                            opts.visibility = options.visibility;
                            opts.complete = options.complete;
                        }
                        init(a, "reverse", opts);
                    }
                }
                return done();
            };
            self = target.extend(x, self);
            /** @type {function (): ?} */
            self.animate = x;
            /** @type {function (this:Window, function (number): ?, (Element|null)=): number} */
            var success = global.requestAnimationFrame || noop;
            if (!self.State.isMobile && doc.hidden !== radio) {
                /**
                 * @return {undefined}
                 */
                var callback = function () {
                    if (doc.hidden) {
                        /**
                         * @param {Function} fn
                         * @return {?}
                         */
                        success = function (fn) {
                            return setTimeout(function () {
                                fn(true);
                            }, 16);
                        };
                        show();
                    } else {
                        /** @type {function (this:Window, function (number): ?, (Element|null)=): number} */
                        success = global.requestAnimationFrame || noop;
                    }
                };
                callback();
                doc.addEventListener("visibilitychange", callback);
            }
            return options.Velocity = self, options !== global && (options.fn.velocity = x, options.fn.velocity.defaults = self.defaults), target.each(["Down", "Up"], function (dataAndEvents, i) {
                /**
                 * @param {Element} elem
                 * @param {?} handler
                 * @param {number} dataAndEvents
                 * @param {number} deepDataAndEvents
                 * @param {?} object
                 * @param {Function} d
                 * @return {undefined}
                 */
                self.Redirects["slide" + i] = function (elem, handler, dataAndEvents, deepDataAndEvents, object, d) {
                    var args = target.extend({}, handler);
                    /** @type {function (): undefined} */
                    var method = args.begin;
                    /** @type {function (): undefined} */
                    var map = args.complete;
                    var old = {};
                    var style = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    };
                    if (args.display === radio) {
                        /** @type {string} */
                        args.display = "Down" === i ? "inline" === self.CSS.Values.getDisplayType(elem) ? "inline-block" : "block" : "none";
                    }
                    /**
                     * @return {undefined}
                     */
                    args.begin = function () {
                        if (0 === dataAndEvents) {
                            if (method) {
                                method.call(object, object);
                            }
                        }
                        var name;
                        for (name in style) {
                            if (style.hasOwnProperty(name)) {
                                old[name] = elem.style[name];
                                var queue = that.getPropertyValue(elem, name);
                                /** @type {Array} */
                                style[name] = "Down" === i ? [queue, 0] : [0, queue];
                            }
                        }
                        old.overflow = elem.style.overflow;
                        /** @type {string} */
                        elem.style.overflow = "hidden";
                    };
                    /**
                     * @return {undefined}
                     */
                    args.complete = function () {
                        var name;
                        for (name in old) {
                            if (old.hasOwnProperty(name)) {
                                elem.style[name] = old[name];
                            }
                        }
                        if (dataAndEvents === deepDataAndEvents - 1) {
                            if (map) {
                                map.call(object, object);
                            }
                            if (d) {
                                d.resolver(object);
                            }
                        }
                    };
                    self(elem, style, args);
                };
            }), target.each(["In", "Out"], function (deepDataAndEvents, dataAndEvents) {
                /**
                 * @param {?} deepDataAndEvents
                 * @param {?} handler
                 * @param {number} ignoreMethodDoesntExist
                 * @param {number} textAlt
                 * @param {?} object
                 * @param {Function} d
                 * @return {undefined}
                 */
                self.Redirects["fade" + dataAndEvents] = function (deepDataAndEvents, handler, ignoreMethodDoesntExist, textAlt, object, d) {
                    var args = target.extend({}, handler);
                    var method = args.complete;
                    var r20 = {
                        opacity: "In" === dataAndEvents ? 1 : 0
                    };
                    if (0 !== ignoreMethodDoesntExist) {
                        /** @type {null} */
                        args.begin = null;
                    }
                    /** @type {(function (): undefined|null)} */
                    args.complete = ignoreMethodDoesntExist !== textAlt - 1 ? null : function () {
                        if (method) {
                            method.call(object, object);
                        }
                        if (d) {
                            d.resolver(object);
                        }
                    };
                    if (args.display === radio) {
                        /** @type {string} */
                        args.display = "In" === dataAndEvents ? "auto" : "none";
                    }
                    self(this, r20, args);
                };
            }), self;
        }(window.jQuery || (window.Zepto || window), window, window ? window.document : void 0);
    });
}, function (dataAndEvents, deepDataAndEvents, require) {
    /**
     * @param {Object} value
     * @return {?}
     */
    function $(value) {
        return value && value.__esModule ? value : {
            default: value
        };
    }
    require(25);
    require(20);
    require(22);
    require(19);
    require(18);
    require(8);
    require(13);
    require(16);
    require(17);
    require(7);
    var json = require(2);
    var obj = $(json);
    var comment = require(10);
    var item = $(comment);
    var selector = require(3);
    var out = $(selector);
    var prop = require(11);
    var property = $(prop);
    var nodes = require(12);
    var node = $(nodes);
    var dom = require(1);
    var self = $(dom);
    var header = require(21);
    var value = $(header);
    require(14);
    require(15);
    require(9);
    var fn;
    for (fn in value.default.prototype) {
        self.default[fn] = value.default.prototype[fn];
    }
    //$(document).ready(function () {
    //    var element = $(".js-dropdown");
    //    var proto = new item.default;
    //    var act = $('.js-top-menu ul[data-depth="0"]');
    //    var wrapper = new obj.default(element);
    //    var test = new node.default(act);
    //    var _super = new out.default;
    //    var actor = new property.default;
    //    wrapper.init();
    //    proto.init();
    //    test.init();
    //    _super.init();
    //    actor.init();
    //});
}, function (dataAndEvents, deepDataAndEvents) {
}, function (dataAndEvents, deepDataAndEvents, iterator) {
    /**
     * @param {Object} d
     * @return {?}
     */
    function load(d) {
        return d && d.__esModule ? d : {
            default: d
        };
    }
    /**
     * @return {undefined}
     */
    function $bind() {
        self.default.each((0, self.default)(onWindowResize), function (dataAndEvents, classToRemove) {
            (0, self.default)(classToRemove).TouchSpin({
                verticalbuttons: true,
                verticalupclass: "material-icons touchspin-up",
                verticaldownclass: "material-icons touchspin-down",
                buttondown_class: "btn btn-touchspin js-touchspin js-increase-product-quantity",
                buttonup_class: "btn btn-touchspin js-touchspin js-decrease-product-quantity",
                min: parseInt((0, self.default)(classToRemove).attr("min"), 10),
                max: 1E6
            });
        });
    }
    var key = iterator(0);
    var self = load(key);
    var value = iterator(1);
    var obj = load(value);
    obj.default.cart = obj.default.cart || {};
    /** @type {null} */
    obj.default.cart.active_inputs = null;
    /** @type {string} */
    var onWindowResize = 'input[name="product-quantity-spin"]';
    (0, self.default)(document).ready(function () {
        /**
         * @param {string} arg
         * @return {?}
         */
        function isFunction(arg) {
            return "on.startupspin" === arg || "on.startdownspin" === arg;
        }
        /**
         * @param {string} var_args
         * @return {?}
         */
        function assert(var_args) {
            return "on.startupspin" === var_args;
        }
        /**
         * @param {Object} element
         * @return {?}
         */
        function set(element) {
            var tooltip = element.parents(".bootstrap-touchspin").find(toggle);
            return tooltip.is(":focus") ? null : tooltip;
        }
        /**
         * @param {string} str
         * @return {?}
         */
        function toCamelCase(str) {
            var codeSegments = str.split("-");
            var i = void 0;
            var buf = void 0;
            /** @type {string} */
            var optsData = "";
            /** @type {number} */
            i = 0;
            for (; i < codeSegments.length; i++) {
                buf = codeSegments[i];
                if (0 !== i) {
                    buf = buf.substring(0, 1).toUpperCase() + buf.substring(1);
                }
                optsData += buf;
            }
            return optsData;
        }
        /**
         * @param {Object} element
         * @param {string} params
         * @return {?}
         */
        function f(element, params) {
            if (!isFunction(params)) {
                return {
                    url: element.attr("href"),
                    type: toCamelCase(element.data("link-action"))
                };
            }
            var id = set(element);
            if (id) {
                return assert(params) ? {
                    url: id.data("up-url"),
                    type: "increaseProductQuantity"
                } : {
                    url: id.data("down-url"),
                    type: "decreaseProductQuantity"
                };
            }
        }
        /**
         * @param {string} value
         * @param {Object} d
         * @param {Object} element
         * @return {?}
         */
        function next(value, d, element) {
            return destroy(), self.default.ajax({
                url: value,
                method: "POST",
                data: d,
                dataType: "json",
                /**
                 * @param {?} xhr
                 * @return {undefined}
                 */
                beforeSend: function (xhr) {
                    requests.push(xhr);
                }
            }).then(function (data) {
                element.val(data.quantity);
                var error;
                error = element && element.dataset ? element.dataset : data;
                obj.default.emit("updateCart", {
                    reason: error
                });
            }).fail(function (resp) {
                obj.default.emit("handleError", {
                    eventType: "updateProductQuantityInCart",
                    resp: resp
                });
            });
        }
        /**
         * @param {number} a
         * @return {?}
         */
        function update(a) {
            return {
                ajax: "1",
                qty: Math.abs(a),
                action: "update",
                op: keyDown(a)
            };
        }
        /**
         * @param {number} ctx
         * @return {?}
         */
        function keyDown(ctx) {
            return ctx > 0 ? "up" : "down";
        }
        /**
         * @param {Event} obj
         * @return {?}
         */
        function refresh(obj) {
            var results = (0, self.default)(obj.currentTarget);
            var udataCur = results.data("update-url");
            var values = results.attr("value");
            var cDigit = results.val();
            if (cDigit != parseInt(cDigit) || (cDigit < 0 || isNaN(cDigit))) {
                return void results.val(values);
            }
            /** @type {number} */
            var item = cDigit - values;
            if (0 != item) {
                next(udataCur, update(item), results);
            }
        }
        /** @type {string} */
        var toggle = ".js-cart-line-product-quantity";
        /** @type {Array} */
        var requests = [];
        obj.default.on("updateCart", function () {
            (0, self.default)(".quickview").modal("hide");
        });
        obj.default.on("updatedCart", function () {
            $bind();
        });
        $bind();
        var $ = (0, self.default)("body");
        /**
         * @return {undefined}
         */
        var destroy = function () {
            var handler;
            for (; requests.length > 0;) {
                handler = requests.pop();
                handler.abort();
            }
        };
        /**
         * @param {Object} target
         * @return {?}
         */
        var handler = function (target) {
            return (0, self.default)(target.parents(".bootstrap-touchspin").find("input"));
        };
        /**
         * @param {Object} event
         * @return {undefined}
         */
        var init = function (event) {
            event.preventDefault();
            var element = (0, self.default)(event.currentTarget);
            var dataset = event.currentTarget.dataset;
            var s = f(element, event.namespace);
            var params = {
                ajax: "1",
                action: "update"
            };
            if (void 0 !== s) {
                destroy();
                self.default.ajax({
                    url: s.url,
                    method: "POST",
                    data: params,
                    dataType: "json",
                    /**
                     * @param {?} xhr
                     * @return {undefined}
                     */
                    beforeSend: function (xhr) {
                        requests.push(xhr);
                    }
                }).then(function (data) {
                    handler(element).val(data.quantity);
                    obj.default.emit("updateCart", {
                        reason: dataset
                    });
                }).fail(function (resp) {
                    obj.default.emit("handleError", {
                        eventType: "updateProductInCart",
                        resp: resp,
                        cartAction: s.type
                    });
                });
            }
        };
        $.on("click", '[data-link-action="delete-from-cart"], [data-link-action="remove-voucher"]', init);
        $.on("touchspin.on.startdownspin", onWindowResize, init);
        $.on("touchspin.on.startupspin", onWindowResize, init);
        $.on("focusout", toggle, function (walkers) {
            refresh(walkers);
        });
        $.on("keyup", toggle, function (e) {
            if (13 == e.keyCode) {
                refresh(e);
            }
        });
        $.on("click", ".js-discount .code", function (event) {
            event.stopPropagation();
            var script = (0, self.default)(event.currentTarget);
            return (0, self.default)("[name=discount_name]").val(script.text()), false;
        });
    });
}, function (dataAndEvents, deepDataAndEvents, parse) {
    /**
     * @param {Object} url
     * @return {?}
     */
    function load(url) {
        return url && url.__esModule ? url : {
            default: url
        };
    }
    /**
     * @return {undefined}
     */
    function init() {
        if (0 !== (0, result.default)(".js-cancel-address").length) {
            (0, result.default)(".checkout-step:not(.js-current-step) .step-title").addClass("not-allowed");
        }
        (0, result.default)(".js-terms a").on("click", function (evt) {
            evt.preventDefault();
            var url = (0, result.default)(evt.target).attr("href");
            if (url) {
                url += "?content_only=1";
                result.default.get(url, function (context) {
                    (0, result.default)("#modal").find(".js-modal-content").html((0, result.default)(context).find(".page-cms").contents());
                }).fail(function (resp) {
                    obj.default.emit("handleError", {
                        eventType: "clickTerms",
                        resp: resp
                    });
                });
            }
            (0, result.default)("#modal").modal("show");
        });
        (0, result.default)(".js-gift-checkbox").on("click", function (dataAndEvents) {
            (0, result.default)("#gift").collapse("toggle");
        });
    }
    var url = parse(0);
    var result = load(url);
    var value = parse(1);
    var obj = load(value);
    (0, result.default)(document).ready(function () {
        if (1 === (0, result.default)("body#checkout").length) {
            init();
        }
        obj.default.on("updatedDeliveryForm", function (feed) {
            if (void 0 !== feed.deliveryOption) {
                if (0 !== feed.deliveryOption.length) {
                    (0, result.default)(".carrier-extra-content").hide();
                    feed.deliveryOption.next(".carrier-extra-content").slideDown();
                }
            }
        });
    });
}, function (dataAndEvents, deepDataAndEvents, $) {
    /**
     * @param {Object} style
     * @return {?}
     */
    function normalize(style) {
        return style && style.__esModule ? style : {
            default: style
        };
    }
    var style = $(1);
    var obj = normalize(style);
    var name = $(0);
    var value = normalize(name);
    obj.default.blockcart = obj.default.blockcart || {};
    /**
     * @param {?} key
     * @return {undefined}
     */
    obj.default.blockcart.showModal = function (key) {
        /**
         * @return {?}
         */
        function $() {
            return (0, value.default)("#blockcart-modal");
        }
        var $modal = $();
        if ($modal.length) {
            $modal.remove();
        }
        (0, value.default)("body").append(key);
        $modal = $();
        $modal.modal("show").on("hidden.bs.modal", function (event) {
            obj.default.emit("updateProduct", {
                reason: event.currentTarget.dataset
            });
        });
    };
}, function (module, self, require) {
    /**
     * @param {?} dataAndEvents
     * @param {Function} object
     * @return {undefined}
     */
    function stub(dataAndEvents, object) {
        if (!(dataAndEvents instanceof object)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    Object.defineProperty(self, "__esModule", {
        value: true
    });
    var onErrorFnPrev = function () {
        /**
         * @param {Function} object
         * @param {?} d
         * @return {undefined}
         */
        function defineProperty(object, d) {
            /** @type {number} */
            var i = 0;
            for (; i < d.length; i++) {
                var desc = d[i];
                desc.enumerable = desc.enumerable || false;
                /** @type {boolean} */
                desc.configurable = true;
                if ("value" in desc) {
                    /** @type {boolean} */
                    desc.writable = true;
                }
                Object.defineProperty(object, desc.key, desc);
            }
        }
        return function (x, current, a) {
            return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
        };
    }();
    var url = require(0);
    var obj = function (url) {
        return url && url.__esModule ? url : {
            default: url
        };
    }(url);
    var compassResult = function () {
        /**
         * @return {undefined}
         */
        function error() {
            stub(this, error);
        }
        return onErrorFnPrev(error, [{
            key: "init",
            /**
             * @return {undefined}
             */
            value: function () {
                this.parentFocus();
                this.togglePasswordVisibility();
            }
        }, {
            key: "parentFocus",
            /**
             * @return {undefined}
             */
            value: function () {
                (0, obj.default)(".js-child-focus").focus(function () {
                    (0, obj.default)(this).closest(".js-parent-focus").addClass("focus");
                });
                (0, obj.default)(".js-child-focus").focusout(function () {
                    (0, obj.default)(this).closest(".js-parent-focus").removeClass("focus");
                });
            }
        }, {
            key: "togglePasswordVisibility",
            /**
             * @return {undefined}
             */
            value: function () {
                (0, obj.default)('button[data-action="show-password"]').on("click", function () {
                    var input = (0, obj.default)(this).closest(".input-group").children("input.js-visible-password");
                    if ("password" === input.attr("type")) {
                        input.attr("type", "text");
                        (0, obj.default)(this).text((0, obj.default)(this).data("textHide"));
                    } else {
                        input.attr("type", "password");
                        (0, obj.default)(this).text((0, obj.default)(this).data("textShow"));
                    }
                });
            }
        }]), error;
    }();
    self.default = compassResult;
    module.exports = self.default;
}, function (module, self, proceed) {
    /**
     * @param {?} dataAndEvents
     * @param {Function} object
     * @return {undefined}
     */
    function stub(dataAndEvents, object) {
        if (!(dataAndEvents instanceof object)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    Object.defineProperty(self, "__esModule", {
        value: true
    });
    var onErrorFnPrev = function () {
        /**
         * @param {Function} object
         * @param {Array} d
         * @return {undefined}
         */
        function defineProperty(object, d) {
            /** @type {number} */
            var i = 0;
            for (; i < d.length; i++) {
                var desc = d[i];
                desc.enumerable = desc.enumerable || false;
                /** @type {boolean} */
                desc.configurable = true;
                if ("value" in desc) {
                    /** @type {boolean} */
                    desc.writable = true;
                }
                Object.defineProperty(object, desc.key, desc);
            }
        }
        return function (x, current, a) {
            return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
        };
    }();
    var value = proceed(0);
    var obj = function (d) {
        return d && d.__esModule ? d : {
            default: d
        };
    }(value);
    proceed(4);
    var compassResult = function () {
        /**
         * @return {undefined}
         */
        function error() {
            stub(this, error);
        }
        return onErrorFnPrev(error, [{
            key: "init",
            /**
             * @return {undefined}
             */
            value: function () {
                var dialog = this;
                var g = (0, obj.default)(".js-modal-arrows");
                var volumeTotal = (0, obj.default)(".js-modal-product-images");
                var testNode = (0, obj.default)(".on-sale");
                (0, obj.default)("body").on("click", ".js-modal-thumb", function (e) {
                    if ((0, obj.default)(".js-modal-thumb").hasClass("selected")) {
                        (0, obj.default)(".js-modal-thumb").removeClass("selected");
                    }
                    (0, obj.default)(e.currentTarget).addClass("selected");
                    (0, obj.default)(".js-modal-product-cover").attr("src", (0, obj.default)(e.target).data("image-large-src"));
                    (0, obj.default)(".js-modal-product-cover").attr("title", (0, obj.default)(e.target).attr("title"));
                    (0, obj.default)(".js-modal-product-cover").attr("alt", (0, obj.default)(e.target).attr("alt"));
                }).on("click", "aside#thumbnails", function (evt) {
                    if ("thumbnails" == evt.target.id) {
                        (0, obj.default)("#product-modal").modal("hide");
                    }
                });
                if (testNode.length) {
                    if ((0, obj.default)("#product").length) {
                        (0, obj.default)(".new").css("top", testNode.height() + 10);
                    }
                }
                if ((0, obj.default)(".js-modal-product-images li").length <= 5) {
                    g.css("opacity", ".2");
                } else {
                    g.on("click", function (opt_e) {
                        if ((0, obj.default)(opt_e.target).hasClass("arrow-up") && volumeTotal.position().top < 0) {
                            dialog.move("up");
                            (0, obj.default)(".js-modal-arrow-down").css("opacity", "1");
                        } else {
                            if ((0, obj.default)(opt_e.target).hasClass("arrow-down")) {
                                if (volumeTotal.position().top + volumeTotal.height() > (0, obj.default)(".js-modal-mask").height()) {
                                    dialog.move("down");
                                    (0, obj.default)(".js-modal-arrow-up").css("opacity", "1");
                                }
                            }
                        }
                    });
                }
            }
        }, {
            key: "move",
            /**
             * @param {string} string
             * @return {undefined}
             */
            value: function (string) {
                var particle = (0, obj.default)(".js-modal-product-images");
                var b = (0, obj.default)(".js-modal-product-images li img").height() + 10;
                var a = particle.position().top;
                particle.velocity({
                    translateY: "up" === string ? a + b : a - b
                }, function () {
                    if (particle.position().top >= 0) {
                        (0, obj.default)(".js-modal-arrow-up").css("opacity", ".2");
                    } else {
                        if (particle.position().top + particle.height() <= (0, obj.default)(".js-modal-mask").height()) {
                            (0, obj.default)(".js-modal-arrow-down").css("opacity", ".2");
                        }
                    }
                });
            }
        }]), error;
    }();
    self.default = compassResult;
    module.exports = self.default;
}, function (module, self, iterator) {
    /**
     * @param {Object} el
     * @return {?}
     */
    function on(el) {
        return el && el.__esModule ? el : {
            default: el
        };
    }
    /**
     * @param {?} dataAndEvents
     * @param {Function} obj
     * @return {undefined}
     */
    function sortedIndex(dataAndEvents, obj) {
        if (!(dataAndEvents instanceof obj)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
    /**
     * @param {Object} m
     * @param {Object} b
     * @return {undefined}
     */
    function create(m, b) {
        if ("function" != typeof b && null !== b) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        }
        /** @type {Object} */
        m.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: m,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (b) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(m, b);
            } else {
                /** @type {Object} */
                m.__proto__ = b;
            }
        }
    }
    Object.defineProperty(self, "__esModule", {
        value: true
    });
    var lookupIterator = function () {
        /**
         * @param {Function} object
         * @param {?} d
         * @return {undefined}
         */
        function defineProperty(object, d) {
            /** @type {number} */
            var i = 0;
            for (; i < d.length; i++) {
                var desc = d[i];
                desc.enumerable = desc.enumerable || false;
                /** @type {boolean} */
                desc.configurable = true;
                if ("value" in desc) {
                    /** @type {boolean} */
                    desc.writable = true;
                }
                Object.defineProperty(object, desc.key, desc);
            }
        }
        return function (x, current, a) {
            return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
        };
    }();
    /**
     * @param {Object} data
     * @param {(Node|string)} prop
     * @param {?} event
     * @return {?}
     */
    var defineProperty = function (data, prop, event) {
        /** @type {boolean} */
        var i = true;
        for (; i;) {
            /** @type {Object} */
            var value = data;
            /** @type {(Node|string)} */
            var p = prop;
            var originalEvent = event;
            /** @type {boolean} */
            i = false;
            if (null === value) {
                value = Function.prototype;
            }
            /** @type {(ObjectPropertyDescriptor|undefined)} */
            var v = Object.getOwnPropertyDescriptor(value, p);
            if (void 0 !== v) {
                if ("value" in v) {
                    return v.value;
                }
                /** @type {(function (): ?|undefined)} */
                var getter = v.get;
                if (void 0 === getter) {
                    return;
                }
                return getter.call(originalEvent);
            }
            /** @type {(Object|null)} */
            var transformed = Object.getPrototypeOf(value);
            if (null === transformed) {
                return;
            }
            /** @type {Object} */
            data = transformed;
            prop = p;
            event = originalEvent;
            /** @type {boolean} */
            i = true;
            v = transformed = void 0;
        }
    };
    var key = iterator(0);
    var node = on(key);
    var failuresLink = iterator(2);
    var obj = on(failuresLink);
    var compassResult = function (properties) {
        /**
         * @return {undefined}
         */
        function value() {
            sortedIndex(this, value);
            defineProperty(Object.getPrototypeOf(value.prototype), "constructor", this).apply(this, arguments);
        }
        return create(value, properties), lookupIterator(value, [{
            key: "init",
            /**
             * @return {undefined}
             */
            value: function () {
                var me = this;
                var res = void 0;
                var toggleMobileMenu = this;
                this.el.find("li").hover(function (e) {
                    if (!me.el.parent().hasClass("mobile")) {
                        if (res !== (0, node.default)(e.currentTarget).attr("id")) {
                            if (0 === (0, node.default)(e.target).data("depth")) {
                                (0, node.default)("#" + res + " .js-sub-menu").hide();
                            }
                            res = (0, node.default)(e.currentTarget).attr("id");
                        }
                        if (res) {
                            if (0 === (0, node.default)(e.target).data("depth")) {
                                (0, node.default)("#" + res + " .js-sub-menu").show().css({
                                    top: (0, node.default)("#" + res).height() + (0, node.default)("#" + res).position().top
                                });
                            }
                        }
                    }
                });
                (0, node.default)("#menu-icon").on("click", function () {
                    (0, node.default)("#mobile_top_menu_wrapper").toggle();
                    toggleMobileMenu.toggleMobileMenu();
                });
                (0, node.default)(".js-top-menu").mouseleave(function () {
                    if (!me.el.parent().hasClass("mobile")) {
                        (0, node.default)("#" + res + " .js-sub-menu").hide();
                    }
                });
                this.el.on("click", function (event) {
                    if (!me.el.parent().hasClass("mobile")) {
                        event.stopPropagation();
                    }
                });
                prestashop.on("responsive update", function (dataAndEvents) {
                    (0, node.default)(".js-sub-menu").removeAttr("style");
                    toggleMobileMenu.toggleMobileMenu();
                });
                defineProperty(Object.getPrototypeOf(value.prototype), "init", this).call(this);
            }
        }, {
            key: "toggleMobileMenu",
            /**
             * @return {undefined}
             */
            value: function () {
                if ((0, node.default)("#mobile_top_menu_wrapper").is(":visible")) {
                    (0, node.default)("#notifications").hide();
                    (0, node.default)("#wrapper").hide();
                    (0, node.default)("#footer").hide();
                } else {
                    (0, node.default)("#notifications").show();
                    (0, node.default)("#wrapper").show();
                    (0, node.default)("#footer").show();
                }
            }
        }]), value;
    }(obj.default);
    self.default = compassResult;
    module.exports = self.default;
}, function (dataAndEvents, deepDataAndEvents, proceed) {
    /**
     * @return {undefined}
     */
    function ready() {
        (0, obj.default)("#order-return-form table thead input[type=checkbox]").on("click", function () {
            var isChecked = (0, obj.default)(this).prop("checked");
            (0, obj.default)("#order-return-form table tbody input[type=checkbox]").each(function (dataAndEvents, input) {
                (0, obj.default)(input).prop("checked", isChecked);
            });
        });
    }
    /**
     * @return {undefined}
     */
    function completed() {
        if ((0, obj.default)("body#order-detail")) {
            ready();
        }
    }
    var value = proceed(0);
    var obj = function (d) {
        return d && d.__esModule ? d : {
            default: d
        };
    }(value);
    (0, obj.default)(document).ready(completed);
}, function (dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist) {
    !function ($) {
        /** @type {number} */
        var pm = 0;
        /**
         * @param {?} element
         * @param {string} options
         * @return {undefined}
         */
        var Filestyle = function (element, options) {
            /** @type {string} */
            this.options = options;
            /** @type {Array} */
            this.$elementFilestyle = [];
            this.$element = $(element);
        };
        Filestyle.prototype = {
            /**
             * @return {undefined}
             */
            clear: function () {
                this.$element.val("");
                this.$elementFilestyle.find(":text").val("");
                this.$elementFilestyle.find(".badge").remove();
            },
            /**
             * @return {undefined}
             */
            destroy: function () {
                this.$element.removeAttr("style").removeData("filestyle");
                this.$elementFilestyle.remove();
            },
            /**
             * @param {boolean} root
             * @return {?}
             */
            disabled: function (root) {
                if (true === root) {
                    if (!this.options.disabled) {
                        this.$element.attr("disabled", "true");
                        this.$elementFilestyle.find("label").attr("disabled", "true");
                        /** @type {boolean} */
                        this.options.disabled = true;
                    }
                } else {
                    if (false !== root) {
                        return this.options.disabled;
                    }
                    if (this.options.disabled) {
                        this.$element.removeAttr("disabled");
                        this.$elementFilestyle.find("label").removeAttr("disabled");
                        /** @type {boolean} */
                        this.options.disabled = false;
                    }
                }
            },
            /**
             * @param {boolean} dataAndEvents
             * @return {?}
             */
            buttonBefore: function (dataAndEvents) {
                if (true === dataAndEvents) {
                    if (!this.options.buttonBefore) {
                        /** @type {boolean} */
                        this.options.buttonBefore = true;
                        if (this.options.input) {
                            this.$elementFilestyle.remove();
                            this.constructor();
                            this.pushNameFiles();
                        }
                    }
                } else {
                    if (false !== dataAndEvents) {
                        return this.options.buttonBefore;
                    }
                    if (this.options.buttonBefore) {
                        /** @type {boolean} */
                        this.options.buttonBefore = false;
                        if (this.options.input) {
                            this.$elementFilestyle.remove();
                            this.constructor();
                            this.pushNameFiles();
                        }
                    }
                }
            },
            /**
             * @param {boolean} hspace
             * @return {?}
             */
            icon: function (hspace) {
                if (true === hspace) {
                    if (!this.options.icon) {
                        /** @type {boolean} */
                        this.options.icon = true;
                        this.$elementFilestyle.find("label").prepend(this.htmlIcon());
                    }
                } else {
                    if (false !== hspace) {
                        return this.options.icon;
                    }
                    if (this.options.icon) {
                        /** @type {boolean} */
                        this.options.icon = false;
                        this.$elementFilestyle.find(".icon-span-filestyle").remove();
                    }
                }
            },
            /**
             * @param {boolean} elem
             * @return {?}
             */
            input: function (elem) {
                if (true === elem) {
                    if (!this.options.input) {
                        /** @type {boolean} */
                        this.options.input = true;
                        if (this.options.buttonBefore) {
                            this.$elementFilestyle.append(this.htmlInput());
                        } else {
                            this.$elementFilestyle.prepend(this.htmlInput());
                        }
                        this.$elementFilestyle.find(".badge").remove();
                        this.pushNameFiles();
                        this.$elementFilestyle.find(".group-span-filestyle").addClass("input-group-btn");
                    }
                } else {
                    if (false !== elem) {
                        return this.options.input;
                    }
                    if (this.options.input) {
                        /** @type {boolean} */
                        this.options.input = false;
                        this.$elementFilestyle.find(":text").remove();
                        var codeSegments = this.pushNameFiles();
                        if (codeSegments.length > 0) {
                            if (this.options.badge) {
                                this.$elementFilestyle.find("label").append(' <span class="badge">' + codeSegments.length + "</span>");
                            }
                        }
                        this.$elementFilestyle.find(".group-span-filestyle").removeClass("input-group-btn");
                    }
                }
            },
            /**
             * @param {string} type
             * @return {?}
             */
            size: function (type) {
                if (void 0 === type) {
                    return this.options.size;
                }
                var wrapper = this.$elementFilestyle.find("label");
                var el = this.$elementFilestyle.find("input");
                wrapper.removeClass("btn-lg btn-sm");
                el.removeClass("input-lg input-sm");
                if ("nr" != type) {
                    wrapper.addClass("btn-" + type);
                    el.addClass("input-" + type);
                }
            },
            /**
             * @param {string} name
             * @return {?}
             */
            placeholder: function (name) {
                if (void 0 === name) {
                    return this.options.placeholder;
                }
                /** @type {string} */
                this.options.placeholder = name;
                this.$elementFilestyle.find("input").attr("placeholder", name);
            },
            /**
             * @param {number} value
             * @return {?}
             */
            buttonText: function (value) {
                if (void 0 === value) {
                    return this.options.buttonText;
                }
                /** @type {number} */
                this.options.buttonText = value;
                this.$elementFilestyle.find("label .buttonText").html(this.options.buttonText);
            },
            /**
             * @param {number} array
             * @return {?}
             */
            buttonName: function (array) {
                if (void 0 === array) {
                    return this.options.buttonName;
                }
                /** @type {number} */
                this.options.buttonName = array;
                this.$elementFilestyle.find("label").attr({
                    class: "btn " + this.options.buttonName
                });
            },
            /**
             * @param {number} dataAndEvents
             * @return {?}
             */
            iconName: function (dataAndEvents) {
                if (void 0 === dataAndEvents) {
                    return this.options.iconName;
                }
                this.$elementFilestyle.find(".icon-span-filestyle").attr({
                    class: "icon-span-filestyle " + this.options.iconName
                });
            },
            /**
             * @return {?}
             */
            htmlIcon: function () {
                return this.options.icon ? '<span class="icon-span-filestyle ' + this.options.iconName + '"></span> ' : "";
            },
            /**
             * @return {?}
             */
            htmlInput: function () {
                return this.options.input ? '<input type="text" class="form-control ' + ("nr" == this.options.size ? "" : "input-" + this.options.size) + '" placeholder="' + this.options.placeholder + '" disabled> ' : "";
            },
            /**
             * @return {?}
             */
            pushNameFiles: function () {
                /** @type {string} */
                var classes = "";
                /** @type {Array} */
                var codeSegments = [];
                if (void 0 === this.$element[0].files) {
                    codeSegments[0] = {
                        name: this.$element[0] && this.$element[0].value
                    };
                } else {
                    codeSegments = this.$element[0].files;
                }
                /** @type {number} */
                var i = 0;
                for (; i < codeSegments.length; i++) {
                    classes += codeSegments[i].name.split("\\").pop() + ", ";
                }
                return "" !== classes ? this.$elementFilestyle.find(":text").val(classes.replace(/\, $/g, "")) : this.$elementFilestyle.find(":text").val(""), codeSegments;
            },
            /**
             * @return {undefined}
             */
            constructor: function () {
                var self = this;
                /** @type {string} */
                var urlConfigHtml = "";
                var s = self.$element.attr("id");
                /** @type {string} */
                var optsData = "";
                if (!("" !== s && s)) {
                    s = "filestyle-" + pm;
                    self.$element.attr({
                        id: s
                    });
                    pm++;
                }
                /** @type {string} */
                optsData = '<span class="group-span-filestyle ' + (self.options.input ? "input-group-btn" : "") + '"><label for="' + s + '" class="btn ' + self.options.buttonName + " " + ("nr" == self.options.size ? "" : "btn-" + self.options.size) + '" ' + (self.options.disabled ? 'disabled="true"' : "") + ">" + self.htmlIcon() + '<span class="buttonText">' + self.options.buttonText + "</span></label></span>";
                urlConfigHtml = self.options.buttonBefore ? optsData + self.htmlInput() : self.htmlInput() + optsData;
                self.$elementFilestyle = $('<div class="bootstrap-filestyle input-group">' + urlConfigHtml + "</div>");
                self.$elementFilestyle.find(".group-span-filestyle").attr("tabindex", "0").keypress(function (original) {
                    if (13 === original.keyCode || 32 === original.charCode) {
                        return self.$elementFilestyle.find("label").click(), false;
                    }
                });
                self.$element.css({
                    position: "absolute",
                    clip: "rect(0px 0px 0px 0px)"
                }).attr("tabindex", "-1").after(self.$elementFilestyle);
                if (self.options.disabled) {
                    self.$element.attr("disabled", "true");
                }
                self.$element.change(function () {
                    var product = self.pushNameFiles();
                    if (0 == self.options.input && self.options.badge) {
                        if (0 == self.$elementFilestyle.find(".badge").length) {
                            self.$elementFilestyle.find("label").append(' <span class="badge">' + product.length + "</span>");
                        } else {
                            if (0 == product.length) {
                                self.$elementFilestyle.find(".badge").remove();
                            } else {
                                self.$elementFilestyle.find(".badge").html(product.length);
                            }
                        }
                    } else {
                        self.$elementFilestyle.find(".badge").remove();
                    }
                });
                if (window.navigator.userAgent.search(/firefox/i) > -1) {
                    self.$elementFilestyle.find("label").click(function () {
                        return self.$element.click(), false;
                    });
                }
            }
        };
        var old = $.fn.filestyle;
        /**
         * @param {boolean} options
         * @param {?} value
         * @return {?}
         */
        $.fn.filestyle = function (options, value) {
            /** @type {string} */
            var strValue = "";
            var items = this.each(function () {
                if ("file" === $(this).attr("type")) {
                    var $this = $(this);
                    var data = $this.data("filestyle");
                    var opts = $.extend({}, $.fn.filestyle.defaults, options, "object" == typeof options && options);
                    if (!data) {
                        $this.data("filestyle", data = new Filestyle(this, opts));
                        data.constructor();
                    }
                    if ("string" == typeof options) {
                        strValue = data[options](value);
                    }
                }
            });
            return void 0 !== typeof strValue ? strValue : items;
        };
        $.fn.filestyle.defaults = {
            buttonText: "Choose file",
            iconName: "glyphicon glyphicon-folder-open",
            buttonName: "btn-default",
            size: "nr",
            input: true,
            badge: true,
            icon: true,
            buttonBefore: false,
            disabled: false,
            placeholder: ""
        };
        /**
         * @return {?}
         */
        $.fn.filestyle.noConflict = function () {
            return $.fn.filestyle = old, this;
        };
        $(function () {
            $(".filestyle").each(function () {
                var $this = $(this);
                var defaults = {
                    input: "false" !== $this.attr("data-input"),
                    icon: "false" !== $this.attr("data-icon"),
                    buttonBefore: "true" === $this.attr("data-buttonBefore"),
                    disabled: "true" === $this.attr("data-disabled"),
                    size: $this.attr("data-size"),
                    buttonText: $this.attr("data-buttonText"),
                    buttonName: $this.attr("data-buttonName"),
                    iconName: $this.attr("data-iconName"),
                    badge: "false" !== $this.attr("data-badge"),
                    placeholder: $this.attr("data-placeholder")
                };
                $this.filestyle(defaults);
            });
        });
    }(window.jQuery);
}, function (dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist) {
    !function ($) {
        /**
         * @param {Text} options
         * @return {?}
         */
        $.fn.scrollbox = function (options) {
            var defaults = {
                linear: false,
                startDelay: 2,
                delay: 3,
                step: 5,
                speed: 32,
                switchItems: 1,
                direction: "vertical",
                distance: "auto",
                autoPlay: true,
                onMouseOverPause: true,
                paused: false,
                queue: null,
                listElement: "ul",
                listItemElement: "li",
                infiniteLoop: true,
                switchAmount: 0,
                afterForward: null,
                afterBackward: null,
                triggerStackable: false
            };
            return options = $.extend(defaults, options), options.scrollOffset = "vertical" === options.direction ? "scrollTop" : "scrollLeft", options.queue && (options.queue = $("#" + options.queue)), this.each(function () {
                var closest;
                var requestAnimationFrame;
                var run;
                var tick;
                var setTimer;
                var start;
                var animate;
                var init;
                var throttledUpdate;
                var _this = $(this);
                /** @type {null} */
                var interval = null;
                /** @type {null} */
                var timer = null;
                /** @type {boolean} */
                var h = false;
                /** @type {number} */
                var row = 0;
                /** @type {number} */
                var dynamic = 0;
                if (options.onMouseOverPause) {
                    _this.bind("mouseover", function () {
                        /** @type {boolean} */
                        h = true;
                    });
                    _this.bind("mouseout", function () {
                        /** @type {boolean} */
                        h = false;
                    });
                }
                closest = _this.children(options.listElement + ":first-child");
                if (false === options.infiniteLoop) {
                    if (0 === options.switchAmount) {
                        options.switchAmount = closest.children().length;
                    }
                }
                /**
                 * @return {?}
                 */
                start = function () {
                    if (!h) {
                        var j;
                        var o;
                        var b;
                        var c;
                        var chunkSize;
                        if (j = closest.children(options.listItemElement + ":first-child"), c = "auto" !== options.distance ? options.distance : "vertical" === options.direction ? j.outerHeight(true) : j.outerWidth(true), options.linear ? b = Math.min(_this[0][options.scrollOffset] + options.step, c) : (chunkSize = Math.max(3, parseInt(0.3 * (c - _this[0][options.scrollOffset]), 10)), b = Math.min(_this[0][options.scrollOffset] + chunkSize, c)), _this[0][options.scrollOffset] = b, b >= c) {
                            /** @type {number} */
                            o = 0;
                            for (; o < options.switchItems; o++) {
                                if (options.queue && options.queue.find(options.listItemElement).length > 0) {
                                    closest.append(options.queue.find(options.listItemElement)[0]);
                                    closest.children(options.listItemElement + ":first-child").remove();
                                } else {
                                    closest.append(closest.children(options.listItemElement + ":first-child"));
                                }
                                ++row;
                            }
                            if (_this[0][options.scrollOffset] = 0, clearInterval(interval), interval = null, $.isFunction(options.afterForward) && options.afterForward.call(_this, {
                                switchCount: row,
                                currentFirstChild: closest.children(options.listItemElement + ":first-child")
                            }), options.triggerStackable && 0 !== dynamic) {
                                return void requestAnimationFrame();
                            }
                            if (false === options.infiniteLoop && row >= options.switchAmount) {
                                return;
                            }
                            if (options.autoPlay) {
                                /** @type {number} */
                                timer = setTimeout(tick, 1E3 * options.delay);
                            }
                        }
                    }
                };
                /**
                 * @return {?}
                 */
                animate = function () {
                    if (!h) {
                        var $cont;
                        var o;
                        var e;
                        var l;
                        var r;
                        if (0 === _this[0][options.scrollOffset]) {
                            /** @type {number} */
                            o = 0;
                            for (; o < options.switchItems; o++) {
                                closest.children(options.listItemElement + ":last-child").insertBefore(closest.children(options.listItemElement + ":first-child"));
                            }
                            $cont = closest.children(options.listItemElement + ":first-child");
                            l = "auto" !== options.distance ? options.distance : "vertical" === options.direction ? $cont.height() : $cont.width();
                            _this[0][options.scrollOffset] = l;
                        }
                        if (options.linear ? e = Math.max(_this[0][options.scrollOffset] - options.step, 0) : (r = Math.max(3, parseInt(0.3 * _this[0][options.scrollOffset], 10)), e = Math.max(_this[0][options.scrollOffset] - r, 0)), _this[0][options.scrollOffset] = e, 0 === e) {
                            if (--row, clearInterval(interval), interval = null, $.isFunction(options.afterBackward) && options.afterBackward.call(_this, {
                                switchCount: row,
                                currentFirstChild: closest.children(options.listItemElement + ":first-child")
                            }), options.triggerStackable && 0 !== dynamic) {
                                return void requestAnimationFrame();
                            }
                            if (options.autoPlay) {
                                /** @type {number} */
                                timer = setTimeout(tick, 1E3 * options.delay);
                            }
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                requestAnimationFrame = function () {
                    if (0 !== dynamic) {
                        if (dynamic > 0) {
                            dynamic--;
                            /** @type {number} */
                            timer = setTimeout(tick, 0);
                        } else {
                            dynamic++;
                            /** @type {number} */
                            timer = setTimeout(run, 0);
                        }
                    }
                };
                /**
                 * @return {undefined}
                 */
                tick = function () {
                    clearInterval(interval);
                    /** @type {number} */
                    interval = setInterval(start, options.speed);
                };
                /**
                 * @return {undefined}
                 */
                run = function () {
                    clearInterval(interval);
                    /** @type {number} */
                    interval = setInterval(animate, options.speed);
                };
                /**
                 * @return {undefined}
                 */
                init = function () {
                    /** @type {boolean} */
                    options.autoPlay = true;
                    /** @type {boolean} */
                    h = false;
                    clearInterval(interval);
                    /** @type {number} */
                    interval = setInterval(start, options.speed);
                };
                /**
                 * @return {undefined}
                 */
                throttledUpdate = function () {
                    /** @type {boolean} */
                    h = true;
                };
                /**
                 * @param {number} delay
                 * @return {undefined}
                 */
                setTimer = function (delay) {
                    options.delay = delay || options.delay;
                    clearTimeout(timer);
                    if (options.autoPlay) {
                        /** @type {number} */
                        timer = setTimeout(tick, 1E3 * options.delay);
                    }
                };
                if (options.autoPlay) {
                    /** @type {number} */
                    timer = setTimeout(tick, 1E3 * options.startDelay);
                }
                _this.bind("resetClock", function (delay) {
                    setTimer(delay);
                });
                _this.bind("forward", function () {
                    if (options.triggerStackable) {
                        if (null !== interval) {
                            dynamic++;
                        } else {
                            tick();
                        }
                    } else {
                        clearTimeout(timer);
                        tick();
                    }
                });
                _this.bind("backward", function () {
                    if (options.triggerStackable) {
                        if (null !== interval) {
                            dynamic--;
                        } else {
                            run();
                        }
                    } else {
                        clearTimeout(timer);
                        run();
                    }
                });
                _this.bind("pauseHover", function () {
                    throttledUpdate();
                });
                _this.bind("forwardHover", function () {
                    init();
                });
                _this.bind("speedUp", function (dataAndEvents, value) {
                    if ("undefined" === value) {
                        /** @type {number} */
                        value = Math.max(1, parseInt(options.speed / 2, 10));
                    }
                    /** @type {number} */
                    options.speed = value;
                });
                _this.bind("speedDown", function (dataAndEvents, value) {
                    if ("undefined" === value) {
                        /** @type {number} */
                        value = 2 * options.speed;
                    }
                    /** @type {number} */
                    options.speed = value;
                });
                _this.bind("updateConfig", function (dataAndEvents, newOptions) {
                    options = $.extend(options, newOptions);
                });
            });
        };
    }(jQuery);
}, function (dataAndEvents, deepDataAndEvents, $) {
    /**
     * @param {Object} value
     * @return {?}
     */
    function String(value) {
        return value && value.__esModule ? value : {
            default: value
        };
    }
    /**
     * @param {?} data
     * @return {undefined}
     */
    function fire(data) {
        (0, self.default)("#search_filters").replaceWith(data.rendered_facets);
        (0, self.default)("#js-active-search-filters").replaceWith(data.rendered_active_filters);
        (0, self.default)("#js-product-list-top").replaceWith(data.rendered_products_top);
        (0, self.default)("#js-product-list").replaceWith(data.rendered_products);
        (0, self.default)("#js-product-list-bottom").replaceWith(data.rendered_products_bottom);
        (new out.default).init();
    }
    var obj = $(0);
    var self = String(obj);
    var header = $(1);
    var t = String(header);
    $(4);
    var min = $(3);
    var out = String(min);
    (0, self.default)(document).ready(function () {
        t.default.on("clickQuickView", function (element) {
            var command = {
                action: "quickview",
                id_product: element.dataset.idProduct,
                id_product_attribute: element.dataset.idProductAttribute
            };
            self.default.post(t.default.urls.pages.product, command, null, "json").then(function (item) {
                (0, self.default)("body").append(item.quickview_html);
                var $modal = (0, self.default)("#quickview-modal-" + item.product.id + "-" + item.product.id_product_attribute);
                $modal.modal("show");
                hide($modal);
                $modal.on("hidden.bs.modal", function () {
                    $modal.remove();
                });
            }).fail(function (resp) {
                t.default.emit("handleError", {
                    eventType: "clickQuickView",
                    resp: resp
                });
            });
        });
        /**
         * @param {Object} options
         * @return {undefined}
         */
        var hide = function (options) {
            var cancel = (0, self.default)(".js-arrows");
            var ul = options.find(".js-qv-product-images");
            (0, self.default)(".js-thumb").on("click", function (e) {
                if ((0, self.default)(".js-thumb").hasClass("selected")) {
                    (0, self.default)(".js-thumb").removeClass("selected");
                }
                (0, self.default)(e.currentTarget).addClass("selected");
                (0, self.default)(".js-qv-product-cover").attr("src", (0, self.default)(e.target).data("image-large-src"));
            });
            if (ul.find("li").length <= 4) {
                cancel.hide();
            } else {
                cancel.on("click", function (opt_e) {
                    if ((0, self.default)(opt_e.target).hasClass("arrow-up") && (0, self.default)(".js-qv-product-images").position().top < 0) {
                        move("up");
                        (0, self.default)(".arrow-down").css("opacity", "1");
                    } else {
                        if ((0, self.default)(opt_e.target).hasClass("arrow-down")) {
                            if (ul.position().top + ul.height() > (0, self.default)(".js-qv-mask").height()) {
                                move("down");
                                (0, self.default)(".arrow-up").css("opacity", "1");
                            }
                        }
                    }
                });
            }
            options.find("#quantity_wanted").TouchSpin({
                verticalbuttons: true,
                verticalupclass: "material-icons touchspin-up",
                verticaldownclass: "material-icons touchspin-down",
                buttondown_class: "btn btn-touchspin js-touchspin",
                buttonup_class: "btn btn-touchspin js-touchspin",
                min: 1,
                max: 1E6
            });
        };
        /**
         * @param {string} left
         * @return {undefined}
         */
        var move = function (left) {
            var particle = (0, self.default)(".js-qv-product-images");
            var extraAngle = (0, self.default)(".js-qv-product-images li img").height() + 20;
            var angle = particle.position().top;
            particle.velocity({
                translateY: "up" === left ? angle + extraAngle : angle - extraAngle
            }, function () {
                if (particle.position().top >= 0) {
                    (0, self.default)(".arrow-up").css("opacity", ".2");
                } else {
                    if (particle.position().top + particle.height() <= (0, self.default)(".js-qv-mask").height()) {
                        (0, self.default)(".arrow-down").css("opacity", ".2");
                    }
                }
            });
        };
        (0, self.default)("body").on("click", "#search_filter_toggler", function () {
            (0, self.default)("#search_filters_wrapper").removeClass("hidden-sm-down");
            (0, self.default)("#content-wrapper").addClass("hidden-sm-down");
            (0, self.default)("#footer").addClass("hidden-sm-down");
        });
        (0, self.default)("#search_filter_controls .clear").on("click", function () {
            (0, self.default)("#search_filters_wrapper").addClass("hidden-sm-down");
            (0, self.default)("#content-wrapper").removeClass("hidden-sm-down");
            (0, self.default)("#footer").removeClass("hidden-sm-down");
        });
        (0, self.default)("#search_filter_controls .ok").on("click", function () {
            (0, self.default)("#search_filters_wrapper").addClass("hidden-sm-down");
            (0, self.default)("#content-wrapper").removeClass("hidden-sm-down");
            (0, self.default)("#footer").removeClass("hidden-sm-down");
        });
        /**
         * @param {Event} evt
         * @return {?}
         */
        var init = function (evt) {
            if (void 0 !== evt.target.dataset.searchUrl) {
                return evt.target.dataset.searchUrl;
            }
            if (void 0 === (0, self.default)(evt.target).parent()[0].dataset.searchUrl) {
                throw new Error("Can not parse search URL");
            }
            return (0, self.default)(evt.target).parent()[0].dataset.searchUrl;
        };
        (0, self.default)("body").on("change", "#search_filters input[data-search-url]", function (doc) {
            t.default.emit("updateFacets", init(doc));
        });
        (0, self.default)("body").on("click", ".js-search-filters-clear-all", function (doc) {
            t.default.emit("updateFacets", init(doc));
        });
        (0, self.default)("body").on("click", ".js-search-link", function (evt) {
            evt.preventDefault();
            t.default.emit("updateFacets", (0, self.default)(evt.target).closest("a").get(0).href);
        });
        (0, self.default)("body").on("change", "#search_filters select", function (opt_e) {
            var $form = (0, self.default)(opt_e.target).closest("form");
            t.default.emit("updateFacets", "?" + $form.serialize());
        });
        t.default.on("updateProductList", function (memory) {
            fire(memory);
        });
    });
}, function (dataAndEvents, deepDataAndEvents, proceed) {
    var value = proceed(0);
    var obj = function (d) {
        return d && d.__esModule ? d : {
            default: d
        };
    }(value);
    (0, obj.default)(document).ready(function () {
        /**
         * @return {undefined}
         */
        function init() {
            (0, obj.default)(".js-thumb").on("click", function (e) {
                (0, obj.default)(".js-modal-product-cover").attr("src", (0, obj.default)(e.target).data("image-large-src"));
                (0, obj.default)(".selected").removeClass("selected");
                (0, obj.default)(e.target).addClass("selected");
                (0, obj.default)(".js-qv-product-cover").prop("src", (0, obj.default)(e.currentTarget).data("image-large-src"));
            });
        }
        /**
         * @return {undefined}
         */
        function Init() {
            if ((0, obj.default)("#main .js-qv-product-images li").length > 2) {
                (0, obj.default)("#main .js-qv-mask").addClass("scroll");
                (0, obj.default)(".scroll-box-arrows").addClass("scroll");
                (0, obj.default)("#main .js-qv-mask").scrollbox({
                    direction: "h",
                    distance: 113,
                    autoPlay: false
                });
                (0, obj.default)(".scroll-box-arrows .left").click(function () {
                    (0, obj.default)("#main .js-qv-mask").trigger("backward");
                });
                (0, obj.default)(".scroll-box-arrows .right").click(function () {
                    (0, obj.default)("#main .js-qv-mask").trigger("forward");
                });
            } else {
                (0, obj.default)("#main .js-qv-mask").removeClass("scroll");
                (0, obj.default)(".scroll-box-arrows").removeClass("scroll");
            }
        }
        /**
         * @return {undefined}
         */
        function link() {
            (0, obj.default)(".js-file-input").on("change", function (event) {
                var self = void 0;
                var cookie = void 0;
                if (self = (0, obj.default)(event.currentTarget)[0]) {
                    if (cookie = self.files[0]) {
                        (0, obj.default)(self).prev().text(cookie.name);
                    }
                }
            });
        }
        !function () {
            var $input = (0, obj.default)("#quantity_wanted");
            $input.TouchSpin({
                verticalbuttons: true,
                verticalupclass: "material-icons touchspin-up",
                verticaldownclass: "material-icons touchspin-down",
                buttondown_class: "btn btn-touchspin js-touchspin",
                buttonup_class: "btn btn-touchspin js-touchspin",
                min: parseInt($input.attr("min"), 10),
                max: 1E6
            });
            $input.on("change", function (event) {
                var component = (0, obj.default)(".product-refresh");
                return (0, obj.default)(event.currentTarget).trigger("touchspin.stopspin"), component.trigger("click", {
                    eventType: "updatedProductQuantity"
                }), event.preventDefault(), false;
            });
        }();
        link();
        init();
        Init();
        //prestashop.on("updatedProduct", function (h) {
        //    if (link(), init(), h && h.product_minimal_quantity) {
        //        /** @type {number} */
        //        var min = parseInt(h.product_minimal_quantity, 10);
        //        (0, obj.default)("#quantity_wanted").trigger("touchspin.updatesettings", {
        //            min: min
        //        });
        //    }
        //    Init();
        //    (0, obj.default)((0, obj.default)(".tabs .nav-link.active").attr("href")).addClass("active").removeClass("fade");
        //    (0, obj.default)(".js-product-images-modal").replaceWith(h.product_images_modal);
        //});
    });
}, function (dataAndEvents, deepDataAndEvents, iterator) {
    /**
     * @param {Object} d
     * @return {?}
     */
    function load(d) {
        return d && d.__esModule ? d : {
            default: d
        };
    }
    /**
     * @param {Object} output
     * @param {Object} target
     * @return {undefined}
     */
    function run(output, target) {
        var landmark = target.children().detach();
        target.empty().append(output.children().detach());
        output.append(landmark);
    }
    /**
     * @return {undefined}
     */
    function init() {
        if (obj.default.responsive.mobile) {
            (0, node.default)("*[id^='_desktop_']").each(function (dataAndEvents, domElement) {
                var curValue = (0, node.default)("#" + domElement.id.replace("_desktop_", "_mobile_"));
                if (curValue.length) {
                    run((0, node.default)(domElement), curValue);
                }
            });
        } else {
            (0, node.default)("*[id^='_mobile_']").each(function (dataAndEvents, domElement) {
                var curValue = (0, node.default)("#" + domElement.id.replace("_mobile_", "_desktop_"));
                if (curValue.length) {
                    run((0, node.default)(domElement), curValue);
                }
            });
        }
        obj.default.emit("responsive update", {
            mobile: obj.default.responsive.mobile
        });
    }
    var key = iterator(0);
    var node = load(key);
    var value = iterator(1);
    var obj = load(value);
    obj.default.responsive = obj.default.responsive || {};
    /** @type {number} */
    obj.default.responsive.current_width = window.innerWidth;
    /** @type {number} */
    obj.default.responsive.min_width = 768;
    /** @type {boolean} */
    obj.default.responsive.mobile = obj.default.responsive.current_width < obj.default.responsive.min_width;
    (0, node.default)(window).on("resize", function () {
        var prevY = obj.default.responsive.current_width;
        var y = obj.default.responsive.min_width;
        /** @type {number} */
        var vertexY = window.innerWidth;
        /** @type {boolean} */
        var i = prevY >= y && vertexY < y || prevY < y && vertexY >= y;
        /** @type {number} */
        obj.default.responsive.current_width = vertexY;
        /** @type {boolean} */
        obj.default.responsive.mobile = obj.default.responsive.current_width < obj.default.responsive.min_width;
        if (i) {
            init();
        }
    });
    (0, node.default)(document).ready(function () {
        if (obj.default.responsive.mobile) {
            init();
        }
    });
}, function (dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist) {
    !function ($) {
        /**
         * @param {string} deepDataAndEvents
         * @param {number} keepData
         * @return {?}
         */
        function clone(deepDataAndEvents, keepData) {
            return deepDataAndEvents + ".touchspin_" + keepData;
        }
        /**
         * @param {Array} obj
         * @param {number} key
         * @return {?}
         */
        function pluck(obj, key) {
            return $.map(obj, function (deepDataAndEvents) {
                return clone(deepDataAndEvents, key);
            });
        }
        /** @type {number} */
        var key = 0;
        /**
         * @param {string} opt_attributes
         * @return {?}
         */
        $.fn.TouchSpin = function (opt_attributes) {
            if ("destroy" === opt_attributes) {
                return void this.each(function () {
                    var $spy = $(this);
                    var spinnerid = $spy.data();
                    $(document).off(pluck(["mouseup", "touchend", "touchcancel", "mousemove", "touchmove", "scroll", "scrollstart"], spinnerid.spinnerid).join(" "));
                });
            }
            var defaults = {
                min: 0,
                max: 100,
                initval: "",
                replacementval: "",
                step: 1,
                decimals: 0,
                stepinterval: 100,
                forcestepdivisibility: "round",
                stepintervaldelay: 500,
                verticalbuttons: false,
                verticalupclass: "glyphicon glyphicon-chevron-up",
                verticaldownclass: "glyphicon glyphicon-chevron-down",
                prefix: "",
                postfix: "",
                prefix_extraclass: "",
                postfix_extraclass: "",
                booster: true,
                boostat: 10,
                maxboostedstep: false,
                mousewheel: true,
                buttondown_class: "btn btn-default",
                buttonup_class: "btn btn-default",
                buttondown_txt: "-",
                buttonup_txt: "+"
            };
            var which = {
                min: "min",
                max: "max",
                initval: "init-val",
                replacementval: "replacement-val",
                step: "step",
                decimals: "decimals",
                stepinterval: "step-interval",
                verticalbuttons: "vertical-buttons",
                verticalupclass: "vertical-up-class",
                verticaldownclass: "vertical-down-class",
                forcestepdivisibility: "force-step-divisibility",
                stepintervaldelay: "step-interval-delay",
                prefix: "prefix",
                postfix: "postfix",
                prefix_extraclass: "prefix-extra-class",
                postfix_extraclass: "postfix-extra-class",
                booster: "booster",
                boostat: "boostat",
                maxboostedstep: "max-boosted-step",
                mousewheel: "mouse-wheel",
                buttondown_class: "button-down-class",
                buttonup_class: "button-up-class",
                buttondown_txt: "button-down-txt",
                buttonup_txt: "button-up-txt"
            };
            return this.each(function () {
                /**
                 * @return {undefined}
                 */
                function _setInitval() {
                    if ("" !== settings.initval) {
                        if ("" === originalinput.val()) {
                            originalinput.val(settings.initval);
                        }
                    }
                }
                /**
                 * @param {?} newsettings
                 * @return {undefined}
                 */
                function changeSettings(newsettings) {
                    _updateSettings(newsettings);
                    _checkValue();
                    var value = elements.input.val();
                    if ("" !== value) {
                        /** @type {number} */
                        value = Number(elements.input.val());
                        elements.input.val(value.toFixed(settings.decimals));
                    }
                }
                /**
                 * @return {undefined}
                 */
                function _initSettings() {
                    settings = $.extend({}, defaults, tagData, findElements(), opt_attributes);
                }
                /**
                 * @return {?}
                 */
                function findElements() {
                    var newArray = {};
                    return $.each(which, function (i, dataAndEvents) {
                        /** @type {string} */
                        var self = "bts-" + dataAndEvents;
                        if (originalinput.is("[data-" + self + "]")) {
                            newArray[i] = originalinput.data(self);
                        }
                    }), newArray;
                }
                /**
                 * @param {?} newsettings
                 * @return {undefined}
                 */
                function _updateSettings(newsettings) {
                    settings = $.extend({}, settings, newsettings);
                }
                /**
                 * @return {undefined}
                 */
                function _buildHtml() {
                    var val = originalinput.val();
                    var parentelement = originalinput.parent();
                    if ("" !== val) {
                        /** @type {string} */
                        val = Number(val).toFixed(settings.decimals);
                    }
                    originalinput.data("initvalue", val).val(val);
                    originalinput.addClass("form-control");
                    if (parentelement.hasClass("input-group")) {
                        _advanceInputGroup(parentelement);
                    } else {
                        _buildInputGroup();
                    }
                }
                /**
                 * @param {?} parentelement
                 * @return {undefined}
                 */
                function _advanceInputGroup(parentelement) {
                    parentelement.addClass("bootstrap-touchspin");
                    var html;
                    var markup;
                    var $rootElement = originalinput.prev();
                    var that = originalinput.next();
                    /** @type {string} */
                    var imageFieldHTML = '<span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + "</span>";
                    /** @type {string} */
                    var panelMarkup = '<span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + "</span>";
                    if ($rootElement.hasClass("input-group-btn")) {
                        /** @type {string} */
                        html = '<button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + "</button>";
                        $rootElement.append(html);
                    } else {
                        /** @type {string} */
                        html = '<span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + "</button></span>";
                        $(html).insertBefore(originalinput);
                    }
                    if (that.hasClass("input-group-btn")) {
                        /** @type {string} */
                        markup = '<button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + "</button>";
                        that.prepend(markup);
                    } else {
                        /** @type {string} */
                        markup = '<span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + "</button></span>";
                        $(markup).insertAfter(originalinput);
                    }
                    $(imageFieldHTML).insertBefore(originalinput);
                    $(panelMarkup).insertAfter(originalinput);
                    container = parentelement;
                }
                /**
                 * @return {undefined}
                 */
                function _buildInputGroup() {
                    var imageFieldHTML;
                    /** @type {string} */
                    imageFieldHTML = settings.verticalbuttons ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn-vertical"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + settings.verticalupclass + '"></i></button><button class="' + settings.buttonup_class +
                    ' bootstrap-touchspin-down" type="button"><i class="' + settings.verticaldownclass + '"></i></button></span></div>' : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix +
                    '</span><span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + "</button></span></div>";
                    container = $(imageFieldHTML).insertBefore(originalinput);
                    $(".bootstrap-touchspin-prefix", container).after(originalinput);
                    if (originalinput.hasClass("input-sm")) {
                        container.addClass("input-group-sm");
                    } else {
                        if (originalinput.hasClass("input-lg")) {
                            container.addClass("input-group-lg");
                        }
                    }
                }
                /**
                 * @return {undefined}
                 */
                function _initElements() {
                    elements = {
                        down: $(".bootstrap-touchspin-down", container),
                        up: $(".bootstrap-touchspin-up", container),
                        input: $("input", container),
                        prefix: $(".bootstrap-touchspin-prefix", container).addClass(settings.prefix_extraclass),
                        postfix: $(".bootstrap-touchspin-postfix", container).addClass(settings.postfix_extraclass)
                    };
                }
                /**
                 * @return {undefined}
                 */
                function _hideEmptyPrefixPostfix() {
                    if ("" === settings.prefix) {
                        elements.prefix.hide();
                    }
                    if ("" === settings.postfix) {
                        elements.postfix.hide();
                    }
                }
                /**
                 * @return {undefined}
                 */
                function init() {
                    originalinput.on("keydown", function (event) {
                        var e = event.keyCode || event.which;
                        if (38 === e) {
                            if ("up" !== lastDown) {
                                upOnce();
                                startUpSpin();
                            }
                            event.preventDefault();
                        } else {
                            if (40 === e) {
                                if ("down" !== lastDown) {
                                    downOnce();
                                    startDownSpin();
                                }
                                event.preventDefault();
                            }
                        }
                    });
                    originalinput.on("keyup", function (ev) {
                        var e = ev.keyCode || ev.which;
                        if (38 === e) {
                            stopSpin();
                        } else {
                            if (40 === e) {
                                stopSpin();
                            }
                        }
                    });
                    originalinput.on("blur", function () {
                        _checkValue();
                    });
                    elements.down.on("keydown", function (event) {
                        var code = event.keyCode || event.which;
                        if (!(32 !== code && 13 !== code)) {
                            if ("down" !== lastDown) {
                                downOnce();
                                startDownSpin();
                            }
                            event.preventDefault();
                        }
                    });
                    elements.down.on("keyup", function (ev) {
                        var code = ev.keyCode || ev.which;
                        if (!(32 !== code && 13 !== code)) {
                            stopSpin();
                        }
                    });
                    elements.up.on("keydown", function (event) {
                        var code = event.keyCode || event.which;
                        if (!(32 !== code && 13 !== code)) {
                            if ("up" !== lastDown) {
                                upOnce();
                                startUpSpin();
                            }
                            event.preventDefault();
                        }
                    });
                    elements.up.on("keyup", function (ev) {
                        var code = ev.keyCode || ev.which;
                        if (!(32 !== code && 13 !== code)) {
                            stopSpin();
                        }
                    });
                    elements.down.on("mousedown.touchspin", function (event) {
                        elements.down.off("touchstart.touchspin");
                        if (!originalinput.is(":disabled")) {
                            downOnce();
                            startDownSpin();
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    });
                    elements.down.on("touchstart.touchspin", function (event) {
                        elements.down.off("mousedown.touchspin");
                        if (!originalinput.is(":disabled")) {
                            downOnce();
                            startDownSpin();
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    });
                    elements.up.on("mousedown.touchspin", function (event) {
                        elements.up.off("touchstart.touchspin");
                        if (!originalinput.is(":disabled")) {
                            upOnce();
                            startUpSpin();
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    });
                    elements.up.on("touchstart.touchspin", function (event) {
                        elements.up.off("mousedown.touchspin");
                        if (!originalinput.is(":disabled")) {
                            upOnce();
                            startUpSpin();
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    });
                    elements.up.on("mouseout touchleave touchend touchcancel", function (event) {
                        if (lastDown) {
                            event.stopPropagation();
                            stopSpin();
                        }
                    });
                    elements.down.on("mouseout touchleave touchend touchcancel", function (event) {
                        if (lastDown) {
                            event.stopPropagation();
                            stopSpin();
                        }
                    });
                    elements.down.on("mousemove touchmove", function (event) {
                        if (lastDown) {
                            event.stopPropagation();
                            event.preventDefault();
                        }
                    });
                    elements.up.on("mousemove touchmove", function (event) {
                        if (lastDown) {
                            event.stopPropagation();
                            event.preventDefault();
                        }
                    });
                    $(document).on(pluck(["mouseup", "touchend", "touchcancel"], key).join(" "), function (types) {
                        if (lastDown) {
                            types.preventDefault();
                            stopSpin();
                        }
                    });
                    $(document).on(pluck(["mousemove", "touchmove", "scroll", "scrollstart"], key).join(" "), function (types) {
                        if (lastDown) {
                            types.preventDefault();
                            stopSpin();
                        }
                    });
                    originalinput.on("mousewheel DOMMouseScroll", function (event) {
                        if (settings.mousewheel && originalinput.is(":focus")) {
                            var e = event.originalEvent.wheelDelta || (-event.originalEvent.deltaY || -event.originalEvent.detail);
                            event.stopPropagation();
                            event.preventDefault();
                            if (e < 0) {
                                downOnce();
                            } else {
                                upOnce();
                            }
                        }
                    });
                }
                /**
                 * @return {undefined}
                 */
                function _bindEventsInterface() {
                    originalinput.on("touchspin.uponce", function () {
                        stopSpin();
                        upOnce();
                    });
                    originalinput.on("touchspin.downonce", function () {
                        stopSpin();
                        downOnce();
                    });
                    originalinput.on("touchspin.startupspin", function () {
                        startUpSpin();
                    });
                    originalinput.on("touchspin.startdownspin", function () {
                        startDownSpin();
                    });
                    originalinput.on("touchspin.stopspin", function () {
                        stopSpin();
                    });
                    originalinput.on("touchspin.updatesettings", function (dataAndEvents, newsettings) {
                        changeSettings(newsettings);
                    });
                }
                /**
                 * @param {?} value
                 * @return {?}
                 */
                function _forcestepdivisibility(value) {
                    switch (settings.forcestepdivisibility) {
                        case "round":
                            return (Math.round(value / settings.step) * settings.step).toFixed(settings.decimals);
                        case "floor":
                            return (Math.floor(value / settings.step) * settings.step).toFixed(settings.decimals);
                        case "ceil":
                            return (Math.ceil(value / settings.step) * settings.step).toFixed(settings.decimals);
                        default:
                            return value;
                    }
                }
                /**
                 * @return {?}
                 */
                function _checkValue() {
                    var val;
                    var parsedval;
                    var returnval;
                    if ("" === (val = originalinput.val())) {
                        return void ("" !== settings.replacementval && (originalinput.val(settings.replacementval), originalinput.trigger("change")));
                    }
                    if (!(settings.decimals > 0 && "." === val)) {
                        /** @type {number} */
                        parsedval = parseFloat(val);
                        if (isNaN(parsedval)) {
                            parsedval = "" !== settings.replacementval ? settings.replacementval : 0;
                        }
                        returnval = parsedval;
                        if (parsedval.toString() !== val) {
                            returnval = parsedval;
                        }
                        if (parsedval < settings.min) {
                            returnval = settings.min;
                        }
                        if (parsedval > settings.max) {
                            returnval = settings.max;
                        }
                        returnval = _forcestepdivisibility(returnval);
                        if (Number(val).toString() !== returnval.toString()) {
                            originalinput.val(returnval);
                            originalinput.trigger("change");
                        }
                    }
                }
                /**
                 * @return {?}
                 */
                function _getBoostedStep() {
                    if (settings.booster) {
                        /** @type {number} */
                        var height = Math.pow(2, Math.floor(spincount / settings.boostat)) * settings.step;
                        return settings.maxboostedstep && (height > settings.maxboostedstep && (height = settings.maxboostedstep, value = Math.round(value / height) * height)), Math.max(settings.step, height);
                    }
                    return settings.step;
                }
                /**
                 * @return {undefined}
                 */
                function upOnce() {
                    _checkValue();
                    /** @type {number} */
                    value = parseFloat(elements.input.val());
                    if (isNaN(value)) {
                        /** @type {number} */
                        value = 0;
                    }
                    /** @type {number} */
                    var newValue = value;
                    var character = _getBoostedStep();
                    value += character;
                    if (value > settings.max) {
                        value = settings.max;
                        originalinput.trigger("touchspin.on.max");
                        stopSpin();
                    }
                    elements.input.val(Number(value).toFixed(settings.decimals));
                    if (newValue !== value) {
                        originalinput.trigger("change");
                    }
                }
                /**
                 * @return {undefined}
                 */
                function downOnce() {
                    _checkValue();
                    /** @type {number} */
                    value = parseFloat(elements.input.val());
                    if (isNaN(value)) {
                        /** @type {number} */
                        value = 0;
                    }
                    /** @type {number} */
                    var newValue = value;
                    var diff = _getBoostedStep();
                    value -= diff;
                    if (value < settings.min) {
                        value = settings.min;
                        originalinput.trigger("touchspin.on.min");
                        stopSpin();
                    }
                    elements.input.val(value.toFixed(settings.decimals));
                    if (newValue !== value) {
                        originalinput.trigger("change");
                    }
                }
                /**
                 * @return {undefined}
                 */
                function startDownSpin() {
                    stopSpin();
                    /** @type {number} */
                    spincount = 0;
                    /** @type {string} */
                    lastDown = "down";
                    originalinput.trigger("touchspin.on.startspin");
                    originalinput.trigger("touchspin.on.startdownspin");
                    /** @type {number} */
                    tref = setTimeout(function () {
                        /** @type {number} */
                        scrollIntervalId = setInterval(function () {
                            spincount++;
                            downOnce();
                        }, settings.stepinterval);
                    }, settings.stepintervaldelay);
                }
                /**
                 * @return {undefined}
                 */
                function startUpSpin() {
                    stopSpin();
                    /** @type {number} */
                    spincount = 0;
                    /** @type {string} */
                    lastDown = "up";
                    originalinput.trigger("touchspin.on.startspin");
                    originalinput.trigger("touchspin.on.startupspin");
                    /** @type {number} */
                    going = setTimeout(function () {
                        /** @type {number} */
                        poll = setInterval(function () {
                            spincount++;
                            upOnce();
                        }, settings.stepinterval);
                    }, settings.stepintervaldelay);
                }
                /**
                 * @return {undefined}
                 */
                function stopSpin() {
                    switch (clearTimeout(tref), clearTimeout(going), clearInterval(scrollIntervalId), clearInterval(poll), lastDown) {
                        case "up":
                            originalinput.trigger("touchspin.on.stopupspin");
                            originalinput.trigger("touchspin.on.stopspin");
                            break;
                        case "down":
                            originalinput.trigger("touchspin.on.stopdownspin");
                            originalinput.trigger("touchspin.on.stopspin");
                    }
                    /** @type {number} */
                    spincount = 0;
                    /** @type {boolean} */
                    lastDown = false;
                }
                var settings;
                var container;
                var elements;
                var value;
                var scrollIntervalId;
                var poll;
                var tref;
                var going;
                var originalinput = $(this);
                var tagData = originalinput.data();
                /** @type {number} */
                var spincount = 0;
                /** @type {boolean} */
                var lastDown = false;
                !function () {
                    if (!originalinput.data("alreadyinitialized")) {
                        originalinput.data("alreadyinitialized", true);
                        key += 1;
                        originalinput.data("spinnerid", key);
                        if (originalinput.is("input")) {
                            _initSettings();
                            _setInitval();
                            _checkValue();
                            _buildHtml();
                            _initElements();
                            _hideEmptyPrefixPostfix();
                            init();
                            _bindEventsInterface();
                            elements.input.css("display", "block");
                        }
                    }
                }();
            });
        };
    }(jQuery);
}, function (dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist) {
    if ("undefined" == typeof jQuery) {
        throw new Error("Bootstrap's JavaScript requires jQuery");
    }
    +function ($) {
        var e = $.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || (1 == e[0] && (9 == e[1] && e[2] < 1) || e[0] >= 4)) {
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        }
    }(jQuery);
    (function () {
        /**
         * @param {string} dataAndEvents
         * @param {?} obj
         * @return {?}
         */
        function isRegExp(dataAndEvents, obj) {
            if (!dataAndEvents) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !obj || "object" != typeof obj && "function" != typeof obj ? dataAndEvents : obj;
        }
        /**
         * @param {Object} self
         * @param {Object} b
         * @return {undefined}
         */
        function f(self, b) {
            if ("function" != typeof b && null !== b) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof b);
            }
            /** @type {Object} */
            self.prototype = Object.create(b && b.prototype, {
                constructor: {
                    value: self,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (b) {
                if (Object.setPrototypeOf) {
                    Object.setPrototypeOf(self, b);
                } else {
                    /** @type {Object} */
                    self.__proto__ = b;
                }
            }
        }
        /**
         * @param {?} dataAndEvents
         * @param {Function} fun
         * @return {undefined}
         */
        function bind(dataAndEvents, fun) {
            if (!(dataAndEvents instanceof fun)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        /** @type {function (Object): ?} */
        var isObject = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (selector) {
            return typeof selector;
        } : function (selector) {
            return selector && ("function" == typeof Symbol && (selector.constructor === Symbol && selector !== Symbol.prototype)) ? "symbol" : typeof selector;
        };
        var b = function () {
            /**
             * @param {Function} proto
             * @param {Array} p
             * @return {undefined}
             */
            function defineProperty(proto, p) {
                /** @type {number} */
                var i = 0;
                for (; i < p.length; i++) {
                    var desc = p[i];
                    desc.enumerable = desc.enumerable || false;
                    /** @type {boolean} */
                    desc.configurable = true;
                    if ("value" in desc) {
                        /** @type {boolean} */
                        desc.writable = true;
                    }
                    Object.defineProperty(proto, desc.key, desc);
                }
            }
            return function (context, current, tag) {
                return current && defineProperty(context.prototype, current), tag && defineProperty(context, tag), context;
            };
        }();
        var that = function ($) {
            /**
             * @param {?} obj
             * @return {?}
             */
            function type(obj) {
                return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            }
            /**
             * @param {(Array|HTMLCollection|HTMLElement)} value
             * @return {?}
             */
            function isClassOf(value) {
                return (value[0] || value).nodeType;
            }
            /**
             * @return {?}
             */
            function middleware() {
                return {
                    bindType: config.end,
                    delegateType: config.end,
                    /**
                     * @param {Event} event
                     * @return {?}
                     */
                    handle: function (event) {
                        if ($(event.target).is(this)) {
                            return event.handleObj.handler.apply(this, arguments);
                        }
                    }
                };
            }
            /**
             * @return {?}
             */
            function transitionEnd() {
                if (window.QUnit) {
                    return false;
                }
                /** @type {Element} */
                var el = document.createElement("bootstrap");
                var name;
                for (name in transEndEventNames) {
                    if (void 0 !== el.style[name]) {
                        return {
                            end: transEndEventNames[name]
                        };
                    }
                }
                return false;
            }
            /**
             * @param {number} opt_attributes
             * @return {?}
             */
            function setup(opt_attributes) {
                var failuresLink = this;
                /** @type {boolean} */
                var i = false;
                return $(this).one(event.TRANSITION_END, function () {
                    /** @type {boolean} */
                    i = true;
                }), setTimeout(function () {
                    if (!i) {
                        event.triggerTransitionEnd(failuresLink);
                    }
                }, opt_attributes), this;
            }
            /** @type {boolean} */
            var config = false;
            var transEndEventNames = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            var event = {
                TRANSITION_END: "bsTransitionEnd",
                /**
                 * @param {number} id
                 * @return {?}
                 */
                getUID: function (id) {
                    do {
                        id += ~~(1E6 * Math.random());
                    } while (document.getElementById(id));
                    return id;
                },
                /**
                 * @param {Element} elem
                 * @return {?}
                 */
                getSelectorFromElement: function (elem) {
                    var selector = elem.getAttribute("data-target");
                    return selector || (selector = elem.getAttribute("href") || "", selector = /^#[a-z]/i.test(selector) ? selector : null), selector;
                },
                /**
                 * @param {Element} e
                 * @return {undefined}
                 */
                reflow: function (e) {
                    (new Function("bs", "return bs"))(e.offsetHeight);
                },
                /**
                 * @param {?} el
                 * @return {undefined}
                 */
                triggerTransitionEnd: function (el) {
                    $(el).trigger(config.end);
                },
                /**
                 * @return {?}
                 */
                supportsTransitionEnd: function () {
                    return Boolean(config);
                },
                /**
                 * @param {string} keepData
                 * @param {Object} protoProps
                 * @param {Object} messageFormat
                 * @return {undefined}
                 */
                typeCheckConfig: function (keepData, protoProps, messageFormat) {
                    var key;
                    for (key in messageFormat) {
                        if (messageFormat.hasOwnProperty(key)) {
                            var expected = messageFormat[key];
                            var value = protoProps[key];
                            var nType = void 0;
                            if (nType = value && isClassOf(value) ? "element" : type(value), !(new RegExp(expected)).test(nType)) {
                                throw new Error(keepData.toUpperCase() + ': Option "' + key + '" provided type "' + nType + '" but expected type "' + expected + '".');
                            }
                        }
                    }
                }
            };
            return function () {
                config = transitionEnd();
                /** @type {function (number): ?} */
                $.fn.emulateTransitionEnd = setup;
                if (event.supportsTransitionEnd()) {
                    $.event.special[event.TRANSITION_END] = middleware();
                }
            }(), event;
        }(jQuery);
        var item = (function ($) {
            /** @type {string} */
            var name = "alert";
            /** @type {string} */
            var key = "bs.alert";
            /** @type {string} */
            var ep = "." + key;
            var ref = $.fn[name];
            var binding = {
                DISMISS: '[data-dismiss="alert"]'
            };
            var events = {
                CLOSE: "close" + ep,
                CLOSED: "closed" + ep,
                CLICK_DATA_API: "click" + ep + ".data-api"
            };
            var node = {
                ALERT: "alert",
                FADE: "fade",
                IN: "in"
            };
            var Constructor = function () {
                /**
                 * @param {?} value
                 * @return {undefined}
                 */
                function self(value) {
                    bind(this, self);
                    this._element = value;
                }
                return self.prototype.close = function (context) {
                    context = context || this._element;
                    var event = this._getRootElement(context);
                    if (!this._triggerCloseEvent(event).isDefaultPrevented()) {
                        this._removeElement(event);
                    }
                }, self.prototype.dispose = function () {
                    $.removeData(this._element, key);
                    /** @type {null} */
                    this._element = null;
                }, self.prototype._getRootElement = function (element) {
                    var classes = that.getSelectorFromElement(element);
                    /** @type {boolean} */
                    var hasMembers = false;
                    return classes && (hasMembers = $(classes)[0]), hasMembers || (hasMembers = $(element).closest("." + node.ALERT)[0]), hasMembers;
                }, self.prototype._triggerCloseEvent = function (v) {
                    var rvar = $.Event(events.CLOSE);
                    return $(v).trigger(rvar), rvar;
                }, self.prototype._removeElement = function (item) {
                    return $(item).removeClass(node.IN), that.supportsTransitionEnd() && $(item).hasClass(node.FADE) ? void $(item).one(that.TRANSITION_END, $.proxy(this._destroyElement, this, item)).emulateTransitionEnd(150) : void this._destroyElement(item);
                }, self.prototype._destroyElement = function (item) {
                    $(item).detach().trigger(events.CLOSED).remove();
                }, self._jQueryInterface = function (timeoutKey) {
                    return this.each(function () {
                        var div = $(this);
                        var camelKey = div.data(key);
                        if (!camelKey) {
                            camelKey = new self(this);
                            div.data(key, camelKey);
                        }
                        if ("close" === timeoutKey) {
                            camelKey[timeoutKey](this);
                        }
                    });
                }, self._handleDismiss = function (gridStore) {
                    return function (types) {
                        if (types) {
                            types.preventDefault();
                        }
                        gridStore.close(this);
                    };
                }, b(self, null, [{
                    key: "VERSION",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "4.0.0-alpha.5";
                    }
                }]), self;
            }();
            $(document).on(events.CLICK_DATA_API, binding.DISMISS, Constructor._handleDismiss(new Constructor));
            $.fn[name] = Constructor._jQueryInterface;
            $.fn[name].Constructor = Constructor;
            /**
             * @return {?}
             */
            $.fn[name].noConflict = function () {
                return $.fn[name] = ref, Constructor._jQueryInterface;
            };
        }(jQuery), function ($) {
            /** @type {string} */
            var name = "button";
            /** @type {string} */
            var key = "bs.button";
            /** @type {string} */
            var NS = "." + key;
            /** @type {string} */
            var event_cleanup = ".data-api";
            var ref = $.fn[name];
            var CLASSES = {
                ACTIVE: "active",
                BUTTON: "btn",
                FOCUS: "focus"
            };
            var handleObj = {
                DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                DATA_TOGGLE: '[data-toggle="buttons"]',
                INPUT: "input",
                ACTIVE: ".active",
                BUTTON: ".btn"
            };
            var h = {
                CLICK_DATA_API: "click" + NS + event_cleanup,
                FOCUS_BLUR_DATA_API: "focus" + NS + event_cleanup + " blur" + NS + event_cleanup
            };
            var config = function () {
                /**
                 * @param {?} value
                 * @return {undefined}
                 */
                function self(value) {
                    bind(this, self);
                    this._element = value;
                }
                return self.prototype.toggle = function () {
                    /** @type {boolean} */
                    var e = true;
                    var sourceContainer = $(this._element).closest(handleObj.DATA_TOGGLE)[0];
                    if (sourceContainer) {
                        var elem = $(this._element).find(handleObj.INPUT)[0];
                        if (elem) {
                            if ("radio" === elem.type) {
                                if (elem.checked && $(this._element).hasClass(CLASSES.ACTIVE)) {
                                    /** @type {boolean} */
                                    e = false;
                                } else {
                                    var fromPage = $(sourceContainer).find(handleObj.ACTIVE)[0];
                                    if (fromPage) {
                                        $(fromPage).removeClass(CLASSES.ACTIVE);
                                    }
                                }
                            }
                            if (e) {
                                /** @type {boolean} */
                                elem.checked = !$(this._element).hasClass(CLASSES.ACTIVE);
                                $(this._element).trigger("change");
                            }
                            elem.focus();
                        }
                    } else {
                        this._element.setAttribute("aria-pressed", !$(this._element).hasClass(CLASSES.ACTIVE));
                    }
                    if (e) {
                        $(this._element).toggleClass(CLASSES.ACTIVE);
                    }
                }, self.prototype.dispose = function () {
                    $.removeData(this._element, key);
                    /** @type {null} */
                    this._element = null;
                }, self._jQueryInterface = function (action) {
                    return this.each(function () {
                        var camelKey = $(this).data(key);
                        if (!camelKey) {
                            camelKey = new self(this);
                            $(this).data(key, camelKey);
                        }
                        if ("toggle" === action) {
                            camelKey[action]();
                        }
                    });
                }, b(self, null, [{
                    key: "VERSION",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "4.0.0-alpha.5";
                    }
                }]), self;
            }();
            $(document).on(h.CLICK_DATA_API, handleObj.DATA_TOGGLE_CARROT, function (e) {
                e.preventDefault();
                var el = e.target;
                if (!$(el).hasClass(CLASSES.BUTTON)) {
                    el = $(el).closest(handleObj.BUTTON);
                }
                config._jQueryInterface.call($(el), "toggle");
            }).on(h.FOCUS_BLUR_DATA_API, handleObj.DATA_TOGGLE_CARROT, function (e) {
                var disclosure = $(e.target).closest(handleObj.BUTTON)[0];
                $(disclosure).toggleClass(CLASSES.FOCUS, /^focus(in)?$/.test(e.type));
            });
            $.fn[name] = config._jQueryInterface;
            $.fn[name].Constructor = config;
            /**
             * @return {?}
             */
            $.fn[name].noConflict = function () {
                return $.fn[name] = ref, config._jQueryInterface;
            };
        }(jQuery), function ($) {
            /** @type {string} */
            var name = "carousel";
            /** @type {string} */
            var key = "bs.carousel";
            /** @type {string} */
            var NS = "." + key;
            /** @type {string} */
            var event_cleanup = ".data-api";
            var ref = $.fn[name];
            var data = {
                interval: 5E3,
                keyboard: true,
                slide: false,
                pause: "hover",
                wrap: true
            };
            var message = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            };
            var IMESpecialKey = {
                NEXT: "next",
                PREVIOUS: "prev"
            };
            var obj = {
                SLIDE: "slide" + NS,
                SLID: "slid" + NS,
                KEYDOWN: "keydown" + NS,
                MOUSEENTER: "mouseenter" + NS,
                MOUSELEAVE: "mouseleave" + NS,
                LOAD_DATA_API: "load" + NS + event_cleanup,
                CLICK_DATA_API: "click" + NS + event_cleanup
            };
            var CLASS = {
                CAROUSEL: "carousel",
                ACTIVE: "active",
                SLIDE: "slide",
                RIGHT: "right",
                LEFT: "left",
                ITEM: "carousel-item"
            };
            var o = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".next, .prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            };
            var config = function () {
                /**
                 * @param {?} next
                 * @param {Object} count
                 * @return {undefined}
                 */
                function self(next, count) {
                    bind(this, self);
                    /** @type {null} */
                    this._items = null;
                    /** @type {null} */
                    this._interval = null;
                    /** @type {null} */
                    this._activeElement = null;
                    /** @type {boolean} */
                    this._isPaused = false;
                    /** @type {boolean} */
                    this._isSliding = false;
                    this._config = this._getConfig(count);
                    this._element = $(next)[0];
                    this._indicatorsElement = $(this._element).find(o.INDICATORS)[0];
                    this._addEventListeners();
                }
                return self.prototype.next = function () {
                    if (!this._isSliding) {
                        this._slide(IMESpecialKey.NEXT);
                    }
                }, self.prototype.nextWhenVisible = function () {
                    if (!document.hidden) {
                        this.next();
                    }
                }, self.prototype.prev = function () {
                    if (!this._isSliding) {
                        this._slide(IMESpecialKey.PREVIOUS);
                    }
                }, self.prototype.pause = function (name) {
                    if (!name) {
                        /** @type {boolean} */
                        this._isPaused = true;
                    }
                    if ($(this._element).find(o.NEXT_PREV)[0]) {
                        if (that.supportsTransitionEnd()) {
                            that.triggerTransitionEnd(this._element);
                            this.cycle(true);
                        }
                    }
                    clearInterval(this._interval);
                    /** @type {null} */
                    this._interval = null;
                }, self.prototype.cycle = function (dataAndEvents) {
                    if (!dataAndEvents) {
                        /** @type {boolean} */
                        this._isPaused = false;
                    }
                    if (this._interval) {
                        clearInterval(this._interval);
                        /** @type {null} */
                        this._interval = null;
                    }
                    if (this._config.interval) {
                        if (!this._isPaused) {
                            /** @type {number} */
                            this._interval = setInterval($.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval);
                        }
                    }
                }, self.prototype.to = function (pos) {
                    var that = this;
                    this._activeElement = $(this._element).find(o.ACTIVE_ITEM)[0];
                    var activePos = this._getItemIndex(this._activeElement);
                    if (!(pos > this._items.length - 1 || pos < 0)) {
                        if (this._isSliding) {
                            return void $(this._element).one(obj.SLID, function () {
                                return that.to(pos);
                            });
                        }
                        if (activePos === pos) {
                            return this.pause(), void this.cycle();
                        }
                        /** @type {string} */
                        var number = pos > activePos ? IMESpecialKey.NEXT : IMESpecialKey.PREVIOUS;
                        this._slide(number, this._items[pos]);
                    }
                }, self.prototype.dispose = function () {
                    $(this._element).off(NS);
                    $.removeData(this._element, key);
                    /** @type {null} */
                    this._items = null;
                    /** @type {null} */
                    this._config = null;
                    /** @type {null} */
                    this._element = null;
                    /** @type {null} */
                    this._interval = null;
                    /** @type {null} */
                    this._isPaused = null;
                    /** @type {null} */
                    this._isSliding = null;
                    /** @type {null} */
                    this._activeElement = null;
                    /** @type {null} */
                    this._indicatorsElement = null;
                }, self.prototype._getConfig = function (params) {
                    return params = $.extend({}, data, params), that.typeCheckConfig(name, params, message), params;
                }, self.prototype._addEventListeners = function () {
                    if (this._config.keyboard) {
                        $(this._element).on(obj.KEYDOWN, $.proxy(this._keydown, this));
                    }
                    if (!("hover" !== this._config.pause)) {
                        if (!("ontouchstart" in document.documentElement)) {
                            $(this._element).on(obj.MOUSEENTER, $.proxy(this.pause, this)).on(obj.MOUSELEAVE, $.proxy(this.cycle, this));
                        }
                    }
                }, self.prototype._keydown = function (e) {
                    if (e.preventDefault(), !/input|textarea/i.test(e.target.tagName)) {
                        switch (e.which) {
                            case 37:
                                this.prev();
                                break;
                            case 39:
                                this.next();
                                break;
                            default:
                                return;
                        }
                    }
                }, self.prototype._getItemIndex = function (item) {
                    return this._items = $.makeArray($(item).parent().find(o.ITEM)), this._items.indexOf(item);
                }, self.prototype._getItemByDirection = function (element, item) {
                    /** @type {boolean} */
                    var elementWasOpen = element === IMESpecialKey.NEXT;
                    /** @type {boolean} */
                    var all = element === IMESpecialKey.PREVIOUS;
                    var index = this._getItemIndex(item);
                    /** @type {number} */
                    var requestIndex = this._items.length - 1;
                    if ((all && 0 === index || elementWasOpen && index === requestIndex) && !this._config.wrap) {
                        return item;
                    }
                    /** @type {number} */
                    var count = element === IMESpecialKey.PREVIOUS ? -1 : 1;
                    /** @type {number} */
                    var i = (index + count) % this._items.length;
                    return -1 === i ? this._items[this._items.length - 1] : this._items[i];
                }, self.prototype._triggerSlideEvent = function (dataAndEvents, v02) {
                    var rvar = $.Event(obj.SLIDE, {
                        relatedTarget: dataAndEvents,
                        direction: v02
                    });
                    return $(this._element).trigger(rvar), rvar;
                }, self.prototype._setActiveIndicatorElement = function (item) {
                    if (this._indicatorsElement) {
                        $(this._indicatorsElement).find(o.ACTIVE).removeClass(CLASS.ACTIVE);
                        var reset = this._indicatorsElement.children[this._getItemIndex(item)];
                        if (reset) {
                            $(reset).addClass(CLASS.ACTIVE);
                        }
                    }
                }, self.prototype._slide = function (klass, opt_node) {
                    var self = this;
                    var item = $(this._element).find(o.ACTIVE_ITEM)[0];
                    var node = opt_node || item && this._getItemByDirection(klass, item);
                    /** @type {boolean} */
                    var has_search_bar = Boolean(this._interval);
                    /** @type {string} */
                    var a = klass === IMESpecialKey.NEXT ? CLASS.LEFT : CLASS.RIGHT;
                    if (node && $(node).hasClass(CLASS.ACTIVE)) {
                        return void (this._isSliding = false);
                    }
                    if (!this._triggerSlideEvent(node, a).isDefaultPrevented() && (item && node)) {
                        /** @type {boolean} */
                        this._isSliding = true;
                        if (has_search_bar) {
                            this.pause();
                        }
                        this._setActiveIndicatorElement(node);
                        var rvar = $.Event(obj.SLID, {
                            relatedTarget: node,
                            direction: a
                        });
                        if (that.supportsTransitionEnd() && $(this._element).hasClass(CLASS.SLIDE)) {
                            $(node).addClass(klass);
                            that.reflow(node);
                            $(item).addClass(a);
                            $(node).addClass(a);
                            $(item).one(that.TRANSITION_END, function () {
                                $(node).removeClass(a).removeClass(klass);
                                $(node).addClass(CLASS.ACTIVE);
                                $(item).removeClass(CLASS.ACTIVE).removeClass(klass).removeClass(a);
                                /** @type {boolean} */
                                self._isSliding = false;
                                setTimeout(function () {
                                    return $(self._element).trigger(rvar);
                                }, 0);
                            }).emulateTransitionEnd(600);
                        } else {
                            $(item).removeClass(CLASS.ACTIVE);
                            $(node).addClass(CLASS.ACTIVE);
                            /** @type {boolean} */
                            this._isSliding = false;
                            $(this._element).trigger(rvar);
                        }
                        if (has_search_bar) {
                            this.cycle();
                        }
                    }
                }, self._jQueryInterface = function (val) {
                    return this.each(function () {
                        var node = $(this).data(key);
                        var options = $.extend({}, data, $(this).data());
                        if ("object" === (void 0 === val ? "undefined" : isObject(val))) {
                            $.extend(options, val);
                        }
                        var method = "string" == typeof val ? val : options.slide;
                        if (node || (node = new self(this, options), $(this).data(key, node)), "number" == typeof val) {
                            node.to(val);
                        } else {
                            if ("string" == typeof method) {
                                if (void 0 === node[method]) {
                                    throw new Error('No method named "' + method + '"');
                                }
                                node[method]();
                            } else {
                                if (options.interval) {
                                    node.pause();
                                    node.cycle();
                                }
                            }
                        }
                    });
                }, self._dataApiClickHandler = function (types) {
                    var statsTemplate = that.getSelectorFromElement(this);
                    if (statsTemplate) {
                        var elem = $(statsTemplate)[0];
                        if (elem && $(elem).hasClass(CLASS.CAROUSEL)) {
                            var evt = $.extend({}, $(elem).data(), $(this).data());
                            var slideIndex = this.getAttribute("data-slide-to");
                            if (slideIndex) {
                                /** @type {boolean} */
                                evt.interval = false;
                            }
                            self._jQueryInterface.call($(elem), evt);
                            if (slideIndex) {
                                $(elem).data(key).to(slideIndex);
                            }
                            types.preventDefault();
                        }
                    }
                }, b(self, null, [{
                    key: "VERSION",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "4.0.0-alpha.5";
                    }
                }, {
                    key: "Default",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return data;
                    }
                }]), self;
            }();
            $(document).on(obj.CLICK_DATA_API, o.DATA_SLIDE, config._dataApiClickHandler);
            $(window).on(obj.LOAD_DATA_API, function () {
                $(o.DATA_RIDE).each(function () {
                    var $t = $(this);
                    config._jQueryInterface.call($t, $t.data());
                });
            });
            $.fn[name] = config._jQueryInterface;
            $.fn[name].Constructor = config;
            /**
             * @return {?}
             */
            $.fn[name].noConflict = function () {
                return $.fn[name] = ref, config._jQueryInterface;
            };
        }(jQuery), function ($) {
            /** @type {string} */
            var name = "collapse";
            /** @type {string} */
            var key = "bs.collapse";
            /** @type {string} */
            var evSuffix = "." + key;
            var ref = $.fn[name];
            var options = {
                toggle: true,
                parent: ""
            };
            var message = {
                toggle: "boolean",
                parent: "string"
            };
            var events = {
                SHOW: "show" + evSuffix,
                SHOWN: "shown" + evSuffix,
                HIDE: "hide" + evSuffix,
                HIDDEN: "hidden" + evSuffix,
                CLICK_DATA_API: "click" + evSuffix + ".data-api"
            };
            var c = {
                IN: "in",
                COLLAPSE: "collapse",
                COLLAPSING: "collapsing",
                COLLAPSED: "collapsed"
            };
            var settings = {
                WIDTH: "width",
                HEIGHT: "height"
            };
            var data = {
                ACTIVES: ".card > .in, .card > .collapsing",
                DATA_TOGGLE: '[data-toggle="collapse"]'
            };
            var config = function () {
                /**
                 * @param {HTMLElement} elem
                 * @param {Object} count
                 * @return {undefined}
                 */
                function parent(elem, count) {
                    bind(this, parent);
                    /** @type {boolean} */
                    this._isTransitioning = false;
                    /** @type {HTMLElement} */
                    this._element = elem;
                    this._config = this._getConfig(count);
                    this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + elem.id + '"],[data-toggle="collapse"][data-target="#' + elem.id + '"]'));
                    this._parent = this._config.parent ? this._getParent() : null;
                    if (!this._config.parent) {
                        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
                    }
                    if (this._config.toggle) {
                        this.toggle();
                    }
                }
                return parent.prototype.toggle = function () {
                    if ($(this._element).hasClass(c.IN)) {
                        this.hide();
                    } else {
                        this.show();
                    }
                }, parent.prototype.show = function () {
                    var self = this;
                    if (!this._isTransitioning && !$(this._element).hasClass(c.IN)) {
                        var elem = void 0;
                        var json = void 0;
                        if (this._parent && (elem = $.makeArray($(data.ACTIVES)), elem.length || (elem = null)), !(elem && ((json = $(elem).data(key)) && json._isTransitioning))) {
                            var rvar = $.Event(events.SHOW);
                            if ($(this._element).trigger(rvar), !rvar.isDefaultPrevented()) {
                                if (elem) {
                                    parent._jQueryInterface.call($(elem), "hide");
                                    if (!json) {
                                        $(elem).data(key, null);
                                    }
                                }
                                var prop = this._getDimension();
                                $(this._element).removeClass(c.COLLAPSE).addClass(c.COLLAPSING);
                                /** @type {number} */
                                this._element.style[prop] = 0;
                                this._element.setAttribute("aria-expanded", true);
                                if (this._triggerArray.length) {
                                    $(this._triggerArray).removeClass(c.COLLAPSED).attr("aria-expanded", true);
                                }
                                this.setTransitioning(true);
                                /**
                                 * @return {undefined}
                                 */
                                var complete = function () {
                                    $(self._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).addClass(c.IN);
                                    /** @type {string} */
                                    self._element.style[prop] = "";
                                    self.setTransitioning(false);
                                    $(self._element).trigger(events.SHOWN);
                                };
                                if (!that.supportsTransitionEnd()) {
                                    return void complete();
                                }
                                var name = prop[0].toUpperCase() + prop.slice(1);
                                /** @type {string} */
                                var scrollProp = "scroll" + name;
                                $(this._element).one(that.TRANSITION_END, complete).emulateTransitionEnd(600);
                                this._element.style[prop] = this._element[scrollProp] + "px";
                            }
                        }
                    }
                }, parent.prototype.hide = function () {
                    var self = this;
                    if (!this._isTransitioning && $(this._element).hasClass(c.IN)) {
                        var rvar = $.Event(events.HIDE);
                        if ($(this._element).trigger(rvar), !rvar.isDefaultPrevented()) {
                            var i = this._getDimension();
                            /** @type {string} */
                            var dim = i === settings.WIDTH ? "offsetWidth" : "offsetHeight";
                            this._element.style[i] = this._element[dim] + "px";
                            that.reflow(this._element);
                            $(this._element).addClass(c.COLLAPSING).removeClass(c.COLLAPSE).removeClass(c.IN);
                            this._element.setAttribute("aria-expanded", false);
                            if (this._triggerArray.length) {
                                $(this._triggerArray).addClass(c.COLLAPSED).attr("aria-expanded", false);
                            }
                            this.setTransitioning(true);
                            /**
                             * @return {undefined}
                             */
                            var complete = function () {
                                self.setTransitioning(false);
                                $(self._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).trigger(events.HIDDEN);
                            };
                            return this._element.style[i] = "", that.supportsTransitionEnd() ? void $(this._element).one(that.TRANSITION_END, complete).emulateTransitionEnd(600) : void complete();
                        }
                    }
                }, parent.prototype.setTransitioning = function (recurring) {
                    /** @type {boolean} */
                    this._isTransitioning = recurring;
                }, parent.prototype.dispose = function () {
                    $.removeData(this._element, key);
                    /** @type {null} */
                    this._config = null;
                    /** @type {null} */
                    this._parent = null;
                    /** @type {null} */
                    this._element = null;
                    /** @type {null} */
                    this._triggerArray = null;
                    /** @type {null} */
                    this._isTransitioning = null;
                }, parent.prototype._getConfig = function (params) {
                    return params = $.extend({}, options, params), params.toggle = Boolean(params.toggle), that.typeCheckConfig(name, params, message), params;
                }, parent.prototype._getDimension = function () {
                    return $(this._element).hasClass(settings.WIDTH) ? settings.WIDTH : settings.HEIGHT;
                }, parent.prototype._getParent = function () {
                    var el = this;
                    var sourceContainer = $(this._config.parent)[0];
                    /** @type {string} */
                    var sel = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return $(sourceContainer).find(sel).each(function (dataAndEvents, child) {
                        el._addAriaAndCollapsedClass(parent._getTargetFromElement(child), [child]);
                    }), sourceContainer;
                }, parent.prototype._addAriaAndCollapsedClass = function (tab, toggle) {
                    if (tab) {
                        var val = $(tab).hasClass(c.IN);
                        tab.setAttribute("aria-expanded", val);
                        if (toggle.length) {
                            $(toggle).toggleClass(c.COLLAPSED, !val).attr("aria-expanded", val);
                        }
                    }
                }, parent._getTargetFromElement = function (key) {
                    var camelKey = that.getSelectorFromElement(key);
                    return camelKey ? $(camelKey)[0] : null;
                }, parent._jQueryInterface = function (option) {
                    return this.each(function () {
                        var handle = $(this);
                        var data = handle.data(key);
                        var opts = $.extend({}, options, handle.data(), "object" === (void 0 === option ? "undefined" : isObject(option)) && option);
                        if (!data && (opts.toggle && (/show|hide/.test(option) && (opts.toggle = false))), data || (data = new parent(this, opts), handle.data(key, data)), "string" == typeof option) {
                            if (void 0 === data[option]) {
                                throw new Error('No method named "' + option + '"');
                            }
                            data[option]();
                        }
                    });
                }, b(parent, null, [{
                    key: "VERSION",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "4.0.0-alpha.5";
                    }
                }, {
                    key: "Default",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return options;
                    }
                }]), parent;
            }();
            $(document).on(events.CLICK_DATA_API, data.DATA_TOGGLE, function (types) {
                types.preventDefault();
                var elem = config._getTargetFromElement(this);
                var data = $(elem).data(key);
                var option = data ? "toggle" : $(this).data();
                config._jQueryInterface.call($(elem), option);
            });
            $.fn[name] = config._jQueryInterface;
            $.fn[name].Constructor = config;
            /**
             * @return {?}
             */
            $.fn[name].noConflict = function () {
                return $.fn[name] = ref, config._jQueryInterface;
            };
        }(jQuery), function ($) {
            /** @type {string} */
            var name = "dropdown";
            /** @type {string} */
            var key = "bs.dropdown";
            /** @type {string} */
            var eventNamespace = "." + key;
            /** @type {string} */
            var keypress = ".data-api";
            var ref = $.fn[name];
            var events = {
                HIDE: "hide" + eventNamespace,
                HIDDEN: "hidden" + eventNamespace,
                SHOW: "show" + eventNamespace,
                SHOWN: "shown" + eventNamespace,
                CLICK: "click" + eventNamespace,
                CLICK_DATA_API: "click" + eventNamespace + keypress,
                KEYDOWN_DATA_API: "keydown" + eventNamespace + keypress
            };
            var c = {
                BACKDROP: "dropdown-backdrop",
                DISABLED: "disabled",
                OPEN: "open"
            };
            var o = {
                BACKDROP: ".dropdown-backdrop",
                DATA_TOGGLE: '[data-toggle="dropdown"]',
                FORM_CHILD: ".dropdown form",
                ROLE_MENU: '[role="menu"]',
                ROLE_LISTBOX: '[role="listbox"]',
                NAVBAR_NAV: ".navbar-nav",
                VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
            };
            var module = function () {
                /**
                 * @param {string} value
                 * @return {undefined}
                 */
                function self(value) {
                    bind(this, self);
                    /** @type {string} */
                    this._element = value;
                    this._addEventListeners();
                }
                return self.prototype.toggle = function () {
                    if (this.disabled || $(this).hasClass(c.DISABLED)) {
                        return false;
                    }
                    var el = self._getParentFromElement(this);
                    var i = $(el).hasClass(c.OPEN);
                    if (self._clearMenus(), i) {
                        return false;
                    }
                    if ("ontouchstart" in document.documentElement && !$(el).closest(o.NAVBAR_NAV).length) {
                        /** @type {Element} */
                        var template = document.createElement("div");
                        /** @type {string} */
                        template.className = c.BACKDROP;
                        $(template).insertBefore(this);
                        $(template).on("click", self._clearMenus);
                    }
                    var evtOptions = {
                        relatedTarget: this
                    };
                    var rvar = $.Event(events.SHOW, evtOptions);
                    return $(el).trigger(rvar), !rvar.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), $(el).toggleClass(c.OPEN), $(el).trigger($.Event(events.SHOWN, evtOptions)), false);
                }, self.prototype.dispose = function () {
                    $.removeData(this._element, key);
                    $(this._element).off(eventNamespace);
                    /** @type {null} */
                    this._element = null;
                }, self.prototype._addEventListeners = function () {
                    $(this._element).on(events.CLICK, this.toggle);
                }, self._jQueryInterface = function (type) {
                    return this.each(function () {
                        var data = $(this).data(key);
                        if (data || $(this).data(key, data = new self(this)), "string" == typeof type) {
                            if (void 0 === data[type]) {
                                throw new Error('No method named "' + type + '"');
                            }
                            data[type].call(this);
                        }
                    });
                }, self._clearMenus = function (e) {
                    if (!e || 3 !== e.which) {
                        var tabPage = $(o.BACKDROP)[0];
                        if (tabPage) {
                            tabPage.parentNode.removeChild(tabPage);
                        }
                        var codeSegments = $.makeArray($(o.DATA_TOGGLE));
                        /** @type {number} */
                        var i = 0;
                        for (; i < codeSegments.length; i++) {
                            var target = self._getParentFromElement(codeSegments[i]);
                            var evtOptions = {
                                relatedTarget: codeSegments[i]
                            };
                            if ($(target).hasClass(c.OPEN) && !(e && ("click" === e.type && (/input|textarea/i.test(e.target.tagName) && $.contains(target, e.target))))) {
                                var rvar = $.Event(events.HIDE, evtOptions);
                                $(target).trigger(rvar);
                                if (!rvar.isDefaultPrevented()) {
                                    codeSegments[i].setAttribute("aria-expanded", "false");
                                    $(target).removeClass(c.OPEN).trigger($.Event(events.HIDDEN, evtOptions));
                                }
                            }
                        }
                    }
                }, self._getParentFromElement = function (target) {
                    var element = void 0;
                    var targets = that.getSelectorFromElement(target);
                    return targets && (element = $(targets)[0]), element || target.parentNode;
                }, self._dataApiKeydownHandler = function (e) {
                    if (/(38|40|27|32)/.test(e.which) && (!/input|textarea/i.test(e.target.tagName) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !$(this).hasClass(c.DISABLED)))) {
                        var step = self._getParentFromElement(this);
                        var r = $(step).hasClass(c.OPEN);
                        if (!r && 27 !== e.which || r && 27 === e.which) {
                            if (27 === e.which) {
                                var $el = $(step).find(o.DATA_TOGGLE)[0];
                                $($el).trigger("focus");
                            }
                            return void $(this).trigger("click");
                        }
                        var target = $.makeArray($(o.VISIBLE_ITEMS));
                        if (target = target.filter(function (el) {
                          return el.offsetWidth || el.offsetHeight;
                        }), target.length) {
                            var l = target.indexOf(e.target);
                            if (38 === e.which) {
                                if (l > 0) {
                                    l--;
                                }
                            }
                            if (40 === e.which) {
                                if (l < target.length - 1) {
                                    l++;
                                }
                            }
                            if (l < 0) {
                                /** @type {number} */
                                l = 0;
                            }
                            target[l].focus();
                        }
                    }
                }, b(self, null, [{
                    key: "VERSION",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "4.0.0-alpha.5";
                    }
                }]), self;
            }();
            $(document).on(events.KEYDOWN_DATA_API, o.DATA_TOGGLE, module._dataApiKeydownHandler).on(events.KEYDOWN_DATA_API, o.ROLE_MENU, module._dataApiKeydownHandler).on(events.KEYDOWN_DATA_API, o.ROLE_LISTBOX, module._dataApiKeydownHandler).on(events.CLICK_DATA_API, module._clearMenus).on(events.CLICK_DATA_API, o.DATA_TOGGLE, module.prototype.toggle).on(events.CLICK_DATA_API, o.FORM_CHILD, function (event) {
                event.stopPropagation();
            });
            $.fn[name] = module._jQueryInterface;
            $.fn[name].Constructor = module;
            /**
             * @return {?}
             */
            $.fn[name].noConflict = function () {
                return $.fn[name] = ref, module._jQueryInterface;
            };
        }(jQuery), function ($) {
            /** @type {string} */
            var name = "modal";
            /** @type {string} */
            var key = "bs.modal";
            /** @type {string} */
            var NS = "." + key;
            var ref = $.fn[name];
            var defaults = {
                backdrop: true,
                keyboard: true,
                focus: true,
                show: true
            };
            var message = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            };
            var event = {
                HIDE: "hide" + NS,
                HIDDEN: "hidden" + NS,
                SHOW: "show" + NS,
                SHOWN: "shown" + NS,
                FOCUSIN: "focusin" + NS,
                RESIZE: "resize" + NS,
                CLICK_DISMISS: "click.dismiss" + NS,
                KEYDOWN_DISMISS: "keydown.dismiss" + NS,
                MOUSEUP_DISMISS: "mouseup.dismiss" + NS,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + NS,
                CLICK_DATA_API: "click" + NS + ".data-api"
            };
            var node = {
                SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                BACKDROP: "modal-backdrop",
                OPEN: "modal-open",
                FADE: "fade",
                IN: "in"
            };
            var o = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
            };
            var config = function () {
                /**
                 * @param {?} element
                 * @param {Object} count
                 * @return {undefined}
                 */
                function self(element, count) {
                    bind(this, self);
                    this._config = this._getConfig(count);
                    this._element = element;
                    this._dialog = $(element).find(o.DIALOG)[0];
                    /** @type {null} */
                    this._backdrop = null;
                    /** @type {boolean} */
                    this._isShown = false;
                    /** @type {boolean} */
                    this._isBodyOverflowing = false;
                    /** @type {boolean} */
                    this._ignoreBackdropClick = false;
                    /** @type {number} */
                    this._originalBodyPadding = 0;
                    /** @type {number} */
                    this._scrollbarWidth = 0;
                }
                return self.prototype.toggle = function (datum) {
                    return this._isShown ? this.hide() : this.show(datum);
                }, self.prototype.show = function (e) {
                    var self = this;
                    var rvar = $.Event(event.SHOW, {
                        /** @type {Function} */
                        relatedTarget: e
                    });
                    $(this._element).trigger(rvar);
                    if (!this._isShown) {
                        if (!rvar.isDefaultPrevented()) {
                            /** @type {boolean} */
                            this._isShown = true;
                            this._checkScrollbar();
                            this._setScrollbar();
                            $(document.body).addClass(node.OPEN);
                            this._setEscapeEvent();
                            this._setResizeEvent();
                            $(this._element).on(event.CLICK_DISMISS, o.DATA_DISMISS, $.proxy(this.hide, this));
                            $(this._dialog).on(event.MOUSEDOWN_DISMISS, function () {
                                $(self._element).one(event.MOUSEUP_DISMISS, function (ev) {
                                    if ($(ev.target).is(self._element)) {
                                        /** @type {boolean} */
                                        self._ignoreBackdropClick = true;
                                    }
                                });
                            });
                            this._showBackdrop($.proxy(this._showElement, this, e));
                        }
                    }
                }, self.prototype.hide = function (e) {
                    if (e) {
                        e.preventDefault();
                    }
                    var rvar = $.Event(event.HIDE);
                    $(this._element).trigger(rvar);
                    if (this._isShown) {
                        if (!rvar.isDefaultPrevented()) {
                            /** @type {boolean} */
                            this._isShown = false;
                            this._setEscapeEvent();
                            this._setResizeEvent();
                            $(document).off(event.FOCUSIN);
                            $(this._element).removeClass(node.IN);
                            $(this._element).off(event.CLICK_DISMISS);
                            $(this._dialog).off(event.MOUSEDOWN_DISMISS);
                            if (that.supportsTransitionEnd() && $(this._element).hasClass(node.FADE)) {
                                $(this._element).one(that.TRANSITION_END, $.proxy(this._hideModal, this)).emulateTransitionEnd(300);
                            } else {
                                this._hideModal();
                            }
                        }
                    }
                }, self.prototype.dispose = function () {
                    $.removeData(this._element, key);
                    $(window).off(NS);
                    $(document).off(NS);
                    $(this._element).off(NS);
                    $(this._backdrop).off(NS);
                    /** @type {null} */
                    this._config = null;
                    /** @type {null} */
                    this._element = null;
                    /** @type {null} */
                    this._dialog = null;
                    /** @type {null} */
                    this._backdrop = null;
                    /** @type {null} */
                    this._isShown = null;
                    /** @type {null} */
                    this._isBodyOverflowing = null;
                    /** @type {null} */
                    this._ignoreBackdropClick = null;
                    /** @type {null} */
                    this._originalBodyPadding = null;
                    /** @type {null} */
                    this._scrollbarWidth = null;
                }, self.prototype._getConfig = function (params) {
                    return params = $.extend({}, defaults, params), that.typeCheckConfig(name, params, message), params;
                }, self.prototype._showElement = function (previous) {
                    var self = this;
                    var i = that.supportsTransitionEnd() && $(this._element).hasClass(node.FADE);
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE)) {
                        document.body.appendChild(this._element);
                    }
                    /** @type {string} */
                    this._element.style.display = "block";
                    this._element.removeAttribute("aria-hidden");
                    /** @type {number} */
                    this._element.scrollTop = 0;
                    if (i) {
                        that.reflow(this._element);
                    }
                    $(this._element).addClass(node.IN);
                    if (this._config.focus) {
                        this._enforceFocus();
                    }
                    var rvar = $.Event(event.SHOWN, {
                        relatedTarget: previous
                    });
                    /**
                     * @return {undefined}
                     */
                    var complete = function () {
                        if (self._config.focus) {
                            self._element.focus();
                        }
                        $(self._element).trigger(rvar);
                    };
                    if (i) {
                        $(this._dialog).one(that.TRANSITION_END, complete).emulateTransitionEnd(300);
                    } else {
                        complete();
                    }
                }, self.prototype._enforceFocus = function () {
                    var item = this;
                    $(document).off(event.FOCUSIN).on(event.FOCUSIN, function (e) {
                        if (!(document === e.target)) {
                            if (!(item._element === e.target)) {
                                if (!$(item._element).has(e.target).length) {
                                    item._element.focus();
                                }
                            }
                        }
                    });
                }, self.prototype._setEscapeEvent = function () {
                    var poster = this;
                    if (this._isShown && this._config.keyboard) {
                        $(this._element).on(event.KEYDOWN_DISMISS, function (event) {
                            if (27 === event.which) {
                                poster.hide();
                            }
                        });
                    } else {
                        if (!this._isShown) {
                            $(this._element).off(event.KEYDOWN_DISMISS);
                        }
                    }
                }, self.prototype._setResizeEvent = function () {
                    if (this._isShown) {
                        $(window).on(event.RESIZE, $.proxy(this._handleUpdate, this));
                    } else {
                        $(window).off(event.RESIZE);
                    }
                }, self.prototype._hideModal = function () {
                    var self = this;
                    /** @type {string} */
                    this._element.style.display = "none";
                    this._element.setAttribute("aria-hidden", "true");
                    this._showBackdrop(function () {
                        $(document.body).removeClass(node.OPEN);
                        self._resetAdjustments();
                        self._resetScrollbar();
                        $(self._element).trigger(event.HIDDEN);
                    });
                }, self.prototype._removeBackdrop = function () {
                    if (this._backdrop) {
                        $(this._backdrop).remove();
                        /** @type {null} */
                        this._backdrop = null;
                    }
                }, self.prototype._showBackdrop = function (next) {
                    var self = this;
                    /** @type {string} */
                    var a = $(this._element).hasClass(node.FADE) ? node.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        var cur = that.supportsTransitionEnd() && a;
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = node.BACKDROP, a && $(this._backdrop).addClass(a), $(this._backdrop).appendTo(document.body), $(this._element).on(event.CLICK_DISMISS, function (e) {
                          return self._ignoreBackdropClick ? void (self._ignoreBackdropClick = false) : void (e.target === e.currentTarget && ("static" === self._config.backdrop ? self._element.focus() : self.hide()));
                        }), cur && that.reflow(this._backdrop), $(this._backdrop).addClass(node.IN), !next) {
                            return;
                        }
                        if (!cur) {
                            return void next();
                        }
                        $(this._backdrop).one(that.TRANSITION_END, next).emulateTransitionEnd(150);
                    } else {
                        if (!this._isShown && this._backdrop) {
                            $(this._backdrop).removeClass(node.IN);
                            /**
                             * @return {undefined}
                             */
                            var complete = function () {
                                self._removeBackdrop();
                                if (next) {
                                    next();
                                }
                            };
                            if (that.supportsTransitionEnd() && $(this._element).hasClass(node.FADE)) {
                                $(this._backdrop).one(that.TRANSITION_END, complete).emulateTransitionEnd(150);
                            } else {
                                complete();
                            }
                        } else {
                            if (next) {
                                next();
                            }
                        }
                    }
                }, self.prototype._handleUpdate = function () {
                    this._adjustDialog();
                }, self.prototype._adjustDialog = function () {
                    /** @type {boolean} */
                    var t = this._element.scrollHeight > document.documentElement.clientHeight;
                    if (!this._isBodyOverflowing) {
                        if (t) {
                            /** @type {string} */
                            this._element.style.paddingLeft = this._scrollbarWidth + "px";
                        }
                    }
                    if (this._isBodyOverflowing) {
                        if (!t) {
                            /** @type {string} */
                            this._element.style.paddingRight = this._scrollbarWidth + "px";
                        }
                    }
                }, self.prototype._resetAdjustments = function () {
                    /** @type {string} */
                    this._element.style.paddingLeft = "";
                    /** @type {string} */
                    this._element.style.paddingRight = "";
                }, self.prototype._checkScrollbar = function () {
                    /** @type {boolean} */
                    this._isBodyOverflowing = document.body.clientWidth < window.innerWidth;
                    this._scrollbarWidth = this._getScrollbarWidth();
                }, self.prototype._setScrollbar = function () {
                    /** @type {number} */
                    var maxWidth = parseInt($(o.FIXED_CONTENT).css("padding-right") || 0, 10);
                    /** @type {(number|string)} */
                    this._originalBodyPadding = document.body.style.paddingRight || "";
                    if (this._isBodyOverflowing) {
                        /** @type {string} */
                        document.body.style.paddingRight = maxWidth + this._scrollbarWidth + "px";
                    }
                }, self.prototype._resetScrollbar = function () {
                    document.body.style.paddingRight = this._originalBodyPadding;
                }, self.prototype._getScrollbarWidth = function () {
                    /** @type {Element} */
                    var n = document.createElement("div");
                    /** @type {string} */
                    n.className = node.SCROLLBAR_MEASURER;
                    document.body.appendChild(n);
                    /** @type {number} */
                    var e = n.offsetWidth - n.clientWidth;
                    return document.body.removeChild(n), e;
                }, self._jQueryInterface = function (option, datum) {
                    return this.each(function () {
                        var data = $(this).data(key);
                        var options = $.extend({}, self.Default, $(this).data(), "object" === (void 0 === option ? "undefined" : isObject(option)) && option);
                        if (data || (data = new self(this, options), $(this).data(key, data)), "string" == typeof option) {
                            if (void 0 === data[option]) {
                                throw new Error('No method named "' + option + '"');
                            }
                            data[option](datum);
                        } else {
                            if (options.show) {
                                data.show(datum);
                            }
                        }
                    });
                }, b(self, null, [{
                    key: "VERSION",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "4.0.0-alpha.5";
                    }
                }, {
                    key: "Default",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return defaults;
                    }
                }]), self;
            }();
            $(document).on(event.CLICK_DATA_API, o.DATA_TOGGLE, function (types) {
                var targetElement = this;
                var elem = void 0;
                var statsTemplate = that.getSelectorFromElement(this);
                if (statsTemplate) {
                    elem = $(statsTemplate)[0];
                }
                var option = $(elem).data(key) ? "toggle" : $.extend({}, $(elem).data(), $(this).data());
                if ("A" === this.tagName) {
                    types.preventDefault();
                }
                var el = $(elem).one(event.SHOW, function (evt) {
                    if (!evt.isDefaultPrevented()) {
                        el.one(event.HIDDEN, function () {
                            if ($(targetElement).is(":visible")) {
                                targetElement.focus();
                            }
                        });
                    }
                });
                config._jQueryInterface.call($(elem), option, this);
            });
            $.fn[name] = config._jQueryInterface;
            $.fn[name].Constructor = config;
            /**
             * @return {?}
             */
            $.fn[name].noConflict = function () {
                return $.fn[name] = ref, config._jQueryInterface;
            };
        }(jQuery), function ($) {
            /** @type {string} */
            var name = "scrollspy";
            /** @type {string} */
            var key = "bs.scrollspy";
            /** @type {string} */
            var NS = "." + key;
            var ref = $.fn[name];
            var defaults = {
                offset: 10,
                method: "auto",
                target: ""
            };
            var message = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            };
            var self = {
                ACTIVATE: "activate" + NS,
                SCROLL: "scroll" + NS,
                LOAD_DATA_API: "load" + NS + ".data-api"
            };
            var CLASS = {
                DROPDOWN_ITEM: "dropdown-item",
                DROPDOWN_MENU: "dropdown-menu",
                NAV_LINK: "nav-link",
                NAV: "nav",
                ACTIVE: "active"
            };
            var o = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                LIST_ITEM: ".list-item",
                LI: "li",
                LI_DROPDOWN: "li.dropdown",
                NAV_LINKS: ".nav-link",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            };
            var gl = {
                OFFSET: "offset",
                POSITION: "position"
            };
            var config = function () {
                /**
                 * @param {HTMLElement} node
                 * @param {Object} count
                 * @return {undefined}
                 */
                function cb(node, count) {
                    bind(this, cb);
                    /** @type {HTMLElement} */
                    this._element = node;
                    this._scrollElement = "BODY" === node.tagName ? window : node;
                    this._config = this._getConfig(count);
                    /** @type {string} */
                    this._selector = this._config.target + " " + o.NAV_LINKS + "," + this._config.target + " " + o.DROPDOWN_ITEMS;
                    /** @type {Array} */
                    this._offsets = [];
                    /** @type {Array} */
                    this._targets = [];
                    /** @type {null} */
                    this._activeTarget = null;
                    /** @type {number} */
                    this._scrollHeight = 0;
                    $(this._scrollElement).on(self.SCROLL, $.proxy(this._process, this));
                    this.refresh();
                    this._process();
                }
                return cb.prototype.refresh = function () {
                    var p = this;
                    /** @type {string} */
                    var type_ = this._scrollElement !== this._scrollElement.window ? gl.POSITION : gl.OFFSET;
                    var type = "auto" === this._config.method ? type_ : this._config.method;
                    var nub_height = type === gl.POSITION ? this._getScrollTop() : 0;
                    /** @type {Array} */
                    this._offsets = [];
                    /** @type {Array} */
                    this._targets = [];
                    this._scrollHeight = this._getScrollHeight();
                    $.makeArray($(this._selector)).map(function (key) {
                        var el = void 0;
                        var camelKey = that.getSelectorFromElement(key);
                        return camelKey && (el = $(camelKey)[0]), el && (el.offsetWidth || el.offsetHeight) ? [$(el)[type]().top + nub_height, camelKey] : null;
                    }).filter(function (results) {
                        return results;
                    }).sort(function (mat0, mat1) {
                        return mat0[0] - mat1[0];
                    }).forEach(function (tail) {
                        p._offsets.push(tail[0]);
                        p._targets.push(tail[1]);
                    });
                }, cb.prototype.dispose = function () {
                    $.removeData(this._element, key);
                    $(this._scrollElement).off(NS);
                    /** @type {null} */
                    this._element = null;
                    /** @type {null} */
                    this._scrollElement = null;
                    /** @type {null} */
                    this._config = null;
                    /** @type {null} */
                    this._selector = null;
                    /** @type {null} */
                    this._offsets = null;
                    /** @type {null} */
                    this._targets = null;
                    /** @type {null} */
                    this._activeTarget = null;
                    /** @type {null} */
                    this._scrollHeight = null;
                }, cb.prototype._getConfig = function (params) {
                    if (params = $.extend({}, defaults, params), "string" != typeof params.target) {
                        var r = $(params.target).attr("id");
                        if (!r) {
                            r = that.getUID(name);
                            $(params.target).attr("id", r);
                        }
                        /** @type {string} */
                        params.target = "#" + r;
                    }
                    return that.typeCheckConfig(name, params, message), params;
                }, cb.prototype._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop;
                }, cb.prototype._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                }, cb.prototype._process = function () {
                    var index = this._getScrollTop() + this._config.offset;
                    var n = this._getScrollHeight();
                    /** @type {number} */
                    var inputLength = this._config.offset + n - this._scrollElement.offsetHeight;
                    if (this._scrollHeight !== n && this.refresh(), index >= inputLength) {
                        var previous = this._targets[this._targets.length - 1];
                        if (this._activeTarget !== previous) {
                            this._activate(previous);
                        }
                    }
                    if (this._activeTarget && index < this._offsets[0]) {
                        return this._activeTarget = null, void this._clear();
                    }
                    var i = this._offsets.length;
                    for (; i--;) {
                        if (this._activeTarget !== this._targets[i]) {
                            if (index >= this._offsets[i]) {
                                if (void 0 === this._offsets[i + 1] || index < this._offsets[i + 1]) {
                                    this._activate(this._targets[i]);
                                }
                            }
                        }
                    }
                }, cb.prototype._activate = function (previous) {
                    /** @type {string} */
                    this._activeTarget = previous;
                    this._clear();
                    var paths = this._selector.split(",");
                    paths = paths.map(function (dataAndEvents) {
                        return dataAndEvents + '[data-target="' + previous + '"],' + dataAndEvents + '[href="' + previous + '"]';
                    });
                    var current = $(paths.join(","));
                    if (current.hasClass(CLASS.DROPDOWN_ITEM)) {
                        current.closest(o.DROPDOWN).find(o.DROPDOWN_TOGGLE).addClass(CLASS.ACTIVE);
                        current.addClass(CLASS.ACTIVE);
                    } else {
                        current.parents(o.LI).find(o.NAV_LINKS).addClass(CLASS.ACTIVE);
                    }
                    $(this._scrollElement).trigger(self.ACTIVATE, {
                        relatedTarget: previous
                    });
                }, cb.prototype._clear = function () {
                    $(this._selector).filter(o.ACTIVE).removeClass(CLASS.ACTIVE);
                }, cb._jQueryInterface = function (selector) {
                    return this.each(function () {
                        var camelKey = $(this).data(key);
                        var r = "object" === (void 0 === selector ? "undefined" : isObject(selector)) && selector || null;
                        if (camelKey || (camelKey = new cb(this, r), $(this).data(key, camelKey)), "string" == typeof selector) {
                            if (void 0 === camelKey[selector]) {
                                throw new Error('No method named "' + selector + '"');
                            }
                            camelKey[selector]();
                        }
                    });
                }, b(cb, null, [{
                    key: "VERSION",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "4.0.0-alpha.5";
                    }
                }, {
                    key: "Default",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return defaults;
                    }
                }]), cb;
            }();
            $(window).on(self.LOAD_DATA_API, function () {
                var tags = $.makeArray($(o.DATA_SPY));
                var index = tags.length;
                for (; index--;) {
                    var $t = $(tags[index]);
                    config._jQueryInterface.call($t, $t.data());
                }
            });
            $.fn[name] = config._jQueryInterface;
            $.fn[name].Constructor = config;
            /**
             * @return {?}
             */
            $.fn[name].noConflict = function () {
                return $.fn[name] = ref, config._jQueryInterface;
            };
        }(jQuery), function ($) {
            /** @type {string} */
            var name = "tab";
            /** @type {string} */
            var node = "bs.tab";
            /** @type {string} */
            var evSuffix = "." + node;
            var ref = $.fn[name];
            var events = {
                HIDE: "hide" + evSuffix,
                HIDDEN: "hidden" + evSuffix,
                SHOW: "show" + evSuffix,
                SHOWN: "shown" + evSuffix,
                CLICK_DATA_API: "click" + evSuffix + ".data-api"
            };
            var CLASS = {
                DROPDOWN_MENU: "dropdown-menu",
                ACTIVE: "active",
                FADE: "fade",
                IN: "in"
            };
            var obj = {
                A: "a",
                LI: "li",
                DROPDOWN: ".dropdown",
                UL: "ul:not(.dropdown-menu)",
                FADE_CHILD: "> .nav-item .fade, > .fade",
                ACTIVE: ".active",
                ACTIVE_CHILD: "> .nav-item > .active, > .active",
                DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                DROPDOWN_TOGGLE: ".dropdown-toggle",
                DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
            };
            var config = function () {
                /**
                 * @param {?} value
                 * @return {undefined}
                 */
                function self(value) {
                    bind(this, self);
                    this._element = value;
                }
                return self.prototype.show = function () {
                    var self = this;
                    if (!this._element.parentNode || (this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !$(this._element).hasClass(CLASS.ACTIVE))) {
                        var view = void 0;
                        var previous = void 0;
                        var sourceContainer = $(this._element).closest(obj.UL)[0];
                        var point = that.getSelectorFromElement(this._element);
                        if (sourceContainer) {
                            previous = $.makeArray($(sourceContainer).find(obj.ACTIVE));
                            previous = previous[previous.length - 1];
                        }
                        var rvar = $.Event(events.HIDE, {
                            relatedTarget: this._element
                        });
                        var optgroup = $.Event(events.SHOW, {
                            relatedTarget: previous
                        });
                        if (previous && $(previous).trigger(rvar), $(this._element).trigger(optgroup), !optgroup.isDefaultPrevented() && !rvar.isDefaultPrevented()) {
                            if (point) {
                                view = $(point)[0];
                            }
                            this._activate(this._element, sourceContainer);
                            /**
                             * @return {undefined}
                             */
                            var show = function () {
                                var rvar = $.Event(events.HIDDEN, {
                                    relatedTarget: self._element
                                });
                                var optgroup = $.Event(events.SHOWN, {
                                    relatedTarget: previous
                                });
                                $(previous).trigger(rvar);
                                $(self._element).trigger(optgroup);
                            };
                            if (view) {
                                this._activate(view, view.parentNode, show);
                            } else {
                                show();
                            }
                        }
                    }
                }, self.prototype.dispose = function () {
                    $.removeClass(this._element, node);
                    /** @type {null} */
                    this._element = null;
                }, self.prototype._activate = function (item, sourceContainer, event) {
                    var v = $(sourceContainer).find(obj.ACTIVE_CHILD)[0];
                    var inflight = event && (that.supportsTransitionEnd() && (v && $(v).hasClass(CLASS.FADE) || Boolean($(sourceContainer).find(obj.FADE_CHILD)[0])));
                    var complete = $.proxy(this._transitionComplete, this, item, v, inflight, event);
                    if (v && inflight) {
                        $(v).one(that.TRANSITION_END, complete).emulateTransitionEnd(150);
                    } else {
                        complete();
                    }
                    if (v) {
                        $(v).removeClass(CLASS.IN);
                    }
                }, self.prototype._transitionComplete = function (e, context, dataAndEvents, $sanitize) {
                    if (context) {
                        $(context).removeClass(CLASS.ACTIVE);
                        var fromPage = $(context).find(obj.DROPDOWN_ACTIVE_CHILD)[0];
                        if (fromPage) {
                            $(fromPage).removeClass(CLASS.ACTIVE);
                        }
                        context.setAttribute("aria-expanded", false);
                    }
                    if ($(e).addClass(CLASS.ACTIVE), e.setAttribute("aria-expanded", true), dataAndEvents ? (that.reflow(e), $(e).addClass(CLASS.IN)) : $(e).removeClass(CLASS.FADE), e.parentNode && $(e.parentNode).hasClass(CLASS.DROPDOWN_MENU)) {
                        var sourceContainer = $(e).closest(obj.DROPDOWN)[0];
                        if (sourceContainer) {
                            $(sourceContainer).find(obj.DROPDOWN_TOGGLE).addClass(CLASS.ACTIVE);
                        }
                        e.setAttribute("aria-expanded", true);
                    }
                    if ($sanitize) {
                        $sanitize();
                    }
                }, self._jQueryInterface = function (index) {
                    return this.each(function () {
                        var elm = $(this);
                        var events = elm.data(node);
                        if (events || (events = events = new self(this), elm.data(node, events)), "string" == typeof index) {
                            if (void 0 === events[index]) {
                                throw new Error('No method named "' + index + '"');
                            }
                            events[index]();
                        }
                    });
                }, b(self, null, [{
                    key: "VERSION",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "4.0.0-alpha.5";
                    }
                }]), self;
            }();
            $(document).on(events.CLICK_DATA_API, obj.DATA_TOGGLE, function (types) {
                types.preventDefault();
                config._jQueryInterface.call($(this), "show");
            });
            $.fn[name] = config._jQueryInterface;
            $.fn[name].Constructor = config;
            /**
             * @return {?}
             */
            $.fn[name].noConflict = function () {
                return $.fn[name] = ref, config._jQueryInterface;
            };
        }(jQuery), function ($) {
            if (void 0 === window.Tether) {
                throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            }
            /** @type {string} */
            var name = "tooltip";
            /** @type {string} */
            var element = "bs.tooltip";
            /** @type {string} */
            var NS = "." + element;
            var ref = $.fn[name];
            var options = {
                animation: true,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: false,
                selector: false,
                placement: "top",
                offset: "0 0",
                constraints: []
            };
            var defaults = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "string",
                constraints: "array"
            };
            var PLAYER = {
                TOP: "bottom center",
                RIGHT: "middle left",
                BOTTOM: "top center",
                LEFT: "middle right"
            };
            var other = {
                IN: "in",
                OUT: "out"
            };
            var entries = {
                HIDE: "hide" + NS,
                HIDDEN: "hidden" + NS,
                SHOW: "show" + NS,
                SHOWN: "shown" + NS,
                INSERTED: "inserted" + NS,
                CLICK: "click" + NS,
                FOCUSIN: "focusin" + NS,
                FOCUSOUT: "focusout" + NS,
                MOUSEENTER: "mouseenter" + NS,
                MOUSELEAVE: "mouseleave" + NS
            };
            var node = {
                FADE: "fade",
                IN: "in"
            };
            var env = {
                TOOLTIP: ".tooltip",
                TOOLTIP_INNER: ".tooltip-inner"
            };
            var classes = {
                element: false,
                enabled: false
            };
            var types = {
                HOVER: "hover",
                FOCUS: "focus",
                CLICK: "click",
                MANUAL: "manual"
            };
            var Constructor = function () {
                /**
                 * @param {?} element
                 * @param {Object} count
                 * @return {undefined}
                 */
                function Tooltip(element, count) {
                    bind(this, Tooltip);
                    /** @type {boolean} */
                    this._isEnabled = true;
                    /** @type {number} */
                    this._timeout = 0;
                    /** @type {string} */
                    this._hoverState = "";
                    this._activeTrigger = {};
                    /** @type {null} */
                    this._tether = null;
                    this.element = element;
                    this.config = this._getConfig(count);
                    /** @type {null} */
                    this.tip = null;
                    this._setListeners();
                }
                return Tooltip.prototype.enable = function () {
                    /** @type {boolean} */
                    this._isEnabled = true;
                }, Tooltip.prototype.disable = function () {
                    /** @type {boolean} */
                    this._isEnabled = false;
                }, Tooltip.prototype.toggleEnabled = function () {
                    /** @type {boolean} */
                    this._isEnabled = !this._isEnabled;
                }, Tooltip.prototype.toggle = function (e) {
                    if (e) {
                        var index = this.constructor.DATA_KEY;
                        var self = $(e.currentTarget).data(index);
                        if (!self) {
                            self = new this.constructor(e.currentTarget, this._getDelegateConfig());
                            $(e.currentTarget).data(index, self);
                        }
                        /** @type {boolean} */
                        self._activeTrigger.click = !self._activeTrigger.click;
                        if (self._isWithActiveTrigger()) {
                            self._enter(null, self);
                        } else {
                            self._leave(null, self);
                        }
                    } else {
                        if ($(this.getTipElement()).hasClass(node.IN)) {
                            return void this._leave(null, this);
                        }
                        this._enter(null, this);
                    }
                }, Tooltip.prototype.dispose = function () {
                    clearTimeout(this._timeout);
                    this.cleanupTether();
                    $.removeData(this.element, this.constructor.DATA_KEY);
                    $(this.element).off(this.constructor.EVENT_KEY);
                    if (this.tip) {
                        $(this.tip).remove();
                    }
                    /** @type {null} */
                    this._isEnabled = null;
                    /** @type {null} */
                    this._timeout = null;
                    /** @type {null} */
                    this._hoverState = null;
                    /** @type {null} */
                    this._activeTrigger = null;
                    /** @type {null} */
                    this._tether = null;
                    /** @type {null} */
                    this.element = null;
                    /** @type {null} */
                    this.config = null;
                    /** @type {null} */
                    this.tip = null;
                }, Tooltip.prototype.show = function () {
                    var me = this;
                    var rvar = $.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        $(this.element).trigger(rvar);
                        var items = $.contains(this.element.ownerDocument.documentElement, this.element);
                        if (rvar.isDefaultPrevented() || !items) {
                            return;
                        }
                        var elem = this.getTipElement();
                        var id = that.getUID(this.constructor.NAME);
                        elem.setAttribute("id", id);
                        this.element.setAttribute("aria-describedby", id);
                        this.setContent();
                        if (this.config.animation) {
                            $(elem).addClass(node.FADE);
                        }
                        var oldconfig = "function" == typeof this.config.placement ? this.config.placement.call(this, elem, this.element) : this.config.placement;
                        var attachment = this._getAttachment(oldconfig);
                        $(elem).data(this.constructor.DATA_KEY, this).appendTo(document.body);
                        $(this.element).trigger(this.constructor.Event.INSERTED);
                        this._tether = new Tether({
                            attachment: attachment,
                            element: elem,
                            target: this.element,
                            classes: classes,
                            classPrefix: "bs-tether",
                            offset: this.config.offset,
                            constraints: this.config.constraints,
                            addTargetClasses: false
                        });
                        that.reflow(elem);
                        this._tether.position();
                        $(elem).addClass(node.IN);
                        /**
                         * @return {undefined}
                         */
                        var complete = function () {
                            var modified = me._hoverState;
                            /** @type {null} */
                            me._hoverState = null;
                            $(me.element).trigger(me.constructor.Event.SHOWN);
                            if (modified === other.OUT) {
                                me._leave(null, me);
                            }
                        };
                        if (that.supportsTransitionEnd() && $(this.tip).hasClass(node.FADE)) {
                            return void $(this.tip).one(that.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
                        }
                        complete();
                    }
                }, Tooltip.prototype.hide = function (e) {
                    var ev = this;
                    var el = this.getTipElement();
                    var rvar = $.Event(this.constructor.Event.HIDE);
                    /**
                     * @return {undefined}
                     */
                    var complete = function () {
                        if (ev._hoverState !== other.IN) {
                            if (el.parentNode) {
                                el.parentNode.removeChild(el);
                            }
                        }
                        ev.element.removeAttribute("aria-describedby");
                        $(ev.element).trigger(ev.constructor.Event.HIDDEN);
                        ev.cleanupTether();
                        if (e) {
                            e();
                        }
                    };
                    $(this.element).trigger(rvar);
                    if (!rvar.isDefaultPrevented()) {
                        $(el).removeClass(node.IN);
                        if (that.supportsTransitionEnd() && $(this.tip).hasClass(node.FADE)) {
                            $(el).one(that.TRANSITION_END, complete).emulateTransitionEnd(150);
                        } else {
                            complete();
                        }
                        /** @type {string} */
                        this._hoverState = "";
                    }
                }, Tooltip.prototype.isWithContent = function () {
                    return Boolean(this.getTitle());
                }, Tooltip.prototype.getTipElement = function () {
                    return this.tip = this.tip || $(this.config.template)[0];
                }, Tooltip.prototype.setContent = function () {
                    var that = $(this.getTipElement());
                    this.setElementContent(that.find(env.TOOLTIP_INNER), this.getTitle());
                    that.removeClass(node.FADE).removeClass(node.IN);
                    this.cleanupTether();
                }, Tooltip.prototype.setElementContent = function (element, el) {
                    var html = this.config.html;
                    if ("object" === (void 0 === el ? "undefined" : isObject(el)) && (el.nodeType || el.jquery)) {
                        if (html) {
                            if (!$(el).parent().is(element)) {
                                element.empty().append(el);
                            }
                        } else {
                            element.text($(el).text());
                        }
                    } else {
                        element[html ? "html" : "text"](el);
                    }
                }, Tooltip.prototype.getTitle = function () {
                    var content = this.element.getAttribute("data-original-title");
                    return content || (content = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), content;
                }, Tooltip.prototype.cleanupTether = function () {
                    if (this._tether) {
                        this._tether.destroy();
                    }
                }, Tooltip.prototype._getAttachment = function (b) {
                    return PLAYER[b.toUpperCase()];
                }, Tooltip.prototype._setListeners = function () {
                    var self = this;
                    this.config.trigger.split(" ").forEach(function (i) {
                        if ("click" === i) {
                            $(self.element).on(self.constructor.Event.CLICK, self.config.selector, $.proxy(self.toggle, self));
                        } else {
                            if (i !== types.MANUAL) {
                                var Events = i === types.HOVER ? self.constructor.Event.MOUSEENTER : self.constructor.Event.FOCUSIN;
                                var EVENT_READY = i === types.HOVER ? self.constructor.Event.MOUSELEAVE : self.constructor.Event.FOCUSOUT;
                                $(self.element).on(Events, self.config.selector, $.proxy(self._enter, self)).on(EVENT_READY, self.config.selector, $.proxy(self._leave, self));
                            }
                        }
                    });
                    if (this.config.selector) {
                        this.config = $.extend({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        });
                    } else {
                        this._fixTitle();
                    }
                }, Tooltip.prototype._fixTitle = function () {
                    var expression = isObject(this.element.getAttribute("data-original-title"));
                    if (this.element.getAttribute("title") || "string" !== expression) {
                        this.element.setAttribute("data-original-title", this.element.getAttribute("title") || "");
                        this.element.setAttribute("title", "");
                    }
                }, Tooltip.prototype._enter = function (evt, self) {
                    var WIDTH = this.constructor.DATA_KEY;
                    return self = self || $(evt.currentTarget).data(WIDTH), self || (self = new this.constructor(evt.currentTarget, this._getDelegateConfig()), $(evt.currentTarget).data(WIDTH, self)), evt && (self._activeTrigger["focusin" === evt.type ? types.FOCUS : types.HOVER] = true), $(self.getTipElement()).hasClass(node.IN) || self._hoverState === other.IN ? void (self._hoverState = other.IN) : (clearTimeout(self._timeout), self._hoverState = other.IN, self.config.delay && self.config.delay.show ? void (self._timeout =
                    setTimeout(function () {
                        if (self._hoverState === other.IN) {
                            self.show();
                        }
                    }, self.config.delay.show)) : void self.show());
                }, Tooltip.prototype._leave = function (e, self) {
                    var WIDTH = this.constructor.DATA_KEY;
                    if (self = self || $(e.currentTarget).data(WIDTH), self || (self = new this.constructor(e.currentTarget, this._getDelegateConfig()), $(e.currentTarget).data(WIDTH, self)), e && (self._activeTrigger["focusout" === e.type ? types.FOCUS : types.HOVER] = false), !self._isWithActiveTrigger()) {
                        return clearTimeout(self._timeout), self._hoverState = other.OUT, self.config.delay && self.config.delay.hide ? void (self._timeout = setTimeout(function () {
                            if (self._hoverState === other.OUT) {
                                self.hide();
                            }
                        }, self.config.delay.hide)) : void self.hide();
                    }
                }, Tooltip.prototype._isWithActiveTrigger = function () {
                    var unlock;
                    for (unlock in this._activeTrigger) {
                        if (this._activeTrigger[unlock]) {
                            return true;
                        }
                    }
                    return false;
                }, Tooltip.prototype._getConfig = function (params) {
                    return params = $.extend({}, this.constructor.Default, $(this.element).data(), params), params.delay && ("number" == typeof params.delay && (params.delay = {
                        show: params.delay,
                        hide: params.delay
                    })), that.typeCheckConfig(name, params, this.constructor.DefaultType), params;
                }, Tooltip.prototype._getDelegateConfig = function () {
                    var internalValues = {};
                    if (this.config) {
                        var key;
                        for (key in this.config) {
                            if (this.constructor.Default[key] !== this.config[key]) {
                                internalValues[key] = this.config[key];
                            }
                        }
                    }
                    return internalValues;
                }, Tooltip._jQueryInterface = function (index) {
                    return this.each(function () {
                        var data = $(this).data(element);
                        var options = "object" === (void 0 === index ? "undefined" : isObject(index)) ? index : null;
                        if ((data || !/dispose|hide/.test(index)) && (data || (data = new Tooltip(this, options), $(this).data(element, data)), "string" == typeof index)) {
                            if (void 0 === data[index]) {
                                throw new Error('No method named "' + index + '"');
                            }
                            data[index]();
                        }
                    });
                }, b(Tooltip, null, [{
                    key: "VERSION",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "4.0.0-alpha.5";
                    }
                }, {
                    key: "Default",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return options;
                    }
                }, {
                    key: "NAME",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return name;
                    }
                }, {
                    key: "DATA_KEY",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return element;
                    }
                }, {
                    key: "Event",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return entries;
                    }
                }, {
                    key: "EVENT_KEY",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return NS;
                    }
                }, {
                    key: "DefaultType",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return defaults;
                    }
                }]), Tooltip;
            }();
            return $.fn[name] = Constructor._jQueryInterface, $.fn[name].Constructor = Constructor, $.fn[name].noConflict = function () {
                return $.fn[name] = ref, Constructor._jQueryInterface;
            }, Constructor;
        }(jQuery));
        !function ($) {
            /** @type {string} */
            var name = "popover";
            /** @type {string} */
            var key = "bs.popover";
            /** @type {string} */
            var NS = "." + key;
            var ref = $.fn[name];
            var opt_val = $.extend({}, item.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            });
            var OUTPUT = $.extend({}, item.DefaultType, {
                content: "(string|element|function)"
            });
            var opts = {
                FADE: "fade",
                IN: "in"
            };
            var env = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content"
            };
            var entries = {
                HIDE: "hide" + NS,
                HIDDEN: "hidden" + NS,
                SHOW: "show" + NS,
                SHOWN: "shown" + NS,
                INSERTED: "inserted" + NS,
                CLICK: "click" + NS,
                FOCUSIN: "focusin" + NS,
                FOCUSOUT: "focusout" + NS,
                MOUSEENTER: "mouseenter" + NS,
                MOUSELEAVE: "mouseleave" + NS
            };
            var object = function (v) {
                /**
                 * @return {?}
                 */
                function self() {
                    return bind(this, self), isRegExp(this, v.apply(this, arguments));
                }
                return f(self, v), self.prototype.isWithContent = function () {
                    return this.getTitle() || this._getContent();
                }, self.prototype.getTipElement = function () {
                    return this.tip = this.tip || $(this.config.template)[0];
                }, self.prototype.setContent = function () {
                    var dialog = $(this.getTipElement());
                    this.setElementContent(dialog.find(env.TITLE), this.getTitle());
                    this.setElementContent(dialog.find(env.CONTENT), this._getContent());
                    dialog.removeClass(opts.FADE).removeClass(opts.IN);
                    this.cleanupTether();
                }, self.prototype._getContent = function () {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
                }, self._jQueryInterface = function (selector) {
                    return this.each(function () {
                        var camelKey = $(this).data(key);
                        var fn = "object" === (void 0 === selector ? "undefined" : isObject(selector)) ? selector : null;
                        if ((camelKey || !/destroy|hide/.test(selector)) && (camelKey || (camelKey = new self(this, fn), $(this).data(key, camelKey)), "string" == typeof selector)) {
                            if (void 0 === camelKey[selector]) {
                                throw new Error('No method named "' + selector + '"');
                            }
                            camelKey[selector]();
                        }
                    });
                }, b(self, null, [{
                    key: "VERSION",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return "4.0.0-alpha.5";
                    }
                }, {
                    key: "Default",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return opt_val;
                    }
                }, {
                    key: "NAME",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return name;
                    }
                }, {
                    key: "DATA_KEY",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return key;
                    }
                }, {
                    key: "Event",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return entries;
                    }
                }, {
                    key: "EVENT_KEY",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return NS;
                    }
                }, {
                    key: "DefaultType",
                    /**
                     * @return {?}
                     */
                    get: function () {
                        return OUTPUT;
                    }
                }]), self;
            }(item);
            $.fn[name] = object._jQueryInterface;
            $.fn[name].Constructor = object;
            /**
             * @return {?}
             */
            $.fn[name].noConflict = function () {
                return $.fn[name] = ref, object._jQueryInterface;
            };
        }(jQuery);
    })();
}, function (module, dataAndEvents, deepDataAndEvents) {
    /**
     * @return {undefined}
     */
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || void 0;
    }
    /**
     * @param {Function} fn
     * @return {?}
     */
    function isFunction(fn) {
        return "function" == typeof fn;
    }
    /**
     * @param {number} value
     * @return {?}
     */
    function isNumber(value) {
        return "number" == typeof value;
    }
    /**
     * @param {Object} arg
     * @return {?}
     */
    function isObject(arg) {
        return "object" == typeof arg && null !== arg;
    }
    /**
     * @param {number} obj
     * @return {?}
     */
    function isUndefined(obj) {
        return void 0 === obj;
    }
    /** @type {function (): undefined} */
    module.exports = EventEmitter;
    /** @type {function (): undefined} */
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._maxListeners = void 0;
    /** @type {number} */
    EventEmitter.defaultMaxListeners = 10;
    /**
     * @param {number} n
     * @return {?}
     */
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!isNumber(n) || (n < 0 || isNaN(n))) {
            throw TypeError("n must be a positive number");
        }
        return this._maxListeners = n, this;
    };
    /**
     * @param {string} type
     * @return {?}
     */
    EventEmitter.prototype.emit = function (type) {
        var context;
        var handler;
        var firingLength;
        var args;
        var firingIndex;
        var list;
        if (this._events || (this._events = {}), "error" === type && (!this._events.error || isObject(this._events.error) && !this._events.error.length)) {
            if ((context = arguments[1]) instanceof Error) {
                throw context;
            }
            /** @type {Error} */
            var ret = new Error('Uncaught, unspecified "error" event. (' + context + ")");
            throw ret.context = context, ret;
        }
        if (handler = this._events[type], isUndefined(handler)) {
            return false;
        }
        if (isFunction(handler)) {
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    /** @type {Array.<?>} */
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args);
            }
        } else {
            if (isObject(handler)) {
                /** @type {Array.<?>} */
                args = Array.prototype.slice.call(arguments, 1);
                list = handler.slice();
                firingLength = list.length;
                /** @type {number} */
                firingIndex = 0;
                for (; firingIndex < firingLength; firingIndex++) {
                    list[firingIndex].apply(this, args);
                }
            }
        }
        return true;
    };
    /**
     * @param {string} type
     * @param {Function} listener
     * @return {?}
     */
    EventEmitter.prototype.addListener = function (type, listener) {
        var maxScanLen;
        if (!isFunction(listener)) {
            throw TypeError("listener must be a function");
        }
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener), this._events[type] ? isObject(this._events[type]) ? this._events[type].push(listener) : this._events[type] = [this._events[type], listener] : this._events[type] = listener, isObject(this._events[type]) && (!this._events[type].warned && ((maxScanLen = isUndefined(this._maxListeners) ? EventEmitter.defaultMaxListeners : this._maxListeners) &&
        (maxScanLen > 0 && (this._events[type].length > maxScanLen && (this._events[type].warned = true, console.trace))))), this;
    };
    /** @type {function (string, Function): ?} */
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    /**
     * @param {string} type
     * @param {Function} listener
     * @return {?}
     */
    EventEmitter.prototype.once = function (type, listener) {
        /**
         * @return {undefined}
         */
        function g() {
            this.removeListener(type, g);
            if (!i) {
                /** @type {boolean} */
                i = true;
                listener.apply(this, arguments);
            }
        }
        if (!isFunction(listener)) {
            throw TypeError("listener must be a function");
        }
        /** @type {boolean} */
        var i = false;
        return g.listener = listener, this.on(type, g), this;
    };
    /**
     * @param {string} type
     * @param {Function} listener
     * @return {?}
     */
    EventEmitter.prototype.removeListener = function (type, listener) {
        var list;
        var pos;
        var k;
        var i;
        if (!isFunction(listener)) {
            throw TypeError("listener must be a function");
        }
        if (!this._events || !this._events[type]) {
            return this;
        }
        if (list = this._events[type], k = list.length, pos = -1, list === listener || isFunction(list.listener) && list.listener === listener) {
            delete this._events[type];
            if (this._events.removeListener) {
                this.emit("removeListener", type, listener);
            }
        } else {
            if (isObject(list)) {
                i = k;
                for (; i-- > 0;) {
                    if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                        pos = i;
                        break;
                    }
                }
                if (pos < 0) {
                    return this;
                }
                if (1 === list.length) {
                    /** @type {number} */
                    list.length = 0;
                    delete this._events[type];
                } else {
                    list.splice(pos, 1);
                }
                if (this._events.removeListener) {
                    this.emit("removeListener", type, listener);
                }
            }
        }
        return this;
    };
    /**
     * @param {string} type
     * @return {?}
     */
    EventEmitter.prototype.removeAllListeners = function (type) {
        var event;
        var listeners;
        if (!this._events) {
            return this;
        }
        if (!this._events.removeListener) {
            return 0 === arguments.length ? this._events = {} : this._events[type] && delete this._events[type], this;
        }
        if (0 === arguments.length) {
            for (event in this._events) {
                if ("removeListener" !== event) {
                    this.removeAllListeners(event);
                }
            }
            return this.removeAllListeners("removeListener"), this._events = {}, this;
        }
        if (listeners = this._events[type], isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else {
            if (listeners) {
                for (; listeners.length;) {
                    this.removeListener(type, listeners[listeners.length - 1]);
                }
            }
        }
        return delete this._events[type], this;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    EventEmitter.prototype.listeners = function (type) {
        return this._events && this._events[type] ? isFunction(this._events[type]) ? [this._events[type]] : this._events[type].slice() : [];
    };
    /**
     * @param {?} type
     * @return {?}
     */
    EventEmitter.prototype.listenerCount = function (type) {
        if (this._events) {
            var fns = this._events[type];
            if (isFunction(fns)) {
                return 1;
            }
            if (fns) {
                return fns.length;
            }
        }
        return 0;
    };
    /**
     * @param {?} event
     * @param {?} type
     * @return {?}
     */
    EventEmitter.listenerCount = function (event, type) {
        return event.listenerCount(type);
    };
}, function (module, dataAndEvents, deepDataAndEvents) {
    var value;
    !function (factory) {
        module.exports = factory();
    }(function () {
        return function initialize(d, cache, props) {
            /**
             * @param {string} id
             * @param {?} arg
             * @return {?}
             */
            function require(id, arg) {
                if (!cache[id]) {
                    if (!d[id]) {
                        var proceed = "function" == typeof value && value;
                        if (!arg && proceed) {
                            return value(id, true);
                        }
                        if (makeRequire) {
                            return makeRequire(id, true);
                        }
                        /** @type {Error} */
                        var err = new Error("Cannot find module '" + id + "'");
                        throw err.code = "MODULE_NOT_FOUND", err;
                    }
                    var module_ = cache[id] = {
                        exports: {}
                    };
                    d[id][0].call(module_.exports, function (bits) {
                        var max = d[id][1][bits];
                        return require(max || bits);
                    }, module_, module_.exports, initialize, d, cache, props);
                }
                return cache[id].exports;
            }
            var makeRequire = "function" == typeof value && value;
            /** @type {number} */
            var i = 0;
            for (; i < props.length; i++) {
                require(props[i]);
            }
            return require;
        }({
            1: [function (dataAndEvents, module, deepDataAndEvents) {
                /**
                 * @param {Array} res
                 * @return {undefined}
                 */
                module.exports = function (res) {
                    var y;
                    var n;
                    var pos;
                    /** @type {number} */
                    var i = -1;
                    if (res.lines.length > 1 && "flex-start" === res.style.alignContent) {
                        /** @type {number} */
                        y = 0;
                        for (; pos = res.lines[++i];) {
                            pos.crossStart = y;
                            y += pos.cross;
                        }
                    } else {
                        if (res.lines.length > 1 && "flex-end" === res.style.alignContent) {
                            y = res.flexStyle.crossSpace;
                            for (; pos = res.lines[++i];) {
                                pos.crossStart = y;
                                y += pos.cross;
                            }
                        } else {
                            if (res.lines.length > 1 && "center" === res.style.alignContent) {
                                /** @type {number} */
                                y = res.flexStyle.crossSpace / 2;
                                for (; pos = res.lines[++i];) {
                                    pos.crossStart = y;
                                    y += pos.cross;
                                }
                            } else {
                                if (res.lines.length > 1 && "space-between" === res.style.alignContent) {
                                    /** @type {number} */
                                    n = res.flexStyle.crossSpace / (res.lines.length - 1);
                                    /** @type {number} */
                                    y = 0;
                                    for (; pos = res.lines[++i];) {
                                        pos.crossStart = y;
                                        y += pos.cross + n;
                                    }
                                } else {
                                    if (res.lines.length > 1 && "space-around" === res.style.alignContent) {
                                        /** @type {number} */
                                        n = 2 * res.flexStyle.crossSpace / (2 * res.lines.length);
                                        /** @type {number} */
                                        y = n / 2;
                                        for (; pos = res.lines[++i];) {
                                            pos.crossStart = y;
                                            y += pos.cross + n;
                                        }
                                    } else {
                                        /** @type {number} */
                                        n = res.flexStyle.crossSpace / res.lines.length;
                                        y = res.flexStyle.crossInnerBefore;
                                        for (; pos = res.lines[++i];) {
                                            pos.crossStart = y;
                                            pos.cross += n;
                                            y += pos.cross;
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
            }, {}],
            2: [function (dataAndEvents, module, deepDataAndEvents) {
                /**
                 * @param {Array} args
                 * @return {undefined}
                 */
                module.exports = function (args) {
                    var index;
                    /** @type {number} */
                    var i = -1;
                    for (; line = args.lines[++i];) {
                        /** @type {number} */
                        index = -1;
                        for (; child = line.children[++index];) {
                            var undef = child.style.alignSelf;
                            if ("auto" === undef) {
                                undef = args.style.alignItems;
                            }
                            if ("flex-start" === undef) {
                                child.flexStyle.crossStart = line.crossStart;
                            } else {
                                if ("flex-end" === undef) {
                                    /** @type {number} */
                                    child.flexStyle.crossStart = line.crossStart + line.cross - child.flexStyle.crossOuter;
                                } else {
                                    if ("center" === undef) {
                                        child.flexStyle.crossStart = line.crossStart + (line.cross - child.flexStyle.crossOuter) / 2;
                                    } else {
                                        child.flexStyle.crossStart = line.crossStart;
                                        child.flexStyle.crossOuter = line.cross;
                                        /** @type {number} */
                                        child.flexStyle.cross = child.flexStyle.crossOuter - child.flexStyle.crossBefore - child.flexStyle.crossAfter;
                                    }
                                }
                            }
                        }
                    }
                };
            }, {}],
            3: [function (dataAndEvents, module, deepDataAndEvents) {
                /**
                 * @param {Element} obj
                 * @param {string} key
                 * @return {undefined}
                 */
                module.exports = function (obj, key) {
                    /** @type {boolean} */
                    var show = "row" === key || "row-reverse" === key;
                    var type = obj.mainAxis;
                    if (type) {
                        if (!(show && "inline" === type)) {
                            if (!(!show && "block" === type)) {
                                obj.flexStyle = {
                                    main: obj.flexStyle.cross,
                                    cross: obj.flexStyle.main,
                                    mainOffset: obj.flexStyle.crossOffset,
                                    crossOffset: obj.flexStyle.mainOffset,
                                    mainBefore: obj.flexStyle.crossBefore,
                                    mainAfter: obj.flexStyle.crossAfter,
                                    crossBefore: obj.flexStyle.mainBefore,
                                    crossAfter: obj.flexStyle.mainAfter,
                                    mainInnerBefore: obj.flexStyle.crossInnerBefore,
                                    mainInnerAfter: obj.flexStyle.crossInnerAfter,
                                    crossInnerBefore: obj.flexStyle.mainInnerBefore,
                                    crossInnerAfter: obj.flexStyle.mainInnerAfter,
                                    mainBorderBefore: obj.flexStyle.crossBorderBefore,
                                    mainBorderAfter: obj.flexStyle.crossBorderAfter,
                                    crossBorderBefore: obj.flexStyle.mainBorderBefore,
                                    crossBorderAfter: obj.flexStyle.mainBorderAfter
                                };
                            }
                        }
                    } else {
                        /** @type {({cross: ?, crossAfter: ?, crossBefore: ?, crossBorderAfter: ?, crossBorderBefore: ?, crossInnerAfter: ?, crossInnerBefore: ?, crossOffset: ?, main: ?, mainAfter: ?, mainBefore: ?, mainBorderAfter: ?, mainBorderBefore: ?, mainInnerAfter: ?, mainInnerBefore: ?, mainOffset: ?})} */
                        obj.flexStyle = show ? {
                            main: obj.style.width,
                            cross: obj.style.height,
                            mainOffset: obj.style.offsetWidth,
                            crossOffset: obj.style.offsetHeight,
                            mainBefore: obj.style.marginLeft,
                            mainAfter: obj.style.marginRight,
                            crossBefore: obj.style.marginTop,
                            crossAfter: obj.style.marginBottom,
                            mainInnerBefore: obj.style.paddingLeft,
                            mainInnerAfter: obj.style.paddingRight,
                            crossInnerBefore: obj.style.paddingTop,
                            crossInnerAfter: obj.style.paddingBottom,
                            mainBorderBefore: obj.style.borderLeftWidth,
                            mainBorderAfter: obj.style.borderRightWidth,
                            crossBorderBefore: obj.style.borderTopWidth,
                            crossBorderAfter: obj.style.borderBottomWidth
                        } : {
                            main: obj.style.height,
                            cross: obj.style.width,
                            mainOffset: obj.style.offsetHeight,
                            crossOffset: obj.style.offsetWidth,
                            mainBefore: obj.style.marginTop,
                            mainAfter: obj.style.marginBottom,
                            crossBefore: obj.style.marginLeft,
                            crossAfter: obj.style.marginRight,
                            mainInnerBefore: obj.style.paddingTop,
                            mainInnerAfter: obj.style.paddingBottom,
                            crossInnerBefore: obj.style.paddingLeft,
                            crossInnerAfter: obj.style.paddingRight,
                            mainBorderBefore: obj.style.borderTopWidth,
                            mainBorderAfter: obj.style.borderBottomWidth,
                            crossBorderBefore: obj.style.borderLeftWidth,
                            crossBorderAfter: obj.style.borderRightWidth
                        };
                        if ("content-box" === obj.style.boxSizing) {
                            if ("number" == typeof obj.flexStyle.main) {
                                obj.flexStyle.main += obj.flexStyle.mainInnerBefore + obj.flexStyle.mainInnerAfter + obj.flexStyle.mainBorderBefore + obj.flexStyle.mainBorderAfter;
                            }
                            if ("number" == typeof obj.flexStyle.cross) {
                                obj.flexStyle.cross += obj.flexStyle.crossInnerBefore + obj.flexStyle.crossInnerAfter + obj.flexStyle.crossBorderBefore + obj.flexStyle.crossBorderAfter;
                            }
                        }
                    }
                    /** @type {string} */
                    obj.mainAxis = show ? "inline" : "block";
                    /** @type {string} */
                    obj.crossAxis = show ? "block" : "inline";
                    if ("number" == typeof obj.style.flexBasis) {
                        obj.flexStyle.main = obj.style.flexBasis + obj.flexStyle.mainInnerBefore + obj.flexStyle.mainInnerAfter + obj.flexStyle.mainBorderBefore + obj.flexStyle.mainBorderAfter;
                    }
                    obj.flexStyle.mainOuter = obj.flexStyle.main;
                    obj.flexStyle.crossOuter = obj.flexStyle.cross;
                    if ("auto" === obj.flexStyle.mainOuter) {
                        obj.flexStyle.mainOuter = obj.flexStyle.mainOffset;
                    }
                    if ("auto" === obj.flexStyle.crossOuter) {
                        obj.flexStyle.crossOuter = obj.flexStyle.crossOffset;
                    }
                    if ("number" == typeof obj.flexStyle.mainBefore) {
                        obj.flexStyle.mainOuter += obj.flexStyle.mainBefore;
                    }
                    if ("number" == typeof obj.flexStyle.mainAfter) {
                        obj.flexStyle.mainOuter += obj.flexStyle.mainAfter;
                    }
                    if ("number" == typeof obj.flexStyle.crossBefore) {
                        obj.flexStyle.crossOuter += obj.flexStyle.crossBefore;
                    }
                    if ("number" == typeof obj.flexStyle.crossAfter) {
                        obj.flexStyle.crossOuter += obj.flexStyle.crossAfter;
                    }
                };
            }, {}],
            4: [function (require, module, dataAndEvents) {
                var $ = require("../reduce");
                /**
                 * @param {Object} opts
                 * @return {undefined}
                 */
                module.exports = function (opts) {
                    if (opts.mainSpace > 0) {
                        var scale = $(opts.children, function (sum, part) {
                            return sum + parseFloat(part.style.flexGrow);
                        }, 0);
                        if (scale > 0) {
                            opts.main = $(opts.children, function (dataAndEvents, m) {
                                return "auto" === m.flexStyle.main ? m.flexStyle.main = m.flexStyle.mainOffset + parseFloat(m.style.flexGrow) / scale * opts.mainSpace : m.flexStyle.main += parseFloat(m.style.flexGrow) / scale * opts.mainSpace, m.flexStyle.mainOuter = m.flexStyle.main + m.flexStyle.mainBefore + m.flexStyle.mainAfter, dataAndEvents + m.flexStyle.mainOuter;
                            }, 0);
                            /** @type {number} */
                            opts.mainSpace = 0;
                        }
                    }
                };
            }, {
                "../reduce": 12
            }],
            5: [function (require, module, dataAndEvents) {
                var $ = require("../reduce");
                /**
                 * @param {Object} opts
                 * @return {undefined}
                 */
                module.exports = function (opts) {
                    if (opts.mainSpace < 0) {
                        var scale = $(opts.children, function (sum, part) {
                            return sum + parseFloat(part.style.flexShrink);
                        }, 0);
                        if (scale > 0) {
                            opts.main = $(opts.children, function (dataAndEvents, m) {
                                return m.flexStyle.main += parseFloat(m.style.flexShrink) / scale * opts.mainSpace, m.flexStyle.mainOuter = m.flexStyle.main + m.flexStyle.mainBefore + m.flexStyle.mainAfter, dataAndEvents + m.flexStyle.mainOuter;
                            }, 0);
                            /** @type {number} */
                            opts.mainSpace = 0;
                        }
                    }
                };
            }, {
                "../reduce": 12
            }],
            6: [function (require, module, dataAndEvents) {
                var getActual = require("../reduce");
                /**
                 * @param {Object} self
                 * @return {undefined}
                 */
                module.exports = function (self) {
                    var p;
                    /** @type {Array} */
                    self.lines = [p = {
                        main: 0,
                        cross: 0,
                        children: []
                    }];
                    var copies;
                    /** @type {number} */
                    var index = -1;
                    for (; copies = self.children[++index];) {
                        if ("nowrap" === self.style.flexWrap || (0 === p.children.length || ("auto" === self.flexStyle.main || self.flexStyle.main - self.flexStyle.mainInnerBefore - self.flexStyle.mainInnerAfter - self.flexStyle.mainBorderBefore - self.flexStyle.mainBorderAfter >= p.main + copies.flexStyle.mainOuter))) {
                            p.main += copies.flexStyle.mainOuter;
                            /** @type {number} */
                            p.cross = Math.max(p.cross, copies.flexStyle.crossOuter);
                        } else {
                            self.lines.push(p = {
                                main: copies.flexStyle.mainOuter,
                                cross: copies.flexStyle.crossOuter,
                                children: []
                            });
                        }
                        p.children.push(copies);
                    }
                    self.flexStyle.mainLines = getActual(self.lines, function (from, b) {
                        return Math.max(from, b.main);
                    }, 0);
                    self.flexStyle.crossLines = getActual(self.lines, function (dataAndEvents, vector1) {
                        return dataAndEvents + vector1.cross;
                    }, 0);
                    if ("auto" === self.flexStyle.main) {
                        /** @type {number} */
                        self.flexStyle.main = Math.max(self.flexStyle.mainOffset, self.flexStyle.mainLines + self.flexStyle.mainInnerBefore + self.flexStyle.mainInnerAfter + self.flexStyle.mainBorderBefore + self.flexStyle.mainBorderAfter);
                    }
                    if ("auto" === self.flexStyle.cross) {
                        /** @type {number} */
                        self.flexStyle.cross = Math.max(self.flexStyle.crossOffset, self.flexStyle.crossLines + self.flexStyle.crossInnerBefore + self.flexStyle.crossInnerAfter + self.flexStyle.crossBorderBefore + self.flexStyle.crossBorderAfter);
                    }
                    /** @type {number} */
                    self.flexStyle.crossSpace = self.flexStyle.cross - self.flexStyle.crossInnerBefore - self.flexStyle.crossInnerAfter - self.flexStyle.crossBorderBefore - self.flexStyle.crossBorderAfter - self.flexStyle.crossLines;
                    self.flexStyle.mainOuter = self.flexStyle.main + self.flexStyle.mainBefore + self.flexStyle.mainAfter;
                    self.flexStyle.crossOuter = self.flexStyle.cross + self.flexStyle.crossBefore + self.flexStyle.crossAfter;
                };
            }, {
                "../reduce": 12
            }],
            7: [function (random, module, dataAndEvents) {
                /**
                 * @param {Object} self
                 * @return {undefined}
                 */
                function Stats(self) {
                    var r20;
                    /** @type {number} */
                    var index = -1;
                    for (; r20 = self.children[++index];) {
                        random("./flex-direction")(r20, self.style.flexDirection);
                    }
                    random("./flex-direction")(self, self.style.flexDirection);
                    random("./order")(self);
                    random("./flexbox-lines")(self);
                    random("./align-content")(self);
                    /** @type {number} */
                    index = -1;
                    var normalized;
                    for (; normalized = self.lines[++index];) {
                        /** @type {number} */
                        normalized.mainSpace = self.flexStyle.main - self.flexStyle.mainInnerBefore - self.flexStyle.mainInnerAfter - self.flexStyle.mainBorderBefore - self.flexStyle.mainBorderAfter - normalized.main;
                        random("./flex-grow")(normalized);
                        random("./flex-shrink")(normalized);
                        random("./margin-main")(normalized);
                        random("./margin-cross")(normalized);
                        random("./justify-content")(normalized, self.style.justifyContent, self);
                    }
                    random("./align-items")(self);
                }
                /** @type {function (Object): undefined} */
                module.exports = Stats;
            }, {
                "./align-content": 1,
                "./align-items": 2,
                "./flex-direction": 3,
                "./flex-grow": 4,
                "./flex-shrink": 5,
                "./flexbox-lines": 6,
                "./justify-content": 8,
                "./margin-cross": 9,
                "./margin-main": 10,
                "./order": 11
            }],
            8: [function (dataAndEvents, module, deepDataAndEvents) {
                /**
                 * @param {Object} syntax
                 * @param {string} chai
                 * @param {?} includeAll
                 * @return {undefined}
                 */
                module.exports = function (syntax, chai, includeAll) {
                    var errors;
                    var err;
                    var flexStyle;
                    var Q = includeAll.flexStyle.mainInnerBefore;
                    /** @type {number} */
                    var index = -1;
                    if ("flex-end" === chai) {
                        errors = syntax.mainSpace;
                        errors += Q;
                        for (; flexStyle = syntax.children[++index];) {
                            flexStyle.flexStyle.mainStart = errors;
                            errors += flexStyle.flexStyle.mainOuter;
                        }
                    } else {
                        if ("center" === chai) {
                            /** @type {number} */
                            errors = syntax.mainSpace / 2;
                            errors += Q;
                            for (; flexStyle = syntax.children[++index];) {
                                flexStyle.flexStyle.mainStart = errors;
                                errors += flexStyle.flexStyle.mainOuter;
                            }
                        } else {
                            if ("space-between" === chai) {
                                /** @type {number} */
                                err = syntax.mainSpace / (syntax.children.length - 1);
                                /** @type {number} */
                                errors = 0;
                                errors += Q;
                                for (; flexStyle = syntax.children[++index];) {
                                    flexStyle.flexStyle.mainStart = errors;
                                    errors += flexStyle.flexStyle.mainOuter + err;
                                }
                            } else {
                                if ("space-around" === chai) {
                                    /** @type {number} */
                                    err = 2 * syntax.mainSpace / (2 * syntax.children.length);
                                    /** @type {number} */
                                    errors = err / 2;
                                    errors += Q;
                                    for (; flexStyle = syntax.children[++index];) {
                                        flexStyle.flexStyle.mainStart = errors;
                                        errors += flexStyle.flexStyle.mainOuter + err;
                                    }
                                } else {
                                    /** @type {number} */
                                    errors = 0;
                                    errors += Q;
                                    for (; flexStyle = syntax.children[++index];) {
                                        flexStyle.flexStyle.mainStart = errors;
                                        errors += flexStyle.flexStyle.mainOuter;
                                    }
                                }
                            }
                        }
                    }
                };
            }, {}],
            9: [function (dataAndEvents, module, deepDataAndEvents) {
                /**
                 * @param {Object} dir
                 * @return {undefined}
                 */
                module.exports = function (dir) {
                    var glmat;
                    /** @type {number} */
                    var index = -1;
                    for (; glmat = dir.children[++index];) {
                        /** @type {number} */
                        var b = 0;
                        if ("auto" === glmat.flexStyle.crossBefore) {
                            ++b;
                        }
                        if ("auto" === glmat.flexStyle.crossAfter) {
                            ++b;
                        }
                        /** @type {number} */
                        var a = dir.cross - glmat.flexStyle.crossOuter;
                        if ("auto" === glmat.flexStyle.crossBefore) {
                            /** @type {number} */
                            glmat.flexStyle.crossBefore = a / b;
                        }
                        if ("auto" === glmat.flexStyle.crossAfter) {
                            /** @type {number} */
                            glmat.flexStyle.crossAfter = a / b;
                        }
                        if ("auto" === glmat.flexStyle.cross) {
                            glmat.flexStyle.crossOuter = glmat.flexStyle.crossOffset + glmat.flexStyle.crossBefore + glmat.flexStyle.crossAfter;
                        } else {
                            glmat.flexStyle.crossOuter = glmat.flexStyle.cross + glmat.flexStyle.crossBefore + glmat.flexStyle.crossAfter;
                        }
                    }
                };
            }, {}],
            10: [function (dataAndEvents, module, deepDataAndEvents) {
                /**
                 * @param {Object} suite
                 * @return {undefined}
                 */
                module.exports = function (suite) {
                    var data;
                    /** @type {number} */
                    var mainBefore = 0;
                    /** @type {number} */
                    var index = -1;
                    for (; data = suite.children[++index];) {
                        if ("auto" === data.flexStyle.mainBefore) {
                            ++mainBefore;
                        }
                        if ("auto" === data.flexStyle.mainAfter) {
                            ++mainBefore;
                        }
                    }
                    if (mainBefore > 0) {
                        /** @type {number} */
                        index = -1;
                        for (; data = suite.children[++index];) {
                            if ("auto" === data.flexStyle.mainBefore) {
                                /** @type {number} */
                                data.flexStyle.mainBefore = suite.mainSpace / mainBefore;
                            }
                            if ("auto" === data.flexStyle.mainAfter) {
                                /** @type {number} */
                                data.flexStyle.mainAfter = suite.mainSpace / mainBefore;
                            }
                            if ("auto" === data.flexStyle.main) {
                                data.flexStyle.mainOuter = data.flexStyle.mainOffset + data.flexStyle.mainBefore + data.flexStyle.mainAfter;
                            } else {
                                data.flexStyle.mainOuter = data.flexStyle.main + data.flexStyle.mainBefore + data.flexStyle.mainAfter;
                            }
                        }
                        /** @type {number} */
                        suite.mainSpace = 0;
                    }
                };
            }, {}],
            11: [function (dataAndEvents, module, deepDataAndEvents) {
                /** @type {RegExp} */
                var rhtml = /^(column|row)-reverse$/;
                /**
                 * @param {Element} tree
                 * @return {undefined}
                 */
                module.exports = function (tree) {
                    tree.children.sort(function (a, b) {
                        return a.style.order - b.style.order || a.index - b.index;
                    });
                    if (rhtml.test(tree.style.flexDirection)) {
                        tree.children.reverse();
                    }
                };
            }, {}],
            12: [function (dataAndEvents, module, deepDataAndEvents) {
                /**
                 * @param {Array} objects
                 * @param {?} makeIterator
                 * @param {Text} callback
                 * @return {?}
                 */
                function filter(objects, makeIterator, callback) {
                    var ol = objects.length;
                    /** @type {number} */
                    var label = -1;
                    for (; ++label < ol;) {
                        if (label in objects) {
                            callback = makeIterator(callback, objects[label], label);
                        }
                    }
                    return callback;
                }
                /** @type {function (Array, ?, Text): ?} */
                module.exports = filter;
            }, {}],
            13: [function (require, module, dataAndEvents) {
                /**
                 * @param {?} name
                 * @return {undefined}
                 */
                function test(name) {
                    assert(func(name));
                }
                var read = require("./read");
                var Block = require("./write");
                var func = require("./readAll");
                var assert = require("./writeAll");
                /** @type {function (?): undefined} */
                module.exports = test;
                module.exports.read = read;
                module.exports.write = Block;
                module.exports.readAll = func;
                module.exports.writeAll = assert;
            }, {
                "./read": 15,
                "./readAll": 16,
                "./write": 17,
                "./writeAll": 18
            }],
            14: [function (dataAndEvents, module, deepDataAndEvents) {
                /**
                 * @param {string} value
                 * @param {Node} options
                 * @return {?}
                 */
                function parse(value, options) {
                    /** @type {(Array.<string>|null)} */
                    var match = String(value).match(delegateEventSplitter);
                    if (!match) {
                        return value;
                    }
                    /** @type {string} */
                    var eventName = match[1];
                    /** @type {string} */
                    var string = match[2];
                    return "px" === string ? 1 * eventName : "cm" === string ? 0.3937 * eventName * 96 : "in" === string ? 96 * eventName : "mm" === string ? 0.3937 * eventName * 96 / 10 : "pc" === string ? 12 * eventName * 96 / 72 : "pt" === string ? 96 * eventName / 72 : "rem" === string ? 16 * eventName : init(value, options);
                }
                /**
                 * @param {string} position
                 * @param {Node} element
                 * @return {?}
                 */
                function init(position, element) {
                    /** @type {string} */
                    div.style.cssText = "border:none!important;clip:rect(0 0 0 0)!important;display:block!important;font-size:1em!important;height:0!important;margin:0!important;padding:0!important;position:relative!important;width:" + position + "!important";
                    element.parentNode.insertBefore(div, element.nextSibling);
                    var targetWidth = div.offsetWidth;
                    return element.parentNode.removeChild(div), targetWidth;
                }
                /** @type {function (string, Node): ?} */
                module.exports = parse;
                /** @type {RegExp} */
                var delegateEventSplitter = /^([-+]?\d*\.?\d+)(%|[a-z]+)$/;
                /** @type {Element} */
                var div = document.createElement("div");
            }, {}],
            15: [function ($sanitize, module, dataAndEvents) {
                /**
                 * @param {HTMLElement} elem
                 * @return {?}
                 */
                function init(elem) {
                    var source = {
                        alignContent: "stretch",
                        alignItems: "stretch",
                        alignSelf: "auto",
                        borderBottomWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        boxSizing: "content-box",
                        display: "inline",
                        flexBasis: "auto",
                        flexDirection: "row",
                        flexGrow: 0,
                        flexShrink: 1,
                        flexWrap: "nowrap",
                        justifyContent: "flex-start",
                        height: "auto",
                        marginTop: 0,
                        marginRight: 0,
                        marginLeft: 0,
                        marginBottom: 0,
                        paddingTop: 0,
                        paddingRight: 0,
                        paddingLeft: 0,
                        paddingBottom: 0,
                        maxHeight: "none",
                        maxWidth: "none",
                        minHeight: 0,
                        minWidth: 0,
                        order: 0,
                        position: "static",
                        width: "auto"
                    };
                    if (elem instanceof Element) {
                        /** @type {boolean} */
                        var object = elem.hasAttribute("data-style");
                        /** @type {string} */
                        var value = object ? elem.getAttribute("data-style") : elem.getAttribute("style") || "";
                        if (!object) {
                            elem.setAttribute("data-style", value);
                        }
                        trim(source, window.getComputedStyle && getComputedStyle(elem) || {});
                        log(source, elem.currentStyle || {});
                        bind(source, value);
                        var name;
                        for (name in source) {
                            source[name] = parseInt(source[name], elem);
                        }
                        /** @type {(ClientRect|null)} */
                        var cfg = elem.getBoundingClientRect();
                        source.offsetHeight = cfg.height || elem.offsetHeight;
                        source.offsetWidth = cfg.width || elem.offsetWidth;
                    }
                    return {
                        element: elem,
                        style: source
                    };
                }
                /**
                 * @param {Object} o
                 * @param {Object} result
                 * @return {undefined}
                 */
                function log(o, result) {
                    var i;
                    for (i in o) {
                        if (i in result) {
                            o[i] = result[i];
                        } else {
                            /** @type {string} */
                            var p = i.replace(/[A-Z]/g, "-$&").toLowerCase();
                            if (p in result) {
                                o[i] = result[p];
                            }
                        }
                    }
                    if ("-js-display" in result) {
                        o.display = result["-js-display"];
                    }
                }
                /**
                 * @param {Object} obj
                 * @param {string} fn
                 * @return {undefined}
                 */
                function bind(obj, fn) {
                    var value;
                    for (; value = reName.exec(fn) ;) {
                        /** @type {string} */
                        obj[value[1].toLowerCase().replace(/-[a-z]/g, function (models) {
                            return models.slice(1).toUpperCase();
                        })] = value[2];
                    }
                }
                /**
                 * @param {Object} obj
                 * @param {Object} self
                 * @return {undefined}
                 */
                function trim(obj, self) {
                    var i;
                    for (i in obj) {
                        if (i in self) {
                            if (!/^(alignSelf|height|width)$/.test(i)) {
                                obj[i] = self[i];
                            }
                        }
                    }
                }
                /** @type {function (HTMLElement): ?} */
                module.exports = init;
                /** @type {RegExp} */
                var reName = /([^\s:;]+)\s*:\s*([^;]+?)\s*(;|$)/g;
                var parseInt = $sanitize("./getComputedLength");
            }, {
                "./getComputedLength": 14
            }],
            16: [function ($sanitize, module, dataAndEvents) {
                /**
                 * @param {Element} element
                 * @return {?}
                 */
                function compile(element) {
                    /** @type {Array} */
                    var grid = [];
                    return init(element, grid), grid;
                }
                /**
                 * @param {Element} element
                 * @param {Array} grid
                 * @return {?}
                 */
                function init(element, grid) {
                    var el;
                    var result = f(element);
                    /** @type {Array} */
                    var eventPath = [];
                    /** @type {number} */
                    var i = -1;
                    for (; el = element.childNodes[++i];) {
                        /** @type {boolean} */
                        var limit = 3 === el.nodeType && !/^\s*$/.test(el.nodeValue);
                        if (result && limit) {
                            var text = el;
                            el = element.insertBefore(document.createElement("flex-item"), text);
                            el.appendChild(text);
                        }
                        if (el instanceof Element) {
                            var cur = init(el, grid);
                            if (result) {
                                /** @type {(CSSStyleDeclaration|null)} */
                                var style = el.style;
                                /** @type {string} */
                                style.display = "inline-block";
                                /** @type {string} */
                                style.position = "absolute";
                                cur.style = getElement(el).style;
                                eventPath.push(cur);
                            }
                        }
                    }
                    var data = {
                        element: element,
                        children: eventPath
                    };
                    return result && (data.style = getElement(element).style, grid.push(data)), data;
                }
                /**
                 * @param {Element} element
                 * @return {?}
                 */
                function f(element) {
                    /** @type {boolean} */
                    var elem = element instanceof Element;
                    var nType = elem && element.getAttribute("data-style");
                    var id = elem && (element.currentStyle && element.currentStyle["-js-display"]);
                    return rchecked.test(nType) || exclude.test(id);
                }
                /** @type {function (Element): ?} */
                module.exports = compile;
                var getElement = $sanitize("../read");
                /** @type {RegExp} */
                var rchecked = /(^|;)\s*display\s*:\s*(inline-)?flex\s*(;|$)/i;
                /** @type {RegExp} */
                var exclude = /^(inline-)?flex$/i;
            }, {
                "../read": 15
            }],
            17: [function ($filter, module, dataAndEvents) {
                /**
                 * @param {Object} self
                 * @return {undefined}
                 */
                function show(self) {
                    fn(self);
                    var s = self.element.style;
                    /** @type {Array} */
                    var match = "inline" === self.mainAxis ? ["main", "cross"] : ["cross", "main"];
                    /** @type {string} */
                    s.boxSizing = "content-box";
                    /** @type {string} */
                    s.display = "block";
                    /** @type {string} */
                    s.position = "relative";
                    s.width = max(self.flexStyle[match[0]] - self.flexStyle[match[0] + "InnerBefore"] - self.flexStyle[match[0] + "InnerAfter"] - self.flexStyle[match[0] + "BorderBefore"] - self.flexStyle[match[0] + "BorderAfter"]);
                    s.height = max(self.flexStyle[match[1]] - self.flexStyle[match[1] + "InnerBefore"] - self.flexStyle[match[1] + "InnerAfter"] - self.flexStyle[match[1] + "BorderBefore"] - self.flexStyle[match[1] + "BorderAfter"]);
                    var me;
                    /** @type {number} */
                    var index = -1;
                    for (; me = self.children[++index];) {
                        var style = me.element.style;
                        /** @type {Array} */
                        var a = "inline" === me.mainAxis ? ["main", "cross"] : ["cross", "main"];
                        /** @type {string} */
                        style.boxSizing = "content-box";
                        /** @type {string} */
                        style.display = "block";
                        /** @type {string} */
                        style.position = "absolute";
                        if ("auto" !== me.flexStyle[a[0]]) {
                            style.width = max(me.flexStyle[a[0]] - me.flexStyle[a[0] + "InnerBefore"] - me.flexStyle[a[0] + "InnerAfter"] - me.flexStyle[a[0] + "BorderBefore"] - me.flexStyle[a[0] + "BorderAfter"]);
                        }
                        if ("auto" !== me.flexStyle[a[1]]) {
                            style.height = max(me.flexStyle[a[1]] - me.flexStyle[a[1] + "InnerBefore"] - me.flexStyle[a[1] + "InnerAfter"] - me.flexStyle[a[1] + "BorderBefore"] - me.flexStyle[a[1] + "BorderAfter"]);
                        }
                        style.top = max(me.flexStyle[a[1] + "Start"]);
                        style.left = max(me.flexStyle[a[0] + "Start"]);
                        style.marginTop = max(me.flexStyle[a[1] + "Before"]);
                        style.marginRight = max(me.flexStyle[a[0] + "After"]);
                        style.marginBottom = max(me.flexStyle[a[1] + "After"]);
                        style.marginLeft = max(me.flexStyle[a[0] + "Before"]);
                    }
                }
                /**
                 * @param {number} obj
                 * @return {?}
                 */
                function max(obj) {
                    return "string" == typeof obj ? obj : Math.max(obj, 0) + "px";
                }
                /** @type {function (Object): undefined} */
                module.exports = show;
                var fn = $filter("../flexbox");
            }, {
                "../flexbox": 7
            }],
            18: [function (get, module, dataAndEvents) {
                /**
                 * @param {(Array|Int8Array|Uint8Array)} res
                 * @return {undefined}
                 */
                function one(res) {
                    var failuresLink;
                    /** @type {number} */
                    var resLength = -1;
                    for (; failuresLink = res[++resLength];) {
                        on(failuresLink);
                    }
                }
                /** @type {function ((Array|Int8Array|Uint8Array)): undefined} */
                module.exports = one;
                var on = get("../write");
            }, {
                "../write": 17
            }]
        }, {}, [13])(13);
    });
}, function (module, opt_obj, element) {
    var f;
    var JsDiff;
    !function (recurring, x) {
        /** @type {function (?, ?, ?): ?} */
        f = x;
        if (void 0 !== (JsDiff = "function" == typeof f ? f.call(opt_obj, element, opt_obj, module) : f)) {
            module.exports = JsDiff;
        }
    }(0, function (dataAndEvents, deepDataAndEvents, ignoreMethodDoesntExist) {
        /**
         * @param {?} dataAndEvents
         * @param {Function} method
         * @return {undefined}
         */
        function clone(dataAndEvents, method) {
            if (!(dataAndEvents instanceof method)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        /**
         * @param {Object} el
         * @return {?}
         */
        function offset(el) {
            var iterable = el.getBoundingClientRect();
            var box = {};
            var key;
            for (key in iterable) {
                box[key] = iterable[key];
            }
            if (el.ownerDocument !== document) {
                var failuresLink = el.ownerDocument.defaultView.frameElement;
                if (failuresLink) {
                    var innerPadding = offset(failuresLink);
                    box.top += innerPadding.top;
                    box.bottom += innerPadding.top;
                    box.left += innerPadding.left;
                    box.right += innerPadding.left;
                }
            }
            return box;
        }
        /**
         * @param {string} el
         * @return {?}
         */
        function init(el) {
            var first = getComputedStyle(el) || {};
            var i = first.position;
            /** @type {Array} */
            var matches = [];
            if ("fixed" === i) {
                return [el];
            }
            /** @type {string} */
            var node = el;
            for (; (node = node.parentNode) && (node && 1 === node.nodeType) ;) {
                var state = void 0;
                try {
                    state = getComputedStyle(node);
                } catch (t) {
                }
                if (void 0 === state || null === state) {
                    return matches.push(node), matches;
                }
                var s = state;
                var yt = s.overflow;
                var data = s.overflowX;
                if (/(auto|scroll)/.test(yt + s.overflowY + data)) {
                    if ("absolute" !== i || ["relative", "absolute", "fixed"].indexOf(state.position) >= 0) {
                        matches.push(node);
                    }
                }
            }
            return matches.push(el.ownerDocument.body), el.ownerDocument !== document && matches.push(el.ownerDocument.defaultView), matches;
        }
        /**
         * @return {undefined}
         */
        function fn() {
            if (element) {
                document.body.removeChild(element);
            }
            /** @type {null} */
            element = null;
        }
        /**
         * @param {Object} element
         * @return {?}
         */
        function getVisibleRectForElement(element) {
            var doc = void 0;
            if (element === document) {
                doc = document;
                element = document.documentElement;
            } else {
                doc = element.ownerDocument;
            }
            var docEl = doc.documentElement;
            var rect = offset(element);
            var bodyOffset = load();
            return rect.top -= bodyOffset.top, rect.left -= bodyOffset.left, void 0 === rect.width && (rect.width = document.body.scrollWidth - rect.left - rect.right), void 0 === rect.height && (rect.height = document.body.scrollHeight - rect.top - rect.bottom), rect.top = rect.top - docEl.clientTop, rect.left = rect.left - docEl.clientLeft, rect.right = doc.body.clientWidth - rect.width - rect.left, rect.bottom = doc.body.clientHeight - rect.height - rect.top, rect;
        }
        /**
         * @param {?} element
         * @return {?}
         */
        function listener(element) {
            return element.offsetParent || document.documentElement;
        }
        /**
         * @return {?}
         */
        function initialize() {
            if (ret) {
                return ret;
            }
            /** @type {Element} */
            var f = document.createElement("div");
            /** @type {string} */
            f.style.width = "100%";
            /** @type {string} */
            f.style.height = "200px";
            /** @type {Element} */
            var element = document.createElement("div");
            extend(element.style, {
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                visibility: "hidden",
                width: "200px",
                height: "150px",
                overflow: "hidden"
            });
            element.appendChild(f);
            document.body.appendChild(element);
            var a = f.offsetWidth;
            /** @type {string} */
            element.style.overflow = "scroll";
            var b = f.offsetWidth;
            if (a === b) {
                /** @type {number} */
                b = element.clientWidth;
            }
            document.body.removeChild(element);
            /** @type {number} */
            var diff = a - b;
            return ret = {
                width: diff,
                height: diff
            };
        }
        /**
         * @return {?}
         */
        function extend() {
            var object = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            /** @type {Array} */
            var missing = [];
            return Array.prototype.push.apply(missing, arguments), missing.slice(1).forEach(function (iterable) {
                if (iterable) {
                    var key;
                    for (key in iterable) {
                        if ({}.hasOwnProperty.call(iterable, key)) {
                            object[key] = iterable[key];
                        }
                    }
                }
            }), object;
        }
        /**
         * @param {string} name
         * @param {string} className
         * @return {undefined}
         */
        function removeClass(name, className) {
            if (void 0 !== name.classList) {
                className.split(" ").forEach(function (range) {
                    if (range.trim()) {
                        name.classList.remove(range);
                    }
                });
            } else {
                /** @type {RegExp} */
                var rclass = new RegExp("(^| )" + className.split(" ").join("|") + "( |$)", "gi");
                var sel = hasClass(name).replace(rclass, " ");
                find(name, sel);
            }
        }
        /**
         * @param {string} name
         * @param {string} className
         * @return {undefined}
         */
        function addClass(name, className) {
            if (void 0 !== name.classList) {
                className.split(" ").forEach(function (buf) {
                    if (buf.trim()) {
                        name.classList.add(buf);
                    }
                });
            } else {
                removeClass(name, className);
                /** @type {string} */
                var selector = hasClass(name) + " " + className;
                find(name, selector);
            }
        }
        /**
         * @param {string} node
         * @param {string} className
         * @return {?}
         */
        function _hasClass(node, className) {
            if (void 0 !== node.classList) {
                return node.classList.contains(className);
            }
            var nodeValue = hasClass(node);
            return (new RegExp("(^| )" + className + "( |$)", "gi")).test(nodeValue);
        }
        /**
         * @param {Node} node
         * @return {?}
         */
        function hasClass(node) {
            return node.className instanceof node.ownerDocument.defaultView.SVGAnimatedString ? node.className.baseVal : node.className;
        }
        /**
         * @param {Element} s
         * @param {string} selector
         * @return {undefined}
         */
        function find(s, selector) {
            s.setAttribute("class", selector);
        }
        /**
         * @param {string} node
         * @param {Array} arr
         * @param {Array} list
         * @return {undefined}
         */
        function cb(node, arr, list) {
            list.forEach(function (className) {
                if (-1 === arr.indexOf(className)) {
                    if (_hasClass(node, className)) {
                        removeClass(node, className);
                    }
                }
            });
            arr.forEach(function (className) {
                if (!_hasClass(node, className)) {
                    addClass(node, className);
                }
            });
        }
        /**
         * @param {?} dataAndEvents
         * @param {Function} method
         * @return {undefined}
         */
        function clone(dataAndEvents, method) {
            if (!(dataAndEvents instanceof method)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        /**
         * @param {Object} klass
         * @param {Object} extend
         * @return {undefined}
         */
        function create(klass, extend) {
            if ("function" != typeof extend && null !== extend) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof extend);
            }
            /** @type {Object} */
            klass.prototype = Object.create(extend && extend.prototype, {
                constructor: {
                    value: klass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (extend) {
                if (Object.setPrototypeOf) {
                    Object.setPrototypeOf(klass, extend);
                } else {
                    /** @type {Object} */
                    klass.__proto__ = extend;
                }
            }
        }
        /**
         * @param {?} a
         * @param {number} x
         * @return {?}
         */
        function isArray(a, x) {
            var b = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
            return a + b >= x && x >= a - b;
        }
        /**
         * @return {?}
         */
        function now() {
            return "undefined" != typeof performance && void 0 !== performance.now ? performance.now() : +new Date;
        }
        /**
         * @return {?}
         */
        function normalize() {
            var offset = {
                top: 0,
                left: 0
            };
            /** @type {number} */
            var l = arguments.length;
            /** @type {Array} */
            var args = Array(l);
            /** @type {number} */
            var i = 0;
            for (; i < l; i++) {
                args[i] = arguments[i];
            }
            return args.forEach(function (parentOffset) {
                var top = parentOffset.top;
                var left = parentOffset.left;
                if ("string" == typeof top) {
                    /** @type {number} */
                    top = parseFloat(top, 10);
                }
                if ("string" == typeof left) {
                    /** @type {number} */
                    left = parseFloat(left, 10);
                }
                offset.top += top;
                offset.left += left;
            }), offset;
        }
        /**
         * @param {?} style
         * @param {?} properties
         * @return {?}
         */
        function callback(style, properties) {
            return "string" == typeof style.left && (-1 !== style.left.indexOf("%") && (style.left = parseFloat(style.left, 10) / 100 * properties.width)), "string" == typeof style.top && (-1 !== style.top.indexOf("%") && (style.top = parseFloat(style.top, 10) / 100 * properties.height)), style;
        }
        /**
         * @param {?} event
         * @param {Object} el
         * @return {?}
         */
        function move(event, el) {
            return "scrollParent" === el ? el = event.scrollParents[0] : "window" === el && (el = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), el === document && (el = el.documentElement), void 0 !== el.nodeType && function () {
                var elem = el;
                var b = getVisibleRectForElement(el);
                var c = b;
                var s = getComputedStyle(el);
                if (el = [c.left, c.top, b.width + c.left, b.height + c.top], elem.ownerDocument !== document) {
                    var dv = elem.ownerDocument.defaultView;
                    el[0] += dv.pageXOffset;
                    el[1] += dv.pageYOffset;
                    el[2] += dv.pageXOffset;
                    el[3] += dv.pageYOffset;
                }
                positions.forEach(function (dir, propName) {
                    dir = dir[0].toUpperCase() + dir.substr(1);
                    if ("Top" === dir || "Left" === dir) {
                        el[propName] += parseFloat(s["border" + dir + "Width"]);
                    } else {
                        el[propName] -= parseFloat(s["border" + dir + "Width"]);
                    }
                });
            }(), el;
        }
        var onDocumentBody = function () {
            /**
             * @param {Function} object
             * @param {?} d
             * @return {undefined}
             */
            function defineProperty(object, d) {
                /** @type {number} */
                var i = 0;
                for (; i < d.length; i++) {
                    var desc = d[i];
                    desc.enumerable = desc.enumerable || false;
                    /** @type {boolean} */
                    desc.configurable = true;
                    if ("value" in desc) {
                        /** @type {boolean} */
                        desc.writable = true;
                    }
                    Object.defineProperty(object, desc.key, desc);
                }
            }
            return function (x, current, a) {
                return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
            };
        }();
        var settings = void 0;
        if (void 0 === settings) {
            settings = {
                modules: []
            };
        }
        /** @type {null} */
        var element = null;
        var _safe = function () {
            /** @type {number} */
            var t = 0;
            return function () {
                return ++t;
            };
        }();
        var els = {};
        /**
         * @return {?}
         */
        var load = function () {
            var el = element;
            if (!(el && document.body.contains(el))) {
                /** @type {Element} */
                el = document.createElement("div");
                el.setAttribute("data-tether-id", _safe());
                extend(el.style, {
                    top: 0,
                    left: 0,
                    position: "absolute"
                });
                document.body.appendChild(el);
                /** @type {Element} */
                element = el;
            }
            var i = el.getAttribute("data-tether-id");
            return void 0 === els[i] && (els[i] = offset(el), defer(function () {
                delete els[i];
            })), els[i];
        };
        /** @type {null} */
        var ret = null;
        /** @type {Array} */
        var eventPath = [];
        /**
         * @param {Function} parent
         * @return {undefined}
         */
        var defer = function (parent) {
            eventPath.push(parent);
        };
        /**
         * @return {undefined}
         */
        var flush = function () {
            var i = void 0;
            for (; i = eventPath.pop() ;) {
                i();
            }
        };
        var memory = function () {
            /**
             * @return {undefined}
             */
            function initialize() {
                clone(this, initialize);
            }
            return onDocumentBody(initialize, [{
                key: "on",
                /**
                 * @param {?} event
                 * @param {Function} handler
                 * @param {string} ctx
                 * @return {undefined}
                 */
                value: function (event, handler, ctx) {
                    var once = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                    if (void 0 === this.bindings) {
                        this.bindings = {};
                    }
                    if (void 0 === this.bindings[event]) {
                        /** @type {Array} */
                        this.bindings[event] = [];
                    }
                    this.bindings[event].push({
                        /** @type {Function} */
                        handler: handler,
                        ctx: ctx,
                        once: once
                    });
                }
            }, {
                key: "once",
                /**
                 * @param {string} action
                 * @param {Function} listener
                 * @param {?} data
                 * @return {undefined}
                 */
                value: function (action, listener, data) {
                    this.on(action, listener, data, true);
                }
            }, {
                key: "off",
                /**
                 * @param {?} event
                 * @param {number} handler
                 * @return {undefined}
                 */
                value: function (event, handler) {
                    if (void 0 !== this.bindings && void 0 !== this.bindings[event]) {
                        if (void 0 === handler) {
                            delete this.bindings[event];
                        } else {
                            /** @type {number} */
                            var i = 0;
                            for (; i < this.bindings[event].length;) {
                                if (this.bindings[event][i].handler === handler) {
                                    this.bindings[event].splice(i, 1);
                                } else {
                                    ++i;
                                }
                            }
                        }
                    }
                }
            }, {
                key: "trigger",
                /**
                 * @param {?} event
                 * @return {undefined}
                 */
                value: function (event) {
                    if (void 0 !== this.bindings && this.bindings[event]) {
                        /** @type {number} */
                        var i = 0;
                        /** @type {number} */
                        var $_len = arguments.length;
                        /** @type {Array} */
                        var args = Array($_len > 1 ? $_len - 1 : 0);
                        /** @type {number} */
                        var $_i = 1;
                        for (; $_i < $_len; $_i++) {
                            args[$_i - 1] = arguments[$_i];
                        }
                        for (; i < this.bindings[event].length;) {
                            var obj = this.bindings[event][i];
                            var handler = obj.handler;
                            var ctx = obj.ctx;
                            var terse = obj.once;
                            var context = ctx;
                            if (void 0 === context) {
                                context = this;
                            }
                            handler.apply(context, args);
                            if (terse) {
                                this.bindings[event].splice(i, 1);
                            } else {
                                ++i;
                            }
                        }
                    }
                }
            }]), initialize;
        }();
        settings.Utils = {
            /** @type {function (Object): ?} */
            getActualBoundingClientRect: offset,
            /** @type {function (string): ?} */
            getScrollParents: init,
            /** @type {function (Object): ?} */
            getBounds: getVisibleRectForElement,
            /** @type {function (?): ?} */
            getOffsetParent: listener,
            /** @type {function (): ?} */
            extend: extend,
            /** @type {function (string, string): undefined} */
            addClass: addClass,
            /** @type {function (string, string): undefined} */
            removeClass: removeClass,
            /** @type {function (string, string): ?} */
            hasClass: _hasClass,
            /** @type {function (string, Array, Array): undefined} */
            updateClasses: cb,
            /** @type {function (Function): undefined} */
            defer: defer,
            /** @type {function (): undefined} */
            flush: flush,
            uniqueId: _safe,
            Evented: memory,
            /** @type {function (): ?} */
            getScrollBarSize: initialize,
            /** @type {function (): undefined} */
            removeUtilElements: fn
        };
        var get = function () {
            /**
             * @param {?} second
             * @param {number} height
             * @return {?}
             */
            function add(second, height) {
                /** @type {Array} */
                var parent = [];
                /** @type {boolean} */
                var callback2 = true;
                /** @type {boolean} */
                var r = false;
                var bulk = void 0;
                try {
                    var p;
                    var self = second[Symbol.iterator]();
                    for (; !(callback2 = (p = self.next()).done) && (parent.push(p.value), !height || parent.length !== height) ; callback2 = true) {
                    }
                } catch (fn) {
                    /** @type {boolean} */
                    r = true;
                    bulk = fn;
                } finally {
                    try {
                        if (!callback2) {
                            if (self.return) {
                                self.return();
                            }
                        }
                    } finally {
                        if (r) {
                            throw bulk;
                        }
                    }
                }
                return parent;
            }
            return function (o, v) {
                if (Array.isArray(o)) {
                    return o;
                }
                if (Symbol.iterator in Object(o)) {
                    return add(o, v);
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        onDocumentBody = function () {
            /**
             * @param {Function} object
             * @param {?} d
             * @return {undefined}
             */
            function defineProperty(object, d) {
                /** @type {number} */
                var i = 0;
                for (; i < d.length; i++) {
                    var desc = d[i];
                    desc.enumerable = desc.enumerable || false;
                    /** @type {boolean} */
                    desc.configurable = true;
                    if ("value" in desc) {
                        /** @type {boolean} */
                        desc.writable = true;
                    }
                    Object.defineProperty(object, desc.key, desc);
                }
            }
            return function (x, current, a) {
                return current && defineProperty(x.prototype, current), a && defineProperty(x, a), x;
            };
        }();
        /**
         * @param {Object} bulk
         * @param {(Element|string)} target
         * @param {?} name
         * @return {?}
         */
        var defineProperty = function (bulk, target, name) {
            /** @type {boolean} */
            var i = true;
            for (; i;) {
                /** @type {Object} */
                var proto = bulk;
                /** @type {(Element|string)} */
                var uuid = target;
                var it = name;
                /** @type {boolean} */
                i = false;
                if (null === proto) {
                    proto = Function.prototype;
                }
                /** @type {(ObjectPropertyDescriptor|undefined)} */
                var obj = Object.getOwnPropertyDescriptor(proto, uuid);
                if (void 0 !== obj) {
                    if ("value" in obj) {
                        return obj.value;
                    }
                    /** @type {(function (): ?|undefined)} */
                    var ostring = obj.get;
                    if (void 0 === ostring) {
                        return;
                    }
                    return ostring.call(it);
                }
                /** @type {(Object|null)} */
                var fn = Object.getPrototypeOf(proto);
                if (null === fn) {
                    return;
                }
                /** @type {Object} */
                bulk = fn;
                target = uuid;
                name = it;
                /** @type {boolean} */
                i = true;
                obj = fn = void 0;
            }
        };
        if (void 0 === settings) {
            throw new Error("You must include the utils.js file before tether.js");
        }
        var options = settings.Utils;
        /** @type {function (string): ?} */
        init = options.getScrollParents;
        /** @type {function (Object): ?} */
        getVisibleRectForElement = options.getBounds;
        /** @type {function (?): ?} */
        listener = options.getOffsetParent;
        /** @type {function (): ?} */
        extend = options.extend;
        /** @type {function (string, string): undefined} */
        addClass = options.addClass;
        /** @type {function (string, string): undefined} */
        removeClass = options.removeClass;
        /** @type {function (string, Array, Array): undefined} */
        cb = options.updateClasses;
        /** @type {function (Function): undefined} */
        defer = options.defer;
        /** @type {function (): undefined} */
        flush = options.flush;
        /** @type {function (): ?} */
        initialize = options.getScrollBarSize;
        /** @type {function (): undefined} */
        fn = options.removeUtilElements;
        var prefixed = function () {
            if ("undefined" == typeof document) {
                return "";
            }
            /** @type {Element} */
            var elem = document.createElement("div");
            /** @type {Array} */
            var props = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"];
            /** @type {number} */
            var i = 0;
            for (; i < props.length; ++i) {
                var prop = props[i];
                if (void 0 !== elem.style[prop]) {
                    return prop;
                }
            }
        }();
        /** @type {Array} */
        var xs = [];
        /**
         * @return {undefined}
         */
        var data = function () {
            xs.forEach(function ($position) {
                $position.position(false);
            });
            flush();
        };
        !function () {
            /** @type {null} */
            var last = null;
            /** @type {null} */
            var maxConcurrent = null;
            /** @type {null} */
            var timeout_id = null;
            /**
             * @return {?}
             */
            var completed = function poll() {
                if (void 0 !== maxConcurrent && maxConcurrent > 16) {
                    return maxConcurrent = Math.min(maxConcurrent - 16, 250), void (timeout_id = setTimeout(poll, 250));
                }
                if (!(void 0 !== last && now() - last < 10)) {
                    if (null != timeout_id) {
                        clearTimeout(timeout_id);
                        /** @type {null} */
                        timeout_id = null;
                    }
                    last = now();
                    data();
                    /** @type {number} */
                    maxConcurrent = now() - last;
                }
            };
            if ("undefined" != typeof window) {
                if (void 0 !== window.addEventListener) {
                    ["resize", "scroll", "touchmove"].forEach(function (eventName) {
                        window.addEventListener(eventName, completed);
                    });
                }
            }
        }();
        var SIDES = {
            center: "center",
            left: "right",
            right: "left"
        };
        var position = {
            middle: "middle",
            top: "bottom",
            bottom: "top"
        };
        var re = {
            top: 0,
            left: 0,
            middle: "50%",
            center: "50%",
            bottom: "100%",
            right: "100%"
        };
        /**
         * @param {?} cfg
         * @param {?} pointer
         * @return {?}
         */
        var update = function (cfg, pointer) {
            var left = cfg.left;
            var top = cfg.top;
            return "auto" === left && (left = SIDES[pointer.left]), "auto" === top && (top = position[pointer.top]), {
                left: left,
                top: top
            };
        };
        /**
         * @param {?} o
         * @return {?}
         */
        var handleEvents = function (o) {
            var l = o.left;
            var pos = o.top;
            return void 0 !== re[o.left] && (l = re[o.left]), void 0 !== re[o.top] && (pos = re[o.top]), {
                left: l,
                top: pos
            };
        };
        /**
         * @param {?} rules
         * @return {?}
         */
        var func = function (rules) {
            var context = rules.split(" ");
            var value = get(context, 2);
            return {
                top: value[0],
                left: value[1]
            };
        };
        /** @type {function (?): ?} */
        var white = func;
        var me = function (options) {
            /**
             * @param {?} options
             * @return {undefined}
             */
            function initialize(options) {
                var uniqs = this;
                clone(this, initialize);
                defineProperty(Object.getPrototypeOf(initialize.prototype), "constructor", this).call(this);
                this.position = this.position.bind(this);
                xs.push(this);
                /** @type {Array} */
                this.history = [];
                this.setOptions(options, false);
                settings.modules.forEach(function (module) {
                    if (void 0 !== module.initialize) {
                        module.initialize.call(uniqs);
                    }
                });
                this.position();
            }
            return create(initialize, options), onDocumentBody(initialize, [{
                key: "getClass",
                /**
                 * @return {?}
                 */
                value: function () {
                    var index = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0];
                    var classes = this.options.classes;
                    return void 0 !== classes && classes[index] ? this.options.classes[index] : this.options.classPrefix ? this.options.classPrefix + "-" + index : index;
                }
            }, {
                key: "setOptions",
                /**
                 * @param {?} options
                 * @return {undefined}
                 */
                value: function (options) {
                    var values = this;
                    var lock = arguments.length <= 1 || (void 0 === arguments[1] || arguments[1]);
                    var defaults = {
                        offset: "0 0",
                        targetOffset: "0 0",
                        targetAttachment: "auto auto",
                        classPrefix: "tether"
                    };
                    this.options = extend(defaults, options);
                    var o = this.options;
                    var el = o.element;
                    var target = o.target;
                    var oL = o.targetModifier;
                    if (this.element = el, this.target = target, this.targetModifier = oL, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (i) {
                      if (void 0 === values[i]) {
                        throw new Error("Tether Error: Both element and target must be defined");
                    }
                      if (void 0 !== values[i].jquery) {
                        values[i] = values[i][0];
                    } else {
                        if ("string" == typeof values[i]) {
                        /** @type {(Element|null)} */
                          values[i] = document.querySelector(values[i]);
                    }
                    }
                    }), addClass(this.element, this.getClass("element")), false !== this.options.addTargetClasses && addClass(this.target, this.getClass("target")), !this.options.attachment) {
                        throw new Error("Tether Error: You must provide an attachment");
                    }
                    this.targetAttachment = white(this.options.targetAttachment);
                    this.attachment = white(this.options.attachment);
                    this.offset = func(this.options.offset);
                    this.targetOffset = func(this.options.targetOffset);
                    if (void 0 !== this.scrollParents) {
                        this.disable();
                    }
                    if ("scroll-handle" === this.targetModifier) {
                        /** @type {Array} */
                        this.scrollParents = [this.target];
                    } else {
                        this.scrollParents = init(this.target);
                    }
                    if (false !== this.options.enabled) {
                        this.enable(lock);
                    }
                }
            }, {
                key: "getTargetBounds",
                /**
                 * @return {?}
                 */
                value: function () {
                    if (void 0 === this.targetModifier) {
                        return getVisibleRectForElement(this.target);
                    }
                    if ("visible" === this.targetModifier) {
                        if (this.target === document.body) {
                            return {
                                top: pageYOffset,
                                left: pageXOffset,
                                height: innerHeight,
                                width: innerWidth
                            };
                        }
                        var rect = getVisibleRectForElement(this.target);
                        var style = {
                            height: rect.height,
                            width: rect.width,
                            top: rect.top,
                            left: rect.left
                        };
                        return style.height = Math.min(style.height, rect.height - (pageYOffset - rect.top)), style.height = Math.min(style.height, rect.height - (rect.top + rect.height - (pageYOffset + innerHeight))), style.height = Math.min(innerHeight, style.height), style.height -= 2, style.width = Math.min(style.width, rect.width - (pageXOffset - rect.left)), style.width = Math.min(style.width, rect.width - (rect.left + rect.width - (pageXOffset + innerWidth))), style.width = Math.min(innerWidth, style.width),
                        style.width -= 2, style.top < pageYOffset && (style.top = pageYOffset), style.left < pageXOffset && (style.left = pageXOffset), style;
                    }
                    if ("scroll-handle" === this.targetModifier) {
                        rect = void 0;
                        var el = this.target;
                        if (el === document.body) {
                            /** @type {Element} */
                            el = document.documentElement;
                            rect = {
                                left: pageXOffset,
                                top: pageYOffset,
                                height: innerHeight,
                                width: innerWidth
                            };
                        } else {
                            rect = getVisibleRectForElement(el);
                        }
                        var css = getComputedStyle(el);
                        /** @type {boolean} */
                        var r = el.scrollWidth > el.clientWidth || ([css.overflow, css.overflowX].indexOf("scroll") >= 0 || this.target !== document.body);
                        /** @type {number} */
                        var clientY = 0;
                        if (r) {
                            /** @type {number} */
                            clientY = 15;
                        }
                        /** @type {number} */
                        var y = rect.height - parseFloat(css.borderTopWidth) - parseFloat(css.borderBottomWidth) - clientY;
                        style = {
                            width: 15,
                            height: 0.975 * y * (y / el.scrollHeight),
                            left: rect.left + rect.width - parseFloat(css.borderLeftWidth) - 15
                        };
                        /** @type {number} */
                        var height = 0;
                        if (y < 408) {
                            if (this.target === document.body) {
                                /** @type {number} */
                                height = -1.1E-4 * Math.pow(y, 2) - 0.00727 * y + 22.58;
                            }
                        }
                        if (this.target !== document.body) {
                            /** @type {number} */
                            style.height = Math.max(style.height, 24);
                        }
                        /** @type {number} */
                        var quadWidth = this.target.scrollTop / (el.scrollHeight - y);
                        return style.top = quadWidth * (y - style.height - height) + rect.top + parseFloat(css.borderTopWidth), this.target === document.body && (style.height = Math.max(style.height, 24)), style;
                    }
                }
            }, {
                key: "clearCache",
                /**
                 * @return {undefined}
                 */
                value: function () {
                    this._cache = {};
                }
            }, {
                key: "cache",
                /**
                 * @param {?} chr
                 * @param {Function} newValue
                 * @return {?}
                 */
                value: function (chr, newValue) {
                    return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[chr] && (this._cache[chr] = newValue.call(this)), this._cache[chr];
                }
            }, {
                key: "enable",
                /**
                 * @return {undefined}
                 */
                value: function () {
                    var event = this;
                    var e = arguments.length <= 0 || (void 0 === arguments[0] || arguments[0]);
                    if (false !== this.options.addTargetClasses) {
                        addClass(this.target, this.getClass("enabled"));
                    }
                    addClass(this.element, this.getClass("enabled"));
                    /** @type {boolean} */
                    this.enabled = true;
                    this.scrollParents.forEach(function (element) {
                        if (element !== event.target.ownerDocument) {
                            element.addEventListener("scroll", event.position);
                        }
                    });
                    if (e) {
                        this.position();
                    }
                }
            }, {
                key: "disable",
                /**
                 * @return {undefined}
                 */
                value: function () {
                    var self = this;
                    removeClass(this.target, this.getClass("enabled"));
                    removeClass(this.element, this.getClass("enabled"));
                    /** @type {boolean} */
                    this.enabled = false;
                    if (void 0 !== this.scrollParents) {
                        this.scrollParents.forEach(function ($window) {
                            $window.removeEventListener("scroll", self.position);
                        });
                    }
                }
            }, {
                key: "destroy",
                /**
                 * @return {undefined}
                 */
                value: function () {
                    var bup = this;
                    this.disable();
                    xs.forEach(function (a, x) {
                        if (a === bup) {
                            xs.splice(x, 1);
                        }
                    });
                    if (0 === xs.length) {
                        fn();
                    }
                }
            }, {
                key: "updateAttachClasses",
                /**
                 * @param {Node} from
                 * @param {Object} end
                 * @return {undefined}
                 */
                value: function (from, end) {
                    var self = this;
                    from = from || this.attachment;
                    end = end || this.targetAttachment;
                    /** @type {Array} */
                    var props = ["left", "top", "bottom", "right", "middle", "center"];
                    if (void 0 !== this._addAttachClasses) {
                        if (this._addAttachClasses.length) {
                            this._addAttachClasses.splice(0, this._addAttachClasses.length);
                        }
                    }
                    if (void 0 === this._addAttachClasses) {
                        /** @type {Array} */
                        this._addAttachClasses = [];
                    }
                    var eventPath = this._addAttachClasses;
                    if (from.top) {
                        eventPath.push(this.getClass("element-attached") + "-" + from.top);
                    }
                    if (from.left) {
                        eventPath.push(this.getClass("element-attached") + "-" + from.left);
                    }
                    if (end.top) {
                        eventPath.push(this.getClass("target-attached") + "-" + end.top);
                    }
                    if (end.left) {
                        eventPath.push(this.getClass("target-attached") + "-" + end.left);
                    }
                    /** @type {Array} */
                    var files = [];
                    props.forEach(function (file) {
                        files.push(self.getClass("element-attached") + "-" + file);
                        files.push(self.getClass("target-attached") + "-" + file);
                    });
                    defer(function () {
                        if (void 0 !== self._addAttachClasses) {
                            cb(self.element, self._addAttachClasses, files);
                            if (false !== self.options.addTargetClasses) {
                                cb(self.target, self._addAttachClasses, files);
                            }
                            delete self._addAttachClasses;
                        }
                    });
                }
            }, {
                key: "position",
                /**
                 * @return {?}
                 */
                value: function () {
                    var self = this;
                    var e = arguments.length <= 0 || (void 0 === arguments[0] || arguments[0]);
                    if (this.enabled) {
                        this.clearCache();
                        var a = update(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, a);
                        var element = this.cache("element-bounds", function () {
                            return getVisibleRectForElement(self.element);
                        });
                        var originalWidth = element.width;
                        var originalHeight = element.height;
                        if (0 === originalWidth && (0 === originalHeight && void 0 !== this.lastSize)) {
                            var preloader = this.lastSize;
                            originalWidth = preloader.width;
                            originalHeight = preloader.height;
                        } else {
                            this.lastSize = {
                                width: originalWidth,
                                height: originalHeight
                            };
                        }
                        var offset = this.cache("target-bounds", function () {
                            return self.getTargetBounds();
                        });
                        var start = offset;
                        var ret = callback(handleEvents(this.attachment), {
                            width: originalWidth,
                            height: originalHeight
                        });
                        var position = callback(handleEvents(a), start);
                        var value = callback(this.offset, {
                            width: originalWidth,
                            height: originalHeight
                        });
                        var parentName = callback(this.targetOffset, start);
                        ret = normalize(ret, value);
                        position = normalize(position, parentName);
                        /** @type {number} */
                        var l = offset.left + position.left - ret.left;
                        /** @type {number} */
                        var n = offset.top + position.top - ret.top;
                        /** @type {number} */
                        var j = 0;
                        for (; j < settings.modules.length; ++j) {
                            var rule = settings.modules[j];
                            var o = rule.position.call(this, {
                                left: l,
                                top: n,
                                targetAttachment: a,
                                targetPos: offset,
                                elementPos: element,
                                offset: ret,
                                targetOffset: position,
                                manualOffset: value,
                                manualTargetOffset: parentName,
                                scrollbarSize: relativeRect,
                                attachment: this.attachment
                            });
                            if (false === o) {
                                return false;
                            }
                            if (void 0 !== o) {
                                if ("object" == typeof o) {
                                    n = o.top;
                                    l = o.left;
                                }
                            }
                        }
                        var t = {
                            page: {
                                top: n,
                                left: l
                            },
                            viewport: {
                                top: n - pageYOffset,
                                bottom: pageYOffset - n - originalHeight + innerHeight,
                                left: l - pageXOffset,
                                right: pageXOffset - l - originalWidth + innerWidth
                            }
                        };
                        var doc = this.target.ownerDocument;
                        var parent = doc.defaultView;
                        var relativeRect = void 0;
                        return parent.innerHeight > doc.documentElement.clientHeight && (relativeRect = this.cache("scrollbar-size", initialize), t.viewport.bottom -= relativeRect.height), parent.innerWidth > doc.documentElement.clientWidth && (relativeRect = this.cache("scrollbar-size", initialize), t.viewport.right -= relativeRect.width), -1 !== ["", "static"].indexOf(doc.body.style.position) && -1 !== ["", "static"].indexOf(doc.body.parentElement.style.position) || (t.page.bottom = doc.body.scrollHeight -
                        n - originalHeight, t.page.right = doc.body.scrollWidth - l - originalWidth), void 0 !== this.options.optimizations && (false !== this.options.optimizations.moveElement && (void 0 === this.targetModifier && function () {
                            var e = self.cache("target-offsetparent", function () {
                                return listener(self.target);
                            });
                            var bounds = self.cache("target-offsetparent-bounds", function () {
                                return getVisibleRectForElement(e);
                            });
                            var styles = getComputedStyle(e);
                            var b2 = bounds;
                            var r = {};
                            if (["Top", "Left", "Bottom", "Right"].forEach(function (b) {
                                /** @type {number} */
                              r[b.toLowerCase()] = parseFloat(styles["border" + b + "Width"]);
                            }), bounds.right = doc.body.scrollWidth - bounds.left - b2.width + r.right, bounds.bottom = doc.body.scrollHeight - bounds.top - b2.height + r.bottom, t.page.top >= bounds.top + r.top && (t.page.bottom >= bounds.bottom && (t.page.left >= bounds.left + r.left && t.page.right >= bounds.right))) {
                                var top = e.scrollTop;
                                var left = e.scrollLeft;
                                t.offset = {
                                    top: t.page.top - bounds.top + top - r.top,
                                    left: t.page.left - bounds.left + left - r.left
                                };
                            }
                        }())), this.move(t), this.history.unshift(t), this.history.length > 3 && this.history.pop(), e && flush(), true;
                    }
                }
            }, {
                key: "move",
                /**
                 * @param {Object} result
                 * @return {undefined}
                 */
                value: function (result) {
                    var self = this;
                    if (void 0 !== this.element.parentNode) {
                        var data = {};
                        var id;
                        for (id in result) {
                            data[id] = {};
                            var name;
                            for (name in result[id]) {
                                /** @type {boolean} */
                                var o = false;
                                /** @type {number} */
                                var i = 0;
                                for (; i < this.history.length; ++i) {
                                    var listeners = this.history[i];
                                    if (void 0 !== listeners[id] && !isArray(listeners[id][name], result[id][name])) {
                                        /** @type {boolean} */
                                        o = true;
                                        break;
                                    }
                                }
                                if (!o) {
                                    /** @type {boolean} */
                                    data[id][name] = true;
                                }
                            }
                        }
                        var style = {
                            top: "",
                            left: "",
                            right: "",
                            bottom: ""
                        };
                        /**
                         * @param {?} _
                         * @param {?} frame
                         * @return {undefined}
                         */
                        var callback = function (_, frame) {
                            if (false !== (void 0 !== self.options.optimizations ? self.options.optimizations.gpu : null)) {
                                var minY = void 0;
                                var xPos = void 0;
                                if (_.top) {
                                    /** @type {number} */
                                    style.top = 0;
                                    minY = frame.top;
                                } else {
                                    /** @type {number} */
                                    style.bottom = 0;
                                    /** @type {number} */
                                    minY = -frame.bottom;
                                }
                                if (_.left) {
                                    /** @type {number} */
                                    style.left = 0;
                                    xPos = frame.left;
                                } else {
                                    /** @type {number} */
                                    style.right = 0;
                                    /** @type {number} */
                                    xPos = -frame.right;
                                }
                                if (window.matchMedia) {
                                    if (!window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches) {
                                        if (!window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches) {
                                            /** @type {number} */
                                            xPos = Math.round(xPos);
                                            /** @type {number} */
                                            minY = Math.round(minY);
                                        }
                                    }
                                }
                                /** @type {string} */
                                style[prefixed] = "translateX(" + xPos + "px) translateY(" + minY + "px)";
                                if ("msTransform" !== prefixed) {
                                    style[prefixed] += " translateZ(0)";
                                }
                            } else {
                                if (_.top) {
                                    /** @type {string} */
                                    style.top = frame.top + "px";
                                } else {
                                    /** @type {string} */
                                    style.bottom = frame.bottom + "px";
                                }
                                if (_.left) {
                                    /** @type {string} */
                                    style.left = frame.left + "px";
                                } else {
                                    /** @type {string} */
                                    style.right = frame.right + "px";
                                }
                            }
                        };
                        /** @type {boolean} */
                        var d = false;
                        if ((data.page.top || data.page.bottom) && (data.page.left || data.page.right) ? (style.position = "absolute", callback(data.page, result.page)) : (data.viewport.top || data.viewport.bottom) && (data.viewport.left || data.viewport.right) ? (style.position = "fixed", callback(data.viewport, result.viewport)) : void 0 !== data.offset && (data.offset.top && data.offset.left) ? function () {
                            /** @type {string} */
                          style.position = "absolute";
                          var body = self.cache("target-offsetparent", function () {
                            return listener(self.target);
                        });
                          if (listener(self.element) !== body) {
                            defer(function () {
                              self.element.parentNode.removeChild(self.element);
                              body.appendChild(self.element);
                        });
                        }
                          callback(data.offset, result.offset);
                            /** @type {boolean} */
                          d = true;
                        }() : (style.position = "absolute", callback({
                            top: true,
                            left: true
                        }, result.page)), !d) {
                            if (this.options.bodyElement) {
                                this.options.bodyElement.appendChild(this.element);
                            } else {
                                /** @type {boolean} */
                                var p = true;
                                var parent = this.element.parentNode;
                                for (; parent && (1 === parent.nodeType && "BODY" !== parent.tagName) ;) {
                                    if ("static" !== getComputedStyle(parent).position) {
                                        /** @type {boolean} */
                                        p = false;
                                        break;
                                    }
                                    parent = parent.parentNode;
                                }
                                if (!p) {
                                    this.element.parentNode.removeChild(this.element);
                                    this.element.ownerDocument.body.appendChild(this.element);
                                }
                            }
                        }
                        var settings = {};
                        /** @type {boolean} */
                        var g = false;
                        for (name in style) {
                            var value = style[name];
                            if (this.element.style[name] !== value) {
                                /** @type {boolean} */
                                g = true;
                                settings[name] = value;
                            }
                        }
                        if (g) {
                            defer(function () {
                                extend(self.element.style, settings);
                                self.trigger("repositioned");
                            });
                        }
                    }
                }
            }]), initialize;
        }(memory);
        /** @type {Array} */
        me.modules = [];
        /** @type {function (): undefined} */
        settings.position = data;
        var style = extend(me, settings);
        get = function () {
            /**
             * @param {?} second
             * @param {number} height
             * @return {?}
             */
            function add(second, height) {
                /** @type {Array} */
                var parent = [];
                /** @type {boolean} */
                var callback2 = true;
                /** @type {boolean} */
                var r = false;
                var bulk = void 0;
                try {
                    var p;
                    var self = second[Symbol.iterator]();
                    for (; !(callback2 = (p = self.next()).done) && (parent.push(p.value), !height || parent.length !== height) ; callback2 = true) {
                    }
                } catch (fn) {
                    /** @type {boolean} */
                    r = true;
                    bulk = fn;
                } finally {
                    try {
                        if (!callback2) {
                            if (self.return) {
                                self.return();
                            }
                        }
                    } finally {
                        if (r) {
                            throw bulk;
                        }
                    }
                }
                return parent;
            }
            return function (o, v) {
                if (Array.isArray(o)) {
                    return o;
                }
                if (Symbol.iterator in Object(o)) {
                    return add(o, v);
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        options = settings.Utils;
        /** @type {function (Object): ?} */
        getVisibleRectForElement = options.getBounds;
        /** @type {function (): ?} */
        extend = options.extend;
        /** @type {function (string, Array, Array): undefined} */
        cb = options.updateClasses;
        /** @type {function (Function): undefined} */
        defer = options.defer;
        /** @type {Array} */
        var positions = ["left", "top", "right", "bottom"];
        settings.modules.push({
            /**
             * @param {Object} node
             * @return {?}
             */
            position: function (node) {
                var obj = this;
                var top = node.top;
                var val = node.left;
                var opts = node.targetAttachment;
                if (!this.options.constraints) {
                    return true;
                }
                var el = this.cache("element-bounds", function () {
                    return getVisibleRectForElement(obj.element);
                });
                var height = el.height;
                var step = el.width;
                if (0 === step && (0 === height && void 0 !== this.lastSize)) {
                    var options = this.lastSize;
                    step = options.width;
                    height = options.height;
                }
                var animations = this.cache("target-bounds", function () {
                    return obj.getTargetBounds();
                });
                var alignToHeight = animations.height;
                var max = animations.width;
                /** @type {Array} */
                var list = [this.getClass("pinned"), this.getClass("out-of-bounds")];
                this.options.constraints.forEach(function (node) {
                    var arg = node.outOfBoundsClass;
                    var copies = node.pinnedClass;
                    if (arg) {
                        list.push(arg);
                    }
                    if (copies) {
                        list.push(copies);
                    }
                });
                list.forEach(function (style) {
                    ["left", "top", "right", "bottom"].forEach(function (edge) {
                        list.push(style + "-" + edge);
                    });
                });
                /** @type {Array} */
                var args = [];
                var style = extend({}, opts);
                var self = extend({}, this.attachment);
                return this.options.constraints.forEach(function (that) {
                    var data = that.to;
                    var current = that.attachment;
                    var type = that.pin;
                    if (void 0 === current) {
                        /** @type {string} */
                        current = "";
                    }
                    var node = void 0;
                    var element = void 0;
                    if (current.indexOf(" ") >= 0) {
                        var tag = current.split(" ");
                        var elements = get(tag, 2);
                        element = elements[0];
                        node = elements[1];
                    } else {
                        node = element = current;
                    }
                    var d = move(obj, data);
                    if (!("target" !== element && "both" !== element)) {
                        if (top < d[1]) {
                            if ("top" === style.top) {
                                top += alignToHeight;
                                /** @type {string} */
                                style.top = "bottom";
                            }
                        }
                        if (top + height > d[3]) {
                            if ("bottom" === style.top) {
                                top -= alignToHeight;
                                /** @type {string} */
                                style.top = "top";
                            }
                        }
                    }
                    if ("together" === element) {
                        if ("top" === style.top) {
                            if ("bottom" === self.top && top < d[1]) {
                                top += alignToHeight;
                                /** @type {string} */
                                style.top = "bottom";
                                top += height;
                                /** @type {string} */
                                self.top = "top";
                            } else {
                                if ("top" === self.top) {
                                    if (top + height > d[3]) {
                                        if (top - (height - alignToHeight) >= d[1]) {
                                            top -= height - alignToHeight;
                                            /** @type {string} */
                                            style.top = "bottom";
                                            /** @type {string} */
                                            self.top = "bottom";
                                        }
                                    }
                                }
                            }
                        }
                        if ("bottom" === style.top) {
                            if ("top" === self.top && top + height > d[3]) {
                                top -= alignToHeight;
                                /** @type {string} */
                                style.top = "top";
                                top -= height;
                                /** @type {string} */
                                self.top = "bottom";
                            } else {
                                if ("bottom" === self.top) {
                                    if (top < d[1]) {
                                        if (top + (2 * height - alignToHeight) <= d[3]) {
                                            top += height - alignToHeight;
                                            /** @type {string} */
                                            style.top = "top";
                                            /** @type {string} */
                                            self.top = "top";
                                        }
                                    }
                                }
                            }
                        }
                        if ("middle" === style.top) {
                            if (top + height > d[3] && "top" === self.top) {
                                top -= height;
                                /** @type {string} */
                                self.top = "bottom";
                            } else {
                                if (top < d[1]) {
                                    if ("bottom" === self.top) {
                                        top += height;
                                        /** @type {string} */
                                        self.top = "top";
                                    }
                                }
                            }
                        }
                    }
                    if (!("target" !== node && "both" !== node)) {
                        if (val < d[0]) {
                            if ("left" === style.left) {
                                val += max;
                                /** @type {string} */
                                style.left = "right";
                            }
                        }
                        if (val + step > d[2]) {
                            if ("right" === style.left) {
                                val -= max;
                                /** @type {string} */
                                style.left = "left";
                            }
                        }
                    }
                    if ("together" === node) {
                        if (val < d[0] && "left" === style.left) {
                            if ("right" === self.left) {
                                val += max;
                                /** @type {string} */
                                style.left = "right";
                                val += step;
                                /** @type {string} */
                                self.left = "left";
                            } else {
                                if ("left" === self.left) {
                                    val += max;
                                    /** @type {string} */
                                    style.left = "right";
                                    val -= step;
                                    /** @type {string} */
                                    self.left = "right";
                                }
                            }
                        } else {
                            if (val + step > d[2] && "right" === style.left) {
                                if ("left" === self.left) {
                                    val -= max;
                                    /** @type {string} */
                                    style.left = "left";
                                    val -= step;
                                    /** @type {string} */
                                    self.left = "right";
                                } else {
                                    if ("right" === self.left) {
                                        val -= max;
                                        /** @type {string} */
                                        style.left = "left";
                                        val += step;
                                        /** @type {string} */
                                        self.left = "left";
                                    }
                                }
                            } else {
                                if ("center" === style.left) {
                                    if (val + step > d[2] && "left" === self.left) {
                                        val -= step;
                                        /** @type {string} */
                                        self.left = "right";
                                    } else {
                                        if (val < d[0]) {
                                            if ("right" === self.left) {
                                                val += step;
                                                /** @type {string} */
                                                self.left = "left";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (!("element" !== element && "both" !== element)) {
                        if (top < d[1]) {
                            if ("bottom" === self.top) {
                                top += height;
                                /** @type {string} */
                                self.top = "top";
                            }
                        }
                        if (top + height > d[3]) {
                            if ("top" === self.top) {
                                top -= height;
                                /** @type {string} */
                                self.top = "bottom";
                            }
                        }
                    }
                    if (!("element" !== node && "both" !== node)) {
                        if (val < d[0]) {
                            if ("right" === self.left) {
                                val += step;
                                /** @type {string} */
                                self.left = "left";
                            } else {
                                if ("center" === self.left) {
                                    val += step / 2;
                                    /** @type {string} */
                                    self.left = "left";
                                }
                            }
                        }
                        if (val + step > d[2]) {
                            if ("left" === self.left) {
                                val -= step;
                                /** @type {string} */
                                self.left = "right";
                            } else {
                                if ("center" === self.left) {
                                    val -= step / 2;
                                    /** @type {string} */
                                    self.left = "right";
                                }
                            }
                        }
                    }
                    if ("string" == typeof type) {
                        /** @type {Array.<?>} */
                        type = type.split(",").map(function (buf) {
                            return buf.trim();
                        });
                    } else {
                        if (true === type) {
                            /** @type {Array} */
                            type = ["top", "left", "right", "bottom"];
                        }
                    }
                    type = type || [];
                    /** @type {Array} */
                    var left = [];
                    /** @type {Array} */
                    var aTiles = [];
                    if (top < d[1]) {
                        if (type.indexOf("top") >= 0) {
                            top = d[1];
                            left.push("top");
                        } else {
                            aTiles.push("top");
                        }
                    }
                    if (top + height > d[3]) {
                        if (type.indexOf("bottom") >= 0) {
                            /** @type {number} */
                            top = d[3] - height;
                            left.push("bottom");
                        } else {
                            aTiles.push("bottom");
                        }
                    }
                    if (val < d[0]) {
                        if (type.indexOf("left") >= 0) {
                            val = d[0];
                            left.push("left");
                        } else {
                            aTiles.push("left");
                        }
                    }
                    if (val + step > d[2]) {
                        if (type.indexOf("right") >= 0) {
                            /** @type {number} */
                            val = d[2] - step;
                            left.push("right");
                        } else {
                            aTiles.push("right");
                        }
                    }
                    if (left.length) {
                        (function () {
                            var arg = void 0;
                            arg = void 0 !== obj.options.pinnedClass ? obj.options.pinnedClass : obj.getClass("pinned");
                            args.push(arg);
                            left.forEach(function (type) {
                                args.push(arg + "-" + type);
                            });
                        })();
                    }
                    if (aTiles.length) {
                        (function () {
                            var arg = void 0;
                            arg = void 0 !== obj.options.outOfBoundsClass ? obj.options.outOfBoundsClass : obj.getClass("out-of-bounds");
                            args.push(arg);
                            aTiles.forEach(function (type) {
                                args.push(arg + "-" + type);
                            });
                        })();
                    }
                    if (left.indexOf("left") >= 0 || left.indexOf("right") >= 0) {
                        /** @type {boolean} */
                        self.left = style.left = false;
                    }
                    if (left.indexOf("top") >= 0 || left.indexOf("bottom") >= 0) {
                        /** @type {boolean} */
                        self.top = style.top = false;
                    }
                    if (!(style.top === opts.top && (style.left === opts.left && (self.top === obj.attachment.top && self.left === obj.attachment.left)))) {
                        obj.updateAttachClasses(self, style);
                        obj.trigger("update", {
                            attachment: self,
                            targetAttachment: style
                        });
                    }
                }), defer(function () {
                    if (false !== obj.options.addTargetClasses) {
                        cb(obj.target, args, list);
                    }
                    cb(obj.element, args, list);
                }), {
                    top: top,
                    left: val
                };
            }
        });
        options = settings.Utils;
        /** @type {function (Object): ?} */
        getVisibleRectForElement = options.getBounds;
        /** @type {function (string, Array, Array): undefined} */
        cb = options.updateClasses;
        /** @type {function (Function): undefined} */
        defer = options.defer;
        settings.modules.push({
            /**
             * @param {Object} offset
             * @return {?}
             */
            position: function (offset) {
                var self = this;
                var top = offset.top;
                var l = offset.left;
                var div = this.cache("element-bounds", function () {
                    return getVisibleRectForElement(self.element);
                });
                var height = div.height;
                var b = div.width;
                var bounds = this.getTargetBounds();
                var y = top + height;
                var r = l + b;
                /** @type {Array} */
                var add = [];
                if (top <= bounds.bottom) {
                    if (y >= bounds.top) {
                        ["left", "right"].forEach(function (model) {
                            var i = bounds[model];
                            if (!(i !== l && i !== r)) {
                                add.push(model);
                            }
                        });
                    }
                }
                if (l <= bounds.right) {
                    if (r >= bounds.left) {
                        ["top", "bottom"].forEach(function (prop) {
                            var x = bounds[prop];
                            if (!(x !== top && x !== y)) {
                                add.push(prop);
                            }
                        });
                    }
                }
                /** @type {Array} */
                var files = [];
                /** @type {Array} */
                var results = [];
                /** @type {Array} */
                var positions = ["left", "top", "right", "bottom"];
                return files.push(this.getClass("abutted")), positions.forEach(function (file) {
                    files.push(self.getClass("abutted") + "-" + file);
                }), add.length && results.push(this.getClass("abutted")), add.forEach(function (value) {
                    results.push(self.getClass("abutted") + "-" + value);
                }), defer(function () {
                    if (false !== self.options.addTargetClasses) {
                        cb(self.target, results, files);
                    }
                    cb(self.element, results, files);
                }), true;
            }
        });
        get = function () {
            /**
             * @param {?} arg1
             * @param {number} deepDataAndEvents
             * @return {?}
             */
            function foo(arg1, deepDataAndEvents) {
                /** @type {Array} */
                var matched = [];
                /** @type {boolean} */
                var callback2 = true;
                /** @type {boolean} */
                var r = false;
                var bulk = void 0;
                try {
                    var rule;
                    var self = arg1[Symbol.iterator]();
                    for (; !(callback2 = (rule = self.next()).done) && (matched.push(rule.value), !deepDataAndEvents || matched.length !== deepDataAndEvents) ; callback2 = true) {
                    }
                } catch (fn) {
                    /** @type {boolean} */
                    r = true;
                    bulk = fn;
                } finally {
                    try {
                        if (!callback2) {
                            if (self.return) {
                                self.return();
                            }
                        }
                    } finally {
                        if (r) {
                            throw bulk;
                        }
                    }
                }
                return matched;
            }
            return function (o, deepDataAndEvents) {
                if (Array.isArray(o)) {
                    return o;
                }
                if (Symbol.iterator in Object(o)) {
                    return foo(o, deepDataAndEvents);
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        return settings.modules.push({
            /**
             * @param {Object} cursor
             * @return {?}
             */
            position: function (cursor) {
                var posTop = cursor.top;
                var posLeft = cursor.left;
                if (this.options.shift) {
                    var val = this.options.shift;
                    if ("function" == typeof this.options.shift) {
                        val = this.options.shift.call(this, {
                            top: posTop,
                            left: posLeft
                        });
                    }
                    var end = void 0;
                    var l = void 0;
                    if ("string" == typeof val) {
                        /** @type {Array.<string>} */
                        val = val.split(" ");
                        /** @type {string} */
                        val[1] = val[1] || val[0];
                        /** @type {Array.<string>} */
                        var rval = val;
                        var _ref = get(rval, 2);
                        end = _ref[0];
                        l = _ref[1];
                        /** @type {number} */
                        end = parseFloat(end, 10);
                        /** @type {number} */
                        l = parseFloat(l, 10);
                    } else {
                        end = val.top;
                        l = val.left;
                    }
                    return posTop += end, posLeft += l, {
                        top: posTop,
                        left: posLeft
                    };
                }
            }
        }), style;
    });
}, function (module, dataAndEvents, deepDataAndEvents) {
    var dom;
    dom = function () {
        return this;
    }();
    try {
        dom = dom || (Function("return this")() || (0, eval)("this"));
    } catch (t) {
        if ("object" == typeof window) {
            /** @type {Window} */
            dom = window;
        }
    }
    module.exports = dom;
}, function (module, next_scope, callback) {
    (function (global) {
        module.exports = global.Tether = callback(23);
    }).call(next_scope, callback(24));
}, function (module, dataAndEvents, factory) {
    factory(5);
    module.exports = factory(6);
}]);

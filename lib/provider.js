"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var core_decorators_1 = require('core-decorators');
var react_modular_map_1 = require('react-modular-map');
var api_loader_1 = require('./api-loader');
var DaumMapProvider = function (_react_modular_map_1$) {
    _inherits(DaumMapProvider, _react_modular_map_1$);

    function DaumMapProvider(options) {
        _classCallCheck(this, DaumMapProvider);

        var _this = _possibleConstructorReturn(this, (DaumMapProvider.__proto__ || Object.getPrototypeOf(DaumMapProvider)).call(this, options));

        _this.apiLoadPromise = api_loader_1.loadAPI(options.APIKey);
        return _this;
    }

    _createClass(DaumMapProvider, [{
        key: "initialize",
        value: function initialize(domNode, options) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var mapApi, center, daumCenter, mapOptions;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.apiLoadPromise;

                            case 2:
                                mapApi = _context.sent;
                                center = options.center;
                                daumCenter = new mapApi.LatLng(center.lat, center.lng);
                                mapOptions = Object.assign({}, options, {
                                    center: daumCenter
                                });

                                this.map = new mapApi.Map(domNode, mapOptions);
                                this.initDefer.resolve();

                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: "setDimensions",
        value: function setDimensions(dimension) {
            this.map.relayout();
        }
    }, {
        key: "__setCenter",
        value: function __setCenter(center) {
            var mapApi = api_loader_1.getDaumMapAPI();
            var daumCenter = new mapApi.LatLng(center.lat, center.lng);
            this.map.setCenter(daumCenter);
        }
    }, {
        key: "__setZoom",
        value: function __setZoom(zoomLevel) {
            this.map.setLevel(zoomLevel);
        }
    }, {
        key: "__onBoundsChanged",
        value: function __onBoundsChanged(handler) {
            var mapApi = api_loader_1.getDaumMapAPI();
            mapApi.event.addListener(this.map, 'bounds_changed', handler);
        }
    }, {
        key: "__onZoomLevelChanged",
        value: function __onZoomLevelChanged(handler) {
            var mapApi = api_loader_1.getDaumMapAPI();
            mapApi.event.addListener(this.map, 'zoom_changed', handler);
        }
    }, {
        key: "__onCenterChanged",
        value: function __onCenterChanged(handler) {
            var mapApi = api_loader_1.getDaumMapAPI();
            mapApi.event.addListener(this.map, 'center_changed', handler);
        }
    }, {
        key: "getCenter",
        value: function getCenter() {
            var daumCenter = this.map.getCenter();
            return {
                lat: daumCenter.getLat(),
                lng: daumCenter.getLng()
            };
        }
    }, {
        key: "getZoomLevel",
        value: function getZoomLevel() {
            return this.map.getLevel();
        }
    }, {
        key: "pointToLatLng",
        value: function pointToLatLng(point) {
            var mapApi = api_loader_1.getDaumMapAPI();
            var projection = this.map.getProjection();
            var daumPoint = new mapApi.Point(point.left, point.top);
            var daumLatLng = projection.coordsFromContainerPoint(daumPoint);
            return {
                lat: daumLatLng.getLat(),
                lng: daumLatLng.getLng()
            };
        }
    }, {
        key: "latLngToPoint",
        value: function latLngToPoint(latlng) {
            var mapApi = api_loader_1.getDaumMapAPI();
            var projection = this.map.getProjection();
            var daumLatLng = new mapApi.LatLng(latlng.lat, latlng.lng);
            var daumPoint = projection.containerPointFromCoords(daumLatLng);
            return {
                left: daumPoint.x,
                top: daumPoint.y
            };
        }
    }]);

    return DaumMapProvider;
}(react_modular_map_1.BaseMapProvider);
DaumMapProvider = __decorate([core_decorators_1.autobind, __metadata('design:paramtypes', [Object])], DaumMapProvider);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DaumMapProvider;
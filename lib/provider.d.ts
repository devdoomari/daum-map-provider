import { BaseMapProvider, Interfaces } from 'react-modular-map';
export interface IConstructorOpts {
    APIKey: String;
}
export default class DaumMapProvider extends BaseMapProvider {
    map: any;
    apiLoadPromise: any;
    constructor(options: IConstructorOpts);
    initialize(domNode: HTMLElement, options: any): Promise<void>;
    setDimensions(dimension: Interfaces.IDimension): void;
    __setCenter(center: Interfaces.ILatLng): void;
    __setZoom(zoomLevel: Number): void;
    __onBoundsChanged(handler: any): any;
    __onZoomLevelChanged(handler: any): any;
    __onCenterChanged(handler: any): any;
    getCenter(): Interfaces.ILatLng;
    getZoomLevel(): Number;
    pointToLatLng(point: Interfaces.IPoint): Interfaces.ILatLng;
    latLngToPoint(latlng: Interfaces.ILatLng): Interfaces.IPoint;
}

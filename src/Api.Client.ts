﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.14.0 (NJsonSchema v9.13.18.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export class Client {
    private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
        this.http = http ? http : <any>window;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @return Success
     */
    getAll(): Promise<CurrencyGetViewModel[]> {
        let url_ = this.baseUrl + "/api/Values";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGetAll(_response);
        });
    }

    protected processGetAll(response: Response): Promise<CurrencyGetViewModel[]> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(CurrencyGetViewModel.fromJS(item));
            }
            return result200;
            });
        } else if (status !== 200 && status !== 204) {
            return response.text().then((_responseText) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            });
        }
        return Promise.resolve<CurrencyGetViewModel[]>(<any>null);
    }

    /**
     * @return Success
     */
    get(isoCode: string): Promise<CurrencyGetViewModel> {
        let url_ = this.baseUrl + "/api/Values/{isoCode}";
        if (isoCode === undefined || isoCode === null)
            throw new Error("The parameter 'isoCode' must be defined.");
        url_ = url_.replace("{isoCode}", encodeURIComponent("" + isoCode)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <RequestInit>{
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        };

        return this.http.fetch(url_, options_).then((_response: Response) => {
            return this.processGet(_response);
        });
    }

    protected processGet(response: Response): Promise<CurrencyGetViewModel> {
        const status = response.status;
        let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
        if (status === 404) {
            return response.text().then((_responseText) => {
            let result404: any = null;
            let resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result404 = resultData404 ? ProblemDetails.fromJS(resultData404) : new ProblemDetails();
            return throwException("A server error occurred.", status, _responseText, _headers, result404);
            });
        } else if (status === 200) {
            return response.text().then((_responseText) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? CurrencyGetViewModel.fromJS(resultData200) : new CurrencyGetViewModel();
            return result200;
            });
        } else {
            return response.text().then((_responseText) => {
            let resultdefault: any = null;
            let resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            resultdefault = resultDatadefault ? ProblemDetails.fromJS(resultDatadefault) : new ProblemDetails();
            return throwException("A server error occurred.", status, _responseText, _headers, resultdefault);
            });
        }
    }
}

export class CurrencyGetViewModel implements ICurrencyGetViewModel {
    isoCode?: string | undefined;
    symbol?: string | undefined;
    name?: string | undefined;
    isDefault?: boolean | undefined;

    constructor(data?: ICurrencyGetViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.isoCode = data["isoCode"];
            this.symbol = data["symbol"];
            this.name = data["name"];
            this.isDefault = data["isDefault"];
        }
    }

    static fromJS(data: any): CurrencyGetViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new CurrencyGetViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["isoCode"] = this.isoCode;
        data["symbol"] = this.symbol;
        data["name"] = this.name;
        data["isDefault"] = this.isDefault;
        return data; 
    }
}

export interface ICurrencyGetViewModel {
    isoCode?: string | undefined;
    symbol?: string | undefined;
    name?: string | undefined;
    isDefault?: boolean | undefined;
}

export class ProblemDetails implements IProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;

    constructor(data?: IProblemDetails) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.type = data["type"];
            this.title = data["title"];
            this.status = data["status"];
            this.detail = data["detail"];
            this.instance = data["instance"];
        }
    }

    static fromJS(data: any): ProblemDetails {
        data = typeof data === 'object' ? data : {};
        let result = new ProblemDetails();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["type"] = this.type;
        data["title"] = this.title;
        data["status"] = this.status;
        data["detail"] = this.detail;
        data["instance"] = this.instance;
        return data; 
    }
}

export interface IProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if(result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, headers, null);
}
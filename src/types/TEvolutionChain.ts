export interface EvolutionChain {
    baby_trigger_item: null;
    chain: Chain;
    id: number;
}

export interface Chain {
    evolution_details: EvolutionDetail[];
    evolves_to: Chain[];
    is_baby: boolean;
    species: Species;
}

export interface EvolutionDetail {
    gender: null;
    held_item: null;
    item: null;
    known_move: null;
    known_move_type: null;
    location: null;
    min_affection: null;
    min_beauty: null;
    min_happiness: null;
    min_level: number;
    needs_overworld_rain: boolean;
    party_species: null;
    party_type: null;
    relative_physical_stats: null;
    time_of_day: string;
    trade_species: null;
    trigger: Species;
    turn_upside_down: boolean;
}

export interface Species {
    name: string;
    url: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toEvolutionChain(json: string): EvolutionChain {
        return cast(JSON.parse(json), r("EvolutionChain"));
    }

    public static evolutionChainToJson(value: EvolutionChain): string {
        return JSON.stringify(uncast(value, r("EvolutionChain")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`,);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = {key: p.js, typ: p.typ});
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = {key: p.json, typ: p.typ});
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {
            }
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return {arrayItems: typ};
}

function u(...typs: any[]) {
    return {unionMembers: typs};
}

function o(props: any[], additional: any) {
    return {props, additional};
}

function m(additional: any) {
    return {props: [], additional};
}

function r(name: string) {
    return {ref: name};
}

const typeMap: any = {
    "EvolutionChain": o([
        {json: "baby_trigger_item", js: "baby_trigger_item", typ: null},
        {json: "chain", js: "chain", typ: r("Chain")},
        {json: "id", js: "id", typ: 0},
    ], false),
    "Chain": o([
        {json: "evolution_details", js: "evolution_details", typ: a(r("EvolutionDetail"))},
        {json: "evolves_to", js: "evolves_to", typ: a(r("Chain"))},
        {json: "is_baby", js: "is_baby", typ: true},
        {json: "species", js: "species", typ: r("Species")},
    ], false),
    "EvolutionDetail": o([
        {json: "gender", js: "gender", typ: null},
        {json: "held_item", js: "held_item", typ: null},
        {json: "item", js: "item", typ: null},
        {json: "known_move", js: "known_move", typ: null},
        {json: "known_move_type", js: "known_move_type", typ: null},
        {json: "location", js: "location", typ: null},
        {json: "min_affection", js: "min_affection", typ: null},
        {json: "min_beauty", js: "min_beauty", typ: null},
        {json: "min_happiness", js: "min_happiness", typ: null},
        {json: "min_level", js: "min_level", typ: 0},
        {json: "needs_overworld_rain", js: "needs_overworld_rain", typ: true},
        {json: "party_species", js: "party_species", typ: null},
        {json: "party_type", js: "party_type", typ: null},
        {json: "relative_physical_stats", js: "relative_physical_stats", typ: null},
        {json: "time_of_day", js: "time_of_day", typ: ""},
        {json: "trade_species", js: "trade_species", typ: null},
        {json: "trigger", js: "trigger", typ: r("Species")},
        {json: "turn_upside_down", js: "turn_upside_down", typ: true},
    ], false),
    "Species": o([
        {json: "name", js: "name", typ: ""},
        {json: "url", js: "url", typ: ""},
    ], false),
};

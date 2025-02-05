import base64 from 'base64-js'
// @ts-ignore
import struct from '@aksel/structjs'

export function unhexlify(str: string) {
    const f = new Uint8Array(8)
    let j = 0
    for (let i = 0, l = str.length; i < l; i += 2) {
        f[j] = parseInt(str.substr(i, 2), 16)
        j++
    }
    return f
}

export function hexlifyString(str: string) {
    let result = ''
    const padding = '00'
    for (let i = 0, l = str.length; i < l; i++) {
        const digit = str.charCodeAt(i).toString(16)
        const padded = (padding + digit).slice(-2)
        result += padded
    }
    return result
}

export function hexlify(str: Uint8Array) {
    let result = ''
    const padding = '00'
    for (let i = 0, l = str.length; i < l; i++) {
        const digit = str[i].toString(16)
        const padded = (padding + digit).slice(-2)
        result += padded
    }
    return result
}

export type IDataType =
    | 'UNKNOWN'
    | 'BOOL'
    | 'INT8'
    | 'INT16'
    | 'INT32'
    | 'INT64'
    | 'FLOAT16'
    | 'FLOAT32'
    | 'FLOAT64'
    | 'STRING'
    | 'BYTES'
export type IDataName = 'unknown' | 'int' | 'float' | 'bool' | 'string' | 'bytes'

export class Typer {
    name: IDataName

    rawType: IDataType

    nbits: number

    defaultValue: any

    constructor(name: IDataName, rawType: IDataType, nbits: number, defaultValue: any) {
        this.name = name
        this.rawType = rawType
        this.nbits = nbits
        this.defaultValue = defaultValue
    }

    // eslint-disable-next-line consistent-return
    encode(value: any): any {
        if (value === undefined) return null
        if (this.rawType === 'UNKNOWN') return null
        if (this.rawType === 'BOOL') return value ? '1' : '0'
        if (this.rawType === 'STRING') return String(value)
        if (this.rawType === 'BYTES') return base64.fromByteArray(value)
        if (this.name === 'int') return Number(value).toString(16)
        if (this.name === 'float') {
            return hexlify(value)
            // if (this.nbits == 16) return hexlify(struct('>e').pack(value))
            // if (this.nbits == 32) return hexlify(struct('>f').pack(value))
            // if (this.nbits == 64) return hexlify(struct('>d').pack(value))
        }
        return new Error(`invalid type ${this.toString()}`)
    }

    // eslint-disable-next-line consistent-return
    decode(value: string): any {
        if (value === undefined) return null
        if (this.rawType === 'UNKNOWN') return null
        if (this.rawType === 'BOOL') return value === '1'
        if (this.rawType === 'STRING') return value
        if (this.rawType === 'BYTES') return base64.toByteArray(value)
        if (this.name === 'int') return parseInt(value, 16)
        if (this.name === 'float') {
            const raw = unhexlify(value)
            if (this.nbits === 16) return struct('>e').unpack(raw.buffer)[0]
            if (this.nbits === 32) return struct('>f').unpack(raw.buffer)[0]
            if (this.nbits === 64) return struct('>d').unpack(raw.buffer)[0]
        }
        return new Error(`invalid type ${this.toString()}`)
    }

    toString() {
        if (this.name === 'int' || this.name === 'float') return `${this.name}{this.nbits}`.toUpperCase()

        return this.name.toUpperCase()
    }
}

// # float test case
// const f = new Typer('float', 'FLOAT64', 64, 0.0)
// const raw = unhexlify('3fd771e4d528c043')
// console.log(f.decode('3fd771e4d528c043') == 0.3663265306122449)
// console.log(f.encode(raw) === '3fd771e4d528c043')
// console.log(f.decode('3fd771e4d528c043'), raw, hexlify(raw))

export default {
    UNKNOWN: new Typer('unknown', 'UNKNOWN', 1, null),
    INT8: new Typer('int', 'INT8', 8, 0),
    INT16: new Typer('int', 'INT16', 16, 0),
    INT32: new Typer('int', 'INT32', 32, 0),
    INT64: new Typer('int', 'INT64', 64, 0),
    FLOAT16: new Typer('float', 'FLOAT16', 16, 0.0),
    FLOAT32: new Typer('float', 'FLOAT32', 32, 0.0),
    FLOAT64: new Typer('float', 'FLOAT64', 64, 0.0),
    BOOL: new Typer('bool', 'BOOL', 1, 0),
    STRING: new Typer('string', 'STRING', 32, ''),
    BYTES: new Typer('bytes', 'BYTES', 32, new Uint8Array()),
}

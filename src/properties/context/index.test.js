import { assert } from 'chai'
import {init, prompt} from './'

describe('context init', () => {
    it('should return __dirname', () => {
        assert.strictEqual('__dirname', init())
    })

    it('should return complete path', () => {
        assert.strictEqual('__dirname/path', init('path'))
    })

    it('should return complete path', () => {
        assert.strictEqual('__dirname/path', init('/path'))
    })

    it('should return complete path', () => {
        assert.strictEqual('__dirname/path/test', init('/path/test/'))
    })
})

describe('context prompt', () => {
    it('should be an input type', () => {
        assert.strictEqual('input', prompt.type)
    })

    it('should be an input type', () => {
        assert.strictEqual('context', prompt.name)
    })

    it('should be an input type', () => {
        assert.strictEqual('What is the the base directory ?', prompt.message)
    })

    it('should be an input type', () => {
        assert.strictEqual('__dirname', prompt.default)
    })
})

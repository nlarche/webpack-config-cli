import { assert } from 'chai'
import init from './'

describe('context', () => {
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

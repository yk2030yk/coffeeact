import React from 'react'
import {
  formatPath,
  createSearchString,
  createRouteConfig,
  ROUTE_TYPE,
} from '../routeConfig'

const DummyComponent = () => <div>dummy</div>

describe('formatPath', () => {
  test('not have payload', () => {
    const path = formatPath('/')
    expect(path).toBe('/')
  })

  test('have payload', () => {
    const path = formatPath<{ value: string }>('/:value', { value: '1' })
    expect(path).toBe('/1')
  })

  test('have multiple value payload', () => {
    const path = formatPath<{ value1: string; value2: string }>(
      '/:value1/:value2',
      {
        value1: 'value1',
        value2: 'value2',
      }
    )
    expect(path).toBe('/value1/value2')
  })
})

describe('createSearchString', () => {
  test('empty args', () => {
    const searchString = createSearchString()
    expect(searchString).toBe('')
  })

  test('params', () => {
    const searchString = createSearchString({ value1: 'value1' })
    expect(searchString).toBe('?value1=value1')
  })

  test('multiple value params', () => {
    const searchString = createSearchString({ key1: 'value1', key2: 'value2' })
    expect(searchString).toBe('?key1=value1&key2=value2')
  })
})

describe('createRouteConfig', () => {
  test('default value', () => {
    const name = 'name'
    const path = '/'
    const component = DummyComponent

    const config = createRouteConfig<undefined, {}>({
      name,
      path,
      component,
    })

    expect(config.name).toBe(name)
    expect(config.routeType).toBe(ROUTE_TYPE.STANDARD)
    expect(config.path).toBe(path)
    expect(config.component).toBe(component)
    expect(config.exact).toBe(true)
    expect(config.formatPath()).toBe('/')
    expect(config.searchString({})).toBe('')
  })

  test('set value', () => {
    const name = 'name'
    const routeType = ROUTE_TYPE.STANDARD
    const path = '/'
    const component = DummyComponent
    const exact = true

    const config = createRouteConfig<undefined, {}>({
      name,
      routeType,
      path,
      component,
      exact,
    })

    expect(config.name).toBe(name)
    expect(config.routeType).toBe(routeType)
    expect(config.path).toBe(path)
    expect(config.component).toBe(component)
    expect(config.exact).toBe(exact)
    expect(config.formatPath()).toBe('/')
    expect(config.searchString({})).toBe('')
  })
})

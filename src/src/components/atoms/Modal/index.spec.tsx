import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'

import { useModal } from '../../../hooks/useModal'
import Modal from './'

describe('children', () => {
  it('visible dummy element', () => {
    const { result } = renderHook(() => useModal())

    const { queryByTestId } = render(<Modal modal={result.current} />)
    const background = queryByTestId('background')

    expect(background).toBeNull()
  })

  it('visible dummy element', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.open()
    })

    const { getByTestId } = render(
      <Modal modal={result.current}>
        <div data-testid="dummy" />
      </Modal>
    )
    const dummy = getByTestId('dummy')

    expect(dummy).toBeVisible()
  })
})

describe('ClickEvent', () => {
  it('click background', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.open()
    })

    const { getByTestId } = render(<Modal modal={result.current} />)
    const background = getByTestId('background')

    act(() => {
      fireEvent.click(background)
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('click content', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.open()
    })

    const { getByTestId } = render(<Modal modal={result.current} />)
    const content = getByTestId('content')

    act(() => {
      fireEvent.click(content)
    })

    expect(result.current.isOpen).toBe(true)
  })

  it('click closeButton', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.open()
    })

    const { getByTestId } = render(<Modal modal={result.current} />)
    const closeButton = getByTestId('closeButton')

    act(() => {
      fireEvent.click(closeButton)
    })

    expect(result.current.isOpen).toBe(false)
  })
})

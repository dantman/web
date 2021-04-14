import { renderHook } from '@testing-library/react-hooks/server';
import { useFirstMountState } from '../../src';

describe('useFirstMountState', () => {
  it('should return true on first render', () => {
    const { result } = renderHook(() => useFirstMountState());

    expect(result.current).toBe(true);
  })
});

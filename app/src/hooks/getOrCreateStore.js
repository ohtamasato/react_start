import { initializeStore } from '@/store/initializeStore';

let store;

export function getOrCreateStore(preloadedState) {
  let _state;
  if (store) {
    if (preloadedState) {
      _state = {
        ...store.getState(),
        ...preloadedState,
      }
    }
  } else {
    _state = preloadedState;
  }

  let _ret;
  if (_state) {
    _ret = initializeStore(_state);
    store = _ret;
  } else {
    _ret = store;
  }

  return _ret;
}

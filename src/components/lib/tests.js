import renderer from 'react-test-renderer';

export function render(component) {
  return renderer.create(component);
}
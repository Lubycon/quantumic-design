function Foo() {
  return <div css={{ width: '100%' }}>Hi</div>;
}

export default {
  title: 'Path/To/MyComponent',
  component: Foo,
};

export const Basic = () => <Foo />;

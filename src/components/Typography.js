export const Text = ({ children }) =>
  <span className="text-indigo-30 text-3xl">{ children }</span>;

export const Title = ({ level=1, children }) => {
  const sizeClass = {
    1: 'text-10xl',
    2: 'text-6xl',
    3: 'text-5xl',
  };
  return <span className={`text-white font-bold ${sizeClass[level]}`}>{ children }</span>;
}

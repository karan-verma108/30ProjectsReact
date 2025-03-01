export default function ColorPicker({
  label,
  color,
  setColor,
}: {
  label?: string;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  return (
    <div style={{ backgroundColor: color }} className='h-screen'>
      <h1 className='text-7xl text-center'>{label ?? 'Color Picker'}</h1>
      <input
        type='color'
        id='color'
        name='color'
        value={color}
        className='border border-black'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setColor(e.target.value)
        }
      />
    </div>
  );
}

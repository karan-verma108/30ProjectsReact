export default function ListOfItems(): JSX.Element {
  const heros: string[] = ['shaktiman', 'superman', 'batman', 'spiderman'];
  return (
    <div>
      <h1>your items in the list are :</h1>
      <div className='flex flex-col gap-2'>
        {heros.length > 0 &&
          heros.map((hero: string) => <span key={hero}>{hero}</span>)}
      </div>
    </div>
  );
}

const workStation = [
  { name: 'HP OMEN 15"', description: 'RAM: 16GB, GPU: RTX2060, CPU: i5-10300H' },
  { name: 'Razer DEATHADDER ELITE', description: 'Best mouse I ever used in my life' },
  { name: 'Dell Ultrasharp U2719DX', description: '27-inch QHD IPS Monitor' },
  { name: 'Logitech Z623', description: '2.1 Speaker System with Subwoofer' },
  { name: 'Samsung Buds2', description: 'My everyday headphones' },
];

export default function UsesList() {
  return (
    <div>
      <h3>Workstation</h3>
      {workStation.map((item, index) => (
        <div className="text-muted-foreground border-b py-3" key={index}>
          <h3 className="font-semibold">{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
export default function Home() {
  return (
    <div className="">
      <main className="text-[#339966]">
        <p className="bona-nova-sc-bold text-[48px] text-center">Nick Carney</p>
        <p className="geist-sans text-[24px] text-center">
          Welcome to Nick Carney's personal website
        </p>
        <div className="flex flex-row pt-[5%]">
          <div className="w-full text-center">
            <p>Personal Interests:</p>
            <ol className="">
              <li>Nature</li>
              <li>Sports</li>
              <li>Music</li>
              <li>Learning</li>
            </ol>
          </div>
          <div className="w-full text-center">
            <p>Academic Interests:</p>
            <ol className="">
              <li>Programming</li>
              <li>Blockchain</li>
              <li>Data Analytics</li>
              <li>WebDev</li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}

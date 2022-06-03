import AnchorLink from "./AnchorLink";

function Header({ displayHomeCTA = false }) {
  return (
    <header className="flex flex-col">
      <h1 className="text-3xl font-semibold mt-4 mb-4">User Directory</h1>
      {displayHomeCTA && (
        <AnchorLink
          href="/"
          title="Back to users' list"
          text="Back to users' list"
        />
      )}
    </header>
  );
}

export default Header;

function AnchorLink({ href, text, ...rest }) {
  return (
    <a
      className="underline text-slate-600 hover:text-blue-500"
      href={href}
      title={text}
      {...rest}
    >
      {text}
    </a>
  );
}

export default AnchorLink;

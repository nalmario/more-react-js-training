export default function Section({ title, children, ...props }) {
  // ...[props] - prop forwarding, groups data into an object and ensures they're forwarded to elements below
  //              useful for "wrapper" components like this one (Section)
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

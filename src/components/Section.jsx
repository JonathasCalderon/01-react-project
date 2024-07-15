export default function Section({ title, children, ...miscProps}) {
  return (
    <section { ...miscProps }>
      <h2>{ title }</h2>
      { children }
    </section>
  )
}
export default function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="hd rv">
      <p className="eb">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

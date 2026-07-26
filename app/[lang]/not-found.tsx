import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="commission">
      <div className="commission__inner">
        <h2 className="commission__title">
          404
          <br />
          <em>page introuvable</em>
        </h2>
        <p className="commission__sub">
          Cette page n&apos;existe pas ou a été déplacée.
          <br />
          This page does not exist or has moved.
        </p>
        <div className="commission__actions">
          <Link href="/" className="btn-light">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  )
}

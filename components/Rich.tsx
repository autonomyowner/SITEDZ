import { Fragment } from 'react'

const TOKEN = /(\*[^*]+\*|_[^_]+_)/g

/**
 * Renders the copy mini-markup used throughout content/locales:
 *
 *   \n      → <br />
 *   *word*  → <em>word</em>                        (Cormorant italic accent)
 *   _word_  → <span class="hero__underline">word</span>
 *
 * Server component — emits plain markup and ships no JS.
 */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {line.split(TOKEN).map((part, i) => {
            if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
              return <em key={i}>{part.slice(1, -1)}</em>
            }
            if (part.startsWith('_') && part.endsWith('_') && part.length > 2) {
              return (
                <span key={i} className="hero__underline">
                  {part.slice(1, -1)}
                </span>
              )
            }
            return <Fragment key={i}>{part}</Fragment>
          })}
        </Fragment>
      ))}
    </>
  )
}

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

/* ─── Products ──────────────────────────────────────────────── */

const AR_PRODUCTS = [
  { id: 1, name: 'Stellar Mandala',    img: '/products/p1.jpg',  aspect: 1     },
  { id: 2, name: 'Chromatic Octagon',  img: '/products/p3.jpg',  aspect: 1     },
  { id: 3, name: 'Terrain Canvas',     img: '/products/p4.jpg',  aspect: 4 / 3 },
  { id: 4, name: 'Ocean Mandala',      img: '/products/p7.jpg',  aspect: 1     },
  { id: 5, name: 'Wildlife Panel',     img: '/products/p10.jpg', aspect: 3 / 4 },
  { id: 6, name: 'Emerald Cross',      img: '/products/p15.jpg', aspect: 1     },
]

/* ─── Three.js Viewer ───────────────────────────────────────── */

function ThreeViewer({ product }) {
  const containerRef = useRef(null)
  const r            = useRef({})          // all Three.js refs live here
  const isInARRef    = useRef(false)

  const [arStatus, setArStatus] = useState('checking') // checking | available | unavailable
  const [isInAR,   setIsInAR]   = useState(false)
  const [hint,     setHint]     = useState('Drag to rotate')

  /* ── Check WebXR support once ─────────────────────────────── */
  useEffect(() => {
    if (navigator?.xr) {
      navigator.xr
        .isSessionSupported('immersive-ar')
        .then(ok => setArStatus(ok ? 'available' : 'unavailable'))
        .catch(()  => setArStatus('unavailable'))
    } else {
      setArStatus('unavailable')
    }
  }, [])

  /* ── Build / rebuild scene when product changes ───────────── */
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const W = container.clientWidth
    const H = container.clientHeight || 520

    /* Scene */
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, W / H, 0.01, 50)
    camera.position.z = 1.5

    /* Renderer */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.xr.enabled = true
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)

    /* Lights */
    scene.add(new THREE.AmbientLight(0xf0ede5, 1.8))
    const key = new THREE.DirectionalLight(0xffffff, 0.9)
    key.position.set(2, 3, 3)
    scene.add(key)
    const fill = new THREE.DirectionalLight(0xd97757, 0.35)
    fill.position.set(-3, 0, 1)
    scene.add(fill)

    /* Panel geometry */
    const pw  = 0.62
    const ph  = pw / product.aspect
    const geo = new THREE.BoxGeometry(pw, ph, 0.022)

    const tex = new THREE.TextureLoader().load(product.img)
    tex.colorSpace = THREE.SRGBColorSpace

    const frontMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, metalness: 0.05 })
    const sideMat  = new THREE.MeshStandardMaterial({ color: 0x110d0a, roughness: 1.0 })
    const panel    = new THREE.Mesh(geo, [sideMat, sideMat, sideMat, sideMat, frontMat, sideMat])
    scene.add(panel)

    /* Warm glow halo behind panel */
    const haloGeo = new THREE.PlaneGeometry(pw + 0.18, ph + 0.18)
    const haloMat = new THREE.MeshBasicMaterial({ color: 0xd97757, transparent: true, opacity: 0.1, side: THREE.DoubleSide })
    panel.add(new THREE.Mesh(haloGeo, haloMat))

    /* Reticle ring (shown in AR before placement) */
    const reticleGeo = new THREE.RingGeometry(0.06, 0.085, 36).rotateX(-Math.PI / 2)
    const reticleMat = new THREE.MeshBasicMaterial({ color: 0xd97757, side: THREE.DoubleSide })
    const reticle    = new THREE.Mesh(reticleGeo, reticleMat)
    reticle.matrixAutoUpdate = false
    reticle.visible = false
    scene.add(reticle)

    /* Simple drag-to-orbit for preview mode */
    let drag = false, prevX = 0, prevY = 0
    let rotY = 0, rotX = 0

    const onDown = e => {
      drag = true
      const p = e.touches?.[0] || e
      prevX = p.clientX; prevY = p.clientY
    }
    const onMove = e => {
      if (!drag || isInARRef.current) return
      const p = e.touches?.[0] || e
      rotY += (p.clientX - prevX) * 0.009
      rotX += (p.clientY - prevY) * 0.007
      rotX = Math.max(-0.9, Math.min(0.9, rotX))
      prevX = p.clientX; prevY = p.clientY
    }
    const onUp = () => { drag = false }

    renderer.domElement.addEventListener('mousedown',  onDown, { passive: true })
    renderer.domElement.addEventListener('mousemove',  onMove, { passive: true })
    renderer.domElement.addEventListener('mouseup',    onUp)
    renderer.domElement.addEventListener('touchstart', onDown, { passive: true })
    renderer.domElement.addEventListener('touchmove',  onMove, { passive: true })
    renderer.domElement.addEventListener('touchend',   onUp)

    /* Render loop (non-AR) */
    let animId
    const tick = () => {
      animId = requestAnimationFrame(tick)
      if (!drag) rotY += 0.005
      panel.rotation.y = rotY
      panel.rotation.x = rotX
      renderer.render(scene, camera)
    }
    tick()

    /* Resize */
    const onResize = () => {
      const W = container.clientWidth
      const H = container.clientHeight || 520
      camera.aspect = W / H
      camera.updateProjectionMatrix()
      renderer.setSize(W, H)
    }
    window.addEventListener('resize', onResize)

    /* Save refs */
    r.current = { renderer, scene, camera, panel, reticle, stopTick: () => cancelAnimationFrame(animId) }

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      renderer.domElement.removeEventListener('mousedown',  onDown)
      renderer.domElement.removeEventListener('mousemove',  onMove)
      renderer.domElement.removeEventListener('mouseup',    onUp)
      renderer.domElement.removeEventListener('touchstart', onDown)
      renderer.domElement.removeEventListener('touchmove',  onMove)
      renderer.domElement.removeEventListener('touchend',   onUp)
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      renderer.dispose()
      tex.dispose()
      geo.dispose()
      frontMat.dispose()
      sideMat.dispose()
      haloGeo.dispose()
      haloMat.dispose()
      reticleGeo.dispose()
      reticleMat.dispose()
    }
  }, [product])

  /* ── Launch WebXR AR session ──────────────────────────────── */
  const launchAR = async () => {
    const { renderer, scene, camera, panel, reticle, stopTick } = r.current
    if (!renderer) return

    let hitTestSource         = null
    let hitTestSourceRequested = false
    let placed                = false

    try {
      const session = await navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay'],
        domOverlay: { root: document.getElementById('ar-dom-overlay') },
      })

      stopTick()
      renderer.xr.setSession(session)
      panel.rotation.set(0, 0, 0)
      panel.visible = false
      isInARRef.current = true
      setIsInAR(true)
      setHint('Move your camera slowly to detect a surface')

      renderer.setAnimationLoop((_, frame) => {
        if (!frame) return

        const refSpace  = renderer.xr.getReferenceSpace()
        const xrSession = renderer.xr.getSession()

        if (!hitTestSourceRequested) {
          xrSession
            .requestReferenceSpace('viewer')
            .then(vs => xrSession.requestHitTestSource({ space: vs }))
            .then(src => {
              hitTestSource = src
              setHint('Aim at a wall · tap to place')
            })
          hitTestSourceRequested = true
        }

        if (hitTestSource) {
          const hits = frame.getHitTestResults(hitTestSource)
          if (hits.length > 0) {
            const pose = hits[0].getPose(refSpace)
            reticle.visible = !placed
            reticle.matrix.fromArray(pose.transform.matrix)

            if (!placed) {
              panel.visible = true
              const pos = new THREE.Vector3()
              pos.setFromMatrixPosition(reticle.matrix)
              panel.position.copy(pos)

              /* Face the panel toward the camera horizontally */
              const xrCam  = renderer.xr.getCamera()
              const camPos = new THREE.Vector3()
              xrCam.getWorldPosition(camPos)
              panel.lookAt(new THREE.Vector3(camPos.x, pos.y, camPos.z))
            }
          } else {
            reticle.visible = false
          }
        }

        renderer.render(scene, renderer.xr.getCamera())
      })

      /* Tap to place / reposition */
      session.addEventListener('select', () => {
        if (reticle.visible) {
          placed = true
          reticle.visible = false
          setHint('Looking good! Tap to reposition · circle back for a full view')
        } else if (placed) {
          placed = false
          panel.visible = false
          setHint('Aim at a surface · tap to place again')
        }
      })

      /* Session end — restore preview */
      session.addEventListener('end', () => {
        isInARRef.current = false
        setIsInAR(false)
        placed = false
        reticle.visible = false
        panel.visible   = true
        panel.rotation.set(0, 0, 0)
        hitTestSource?.cancel()
        renderer.setAnimationLoop(null)

        let rotY = 0
        const tick = () => {
          r.current._animId = requestAnimationFrame(tick)
          rotY += 0.005
          panel.rotation.y = rotY
          renderer.render(scene, camera)
        }
        tick()
        setHint('Drag to rotate')
      })

    } catch (err) {
      console.error('AR session error:', err)
      isInARRef.current = false
      setIsInAR(false)
    }
  }

  /* ── Render ───────────────────────────────────────────────── */
  return (
    <div className="three-container">
      {/* Three.js canvas mounts here */}
      <div ref={containerRef} className="three-canvas-wrap" />

      {/* AR overlay DOM (visible during AR session) */}
      <div
        id="ar-dom-overlay"
        className="ar-dom-overlay"
        style={{ display: isInAR ? 'flex' : 'none' }}
      >
        <div className="ar-hint-pill">{hint}</div>
        <button
          className="ar-exit-btn"
          onClick={() => r.current.renderer?.xr.getSession()?.end()}
        >
          Exit AR
        </button>
      </div>

      {/* Preview controls */}
      {!isInAR && (
        <div className="three-controls">
          {arStatus === 'available' && (
            <button className="ar-launch-btn" onClick={launchAR}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M8 1L1 4.5v7L8 15l7-3.5v-7L8 1z" stroke="currentColor" strokeWidth="1.4" fill="none" />
                <path d="M1 4.5l7 3.5m0 0l7-3.5M8 8v7" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              Try in Your Space
            </button>
          )}
          {arStatus === 'unavailable' && (
            <p className="ar-note">AR works on Android Chrome &amp; iOS Safari 16+</p>
          )}
          {arStatus === 'checking' && (
            <p className="ar-note">Checking AR support…</p>
          )}
          <p className="three-drag-note">{hint}</p>
        </div>
      )}
    </div>
  )
}

/* ─── Page ──────────────────────────────────────────────────── */

export default function ARPage() {
  const [selected, setSelected] = useState(AR_PRODUCTS[0])

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__inner">
          <div>
            <h1 className="hero__headline">
              <span className="hero__line" style={{ '--d': '0ms' }}>
                See your piece
              </span>
              <span className="hero__line" style={{ '--d': '120ms' }}>
                before it <span className="hero__underline">arrives</span>
              </span>
            </h1>
          </div>
          <div className="hero__tagline-col">
            <p className="hero__tagline">
              Point your phone at any wall and preview an Origawood
              panel at real scale — before you commission it.
              Works in your browser, no app required.
            </p>
          </div>
        </div>
      </section>

      {/* Viewer + Product Picker */}
      <section className="ar-main">
        <div className="ar-main__inner">
          <ThreeViewer product={selected} key={selected.id} />

          <div className="ar-picker-row">
            <div className="ar-picker">
              {AR_PRODUCTS.map(p => (
                <button
                  key={p.id}
                  className={`ar-picker__item${selected.id === p.id ? ' ar-picker__item--active' : ''}`}
                  onClick={() => setSelected(p)}
                  title={p.name}
                >
                  <img src={p.img} alt={p.name} />
                </button>
              ))}
            </div>
            <p className="ar-picker__label">{selected.name}</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <div className="how-it-works__inner">
          <div className="how-it-works__header">
            <p className="section-label" style={{ color: 'rgba(240,237,229,0.4)' }}>AR Preview</p>
            <h2 className="how-it-works__title">
              On your wall,
              <br />
              <em>in seconds</em>
            </h2>
          </div>
          <div className="how-it-works__steps">
            {[
              { num: '01', title: 'Pick a piece', desc: 'Choose any panel from our collection using the thumbnails below the viewer.' },
              { num: '02', title: 'Point & scan', desc: 'Tap "Try in Your Space" and aim at a wall. Your device detects the surface automatically.' },
              { num: '03', title: 'Tap to place', desc: 'Tap to hang the piece on your wall at real 1:1 scale. Walk around and view it from any angle.' },
            ].map(s => (
              <div key={s.num} className="how-step">
                <span className="how-step__num">{s.num}</span>
                <h3 className="how-step__title">{s.title}</h3>
                <p className="how-step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="commission">
        <div className="commission__inner">
          <h2 className="commission__title">
            Love what you see?
            <br />
            <em>Let's build it</em>
          </h2>
          <p className="commission__sub">
            Every piece is made to order. Start a commission and
            we'll craft your chosen panel in solid wood with custom LED lighting.
          </p>
          <a href="mailto:hello@origawood.com" className="btn-light">
            Commission This Piece
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}

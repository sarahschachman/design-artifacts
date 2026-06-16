// Teachable admin shell — React port of site/admin-shell/ (the canonical chrome,
// transcribed from mono-frontend/packages/ui). Keep values in sync with that file.
// Prototypes wrap their screen in <AdminShell> so they sit in the real admin nav.
//
// Desktop-only by design: the canonical CSS shell (site/admin-shell/) is responsive
// (hamburger drawer < 768px), but this notebook renders iterations at a fixed design
// canvas and scales them — there's no responsive viewport for the breakpoint to act on,
// so the port stays desktop. If you reuse it in a real viewport-responsive app, port
// the mobile drawer rules from admin-shell.css too.

const C = {
  grey100: '#222222', grey90: '#383838', grey40: '#a7a7a7', grey20: '#d3d3d3',
  white: '#ffffff', container: '#fbfbfb', lemon: '#e7ff33',
  display: "'Reckless-Light', 'Reckless', 'Fraunces', Palatino, Garamond, Georgia, serif",
  system: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
}

const RAIL = [
  { key: 'dashboard', icon: 'show_chart', label: 'Dashboard' },
  { key: 'users', icon: 'group', label: 'Users' },
  { key: 'site', icon: 'devices', label: 'Site' },
  { key: 'sales', icon: 'paid', label: 'Sales' },
  { key: 'emails', icon: 'mail', label: 'Emails' },
  { key: 'apps', icon: 'dashboard_customize', label: 'Apps' },
  { key: 'settings', icon: 'settings', label: 'Settings' },
  { key: 'courses', icon: 'video_library', label: 'Courses' },
  { key: 'coaching', icon: 'event', label: 'Coaching' },
  { key: 'downloads', icon: 'file_save', label: 'Digital downloads' },
  { key: 'communities', icon: 'forum', label: 'Communities' },
  { key: 'admin', icon: 'key', label: 'Admin access' },
  { key: 'bundles', icon: 'inventory_2', label: 'Bundles' },
] as const

function Sym({ name, size = 24, fill = false }: { name: string; size?: number; fill?: boolean }) {
  return (
    <span
      aria-hidden
      style={{
        fontFamily: "'Material Symbols Outlined'", fontSize: size, lineHeight: 1,
        fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
      }}
    >{name}</span>
  )
}

export type SubItem = { label: string; active?: boolean }

export function AdminShell({
  active = 'apps', school = "Sarah's School", user = 'Sarah Schachman',
  subHeader, subItems, children,
}: {
  active?: string; school?: string; user?: string
  subHeader: string; subItems: SubItem[]; children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', height: 760, background: C.container, color: C.grey100, fontFamily: C.system, lineHeight: 1.5, overflow: 'hidden' }}>
      {/* Nav — dark two-tier */}
      <nav aria-label="Admin navigation" style={{ width: 236, flexShrink: 0, background: C.grey100, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '1.25rem 1.5rem', borderBottom: `1px solid ${C.grey90}`, flexShrink: 0 }}>
          <span style={{ color: C.white, fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.25, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'block' }}>{school}</span>
        </div>

        <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
          {/* Icon rail */}
          <div style={{ width: 66, flexShrink: 0, borderRight: `1px solid ${C.grey90}`, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.75rem 0', gap: '0.25rem', overflowY: 'auto' }}>
            {RAIL.map(r => {
              const on = r.key === active
              return (
                <button key={r.key} type="button" aria-label={r.label} aria-current={on ? 'page' : undefined}
                  style={{ width: 40, height: 40, display: 'grid', placeItems: 'center', background: 'none', border: 'none', cursor: 'pointer', color: on ? C.white : C.grey40, flexShrink: 0, borderRadius: 8 }}>
                  <Sym name={r.icon} fill={on} />
                </button>
              )
            })}
            <button type="button" aria-label="What's new" style={{ marginTop: 'auto', width: 40, height: 40, display: 'grid', placeItems: 'center', background: 'none', border: 'none', cursor: 'pointer', color: C.grey40, flexShrink: 0, borderRadius: 8 }}>
              <Sym name="bolt" />
            </button>
          </div>

          {/* Section panel */}
          <div style={{ flex: 1, minWidth: 0, padding: '1.5rem 1.5rem', overflowY: 'auto' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, lineHeight: 1, textTransform: 'uppercase', letterSpacing: 1, color: C.grey40, marginBottom: '0.75rem' }}>{subHeader}</div>
            {subItems.map((s, i) => (
              <a key={i} href="#" aria-current={s.active ? 'page' : undefined}
                style={{ display: 'block', padding: '0.5rem 0', fontFamily: C.system, fontSize: '1rem', fontWeight: 400, lineHeight: 1.5, color: s.active ? C.white : C.grey20, textDecoration: s.active ? 'underline' : 'none', textUnderlineOffset: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.label}</a>
            ))}
          </div>
        </div>

        {/* User footer */}
        <div style={{ borderTop: `1px solid ${C.grey90}`, display: 'flex', alignItems: 'stretch', flexShrink: 0 }}>
          <span style={{ flex: 1, padding: '1rem 1.5rem', color: C.white, fontSize: '1rem', lineHeight: 1.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user}</span>
          <button type="button" aria-label="Account menu" style={{ width: 48, border: 'none', borderLeft: `1px solid ${C.grey90}`, background: 'none', display: 'grid', placeItems: 'center', color: C.grey40, cursor: 'pointer' }}>
            <Sym name="more_vert" size={20} />
          </button>
        </div>
      </nav>

      {/* Main content area — prototype fills this */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
        {children}
      </div>
    </div>
  )
}

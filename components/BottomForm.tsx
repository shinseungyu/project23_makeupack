"use client"

import { useEffect, useRef, useState } from 'react'
import PrivacyModal from './PrivacyModal'
import { validateForm } from '@/lib/validate'
import { DONE_MESSAGE, INITIAL_LEAD, REGIONS, submitLead } from '@/lib/lead'

/**
 * 하단 고정 상담 폼 — 평소엔 얇은 바(버튼 하나), 누르면 입력칸이 펼쳐진다.
 * 입력 항목·검증·동의 모달·전송은 본문 폼(FormSection)과 같다(lib/lead.ts).
 * 본문 폼([data-lead-form])이 화면에 보이는 동안에는 겹치지 않게 숨는다.
 */
export default function BottomForm() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [form, setForm] = useState(INITIAL_LEAD)
  const [showModal, setShowModal] = useState(false)
  const [sending, setSending] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  const set = (key: keyof typeof INITIAL_LEAD, value: string) => setForm((p) => ({ ...p, [key]: value }))

  // 본문 폼이 보이면 숨김
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-lead-form]'))
    if (!targets.length) return
    const visible = new Set<Element>()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)))
      setHidden(visible.size > 0)
    }, { threshold: 0.15 })
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])

  // 바 높이만큼 본문 아래 여백 — 푸터가 가려지지 않게
  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const apply = () => document.body.style.setProperty('--bottom-form-h', hidden ? '0px' : `${el.offsetHeight}px`)
    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(el)
    return () => { ro.disconnect(); document.body.style.removeProperty('--bottom-form-h') }
  }, [hidden, open])

  const request = () => {
    const error = validateForm({ ...form, privacy: true })
    if (error) { alert(error); return }
    setShowModal(true)
  }

  const confirm = async () => {
    setSending(true)
    const result = await submitLead(form, `bottom-form${window.location.pathname}${window.location.search}`)
    setSending(false)
    if (result.ok) {
      alert(DONE_MESSAGE)
      setForm(INITIAL_LEAD)
      setOpen(false)
    } else {
      alert(result.message)
    }
  }

  return (
    <>
      {showModal && <PrivacyModal onConfirm={confirm} onClose={() => setShowModal(false)} />}

      <div ref={barRef} className={`bfm${open ? ' is-open' : ''}${hidden ? ' is-hidden' : ''}`} aria-hidden={hidden}>
        {!open ? (
          <div className="bfm__bar">
            <p className="bfm__msg">
              <b>메이크업학원 무료 상담</b>
              <span>성함·연락처만 남기면 전문 상담사가 바로 연락드려요</span>
            </p>
            <button type="button" className="bfm__cta" onClick={() => setOpen(true)} tabIndex={hidden ? -1 : 0}>
              무료 상담 신청하기
            </button>
          </div>
        ) : (
          <form className="bfm__form" onSubmit={(e) => { e.preventDefault(); request() }}>
            <p className="bfm__title">빠른 무료 상담</p>
            <button type="button" className="bfm__close" onClick={() => setOpen(false)} aria-label="닫기">✕</button>

            <div className="bfm__f bfm__f--name">
              <input
                className="bfm__in" value={form.customer_name} maxLength={8} placeholder="성함" aria-label="성함" autoComplete="name"
                onChange={(e) => set('customer_name', e.target.value)} disabled={sending}
              />
              <span className="bfm__seg" role="group" aria-label="성별">
                {[{ l: '남', v: '1' }, { l: '여', v: '2' }].map(({ l, v }) => (
                  <button key={v} type="button" aria-pressed={form.customer_sex === v} onClick={() => set('customer_sex', v)} disabled={sending}>{l}</button>
                ))}
              </span>
            </div>

            <input
              className="bfm__in bfm__f--birth" value={form.customer_birth} maxLength={6} inputMode="numeric" placeholder="생년월일 6자리" aria-label="생년월일"
              onChange={(e) => set('customer_birth', e.target.value.replace(/\D/g, ''))} disabled={sending}
            />

            <div className="bfm__f bfm__f--phone">
              <select className="bfm__in bfm__prefix" value={form.mobile1} aria-label="전화번호 앞자리" onChange={(e) => set('mobile1', e.target.value)} disabled={sending}>
                {['010', '011', '016', '017', '019'].map((v) => <option key={v} value={v}>{v}</option>)}
              </select>
              <input
                className="bfm__in" type="tel" inputMode="numeric" value={form.mobile2} maxLength={11} placeholder="'-' 없이 입력" aria-label="연락처" autoComplete="tel-national"
                onChange={(e) => set('mobile2', e.target.value.replace(/\D/g, ''))} disabled={sending}
              />
            </div>

            <select
              className={`bfm__in bfm__f--region${form.region ? '' : ' is-empty'}`} value={form.region} aria-label="희망 지역"
              onChange={(e) => set('region', e.target.value)} disabled={sending}
            >
              <option value="" disabled hidden>희망 지역</option>
              {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>

            <button type="submit" className="bfm__cta bfm__submit" disabled={sending}>
              {sending ? '전송 중...' : '무료 상담 신청'}
            </button>
          </form>
        )}
      </div>
    </>
  )
}

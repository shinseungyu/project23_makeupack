"use client"

import { useState } from "react"
import PrivacyModal from "./PrivacyModal"
import { validateForm } from "@/lib/validate"
import { DONE_MESSAGE, INITIAL_LEAD, REGIONS, submitLead } from "@/lib/lead"

export default function FormSection() {
  const [form, setForm] = useState(INITIAL_LEAD)
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const set = (key: string, value: string) =>
    setForm((p) => ({ ...p, [key]: value }))

  const SPECIAL_CHAR_REG = /[ \{\}\[\]\/.,;:|\)*~`^\-_+┼<>\%\'\"\\\(\=]/i
  const handleNameChange = (value: string) => {
    if (SPECIAL_CHAR_REG.test(value)) {
      alert("특수문자는 입력하실수 없습니다.")
      set("customer_name", value.slice(0, -1))
      return
    }
    set("customer_name", value)
  }

  const handleSubmitClick = () => {
    const error = validateForm({ ...form, privacy: true })
    if (error) { alert(error); return }
    setShowModal(true)
  }

  const handleConfirm = async () => {
    setSubmitted(true)
    const result = await submitLead(form, `form${window.location.pathname}${window.location.search}`)
    if (result.ok) {
      alert(DONE_MESSAGE)
      setForm(INITIAL_LEAD)
    } else {
      alert(result.message)
    }
    setSubmitted(false)
  }

  const inputGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 800,
    color: 'var(--primary)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    paddingLeft: '4px',
    textAlign: 'left',
  }

  const getInputWrapperStyle = (fieldName: string): React.CSSProperties => ({
    background: 'var(--bg-card)',
    border: `1.5px solid ${focusedField === fieldName ? 'var(--primary)' : 'var(--border-color)'}`,
    borderRadius: '16px',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: focusedField === fieldName ? '0 4px 20px rgba(197, 160, 89, 0.12)' : 'none',
  })

  const inputStyle: React.CSSProperties = {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    fontWeight: 500,
    color: 'var(--text-primary)',
    width: '100%',
  }

  return (
    <>
      {showModal && (
        <PrivacyModal onConfirm={handleConfirm} onClose={() => setShowModal(false)} />
      )}

      {/* data-lead-form — 이 폼이 화면에 보이면 하단 고정 폼(BottomForm)이 숨는다 */}
      <div data-lead-form style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '32px',
        padding: '40px',
        boxShadow: 'var(--shadow-md)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* 이름 & 성별 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>성함</label>
              <div style={getInputWrapperStyle('name')}>
                <input
                  type="text"
                  value={form.customer_name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  maxLength={8}
                  placeholder="성함 입력"
                  style={inputStyle}
                />
                <div style={{ display: 'flex', gap: '4px', marginLeft: '12px', paddingLeft: '12px', borderLeft: '1px solid var(--border-color)', flexShrink: 0 }}>
                  {[{ label: '남', val: '1' }, { label: '여', val: '2' }].map(({ label, val }) => (
                    <button 
                      key={val} 
                      type="button" 
                      onClick={() => set("customer_sex", val)} 
                      style={{
                        width: '32px', height: '32px', borderRadius: '50%', border: 'none', cursor: 'pointer',
                        fontWeight: 900, fontSize: '11px', transition: 'all 0.2s',
                        background: form.customer_sex === val ? 'var(--primary)' : 'var(--bg-main)',
                        color: form.customer_sex === val ? 'white' : 'var(--text-muted)',
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>생년월일</label>
              <div style={getInputWrapperStyle('birth')}>
                <input
                  type="text"
                  value={form.customer_birth}
                  onChange={(e) => set("customer_birth", e.target.value.replace(/\D/g, ""))}
                  onFocus={() => setFocusedField('birth')}
                  onBlur={() => setFocusedField(null)}
                  maxLength={6}
                  placeholder="예) 950815"
                  style={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* 연락처 & 거주지역 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>연락처</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ ...getInputWrapperStyle('mobile1'), width: '90px', flexShrink: 0, padding: '12px 12px 12px 16px', position: 'relative' }}>
                  <select
                    value={form.mobile1}
                    onChange={(e) => set("mobile1", e.target.value)}
                    onFocus={() => setFocusedField('mobile1')}
                    onBlur={() => setFocusedField(null)}
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  >
                    {["010","011","016","017","019"].map((v) => <option key={v} value={v}>{v}</option>)}
                  </select>
                  <span style={{ position: 'absolute', right: '12px', pointerEvents: 'none', color: 'var(--text-muted)', fontSize: '10px' }}>▼</span>
                </div>
                <div style={{ ...getInputWrapperStyle('mobile2'), flex: 1 }}>
                  <input
                    type="text"
                    value={form.mobile2}
                    onChange={(e) => set("mobile2", e.target.value.replace(/\D/g, ""))}
                    onFocus={() => setFocusedField('mobile2')}
                    onBlur={() => setFocusedField(null)}
                    maxLength={11}
                    placeholder="'-' 없이 입력"
                    style={inputStyle}
                  />
                </div>
              </div>
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle}>희망 지역</label>
              <div style={{ ...getInputWrapperStyle('region'), position: 'relative' }}>
                <select
                  value={form.region}
                  onChange={(e) => set("region", e.target.value)}
                  onFocus={() => setFocusedField('region')}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', color: form.region ? 'var(--text-primary)' : 'var(--text-muted)' }}
                >
                  <option value="" disabled hidden>지역 선택</option>
                  {REGIONS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <span style={{ position: 'absolute', right: '20px', pointerEvents: 'none', color: 'var(--text-muted)', fontSize: '10px' }}>▼</span>
              </div>
            </div>
          </div>

          {/* 제출 버튼 */}
          <div style={{ marginTop: '8px' }}>
            <button
              type="button"
              onClick={handleSubmitClick}
              disabled={submitted}
              style={{
                width: '100%',
                padding: '20px',
                background: 'linear-gradient(135deg, #DDBA78 0%, #C5A059 50%, #A9843F 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                fontSize: '17px',
                fontWeight: 950,
                textShadow: '0 1px 2px rgba(120, 88, 30, 0.35)',
                cursor: submitted ? 'not-allowed' : 'pointer',
                opacity: submitted ? 0.6 : 1,
                boxShadow: '0 10px 28px rgba(197, 160, 89, 0.38)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #E6C789 0%, #CFAB63 50%, #B38D46 100%)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 14px 36px rgba(197, 160, 89, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #DDBA78 0%, #C5A059 50%, #A9843F 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(197, 160, 89, 0.38)';
              }}
            >
              {submitted ? '전송 중...' : '무료 상담 신청하기'}
            </button>
            <p style={{ marginTop: '16px', fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', fontWeight: 500 }}>
              귀하의 데이터는 안전하게 암호화되어 전송됩니다.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

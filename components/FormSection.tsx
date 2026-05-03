"use client"

import { useState } from "react"
import PrivacyModal from "./PrivacyModal"
import { validateForm, parsePhone } from "@/lib/validate"

export default function FormSection() {
  const [form, setForm] = useState({
    customer_name: "",
    customer_birth: "",
    mobile1: "010",
    mobile2: "",
    customer_sex: "2",
    region: "",
    has_license: "N",
  })
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
    const phoneResult = parsePhone(form.mobile1, form.mobile2)
    if (typeof phoneResult === "string") { alert(phoneResult); return }

    const payload = {
      customer_name: form.customer_name,
      customer_birth: form.customer_birth,
      mobile1: phoneResult.mobile1,
      mobile2: phoneResult.mobile2,
      mobile3: "",
      customer_sex: form.customer_sex,
      region: form.region,
      has_license: form.has_license,
      category: "makeup",
    }

    setSubmitted(true)
    try {
      const url = process.env.NEXT_PUBLIC_DB_SUBMIT_URL!
      const key = process.env.NEXT_PUBLIC_DB_API_KEY!
      const res = await fetch(`${url}?api_key=${key}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        alert(`전송 실패: ${err.error ?? res.status}`)
        setSubmitted(false)
        return
      }
      alert("상담 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.")
      setForm({ customer_name: "", customer_birth: "", mobile1: "010", mobile2: "", customer_sex: "2", region: "", has_license: "N" })
    } catch {
      alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")
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

      <div style={{
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
                  {["서울","부산","대구","인천","광주","대전","울산","세종","경기","강원","충북","충남","전북","전남","경북","경남","제주"].map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                <span style={{ position: 'absolute', right: '20px', pointerEvents: 'none', color: 'var(--text-muted)', fontSize: '10px' }}>▼</span>
              </div>
            </div>
          </div>

          {/* 자격증 보유 여부 */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>자격증 보유 여부</label>
            <div style={getInputWrapperStyle('license')}>
              <span style={{ ...inputStyle, color: 'var(--text-secondary)', fontSize: '15px' }}>
                미용사(메이크업) 자격증 보유 여부
              </span>
              <button
                type="button"
                onClick={() => set("has_license", form.has_license === "Y" ? "N" : "Y")}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}
              >
                <span style={{
                  fontSize: '13px', fontWeight: 700, width: '32px', textAlign: 'right',
                  color: form.has_license === "Y" ? 'var(--primary)' : 'var(--text-muted)',
                  transition: 'color 0.2s',
                }}>
                  {form.has_license === "Y" ? "보유" : "없음"}
                </span>
                <div style={{
                  position: 'relative', width: '44px', height: '24px', borderRadius: '12px',
                  background: form.has_license === "Y" ? 'var(--primary)' : 'var(--border-color)',
                  transition: 'background 0.3s',
                }}>
                  <div style={{
                    position: 'absolute', top: '3px', left: '3px',
                    width: '18px', height: '18px', borderRadius: '50%', background: 'white',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                    transform: form.has_license === "Y" ? 'translateX(20px)' : 'translateX(0)',
                    transition: 'transform 0.3s ease',
                  }} />
                </div>
              </button>
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
                background: 'var(--accent)',
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                fontSize: '16px',
                fontWeight: 950,
                cursor: submitted ? 'not-allowed' : 'pointer',
                opacity: submitted ? 0.6 : 1,
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(197, 160, 89, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
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

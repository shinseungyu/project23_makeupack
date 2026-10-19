import { parsePhone } from './validate'

/** 본문 폼(FormSection)과 하단 고정 폼(BottomForm)이 같이 쓰는 값·전송. 항목을 바꾸면 두 폼과 동의 모달을 같이 본다 */
export const REGIONS = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주']

export const INITIAL_LEAD = {
  customer_name: '',
  customer_birth: '',
  mobile1: '010',
  mobile2: '',
  customer_sex: '2',
  region: '',
  has_license: 'N',
}
export type LeadForm = typeof INITIAL_LEAD

export const DONE_MESSAGE = '상담 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.'

/** 접수 서버로 전송. 실패하면 사용자에게 보여줄 문구를 돌려준다 */
export async function submitLead(form: LeadForm, sourcePage: string): Promise<{ ok: true } | { ok: false; message: string }> {
  const phone = parsePhone(form.mobile1, form.mobile2)
  if (typeof phone === 'string') return { ok: false, message: phone }

  const payload = {
    customer_name: form.customer_name,
    customer_birth: form.customer_birth,
    mobile1: phone.mobile1,
    mobile2: phone.mobile2,
    mobile3: '',
    customer_sex: form.customer_sex,
    region: form.region,
    has_license: form.has_license,
    category: 'makeup',
    source_page: sourcePage,
  }

  try {
    const url = process.env.NEXT_PUBLIC_DB_SUBMIT_URL!
    const key = process.env.NEXT_PUBLIC_DB_API_KEY!
    const res = await fetch(`${url}?api_key=${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      return { ok: false, message: `전송 실패: ${err.error ?? res.status}` }
    }
    return { ok: true }
  } catch {
    return { ok: false, message: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' }
  }
}

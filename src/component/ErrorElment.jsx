import { useRouteError } from "react-router-dom"

export default function ErrorElment() {
    const error = useRouteError()
    console.log(error);
    
  return (
    <div>
        <h1>عذا خطأ</h1>
        <p>حدث خطأ غير متوقع أثناء المعالجة</p>
        <i>{error.message|| 'Error'}</i>
    </div>
  )
}

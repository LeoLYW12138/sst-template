import { useGetTokenQuery } from "../../api/types"
import { ReactComponent as React } from "../assets/react.svg"

function Hello() {
  const { data, loading, error } = useGetTokenQuery({
    variables: {},
  })

  return (
    <div className="font-bold">
      <>
        Hello World <React className="inline w-6 h-6" />
        {!loading && data?.tokenAuth.token}
      </>
    </div>
  )
}

export default Hello

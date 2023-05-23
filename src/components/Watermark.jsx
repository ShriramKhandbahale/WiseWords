import { useSelector } from "react-redux";

const Watermark = () => {
  const theme = useSelector((state) => state.theme.value)

  return (
    <div style={{
      position: 'absolute',
      textAlign: 'center',
      bottom: '10%',
      color: theme == 'light' ? 'rgba(200,200,200)' : 'rgba(100,100,100,0.5)'
    }}>&copy; Shriram Khandbahale 2023</div>
  )
}

export default Watermark
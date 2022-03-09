const Spinner = ({ size = 20, color = '#f1f1f1' }) => (
    <div style={{ height: size, width: size }}>
        <div className={`h-full w-full border-3 border-${color} border-r-transparent rounded-full animate-spin`}/>
    </div>
)

export default Spinner